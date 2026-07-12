// app/sections/Products.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MissionStatement() {
  return (
    <div className="px-8 md:px-16 lg:px-24 py-8 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">
      <div className="md:w-2/3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-white leading-tight">
          Revolutionizing Aerospace & Defence by exceeding Engineering Limits  and enhancing mission effectiveness in high-threat environments, with a focus on Affordability, Modularity, and Adaptability
        </h2>
      </div>
      <div className="md:w-1/3 flex flex-col items-start gap-6">
        <p className="text-sm md:text-base font-medium text-white leading-relaxed max-w-xs">
          Redefining aerospace and defense engineering — fusing AI, simulation, and 3D intelligence into one digital twin platform for what comes next.
        </p>
        <button className="bg-white text-gray-600 hover:text-white font-bold text-xs uppercase px-8 py-3 tracking-wider rounded hover:bg-[#ff6343] transition-colors cursor-pointer">
          ABOUT US
        </button>
      </div>
    </div>
  );
}

function ImageBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    // Disable pin on mobile — only use on md+ screens
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Start text hidden below the mask
      gsap.set(text, { y: "100%" });

      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: "+=20%",
        pin: !isMobile,
        pinSpacing: !isMobile,
        anticipatePin: isMobile ? 0 : 1,
        invalidateOnRefresh: true,

        onEnter: () => {
          gsap.to(text, {
            y: "0%",
            ease: "power3.out",
            duration: 1.2,
          });
        },

        onEnterBack: () => {
          gsap.set(text, { y: "0%" });
        },

        // onLeaveBack removed — text stays revealed for the entire session
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-[95vw] lg:w-[90vw] lg:h-[90vh] h-[50vh] md:h-[70vh] lg:aspect-video m-auto overflow-hidden bg-[#16130f] rounded-xl md:rounded-2xl"
    >
      {/* Background image with Ken Burns zoom */}
      <div className="absolute inset-0">
        <img
          src="/svayatt-m1.jpeg"
          alt="Svayatt-M1 CCAV in flight"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Mask container — clips text reveal */}
      <div
        className="absolute left-0 right-0 top-0 overflow-hidden flex items-end justify-center pointer-events-none"
        style={{ height: "46%" }}
      >
        <div
          ref={textRef}
          className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight text-white"
          style={{ willChange: "transform" }}
        >
          SVAYATT-M1
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <div className="w-full mt-[50px] bg-[#000000]">
      {/* Thin white ruler separating Hero and Mission */}
      <div className="w-[95vw] m-auto h-[1px] bg-gray-400 mt-4"></div>
      <MissionStatement />
      <div className="w-[95vw] md:hidden m-auto h-[1px] bg-gray-400 mb-4"></div>
      <div className="pb-[40px]]">
        <ImageBlock />
      </div>
    </div>
  );
}