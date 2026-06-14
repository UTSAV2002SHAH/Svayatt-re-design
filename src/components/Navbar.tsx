// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [underlineStyle, setUnderlineStyle] = useState({
//     width: "0px",
//     transform: "translateX(0px)",
//     opacity: 0,
//   });

//   const lastScrollY = useRef(0);
//   const navContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setIsHidden(true);
//       } else {
//         setIsHidden(false);
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     const linkEl = e.currentTarget;
//     const containerEl = navContainerRef.current;
//     if (linkEl && containerEl) {
//       const rect = linkEl.getBoundingClientRect();
//       const containerRect = containerEl.getBoundingClientRect();
//       setUnderlineStyle({
//         width: `${rect.width}px`,
//         transform: `translateX(${rect.left - containerRect.left}px)`,
//         opacity: 1,
//       });
//     }
//   };

//   const handleMouseLeave = () => {
//     setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
//   };

//   return (
//     <header
//       id="main-nav"
//       style={{
//         backgroundColor: isScrolled ? "rgba(12, 11, 10, 0.9)" : "transparent",
//         backdropFilter: isScrolled ? "blur(12px)" : "none",
//         transition: "transform 0.3s ease, background-color 0.3s ease",
//       }}
//       className={`fixed top-0 left-0 w-full z-50 flex items-center px-6 md:px-[64px] h-[68px] ${
//         isHidden ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <div className="flex-none flex items-center">
//         <img
//           alt="Paninian Logo"
//           className="h-[40px] object-contain brightness-0 invert"
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqB8GJ6tMXndhP5BiOWQzQ2oqWGtQNc7azHtnG1mMBC-jJ1Yi7Wjjc0XTc0Kepj_FoIjLMsRvWP6ggC-xki04VTR1_UmbaqtBiyL3AmIqTy97EUEaS8uMLnTZSWJTIvDQC4Z0AXaf6L5OVScF7d5YA5VIucmI00LgcJp5QExhpLmgMpu_fh19g84aIh-CBg0-7at_Ico_NFVV9uUc4LA_bTQHUhPPIr3BPoc-F7ulKCmSX31LSoMv-fxlNZwz4bOUG6Zt4hsKYFGZI"
//         />
//       </div>
//       <div className="flex-grow flex justify-center">
//         <nav
//           ref={navContainerRef}
//           onMouseLeave={handleMouseLeave}
//           className="relative hidden md:flex items-center gap-[36px]"
//           id="nav-container"
//         >
//           <Link
//             onMouseEnter={handleMouseEnter}
//             className="nav-link-item text-[13px] font-normal text-nav-gold"
//             href="/"
//           >
//             Home
//           </Link>
//           <Link
//             onMouseEnter={handleMouseEnter}
//             className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
//             href="#about-us"
//           >
//             About Us
//           </Link>
//           <Link
//             onMouseEnter={handleMouseEnter}
//             className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
//             href="#products-section"
//           >
//             Aerial Platforms
//           </Link>
//           <Link
//             onMouseEnter={handleMouseEnter}
//             className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
//             href="#products-section"
//           >
//             Power Plants
//           </Link>
//           <Link
//             onMouseEnter={handleMouseEnter}
//             className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
//             href="#news-media-section"
//           >
//             Digital Platforms
//           </Link>
//           <Link
//             onMouseEnter={handleMouseEnter}
//             className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
//             href="#news-media-section"
//           >
//             Manufacturing
//           </Link>
//           <div
//             id="nav-underline"
//             className="absolute bottom-[-2px] left-0 h-[2px] bg-nav-gold transition-all duration-300 pointer-events-none"
//             style={{
//               width: underlineStyle.width,
//               transform: underlineStyle.transform,
//               opacity: underlineStyle.opacity,
//             }}
//           />
//         </nav>
//       </div>
//       <div className="flex-none w-[40px] hidden md:block"></div>
//     </header>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DROPDOWN_ITEMS: Record<string, { name: string; href: string; img: string }[]> = {
  "Aerial Platforms": [
    { name: "Svayatt M1", href: "/aerial-platforms/svayatM1", img: "/svayattM1.jpeg" },
    { name: "Svayatt L1", href: "/aerial-platforms/svayattL1", img: "/svayattL1.png" },
    { name: "Svayatt TD-1", href: "/aerial-platforms/svayattTD1", img: "/svayattTD1.jpg" },
  ],
  "Power Plants": [
    { name: "Aero Engine", href: "/power-plants/aero-engine", img: "/Boeing_MQBAT_28.jpg" },
    { name: "Marine Engine", href: "/power-plants/marine-engine", img: "https://www.svayatt.co.in/assets/images/marine.jpg" },
    { name: "Ramjet", href: "/power-plants/ramjet", img: "https://www.svayatt.co.in/assets/images/ramjet.jpg" },
  ],
  "Digital Platforms": [
    { name: "Kalman Intel", href: "/digital-platforms/kalman-intel", img: "https://www.svayatt.co.in/assets/images/kalman.jpg" },
    { name: "EntrophyHub", href: "/digital-platforms/entrophyhub", img: "https://www.svayatt.co.in/assets/images/entropy.jpg" },
    { name: "AirVoxels", href: "/digital-platforms/airvoxels", img: "https://www.svayatt.co.in/assets/images/airvoxels.jpg" },
  ],
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Aerial Platforms", href: "/aerial-platforms" },
  { label: "Power Plants", href: "/power-plants" },
  { label: "Digital Platforms", href: "/digital-platforms" },
  { label: "Manufacturing", href: "/manufacturing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: "0px", transform: "translateX(0px)", opacity: 0 });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 100);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    const linkEl = e.currentTarget;
    const containerEl = navContainerRef.current;
    if (linkEl && containerEl) {
      const rect = linkEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      setUnderlineStyle({
        width: `${rect.width}px`,
        transform: `translateX(${rect.left - containerRect.left}px)`,
        opacity: 1,
      });
    }
    if (DROPDOWN_ITEMS[label]) {
      setActiveDropdown(label);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleNavMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
      setActiveDropdown(null);
    }, 80);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handleDropdownMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
      setActiveDropdown(null);
    }, 80);
  };

  const dropdownItems = activeDropdown ? DROPDOWN_ITEMS[activeDropdown] : null;

  return (
    <>
      <header
        id="main-nav"
        style={{
          backgroundColor: isScrolled ? "rgba(12, 11, 10, 0.97)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          transition: "transform 0.3s ease, background-color 0.3s ease",
        }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center px-6 md:px-[64px] h-[68px] ${isHidden ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="flex-none flex items-center">
          <img
            alt="Paninian Logo"
            className="h-[40px] object-contain brightness-0 invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqB8GJ6tMXndhP5BiOWQzQ2oqWGtQNc7azHtnG1mMBC-jJ1Yi7Wjjc0XTc0Kepj_FoIjLMsRvWP6ggC-xki04VTR1_UmbaqtBiyL3AmIqTy97EUEaS8uMLnTZSWJTIvDQC4Z0AXaf6L5OVScF7d5YA5VIucmI00LgcJp5QExhpLmgMpu_fh19g84aIh-CBg0-7at_Ico_NFVV9uUc4LA_bTQHUhPPIr3BPoc-F7ulKCmSX31LSoMv-fxlNZwz4bOUG6Zt4hsKYFGZI"
          />
        </div>

        <div className="flex-grow flex justify-center">
          <nav
            ref={navContainerRef}
            onMouseLeave={handleNavMouseLeave}
            className="relative hidden md:flex items-center gap-[36px]"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onMouseEnter={(e) => handleMouseEnter(e, label)}
                className={`nav-link-item text-[13px] font-normal transition-colors ${label === "Home" ? "text-nav-gold" : "text-nav-link hover:text-white"
                  }`}
              >
                {label}
              </Link>
            ))}

            <div
              className="absolute bottom-[-2px] left-0 h-[2px] bg-nav-gold transition-all duration-300 pointer-events-none"
              style={{
                width: underlineStyle.width,
                transform: underlineStyle.transform,
                opacity: underlineStyle.opacity,
              }}
            />
          </nav>
        </div>

        <div className="flex-none w-[40px] hidden md:block" />
      </header>

      {/* Mega Menu Dropdown */}
      <div
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        style={{
          opacity: activeDropdown ? 1 : 0,
          pointerEvents: activeDropdown ? "auto" : "none",
          transform: activeDropdown ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          top: "68px",
          backgroundColor: "transparent",
          backdropFilter: "blur(16px)",
          overflow: "hidden"
        }}
        className="fixed left-0 w-full z-40"
      >
        <div className="grid grid-cols-3 w-[80vw] mx-auto px-[10px]">
          {dropdownItems?.map((item, i) => (
            <DropdownCard key={item.name} item={item} isLast={i === dropdownItems.length - 1} />
          ))}
        </div>
      </div>
    </>
  );
}

function DropdownCard({
  item,
  isLast,
}: {
  item: { name: string; href: string; img: string };
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        display: "block",
        overflow: "hidden",
        height: "320px",
        backdropFilter: "blur(16px)",
        textDecoration: "none",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "transparent",
        }}
      />

      {/* Bottom gradient for text legibility */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Product name */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "28px",
          right: "28px",
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: hovered ? "#ffffff" : "rgba(255,255,255,0.75)",
            transition: "color 0.25s ease",
            lineHeight: 1.2,
          }}
        >
          {item.name}
        </span>

        {/* Gold underline under name on hover */}
        <div
          style={{
            marginTop: "8px",
            height: "1px",
            backgroundColor: "#C9A84C",
            width: hovered ? "100%" : "0%",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </Link>
  );
}