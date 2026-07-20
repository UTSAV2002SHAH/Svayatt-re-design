// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export interface NewsItem {
//   id: number;
//   logo: string;
//   logoAlt: string;
//   title: string;
//   image: string;
//   imageAlt: string;
//   description: string;
//   meta: string;
// }

// interface BentoNewsProps {
//   items: NewsItem[];
// }

// // Warm spotlight palette — cream-yellow → amber → tan → lavender → coral
// const GLOW_STOPS = [
//   '#F5E6A3', // cream-yellow
//   '#E8C547', // golden amber
//   '#D4A574', // warm tan
//   '#C9A0DC', // lavender-pink
//   '#F4A261', // soft coral-orange
// ];

// export default function BentoNews({ items }: BentoNewsProps) {
//   const [expandedId, setExpandedId] = useState<number | null>(null);

//   // Refs — never trigger re-renders on mousemove
//   const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const rafRef = useRef<number | null>(null);

//   // Keep expanded state readable inside rAF without stale closure
//   const expandedIdRef = useRef<number | null>(null);
//   expandedIdRef.current = expandedId;

//   useEffect(() => {
//     const onMouseMove = (e: MouseEvent) => {
//       mouseRef.current = { x: e.clientX, y: e.clientY };

//       // Coalesce moves into a single rAF per frame
//       if (rafRef.current !== null) return;
//       rafRef.current = requestAnimationFrame(() => {
//         rafRef.current = null;
//         const { x: mx, y: my } = mouseRef.current;

//         wrapperRefs.current.forEach((wrapper, i) => {
//           const glow = glowRefs.current[i];
//           if (!wrapper || !glow) return;

//           // No glow on the expanded card
//           if (expandedIdRef.current === items[i]?.id) {
//             glow.style.opacity = '0';
//             return;
//           }

//           const rect = wrapper.getBoundingClientRect();
//           const cx = rect.left + rect.width / 2;
//           const cy = rect.top + rect.height / 2;

//           // --- Angle: atan2 → CSS conic degrees (0 = top, clockwise) ---
//           const mathDeg = Math.atan2(my - cy, mx - cx) * (180 / Math.PI);
//           const cssDeg = 90 - mathDeg; // convert to CSS conic convention

//           // Arc half-width: glow spans ±65° around the mouse-facing side
//           const half = 65;
//           const from = cssDeg - half;

//           const gradient = [
//             `conic-gradient(from ${from}deg at 50% 50%,`,
//             `  transparent        0deg,`,
//             `  ${GLOW_STOPS[0]}  ${half * 0.20}deg,`,
//             `  ${GLOW_STOPS[1]}  ${half * 0.55}deg,`,
//             `  ${GLOW_STOPS[2]}  ${half * 1.00}deg,`,
//             `  ${GLOW_STOPS[3]}  ${half * 1.45}deg,`,
//             `  ${GLOW_STOPS[4]}  ${half * 1.80}deg,`,
//             `  transparent        ${half * 2.00}deg,`,
//             `  transparent        360deg`,
//             `)`,
//           ].join('\n');

//           // --- Opacity: fade in as cursor approaches, based on distance ---
//           const dist = Math.hypot(mx - cx, my - cy);
//           const diagonal = Math.hypot(rect.width, rect.height);
//           const rawProx = Math.max(0, 1 - dist / (diagonal * 0.9));
//           const opacity = Math.pow(rawProx, 0.65) * 0.88; // ease + cap

//           glow.style.background = gradient;
//           glow.style.opacity = String(opacity);
//         });
//       });
//     };

//     window.addEventListener('mousemove', onMouseMove, { passive: true });
//     return () => {
//       window.removeEventListener('mousemove', onMouseMove);
//       if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
//     };
//   }, [items]);

//   if (!items || items.length === 0) return null;

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto relative">
//         {items.map((item, index) => {
//           // 2-1 layout for first row, 1-2 layout for second row
//           let colSpanClass = 'md:col-span-1';
//           if (index === 0) colSpanClass = 'md:col-span-2';
//           else if (index === 3) colSpanClass = 'md:col-span-2';

//           const isExpanded = expandedId === item.id;

//           return (
//             /**
//              * WRAPPER — acts as the ring-offset gap via real padding (p-[4px]).
//              * bg-[#1c1c1c] = the gap fill colour (dark gray).
//              * ring-[1.5px] = the faint outer border sitting just outside the wrapper.
//              * The glow div (z-0) inside is physically visible through the 4 px padding strip.
//              */
//             <div
//               key={item.id}
//               ref={(el) => { wrapperRefs.current[index] = el; }}
//               onClick={() => setExpandedId(item.id)}
//               className={`
//                 ${colSpanClass}
//                 relative rounded-[22px] p-[4px]
//                 bg-[#1c1c1c]
//                 ring-[1.5px] ring-white/10
//                 hover:ring-white/25
//                 transition-all duration-300
//                 cursor-pointer
//                 ${isExpanded ? 'pointer-events-none' : ''}
//               `}
//             >
//               {/* ── GLOW LAYER ──────────────────────────────────────────────
//                   Sits at z-0 (above wrapper bg, below card z-10).
//                   The 4 px padding gap is where this layer shines through.
//                   filter: blur gives the bloom effect.
//                   opacity & background are mutated directly by the rAF handler.
//               ─────────────────────────────────────────────────────────────── */}
//               <div
//                 ref={(el) => { glowRefs.current[index] = el; }}
//                 aria-hidden="true"
//                 className="absolute inset-0 rounded-[22px] z-0 pointer-events-none"
//                 style={{
//                   opacity: 0,
//                   filter: 'blur(0px)',
//                   willChange: 'opacity, background',
//                   transition: 'opacity 0.35s ease',
//                 }}
//               />

//               {/* ── CARD ──────────────────────────────────────────────────── */}
//               <motion.div
//                 layoutId={`card-${item.id}`}
//                 className={`
//                   relative z-10
//                   group flex flex-col overflow-hidden
//                   rounded-[20px] bg-black
//                   h-full
//                   transition-shadow duration-300
//                   hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
//                   ${isExpanded ? 'opacity-0 pointer-events-none' : ''}
//                 `}
//               >
//                 {/* Header / Meta */}
//                 <motion.div layoutId={`header-${item.id}`} className="p-6 pb-4 flex items-center gap-3">
//                   <motion.img
//                     layoutId={`logo-${item.id}`}
//                     src={item.logo}
//                     alt={item.logoAlt}
//                     className="h-6 w-auto max-w-[80px] object-contain opacity-90 rounded-sm bg-white/5 p-1"
//                   />
//                   <motion.span
//                     layoutId={`logoText-${item.id}`}
//                     className="text-[11px] font-bold tracking-widest text-white/70 uppercase"
//                   >
//                     {item.logoAlt}
//                   </motion.span>
//                 </motion.div>

//                 {/* Title */}
//                 <motion.div layoutId={`title-container-${item.id}`} className="px-6 pb-4">
//                   <motion.h3
//                     layoutId={`title-${item.id}`}
//                     className={`font-display font-bold text-white leading-tight ${index === 0 || index === 3 ? 'text-2xl md:text-[32px]' : 'text-xl md:text-2xl'
//                       }`}
//                   >
//                     {item.title}
//                   </motion.h3>
//                 </motion.div>

//                 {/* Image */}
//                 <motion.div
//                   layoutId={`image-container-${item.id}`}
//                   className={`relative w-full px-6 pb-4 ${index === 0 || index === 3 ? 'h-48 md:h-64' : 'h-40 md:h-48'
//                     }`}
//                 >
//                   <div className="w-full h-full rounded-xl overflow-hidden relative">
//                     <motion.img
//                       layoutId={`image-${item.id}`}
//                       src={item.image}
//                       alt={item.imageAlt}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Description */}
//                 <motion.div layoutId={`desc-${item.id}`} className="px-6 pb-6 mt-auto">
//                   <p className="font-sans text-[14px] md:text-[15px] text-gray-400 leading-relaxed line-clamp-3">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>

//       <AnimatePresence>
//         {expandedId !== null && (
//           <ExpandedCard
//             item={items.find(i => i.id === expandedId)!}
//             onClose={() => setExpandedId(null)}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// // ─── Expanded overlay ──────────────────────────────────────────────────────────
// function ExpandedCard({ item, onClose }: { item: NewsItem; onClose: () => void }) {
//   React.useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
//       />

//       {/* Expanded container */}
//       <div className="relative w-full max-w-[1400px] h-full max-h-[90vh] mx-auto flex items-center justify-center pointer-events-none">
//         <motion.div
//           layoutId={`card-${item.id}`}
//           className="flex flex-col overflow-hidden rounded-[20px] bg-[#0c0c0c] shadow-[0_0_40px_rgba(255,255,255,0.15)] border-2 w-full h-full max-h-[90vh] pointer-events-auto"
//           style={{ scrollbarWidth: 'none' }}
//         >
//           {/* Top Row: Logo · Title · Button */}
//           <div className="p-4 md:p-6 pb-4 flex items-center justify-between gap-4 md:gap-8 bg-[#0c0c0c]/80 backdrop-blur-md z-10 shrink-0">
//             <motion.div layoutId={`header-${item.id}`} className="flex flex-col items-center justify-center gap-2 shrink-0 min-w-[60px] md:min-w-[100px]">
//               <motion.img
//                 layoutId={`logo-${item.id}`}
//                 src={item.logo}
//                 alt={item.logoAlt}
//                 className="h-8 md:h-12 w-auto max-w-[100px] object-contain opacity-90 rounded-sm bg-white/5 p-1"
//               />
//               <motion.span
//                 layoutId={`logoText-${item.id}`}
//                 className="text-[9px] md:text-[11px] font-bold tracking-widest text-white/50 uppercase text-center hidden md:block"
//               >
//                 {item.logoAlt}
//               </motion.span>
//             </motion.div>

//             <motion.div layoutId={`title-container-${item.id}`} className="flex-1">
//               <motion.h3
//                 layoutId={`title-${item.id}`}
//                 className="font-display font-bold text-white leading-tight text-[16px] md:text-[20px] lg:text-[28px]"
//               >
//                 {item.title}
//               </motion.h3>
//             </motion.div>

//             <motion.button
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 20 }}
//               onClick={onClose}
//               className="group flex items-center justify-center gap-2 border border-white/20 text-white font-sans font-medium text-[10px] md:text-[12px] tracking-[0.08em] uppercase px-4 py-2 md:py-2.5 transition-all duration-200 hover:bg-[#FF5A36] hover:border-[#FF5A36] rounded-[6px] shrink-0"
//             >
//               <span className="whitespace-nowrap">Read Article</span>
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
//                 <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </motion.button>
//           </div>

//           {/* Image */}
//           <motion.div layoutId={`image-container-${item.id}`} className="relative w-full px-4 md:px-6 pb-4 flex-1 min-h-[10px]">
//             <div className="w-full h-full rounded-xl overflow-hidden relative">
//               <motion.img
//                 layoutId={`image-${item.id}`}
//                 src={item.image}
//                 alt={item.imageAlt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>

//           {/* Description */}
//           <motion.div layoutId={`desc-${item.id}`} className="px-4 md:px-6 pb-6 shrink-0">
//             <div className="font-sans text-[10px] md:text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase mb-2">
//               {item.meta}
//             </div>
//             <p className="font-sans text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 leading-relaxed max-w-4xl whitespace-pre-wrap">
//               {item.description}
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export interface NewsItem {
//   id: number;
//   logo: string;
//   logoAlt: string;
//   title: string;
//   image: string;
//   imageAlt: string;
//   description: string;
//   meta: string;
// }

// interface BentoNewsProps {
//   items: NewsItem[];
// }

// const GLOW_RADIUS = 160;

// export default function BentoNews({ items }: BentoNewsProps) {
//   const [expandedId, setExpandedId] = useState<number | null>(null);

//   const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const mouseRef = useRef({ x: -9999, y: -9999 });
//   const rafRef = useRef<number | null>(null);
//   const expandedIdRef = useRef<number | null>(null);
//   expandedIdRef.current = expandedId;

//   useEffect(() => {
//     const onMouseMove = (e: MouseEvent) => {
//       mouseRef.current = { x: e.clientX, y: e.clientY };

//       if (rafRef.current !== null) return;
//       rafRef.current = requestAnimationFrame(() => {
//         rafRef.current = null;
//         const { x: mx, y: my } = mouseRef.current;

//         wrapperRefs.current.forEach((wrapper, i) => {
//           const glow = glowRefs.current[i];
//           if (!wrapper || !glow) return;

//           if (expandedIdRef.current === items[i]?.id) {
//             glow.style.opacity = '0';
//             return;
//           }

//           const rect = wrapper.getBoundingClientRect();

//           const nearestX = Math.max(rect.left, Math.min(mx, rect.right));
//           const nearestY = Math.max(rect.top, Math.min(my, rect.bottom));
//           const dist = Math.hypot(mx - nearestX, my - nearestY);

//           if (dist < GLOW_RADIUS) {
//             const cx = rect.left + rect.width / 2;
//             const cy = rect.top + rect.height / 2;
//             const angle = Math.atan2(my - cy, mx - cx);
//             const deg = angle * (180 / Math.PI) + 90;

//             const intensity = 1 - (dist / GLOW_RADIUS);
//             const opacity = Math.pow(intensity, 0.5) * 0.95;

//             const spread = 70;
//             const from = deg - spread / 2;

//             glow.style.background = `conic-gradient(
//               from ${from}deg at 50% 50%,
//               transparent 0deg,
//               #F5E6A3 ${spread * 0.15}deg,
//               #E8C547 ${spread * 0.35}deg,
//               #D4A574 ${spread * 0.55}deg,
//               #C9A0DC ${spread * 0.75}deg,
//               #F4A261 ${spread * 0.90}deg,
//               transparent ${spread}deg,
//               transparent 360deg
//             )`;

//             glow.style.opacity = String(opacity);
//           } else {
//             glow.style.opacity = '0';
//           }
//         });
//       });
//     };

//     window.addEventListener('mousemove', onMouseMove, { passive: true });
//     return () => {
//       window.removeEventListener('mousemove', onMouseMove);
//       if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
//     };
//   }, [items]);

//   if (!items || items.length === 0) return null;

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto relative">
//         {items.map((item, index) => {
//           let colSpanClass = 'md:col-span-1';
//           if (index === 0) colSpanClass = 'md:col-span-2';
//           else if (index === 3) colSpanClass = 'md:col-span-2';

//           const isExpanded = expandedId === item.id;

//           return (
//             <div
//               key={item.id}
//               ref={(el) => { wrapperRefs.current[index] = el; }}
//               onClick={() => setExpandedId(item.id)}
//               className={`
//                 ${colSpanClass}
//                 relative rounded-[22px]
//                 bg-[#1c1c1c]
//                 ring-[1.5px] ring-white/10
//                 hover:ring-white/25
//                 transition-all duration-300
//                 cursor-pointer
//                 ${isExpanded ? 'pointer-events-none' : ''}
//               `}
//             >
//               {/* ── GLOW LAYER ───────────────────────────────────────────
//                   z-0: sits BELOW the ring border (which has no z-index, so it stacks above)
//                   inset-[2px]: sits in the 4px padding gap, leaving 2px on each side
//                   The ring border (1.5px) sits on the outer edge, visible above glow
//               ─────────────────────────────────────────────────────────── */}
//               <div
//                 ref={(el) => { glowRefs.current[index] = el; }}
//                 className="absolute inset-[2px] rounded-[20px] z-0 pointer-events-none"
//                 style={{
//                   opacity: 0,
//                   willChange: 'opacity, background',
//                 }}
//               />

//               {/* ── CARD ─────────────────────────────────────────────────
//                   z-10: sits ABOVE everything
//                   m-[4px]: creates the padding gap where glow shines through
//               ─────────────────────────────────────────────────────────── */}
//               <motion.div
//                 layoutId={`card-${item.id}`}
//                 className={`
//                   relative z-10
//                   group flex flex-col overflow-hidden
//                   rounded-[20px] bg-black
//                   h-full m-[4px]
//                   transition-shadow duration-300
//                   hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
//                   ${isExpanded ? 'opacity-0 pointer-events-none' : ''}
//                 `}
//               >
//                 <motion.div layoutId={`header-${item.id}`} className="p-6 pb-4 flex items-center gap-3">
//                   <motion.img
//                     layoutId={`logo-${item.id}`}
//                     src={item.logo}
//                     alt={item.logoAlt}
//                     className="h-6 w-auto max-w-[80px] object-contain opacity-90 rounded-sm bg-white/5 p-1"
//                   />
//                   <motion.span
//                     layoutId={`logoText-${item.id}`}
//                     className="text-[11px] font-bold tracking-widest text-white/70 uppercase"
//                   >
//                     {item.logoAlt}
//                   </motion.span>
//                 </motion.div>

//                 <motion.div layoutId={`title-container-${item.id}`} className="px-6 pb-4">
//                   <motion.h3
//                     layoutId={`title-${item.id}`}
//                     className={`font-display font-bold text-white leading-tight ${index === 0 || index === 3 ? 'text-2xl md:text-[32px]' : 'text-xl md:text-2xl'
//                       }`}
//                   >
//                     {item.title}
//                   </motion.h3>
//                 </motion.div>

//                 <motion.div
//                   layoutId={`image-container-${item.id}`}
//                   className={`relative w-full px-6 pb-4 ${index === 0 || index === 3 ? 'h-48 md:h-64' : 'h-40 md:h-48'
//                     }`}
//                 >
//                   <div className="w-full h-full rounded-xl overflow-hidden relative">
//                     <motion.img
//                       layoutId={`image-${item.id}`}
//                       src={item.image}
//                       alt={item.imageAlt}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.div layoutId={`desc-${item.id}`} className="px-6 pb-6 mt-auto">
//                   <p className="font-sans text-[14px] md:text-[15px] text-gray-400 leading-relaxed line-clamp-3">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>

//       <AnimatePresence>
//         {expandedId !== null && (
//           <ExpandedCard
//             item={items.find(i => i.id === expandedId)!}
//             onClose={() => setExpandedId(null)}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// // ─── Expanded overlay ──────────────────────────────────────────────────────────
// function ExpandedCard({ item, onClose }: { item: NewsItem; onClose: () => void }) {
//   React.useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
//       />

//       <div className="relative w-full max-w-[1400px] h-full max-h-[90vh] mx-auto flex items-center justify-center pointer-events-none">
//         <motion.div
//           layoutId={`card-${item.id}`}
//           className="flex flex-col overflow-hidden rounded-[20px] bg-[#0c0c0c] border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.15)] border-2 w-full h-full max-h-[90vh] pointer-events-auto"
//           style={{ scrollbarWidth: 'none' }}
//         >
//           <div className="p-4 md:p-6 pb-4 flex items-center justify-between gap-4 md:gap-8 bg-[#0c0c0c]/80 backdrop-blur-md z-10 shrink-0">
//             <motion.div layoutId={`header-${item.id}`} className="flex flex-col items-center justify-center gap-2 shrink-0 min-w-[60px] md:min-w-[100px]">
//               <motion.img
//                 layoutId={`logo-${item.id}`}
//                 src={item.logo}
//                 alt={item.logoAlt}
//                 className="h-8 md:h-12 w-auto max-w-[100px] object-contain opacity-90 rounded-sm bg-white/5 p-1"
//               />
//               <motion.span
//                 layoutId={`logoText-${item.id}`}
//                 className="text-[9px] md:text-[11px] font-bold tracking-widest text-white/50 uppercase text-center hidden md:block"
//               >
//                 {item.logoAlt}
//               </motion.span>
//             </motion.div>

//             <motion.div layoutId={`title-container-${item.id}`} className="flex-1">
//               <motion.h3
//                 layoutId={`title-${item.id}`}
//                 className="font-display font-bold text-white leading-tight text-[16px] md:text-[20px] lg:text-[28px]"
//               >
//                 {item.title}
//               </motion.h3>
//             </motion.div>

//             <motion.button
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 20 }}
//               onClick={onClose}
//               className="group flex items-center justify-center gap-2 border border-white/20 text-white font-sans font-medium text-[10px] md:text-[12px] tracking-[0.08em] uppercase px-4 py-2 md:py-2.5 transition-all duration-200 hover:bg-[#FF5A36] hover:border-[#FF5A36] rounded-[6px] shrink-0"
//             >
//               <span className="whitespace-nowrap">Read Article</span>
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
//                 <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </motion.button>
//           </div>

//           <motion.div layoutId={`image-container-${item.id}`} className="relative w-full px-4 md:px-6 pb-4 flex-1 min-h-[10px]">
//             <div className="w-full h-full rounded-xl overflow-hidden relative">
//               <motion.img
//                 layoutId={`image-${item.id}`}
//                 src={item.image}
//                 alt={item.imageAlt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>

//           <motion.div layoutId={`desc-${item.id}`} className="px-4 md:px-6 pb-6 shrink-0">
//             <div className="font-sans text-[10px] md:text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase mb-2">
//               {item.meta}
//             </div>
//             <p className="font-sans text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 leading-relaxed max-w-4xl whitespace-pre-wrap">
//               {item.description}
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import GlowBorder from "../components/ui/GlowBorder";

// export interface NewsItem {
//   id: number;
//   logo: string;
//   logoAlt: string;
//   title: string;
//   image: string;
//   imageAlt: string;
//   description: string;
//   meta: string;
// }

// interface BentoNewsProps {
//   items: NewsItem[];
// }

// export default function BentoNews({ items }: BentoNewsProps) {
//   const [expandedId, setExpandedId] = useState<number | null>(null);

//   if (!items || items.length === 0) return null;

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto">
//         {items.map((item, index) => {
//           // 2-1 layout for first row, 1-2 layout for second row
//           let colSpanClass = "md:col-span-1";
//           if (index === 0) colSpanClass = "md:col-span-2";
//           else if (index === 3) colSpanClass = "md:col-span-2";

//           const isExpanded = expandedId === item.id;

//           return (
//             <GlowBorder
//               key={item.id}
//               className={colSpanClass}
//               active={!isExpanded}
//               onClick={() => setExpandedId(item.id)}
//               glowRadius={140}
//               glowThickness={2}
//               glowBlur={1}
//               ringColor="#1c1c1c"
//               ringThickness={4}
//             >
//               <motion.div
//                 layoutId={`card-${item.id}`}
//                 className="group flex flex-col overflow-hidden h-full"
//               >
//                 {/* Header / Meta */}
//                 <motion.div
//                   layoutId={`header-${item.id}`}
//                   className="p-6 pb-4 flex items-center gap-3"
//                 >
//                   <motion.img
//                     layoutId={`logo-${item.id}`}
//                     src={item.logo}
//                     alt={item.logoAlt}
//                     className="h-6 w-auto max-w-[80px] object-contain opacity-90 rounded-sm bg-white/5 p-1"
//                   />
//                   <motion.span
//                     layoutId={`logoText-${item.id}`}
//                     className="text-[11px] font-bold tracking-widest text-white/70 uppercase"
//                   >
//                     {item.logoAlt}
//                   </motion.span>
//                 </motion.div>

//                 {/* Title */}
//                 <motion.div
//                   layoutId={`title-container-${item.id}`}
//                   className="px-6 pb-4"
//                 >
//                   <motion.h3
//                     layoutId={`title-${item.id}`}
//                     className={`font-display font-bold text-white leading-tight ${index === 0 || index === 3
//                       ? "text-2xl md:text-[32px]"
//                       : "text-xl md:text-2xl"
//                       }`}
//                   >
//                     {item.title}
//                   </motion.h3>
//                 </motion.div>

//                 {/* Image */}
//                 <motion.div
//                   layoutId={`image-container-${item.id}`}
//                   className={`relative w-full px-6 pb-4 ${index === 0 || index === 3
//                     ? "h-48 md:h-64"
//                     : "h-40 md:h-48"
//                     }`}
//                 >
//                   <div className="w-full h-full rounded-xl overflow-hidden relative">
//                     <motion.img
//                       layoutId={`image-${item.id}`}
//                       src={item.image}
//                       alt={item.imageAlt}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Description */}
//                 <motion.div
//                   layoutId={`desc-${item.id}`}
//                   className="px-6 pb-6 mt-auto"
//                 >
//                   <p className="font-sans text-[14px] md:text-[15px] text-gray-400 leading-relaxed line-clamp-3">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </GlowBorder>
//           );
//         })}
//       </div>

//       <AnimatePresence>
//         {expandedId !== null && (
//           <ExpandedCard
//             item={items.find((i) => i.id === expandedId)!}
//             onClose={() => setExpandedId(null)}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// // ─── Expanded overlay ──────────────────────────────────────────────────────────
// function ExpandedCard({
//   item,
//   onClose,
// }: {
//   item: NewsItem;
//   onClose: () => void;
// }) {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
//       />

//       {/* Expanded container */}
//       <div className="relative w-full max-w-[1400px] h-full max-h-[90vh] mx-auto flex items-center justify-center pointer-events-none">
//         <motion.div
//           layoutId={`card-${item.id}`}
//           className="flex flex-col overflow-hidden rounded-[20px] bg-[#0c0c0c] shadow-[0_0_40px_rgba(255,255,255,0.15)] border-2 w-full h-full max-h-[90vh] pointer-events-auto"
//           style={{ scrollbarWidth: "none" }}
//         >
//           {/* Top Row: Logo · Title · Button */}
//           <div className="p-4 md:p-6 pb-4 flex items-center justify-between gap-4 md:gap-8 bg-[#0c0c0c]/80 backdrop-blur-md z-10 shrink-0">
//             <motion.div
//               layoutId={`header-${item.id}`}
//               className="flex flex-col items-center justify-center gap-2 shrink-0 min-w-[60px] md:min-w-[100px]"
//             >
//               <motion.img
//                 layoutId={`logo-${item.id}`}
//                 src={item.logo}
//                 alt={item.logoAlt}
//                 className="h-8 md:h-12 w-auto max-w-[100px] object-contain opacity-90 rounded-sm bg-white/5 p-1"
//               />
//               <motion.span
//                 layoutId={`logoText-${item.id}`}
//                 className="text-[9px] md:text-[11px] font-bold tracking-widest text-white/50 uppercase text-center hidden md:block"
//               >
//                 {item.logoAlt}
//               </motion.span>
//             </motion.div>

//             <motion.div
//               layoutId={`title-container-${item.id}`}
//               className="flex-1"
//             >
//               <motion.h3
//                 layoutId={`title-${item.id}`}
//                 className="font-display font-bold text-white leading-tight text-[16px] md:text-[20px] lg:text-[28px]"
//               >
//                 {item.title}
//               </motion.h3>
//             </motion.div>

//             <motion.button
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 20 }}
//               onClick={onClose}
//               className="group flex items-center justify-center gap-2 border border-white/20 text-white font-sans font-medium text-[10px] md:text-[12px] tracking-[0.08em] uppercase px-4 py-2 md:py-2.5 transition-all duration-200 hover:bg-[#FF5A36] hover:border-[#FF5A36] rounded-[6px] shrink-0"
//             >
//               <span className="whitespace-nowrap">Read Article</span>
//               <svg
//                 width="12"
//                 height="12"
//                 viewBox="0 0 12 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
//               >
//                 <path
//                   d="M1 6H11M11 6L7 2M11 6L7 10"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </motion.button>
//           </div>

//           {/* Image */}
//           <motion.div
//             layoutId={`image-container-${item.id}`}
//             className="relative w-full px-4 md:px-6 pb-4 flex-1 min-h-[10px]"
//           >
//             <div className="w-full h-full rounded-xl overflow-hidden relative">
//               <motion.img
//                 layoutId={`image-${item.id}`}
//                 src={item.image}
//                 alt={item.imageAlt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>

//           {/* Description */}
//           <motion.div
//             layoutId={`desc-${item.id}`}
//             className="px-4 md:px-6 pb-6 shrink-0"
//           >
//             <div className="font-sans text-[10px] md:text-[12px] font-bold tracking-[0.15em] text-white/50 uppercase mb-2">
//               {item.meta}
//             </div>
//             <p className="font-sans text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 leading-relaxed max-w-4xl whitespace-pre-wrap">
//               {item.description}
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

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
              onClick={() => setExpandedId(item.id)}
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
                    className="h-12 w-auto max-w-[80px] object-contain opacity-90 rounded-sm bg-white p-1"
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
          <div className="p-4 md:p-6 pb-4 flex items-center justify-between gap-4 md:gap-8 bg-[#0c0c0c]/80 backdrop-blur-md z-10 shrink-0">
            <motion.div layoutId={`header-${item.id}`} className="flex flex-col items-center justify-center gap-2 shrink-0 min-w-[60px] md:min-w-[100px]">
              <motion.img
                layoutId={`logo-${item.id}`}
                src={item.logo}
                alt={item.logoAlt}
                className="h-8 md:h-12 w-auto max-w-[100px] object-contain opacity-90 rounded-sm bg-white/5 p-1"
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
                className="font-display font-bold text-white leading-tight text-[16px] md:text-[20px] lg:text-[28px]"
              >
                {item.title}
              </motion.h3>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={onClose}
              className="group flex items-center justify-center gap-2 border border-white/20 text-white font-sans font-medium text-[10px] md:text-[12px] tracking-[0.08em] uppercase px-4 py-2 md:py-2.5 transition-all duration-200 hover:bg-[#FF5A36] hover:border-[#FF5A36] rounded-[6px] shrink-0"
            >
              <span className="whitespace-nowrap">Read Article</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
                <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
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
            <p className="font-sans text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 leading-relaxed max-w-4xl whitespace-pre-wrap">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}