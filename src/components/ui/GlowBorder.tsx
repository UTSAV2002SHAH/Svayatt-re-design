"use client";

import React, { useRef, useEffect, useCallback } from "react";

// ─── Default warm spotlight palette ──────────────────────────────────────────
const DEFAULT_GLOW_STOPS = [
    "#8952AD", // cream-yellow
    "#FF9B09", // golden amber
    "#FF4123", // warm tan
    "#FEB763", // lavender-pink
    "#BD8FD0", // soft coral-orange
];

interface GlowBorderProps {
    children: React.ReactNode;
    className?: string;
    glowRadius?: number;        // mouse influence radius in px, default 120
    glowThickness?: number;     // glow border thickness in px, default 2
    glowBlur?: number;          // blur amount in px, default 1
    ringColor?: string;         // offset ring color, default "#1c1c1c"
    ringThickness?: number;     // offset gap in px, default 4
    contentClassName?: string;  // extra classes on content layer
    colors?: string[];          // custom gradient colors
    active?: boolean;           // disable glow when false
    onClick?: () => void;
}

export default function GlowBorder({
    children,
    className = "",
    glowRadius = 120,
    glowThickness = 2,
    glowBlur = 1,
    ringColor = "#1c1c1c",
    ringThickness = 4,
    contentClassName = "",
    colors = DEFAULT_GLOW_STOPS,
    active = true,
    onClick,
}: GlowBorderProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number | null>(null);

    const updateGlow = useCallback(() => {
        const wrapper = wrapperRef.current;
        const glow = glowRef.current;
        if (!wrapper || !glow || !active) {
            if (glow) glow.style.opacity = "0";
            return;
        }

        const rect = wrapper.getBoundingClientRect();
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // Card center
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        // Distance from mouse to card center
        const dist = Math.hypot(mx - cx, my - cy);

        // Maximum possible distance for influence (diagonal/2 + glowRadius)
        const diagonal = Math.hypot(rect.width, rect.height);
        const maxInfluenceDist = diagonal / 2 + glowRadius;

        // Early exit: mouse too far
        if (dist > maxInfluenceDist) {
            glow.style.opacity = "0";
            return;
        }

        // ── Calculate angle from card center to mouse ──
        // Math.atan2: 0 = right, PI/2 = down, PI = left, -PI/2 = up
        const mathRad = Math.atan2(my - cy, mx - cx);
        const mathDeg = mathRad * (180 / Math.PI);

        // Convert to CSS conic convention: 0deg = top, clockwise
        const cssDeg = 90 + mathDeg;

        // Glow arc spans ±60° around the mouse-facing side
        const halfArc = 60;
        const fromDeg = cssDeg - halfArc;

        // Build conic gradient string
        const gradient = `conic-gradient(
      from ${fromDeg}deg at 50% 50%,
      transparent 0deg,
      ${colors[0]} ${halfArc * 0.25}deg,
      ${colors[1]} ${halfArc * 0.50}deg,
      ${colors[2]} ${halfArc * 0.75}deg,
      ${colors[3]} ${halfArc * 1.00}deg,
      ${colors[4]} ${halfArc * 1.35}deg,
      transparent ${halfArc * 1.80}deg,
      transparent 360deg
    )`;

        // ── Opacity based on proximity ──
        // Normalize: 0 = at edge of influence, 1 = mouse on card
        const rawProx = Math.max(0, 1 - (dist - diagonal / 2) / glowRadius);
        const easedProx = Math.pow(Math.min(1, rawProx), 0.7);
        const opacity = easedProx * 0.9;

        glow.style.background = gradient;
        glow.style.opacity = String(opacity);
    }, [active, colors, glowRadius]);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

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

    // Re-run when active changes
    useEffect(() => {
        if (!active && glowRef.current) {
            glowRef.current.style.opacity = "0";
        }
    }, [active]);

    // ── Geometry calculations ──
    const totalInset = glowThickness + ringThickness;
    const contentRadius = 22 - totalInset; // 22px wrapper radius

    return (
        <div
            ref={wrapperRef}
            onClick={onClick}
            className={`relative cursor-pointer ${className}`}
            style={{ borderRadius: 22 }}
        >
            {/* ── Layer 1: GLOW ─────────────────────────────────────────────── */}
            <div
                ref={glowRef}
                aria-hidden="true"
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    borderRadius: 22,
                    opacity: 0,
                    padding: glowThickness,
                    // Mask to only show the padding border area
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    filter: `blur(${glowBlur}px)`,
                    willChange: "opacity, background",
                    transition: "opacity 0.25s ease-out",
                }}
            />

            {/* ── Layer 2: RING OFFSET (depth gap) ──────────────────────────── */}
            <div
                className="absolute z-10 pointer-events-none"
                style={{
                    inset: glowThickness,
                    borderRadius: 22 - glowThickness,
                    background: ringColor,
                }}
            />

            {/* ── Layer 3: CONTENT ──────────────────────────────────────────── */}
            <div
                className={`relative z-20 bg-black ${contentClassName}`}
                style={{
                    margin: totalInset,
                    borderRadius: Math.max(4, contentRadius),
                }}
            >
                {children}
            </div>
        </div>
    );
}