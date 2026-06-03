"use client";

import { useState } from "react";

const newsItems = [
  {
    id: 0,
    logo: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    logoAlt: "DD News",
    title: "Paninian Technologies selected for DRDO co-development programme for next-generation autonomous combat systems",
    image: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    imageAlt: "DRDO Program",
    description: "A landmark partnership between Paninian Technologies and DRDO marks a significant step in India's push toward indigenous autonomous defence systems. The collaboration focuses on developing next-generation combat aerial vehicles for the Indian armed forces.",
  },
  {
    id: 1,
    logo: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    logoAlt: "Aaj Tak",
    title: "Svayatt M1 completes first autonomous flight trial in controlled airspace over Rajasthan test range",
    image: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    imageAlt: "Flight Trial",
    description: "The Svayatt M1 combat aerial vehicle successfully completed its first fully autonomous flight trial, demonstrating onboard navigation, obstacle avoidance, and mission execution without human intervention.",
  },
  {
    id: 2,
    logo: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    logoAlt: "NDTV",
    title: "Paninian Technologies joins NVIDIA Inception Programme to accelerate AI-driven development",
    image: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    imageAlt: "NVIDIA Inception",
    description: "Paninian Technologies has been selected for the NVIDIA Inception Programme, gaining access to cutting-edge GPU computing resources and AI development tools to accelerate onboard intelligence.",
  },
  {
    id: 3,
    logo: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    logoAlt: "Times of India",
    title: "Godrej Aerospace and Paninian Technologies sign MoU for indigenous propulsion system",
    image: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
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

  return (
    <section className="w-full bg-[#f9f9ff] py-16 md:py-24 px-6 md:px-[64px]" id="news-media-section">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-[#16130f] mt-1">
              News & Media
            </h2>
          </div>
        </div>

        <div className="flex flex-col border-t border-[#d4daea]" id="news-accordion">
          {newsItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="accordion-item border-b border-[#d4daea]"
                data-state={isOpen ? "open" : "closed"}
              >
                {/* Row — clicking anywhere opens this item */}
                <button
                  onClick={() => openAccordion(item.id)}
                  className="accordion-header w-full py-8 flex items-center justify-between transition-colors duration-200 text-left cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1 pr-8">
                    <img
                      alt={item.logoAlt}
                      className="h-6 w-auto object-contain opacity-85 brightness-0 align-middle shrink-0"
                      src={item.logo}
                    />
                    <span className="font-sans font-medium text-[18px] md:text-[20px] leading-snug text-[#16130f]">
                      {item.title}
                    </span>
                  </div>

                  {/* Stripe-style "Read Article" button — visible only on md+ */}
                  <a
                    href="#"
                    onClick={(e) => e.stopPropagation()}
                    className="hidden md:inline-flex items-center gap-2 shrink-0 border border-[#1a1a18]/30 text-[#1a1a18] font-sans font-medium text-[12px] tracking-[0.08em] uppercase px-5 py-2.5 transition-all duration-200 hover:bg-[#1a1a18] hover:text-white hover:border-[#1a1a18]"
                    style={{ borderRadius: "6px" }}
                  >
                    Read Article
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </button>

                {/* Expandable content */}
                <div className="accordion-content">
                  <div className="accordion-inner bg-white overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-8 pb-12 px-6 pt-2">
                      <div className="lg:w-3/5">
                        <img
                          alt={item.imageAlt}
                          className="w-full aspect-video object-cover border border-[#16130f]/5"
                          style={{ borderRadius: "4px" }}
                          src={item.image}
                        />
                      </div>
                      <div className="lg:w-2/5 flex flex-col justify-start gap-6">
                        <p className="font-sans font-normal text-[16px] leading-relaxed text-[#2d2925] pt-4">
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
                            <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
