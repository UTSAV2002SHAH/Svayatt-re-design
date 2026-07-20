// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import BentoNews from "./BentoNews";

// const newsItems = [
//   {
//     id: 0,
//     logo: "/Aaj_tak_logo.png",
//     logoAlt: "Aaj Tak",
//     title: "Paninian Technologies selected for DRDO co-development programme for next-generation autonomous combat systems",
//     image: "/svayatt.png",
//     imageAlt: "DRDO Program",
//     meta: "12 MAR 2025 • NEW DELHI",
//     description: "A landmark partnership between Paninian Technologies and DRDO marks a significant step in India's push toward indigenous autonomous defence systems. The collaboration focuses on developing next-generation combat aerial vehicles for the Indian armed forces.",
//   },
//   {
//     id: 1,
//     logo: "/Dd-news_logo.png",
//     logoAlt: "DD News",
//     title: "Svayatt M1 completes first autonomous flight trial in controlled airspace over Rajasthan test range",
//     image: "/Boeing_MQBAT_28.jpg",
//     imageAlt: "Flight Trial",
//     meta: "14 JUNE 2026 • RAJASTHAN TEST RANGE",
//     description: "The Svayatt M1 combat aerial vehicle successfully completed its first fully autonomous flight trial, demonstrating onboard navigation, obstacle avoidance, and mission execution without human intervention.",
//   },
//   {
//     id: 2,
//     logo: "/India_Today_TV_Channel_logo.jpg",
//     logoAlt: "Times of India",
//     title: "Paninian Technologies joins NVIDIA Inception Programme to accelerate AI-driven development",
//     image: "/Boeing_MQBAT_28.jpg",
//     imageAlt: "NVIDIA Inception",
//     meta: "08 SEP 2025 • BENGALURU",
//     description: "Paninian Technologies has been selected for the NVIDIA Inception Programme, gaining access to cutting-edge GPU computing resources and AI development tools to accelerate onboard intelligence.",
//   },
//   {
//     id: 3,
//     logo: "/NDTV_logo.svg.png",
//     logoAlt: "NDTV",
//     title: "Godrej Aerospace and Paninian Technologies sign MoU for indigenous propulsion system",
//     image: "/svayattL1-3.png",
//     imageAlt: "Godrej MoU",
//     meta: "22 JAN 2026 • MUMBAI",
//     description: "Godrej Aerospace and Paninian Technologies have signed a Memorandum of Understanding to jointly develop indigenous propulsion systems for next-generation unmanned combat aerial vehicles.",
//   },
// ];

// export default function NewsMedia() {
//   // Always keep one item open — clicking an open item does nothing (no close)
//   const [openId, setOpenId] = useState<number>(0);

//   const openAccordion = (id: number) => {
//     setOpenId(id);
//   };

//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Toggle based on intersection so it triggers every time it comes into view
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.1,
//         // -25% bottom margin means it won't trigger until the element is 25% up from the bottom of the screen.
//         // This prevents it from finishing before you can really see it.
//         rootMargin: "0px 0px -5% 0px"
//       }
//     );

//     if (headingRef.current) observer.observe(headingRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="w-full bg-[#000000] py-8 md:py-16 px-6 md:px-[64px]" id="news-media-section">
//       <div className=" mx-auto">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
//           <div className="">
//             {/* <h2 className="font-sans font-semibold text-white text-[32px] md:text-[40px] ml-23 leading-tight text-[#16130f] px-2 mt-1">
//               News & Media
//             </h2> */}

//             <h2 ref={headingRef} className="font-display font-bold text-[64px] md:text-[80px] tracking-[-0.02em] text-white m-0 p-0 leading-none">
//               <div style={{ display: 'flex', alignItems: 'baseline' }}>
//                 {"NEWSROOM".split("").map((letter, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       display: 'inline-block',
//                       opacity: isVisible ? 1 : 0,
//                       transform: isVisible ? 'translateY(0px)' : 'translateY(10px)',
//                       transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.068}s,
//                        transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.068}s`,
//                     }}
//                   >
//                     {letter}
//                   </span>
//                 ))}
//               </div>
//             </h2>
//           </div>
//         </div>
//         <hr className="w-full mt-1 border-none mb-10" style={{ height: '10px', backgroundColor: 'rgba(252, 248, 248, 1)' }} />
//         <BentoNews items={newsItems} />
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useRef, useState } from "react";
import BentoNews from "./BentoNews";

const newsItems = [
  {
    id: 0,
    logo: "/Aaj_tak_logo.png",
    logoAlt: "Aaj Tak",
    title: "Paninian Technologies selected for DRDO co-development programme for next-generation autonomous combat systems",
    image: "/svayatt.png",
    imageAlt: "DRDO Program",
    meta: "12 MAR 2025 • NEW DELHI",
    description: "A landmark partnership between Paninian Technologies and DRDO marks a significant step in India's push toward indigenous autonomous defence systems. The collaboration focuses on developing next-generation combat aerial vehicles for the Indian armed forces.",
  },
  {
    id: 1,
    logo: "/Dd-news_logo.png",
    logoAlt: "DD News",
    title: "Svayatt M1 completes first autonomous flight trial in controlled airspace over Rajasthan test range",
    image: "/Boeing_MQBAT_28.jpg",
    imageAlt: "Flight Trial",
    meta: "14 JUNE 2026 • RAJASTHAN TEST RANGE",
    description: "The Svayatt M1 combat aerial vehicle successfully completed its first fully autonomous flight trial, demonstrating onboard navigation, obstacle avoidance, and mission execution without human intervention.",
  },
  {
    id: 2,
    logo: "/India_Today_TV_Channel_logo.jpg",
    logoAlt: "Times of India",
    title: "Paninian Technologies joins NVIDIA Inception Programme to accelerate AI-driven development",
    image: "/Boeing_MQBAT_28.jpg",
    imageAlt: "NVIDIA Inception",
    meta: "08 SEP 2025 • BENGALURU",
    description: "Paninian Technologies has been selected for the NVIDIA Inception Programme, gaining access to cutting-edge GPU computing resources and AI development tools to accelerate onboard intelligence.",
  },
  {
    id: 3,
    logo: "/NDTV_logo.svg.png",
    logoAlt: "NDTV",
    title: "Godrej Aerospace and Paninian Technologies sign MoU for indigenous propulsion system",
    image: "/svayattL1-3.png",
    imageAlt: "Godrej MoU",
    meta: "22 JAN 2026 • MUMBAI",
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
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px"
      }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#000000] py-8 md:py-16 px-6 md:px-[64px]" id="news-media-section">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
          <div className="">
            <h2 ref={headingRef} className="font-bold text-[40px] md:text-[80px] tracking-[-0.02em] text-white lack m-0 p-0 leading-none" style={{ fontFamily: 'var(--font-alte-haas)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap' }}>
                {"NEWSROOM".split("").map((letter, i) => (
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
          </div>
        </div>
        <hr className="w-full mt-1 border-none mb-5 md:mb-10" style={{ height: '10px', backgroundColor: 'rgba(250, 249, 249, 1)' }} />
        <BentoNews items={newsItems} />
      </div>
    </section>
  );
}