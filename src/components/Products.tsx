// "use client";

// import Link from "next/link";
// import GlowEffect from "@/components/ui/GlowBorder";

// const productList = [
//   {
//     id: "m1",
//     name: "SVAYATT M1",
//     type: "Collaborative Combat Aerial Vehicle",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaXwZHkeSF7zC77CfPgP0au84BU3RJOm4Im282wl-eVghMGZad1SewRgS5VXDud_Sh5ZKKgPjuTG6QshitIvq1kFwpEuHe57p4NictZ62qYP-Ynlo2A2zx0D5O7vG29zV_lcfQGNpt6yAEIeuCun5ltVtPYV3DQOdKSa4AhBc0fmLEaRkOVzMw6eKkZtlv0HTep2PoKne1TnKNp5xjGgWK4nCEKa3VDi-ywpUVlbWSTK0DzQdhTAq9pTYv7LL7c15EfJ9j3RFKkunE",
//     gridClass: "md:row-span-2",
//   },
//   {
//     id: "l1",
//     name: "SVAYATT L1",
//     type: "Long-Range Land Cruise Missile",
//     image: "/svayattL1-3.png",
//     gridClass: "",
//   },
//   {
//     id: "td-1",
//     name: "SVAYATT TD-1",
//     type: "Target-Decoy System",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClfzIeEdcTj71ZxbUuapazJIbdngmtw6GDSqqA7Tu5NGTV9hAjCvoggFhwxFMEo2UsxSBF65OK5GYQ5KDCx3km_QRWqFJrxMvbeE3oob3SEwLPkzFVpC7jrvWCfRh5Xl2eeUQE_hAw3RfGVG2-aE7T6mrPikfhmx_nNKGGfr_eWuErbt9l4T9lHOAjZf990KicdLsJdRBF2xul3pJzAbGNzzhX4dlNCmHq7MsBEQz-hVl7y1f1C9-VrlEdmT3pcDkLgWf67-8bun-W",
//     gridClass: "",
//   },
// ];

// export default function Products() {
//   return (
//     <section className="bg-[#040404] py-16 md:py-24 scroll-reveal visible" id="products-section">
//       <div className="px-6 md:px-[64px] max-w-screen mx-auto">

//         <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[14px] w-full h-[85vh]">
//           {productList.map((product) => (
//             <div
//               key={product.id}
//               className={`relative rounded-[22px] bg-[#2a2a2a] p-[5px] min-h-0 ${product.gridClass}`}
//             >
//               <GlowEffect
//                 borderWidth={2}
//                 proximity={140}
//                 blur={1}
//                 spread={60}
//               />

//               <Link
//                 href={`/products/${product.id}`}
//                 className="group relative block w-full h-full overflow-hidden rounded-[18px]"
//               >
//                 <img
//                   alt={product.name}
//                   className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105"
//                   src={product.image}
//                 />
//                 <div
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 35%, transparent 65%)",
//                   }}
//                 />
//                 <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 flex flex-col gap-1">
//                   <span className="font-display font-semibold text-[24px] md:text-[32px] text-[#e8e6e2] tracking-[0.05em] leading-none uppercase">
//                     {product.name}
//                   </span>
//                   <span className="font-normal text-xs md:text-[14px] font-sans text-white/70 max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-1">
//                     {product.type}
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// app/sections/Products.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const ctx = gsap.context(() => {
      // Create a timeline with two phases
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",        // ← INCREASED: more scroll distance total
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: Text reveals (first 40% of scroll)
      tl.fromTo(
        text,
        { y: "100%" },
        { y: "0%", ease: "none", duration: 0.4 }  // 40% of total scroll
      );

      // Phase 2: Hold — text stays visible (remaining 60% of scroll)
      tl.to({}, { duration: 0.6 });  // Empty tween = hold/pause

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#16130f]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 animate-ken-burns">
        <img
          src="/svayatt-m1.jpeg"
          alt="Svayatt-M1 CCAV in flight"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text mask container */}
      <div
        className="absolute left-0 right-0 top-0 overflow-hidden flex items-end justify-center pointer-events-none"
        style={{ height: "46%" }}
      >
        <div
          ref={textRef}
          className="font-[family-name:var(--font-space-grotesk)] text-6xl font-light tracking-tight text-white md:text-8xl lg:text-9xl"
          style={{ willChange: "transform" }}
        >
          SVAYATT-M1
        </div>
      </div>
    </section>
  );
}