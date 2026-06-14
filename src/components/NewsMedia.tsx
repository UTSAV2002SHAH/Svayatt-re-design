"use client";

import React, { useEffect, useRef, useState } from "react";

const newsItems = [
  {
    id: 0,
    logo: "/Aaj_tak_logo.png",
    logoAlt: "DD News",
    title: "Paninian Technologies selected for DRDO co-development programme for next-generation autonomous combat systems",
    image: "/Boeing_MQBAT_28.jpg",
    imageAlt: "DRDO Program",
    description: "A landmark partnership between Paninian Technologies and DRDO marks a significant step in India's push toward indigenous autonomous defence systems. The collaboration focuses on developing next-generation combat aerial vehicles for the Indian armed forces.",
  },
  {
    id: 1,
    logo: "/Dd-news_logo.png",
    logoAlt: "Aaj Tak",
    title: "Svayatt M1 completes first autonomous flight trial in controlled airspace over Rajasthan test range",
    image: "/Boeing_MQBAT_28.jpg",
    imageAlt: "Flight Trial",
    description: "The Svayatt M1 combat aerial vehicle successfully completed its first fully autonomous flight trial, demonstrating onboard navigation, obstacle avoidance, and mission execution without human intervention.",
  },
  {
    id: 2,
    logo: "/India_Today_TV_Channel_logo.jpg",
    logoAlt: "NDTV",
    title: "Paninian Technologies joins NVIDIA Inception Programme to accelerate AI-driven development",
    image: "/Boeing_MQBAT_28.jpg",
    imageAlt: "NVIDIA Inception",
    description: "Paninian Technologies has been selected for the NVIDIA Inception Programme, gaining access to cutting-edge GPU computing resources and AI development tools to accelerate onboard intelligence.",
  },
  {
    id: 3,
    logo: "/NDTV_logo.svg.png",
    logoAlt: "Times of India",
    title: "Godrej Aerospace and Paninian Technologies sign MoU for indigenous propulsion system",
    image: "/Boeing_MQBAT_28.jpg",
    imageAlt: "Godrej MoU",
    description: "Godrej Aerospace and Paninian Technologies have signed a Memorandum of Understanding to jointly develop indigenous propulsion systems for next-generation unmanned combat aerial vehicles.",
  },
];

export default function NewsMedia() {
  // Always keep one item open — clicking an open item does nothing (no close)
  const [openId, setOpenId] = useState<number>(0);

  const openAccordion = (id: number) => {
    setOpenId(id);
  };

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

  return (
    <section className="w-full bg-[#000000] py-16 md:py-24 px-6 md:px-[64px]" id="news-media-section">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 w-full">
          <div className="">
            {/* <h2 className="font-sans font-semibold text-white text-[32px] md:text-[40px] ml-23 leading-tight text-[#16130f] px-2 mt-1">
              News & Media
            </h2> */}

            <h2 ref={headingRef} className="font-sans font-[800] text-white m-0 p-0 leading-none">
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                {"NEWSROOM".split("").map((letter, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      fontSize: '10vw',
                      letterSpacing: '0.04em',
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
          </div>
        </div>
        <hr className="w-full mt-1 border-none mb-10" style={{ height: '15px', backgroundColor: 'rgba(252, 248, 248, 1)' }} />

        <div className="flex flex-col max-w-[1800px] mx-auto border-t border-x border[#d4daea] border-3" id="news-accordion">
          {newsItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="accordion-item border-b border-[#d4daea] px-5 bg-[#000000] text-white"
                data-state={isOpen ? "open" : "closed"}
              >
                {/* Row — clicking anywhere opens this item */}
                <button
                  onClick={() => openAccordion(item.id)}
                  className="accordion-header w-full py-3 flex items-center justify-between transition-colors duration-200 text-left cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1 pr-8" >
                    <img
                      alt={item.logoAlt}
                      className="h-8 md:h-10 w-auto object-contain opacity-85 align-middle shrink-0"
                      src={item.logo}
                    />
                    <span className="font-sans font-medium text-[18px] md:text-[20px] leading-snug text-[#16130f] text-white">
                      {item.title}
                    </span>
                  </div>

                  {/* Stripe-style "Read Article" button — visible only on md+ */}
                  <a
                    href="#"
                    onClick={(e) => e.stopPropagation()}
                    className="hidden md:inline-flex items-center gap-2 shrink-0 border border-white text-white font-sans font-medium text-[12px] tracking-[0.08em] uppercase px-5 py-2.5 transition-all duration-200 hover:bg-[#9e9796] hover:text-white hover:border-[#1a1a18]"
                    style={{ borderRadius: "6px" }}
                  >
                    Read Article
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </button>

                {/* Expandable content */}
                <div className="accordion-content">
                  <div className="accordion-inner bg-[#000000] text-white overflow-hidden" style={{ borderRadius: "6px" }}>
                    <div className="flex flex-col lg:flex-row gap-8 pb-12 px-6 pt-2">
                      <div className="lg:w-7/10">
                        <img
                          alt={item.imageAlt}
                          className="w-full aspect-video object-cover border border-[#16130f]/5"
                          style={{ borderRadius: "4px" }}
                          src={item.image}
                        />
                      </div>
                      <div className="lg:w-3/10 flex flex-col justify-start gap-6">
                        <p className="font-sans font-normal text-[16px] leading-relaxed text-white pt-4">
                          {item.description}
                        </p>
                        {/* Mobile Read Article button */}
                        <a
                          href="#"
                          className="md:hidden inline-flex items-center gap-2 self-start border border-[#1a1a18]/30 text-[#1a1a18] font-sans font-medium text-[12px] tracking-[0.08em] uppercase px-5 py-2.5 transition-all duration-200 hover:bg-[#1a1a18] hover:text-white hover:border-[#1a1a18]"
                          style={{ borderRadius: "6px" }}
                        >
                          Read Article
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
