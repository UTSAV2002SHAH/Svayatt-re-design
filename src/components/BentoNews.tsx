"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowEffect from "@/components/ui/GlowBorder";

export interface NewsItem {
  id: number;
  logo: string;
  logoAlt: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  meta: string;
  link?: string;
}

interface BentoNewsProps {
  items: NewsItem[];
}

export default function BentoNews({ items }: BentoNewsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto">
        {items.map((item, index) => {
          let colSpanClass = "md:col-span-1";
          if (index === 0) colSpanClass = "md:col-span-2";
          else if (index === 3) colSpanClass = "md:col-span-2";

          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768) {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                } else {
                  setExpandedId(item.id);
                }
              }}
              className={`
                ${colSpanClass}
                relative rounded-[22px]
                bg-[#131313]
                p-[10px]
                cursor-pointer
                ${isExpanded ? "pointer-events-none" : ""}
              `}
            >
              <GlowEffect
                disabled={isExpanded}
                borderWidth={2}
                proximity={140}
                blur={1}
                spread={60}
              />

              <motion.div
                layoutId={`card-${item.id}`}
                className={`
                  relative z-10
                  group flex flex-col overflow-hidden
                  rounded-[18px] bg-[#000000]
                  h-full
                  transition-shadow duration-300
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                  ${isExpanded ? "opacity-0 pointer-events-none" : ""}
                `}
              >
                <motion.div layoutId={`header-${item.id}`} className="p-6 pb-4 flex items-center gap-3">
                  <motion.img
                    layoutId={`logo-${item.id}`}
                    src={item.logo}
                    alt={item.logoAlt}
                    className="h-10 lg:h-18 w-auto max-w-[80px] object-contain opacity-90 rounded-sm bg-white p-1"
                  />
                  <motion.span
                    layoutId={`logoText-${item.id}`}
                    className="text-[14px] font-bold tracking-widest text-white uppercase"
                  >
                    {item.logoAlt}
                  </motion.span>
                </motion.div>

                <motion.div layoutId={`title-container-${item.id}`} className="px-6 pb-4">
                  <motion.h3
                    layoutId={`title-${item.id}`}
                    className={`font-display font-bold text-white leading-tight ${index === 0 || index === 3
                      ? "text-2xl md:text-[32px]"
                      : "text-xl md:text-2xl"
                      }`}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>

                <motion.div
                  layoutId={`image-container-${item.id}`}
                  className={`relative w-full px-6 pb-4 ${index === 0 || index === 3
                    ? "h-48 md:h-64"
                    : "h-40 md:h-48"
                    }`}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <motion.img
                      layoutId={`image-${item.id}`}
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* <motion.div layoutId={`desc-${item.id}`} className="px-6 pb-6 mt-auto">
                  <p className="font-sans text-[14px] md:text-[15px] text-gray-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </motion.div> */}
              </motion.div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {expandedId !== null && (
          <ExpandedCard
            item={items.find((i) => i.id === expandedId)!}
            onClose={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ExpandedCard({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      />

      <div className="relative w-full max-w-[1400px] h-full max-h-[90vh] mx-auto flex items-center justify-center pointer-events-none">
        <motion.div
          layoutId={`card-${item.id}`}
          className="flex flex-col overflow-hidden rounded-[20px] bg-[#0c0c0c] shadow-[0_0_40px_rgba(255,255,255,0.15)] border-2 w-full h-full max-h-[90vh] pointer-events-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="p-4 md:p-6 pb-4 flex items-center justify-between gap-2 sm:gap-4 md:gap-8 bg-[#0c0c0c]/80 backdrop-blur-md z-10 shrink-0">
            <motion.div layoutId={`header-${item.id}`} className="flex flex-col items-center justify-center gap-2 shrink-0 min-w-[40px] sm:min-w-[60px] md:min-w-[100px]">
              <motion.img
                layoutId={`logo-${item.id}`}
                src={item.logo}
                alt={item.logoAlt}
                className="h-6 sm:h-8 md:h-12 w-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px] object-contain opacity-90 rounded-sm bg-white p-1"
              />
              <motion.span
                layoutId={`logoText-${item.id}`}
                className="text-[9px] md:text-[11px] font-bold tracking-widest text-white/50 uppercase text-center hidden md:block"
              >
                {item.logoAlt}
              </motion.span>
            </motion.div>

            <motion.div layoutId={`title-container-${item.id}`} className="flex-1">
              <motion.h3
                layoutId={`title-${item.id}`}
                className="font-display font-bold text-white leading-tight text-[13px] sm:text-[16px] md:text-[20px] lg:text-[28px] line-clamp-3 md:line-clamp-none"
              >
                {item.title}
              </motion.h3>
            </motion.div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
                className="group flex items-center justify-center gap-1 md:gap-2 border border-white/20 text-white font-sans font-medium text-[8px] sm:text-[10px] md:text-[12px] tracking-[0.08em] uppercase px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 transition-all duration-200 hover:bg-[#FF5A36] hover:border-[#FF5A36] rounded-[4px] md:rounded-[6px] shrink-0"
              >
                <span className="whitespace-nowrap">Read <span className="hidden sm:inline">Article</span></span>
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
                  <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </div>

          <motion.div layoutId={`image-container-${item.id}`} className="relative w-full px-4 md:px-6 pb-4 flex-1 min-h-[10px]">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <motion.img
                layoutId={`image-${item.id}`}
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div layoutId={`desc-${item.id}`} className="px-4 md:px-6 pb-6 shrink-0">
            <div className="font-sans text-[10px] md:text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase mb-2">
              {item.meta}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/30 text-white backdrop-blur-md transition-all duration-200"
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 opacity-70 hover:opacity-100">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </div>
  );
}