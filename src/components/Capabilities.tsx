"use client";

import React, { useEffect, useRef, useState } from "react";

const Capabilities = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle based on intersection so it triggers every time it comes into view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        // -25% bottom margin means it won't trigger until the element is 25% up from the bottom of the screen.
        // This prevents it from finishing before you can really see it.
        rootMargin: "0px 0px -5% 0px"
      }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);
  const capabilities = [
    {
      id: "01",
      name: "Cyber Intelligence",
      description: "Enables mission autonomy with advanced data-linking, network communication and threat management."
    },
    {
      id: "02",
      name: "Systems Intelligence",
      description: "Streamlines requirements, design, validation and optimises system architecture through MBSE for mission success."
    },
    {
      id: "03",
      name: "Machine Intelligence",
      description: "Enables a seamless digital thread between design and manufacturing. Enhances manufacturing efficiency with precise machine parameter tuning."
    },
    {
      id: "04",
      name: "Material Intelligence",
      description: "Innovates material selection and performance through ICME approaches and proprietary methodologies."
    },
    {
      id: "05",
      name: "Design Intelligence",
      description: "Facilitates data-driven simulation and rapid design iterations through a proprietary simulation platform."
    }
  ];

  return (
    <section className="w-full bg-[#000000] px-[64px] pt-[80px]" style={{ minHeight: '90vh' }}>
      <h2 ref={headingRef} className="font-display font-bold text-[64px] md:text-[80px] tracking-[-0.02em] text-white m-0 p-0 leading-none">
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          {"CAPABILITIES".split("").map((letter, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0px)' : 'translateY(10px)',
                transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.068}s,
                       transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.068}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </h2>

      <hr className="w-full mt-1 border-none mb-10" style={{ height: '10px', backgroundColor: 'rgba(252, 248, 248, 1)' }} />

      <div className="flex flex-col w-full mt-0">
        {capabilities.map((cap) => (
          <div
            key={cap.id}
            className="flex flex-row items-center w-full"
            style={{ minHeight: '80px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div className="w-[8%] font-mono font-normal text-[14px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {cap.id}
            </div>
            <div className="w-[37%] font-display font-medium text-[20px] md:text-[24px] text-white">
              {cap.name}
            </div>
            <div className="w-[55%] font-sans font-medium text-[16px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {cap.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
