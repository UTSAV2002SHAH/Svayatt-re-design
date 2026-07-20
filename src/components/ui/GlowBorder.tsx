"use client";

import React, { useRef, useEffect, useCallback } from "react";

/**
 * GlowEffect Component
 * 
 * Significance:
 * This component provides a dynamic, interactive border glow effect that follows the user's mouse cursor.
 * It is typically used as a background layer for cards or containers to add a premium, modern aesthetic 
 * without relying on static borders.
 * 
 * Working:
 * - It tracks the global mouse position using `mousemove` event listeners.
 * - Using `requestAnimationFrame` for performance, it calculates the distance and angle of the mouse relative to the element's center.
 * - It dynamically generates a `conic-gradient` background on a `div` and masks it to only show the border region using CSS masking.
 * - The opacity and position of the gradient change based on how close the mouse is to the component (proximity) and the angle.
 * 
 * UI Effect:
 * - When the mouse approaches the component, a soft, gradient glow appears on the border closest to the mouse.
 * - As the mouse moves around, the glow smoothly tracks the cursor along the border.
 * - An 'inactive zone' ensures the glow behaves predictably, fading out gracefully if the mouse moves directly to the center.
 */

const DEFAULT_GLOW_STOPS = [
    "#FFEDD5", // Lightest warm hue
    "#F59E0B", // Amber
    "#FBBF24", // Yellow-ish amber
    "#F59E0B", // Amber
    "#FEF3C7", // Soft cream
];

interface GlowEffectProps {
    className?: string;        // Additional CSS classes
    blur?: number;             // Amount of blur applied to the glow
    inactiveZone?: number;     // Dead zone multiplier in the center where the effect fades
    proximity?: number;        // How far the mouse can be (in px) before the glow fades out
    spread?: number;           // The angular spread of the conic gradient (in degrees)
    borderWidth?: number;      // Thickness of the glowing border
    colors?: string[];         // Array of colors used for the conic gradient stops
    disabled?: boolean;        // Whether the effect is active or not
}

export default function GlowEffect({
    className = "",
    blur = 10,
    inactiveZone = 0.7,
    proximity = 120,
    spread = 70,
    borderWidth = 0.1,
    colors = DEFAULT_GLOW_STOPS,
    disabled = false,
}: GlowEffectProps) {
    const glowRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number | null>(null);

    // Calculates the glow's position and opacity based on the current mouse coordinates
    const updateGlow = useCallback(() => {
        const glow = glowRef.current;
        // Early return if disabled or ref is missing
        if (!glow || disabled) {
            if (glow) glow.style.opacity = "0";
            return;
        }

        const parent = glow.parentElement;
        if (!parent) return;

        // Get the parent element's position on the screen
        const rect = parent.getBoundingClientRect();
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // Calculate the center coordinates of the parent element
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        // Calculate distance from mouse to the center of the element
        const dist = Math.hypot(mx - cx, my - cy);

        // Calculate the maximum distance for the glow effect to be visible
        // Proximity: distance beyond element bounds where effect stays active
        const halfDiag = Math.hypot(rect.width, rect.height) / 2;
        const maxDist = halfDiag + proximity;

        // Hide glow if mouse is beyond the maximum proximity
        if (dist > maxDist) {
            glow.style.opacity = "0";
            return;
        }

        // Calculate the angle from the center to the mouse in degrees
        const mathRad = Math.atan2(my - cy, mx - cx);
        const mathDeg = mathRad * (180 / Math.PI);
        const cssDeg = mathDeg + 90; // Convert to CSS conic-gradient angle convention (0 is top)

        // Inactive zone: dead area in center (no glow when mouse is inside card)
        const distFromCenter = dist;
        const inactiveRadius = halfDiag * inactiveZone;

        // Build gradient starting point based on angle and spread
        const halfSpread = spread / 2;
        const fromDeg = cssDeg - halfSpread;

        // Build the conic gradient string dynamically
        // Creates a smooth gradient arc facing the mouse pointer
        const gradient = `conic-gradient(
      from ${fromDeg}deg at 50% 50%,
      transparent 0deg,
      ${colors[0]} ${halfSpread * 0.25}deg,
      ${colors[1]} ${halfSpread * 0.50}deg,
      ${colors[2]} ${halfSpread * 0.75}deg,
      ${colors[3]} ${halfSpread * 1.00}deg,
      ${colors[4]} ${halfSpread * 1.35}deg,
      transparent ${halfSpread * 1.80}deg,
      transparent 360deg
    )`;

        // Opacity based on proximity
        let rawProx = Math.max(0, 1 - (distFromCenter - halfDiag) / proximity);

        // Apply inactive zone: fade out when mouse gets too close to the center
        if (distFromCenter < inactiveRadius) {
            rawProx *= distFromCenter / inactiveRadius;
        }

        // Ease the opacity for a smoother visual falloff
        const easedProx = Math.pow(Math.min(1, rawProx), 0.7);
        const opacity = easedProx * 0.9;

        // Apply calculated gradient and opacity to the DOM element
        glow.style.background = gradient;
        glow.style.opacity = String(opacity);
    }, [disabled, colors, proximity, spread, inactiveZone]);

    // Attach global mousemove listener to track cursor
    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            // Debounce using requestAnimationFrame for smooth 60fps updates without jank
            if (rafRef.current !== null) return;
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null;
                updateGlow();
            });
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [updateGlow]);

    // Handle disabling the effect cleanly
    useEffect(() => {
        if (disabled && glowRef.current) {
            glowRef.current.style.opacity = "0";
        }
    }, [disabled]);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            className={`absolute inset-0 z-0 pointer-events-none ${className}`}
            style={{
                borderRadius: "inherit",
                opacity: 0,
                padding: borderWidth,
                // Use CSS masking to hollow out the center, leaving only the border visible
                WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                filter: `blur(${blur}px)`,
                willChange: "opacity, background", // Optimize browser rendering for properties that change often
                transition: "opacity 0.25s ease-out", // Smooth fade in/out
            }}
        />
    );
}