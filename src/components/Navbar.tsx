// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// const DROPDOWN_ITEMS: Record<string, { name: string; href: string; img: string }[]> = {
//   "Aerial Platforms": [
//     { name: "Svayatt M1", href: "/aerial-platforms/svayatM1", img: "/svayattM1.jpeg" },
//     { name: "Svayatt L1", href: "/aerial-platforms/svayattL1", img: "/svayattL1.png" },
//     { name: "Svayatt TD-1", href: "/aerial-platforms/svayattTD1", img: "/svayattTD1.jpg" },
//   ],
//   "Power Plants": [
//     { name: "Aero Engine", href: "/power-plants/aero-engine", img: "/svayatt-aero.jpeg" },
//     { name: "Marine Engine", href: "/power-plants/marine-engine", img: "/svayatt-marine.jpeg" },
//     { name: "Ramjet", href: "/power-plants/ramjet", img: "/svayatt-ramjet.jpeg" },
//   ],
//   "Digital Platforms": [
//     { name: "Kalman Intel", href: "/digital-platforms/kalman-intel", img: "/Kalman-Intel.png" },
//     { name: "EntrophyHub", href: "/digital-platforms/entrophyhub", img: "/Entropy-Hub.png" },
//     { name: "AirVoxels", href: "/digital-platforms/airvoxels", img: "/Air-Voxels.png" },
//   ],
// };

// const NAV_LINKS = [
//   { label: "Home", href: "/" },
//   // { label: "About Us", href: "/about-us" },
//   { label: "Aerial Platforms", href: "/aerial-platforms" },
//   { label: "Power Plants", href: "/power-plants" },
//   { label: "Digital Platforms", href: "/digital-platforms" },
//   { label: "Manufacturing", href: "/manufacturing" },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [underlineStyle, setUnderlineStyle] = useState({ width: "0px", transform: "translateX(0px)", opacity: 0 });
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const lastScrollY = useRef(0);
//   const navContainerRef = useRef<HTMLDivElement>(null);
//   const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsScrolled(currentScrollY > 50);
//       setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 100);
//       lastScrollY.current = currentScrollY;
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => { document.body.style.overflow = ""; };
//   }, [isMobileMenuOpen]);

//   const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
//     if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
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
//     if (DROPDOWN_ITEMS[label]) {
//       setActiveDropdown(label);
//     } else {
//       setActiveDropdown(null);
//     }
//   };

//   const handleNavMouseLeave = () => {
//     closeTimerRef.current = setTimeout(() => {
//       setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
//       setActiveDropdown(null);
//     }, 80);
//   };

//   const handleDropdownMouseEnter = () => {
//     if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
//   };

//   const handleDropdownMouseLeave = () => {
//     closeTimerRef.current = setTimeout(() => {
//       setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
//       setActiveDropdown(null);
//     }, 80);
//   };

//   const dropdownItems = activeDropdown ? DROPDOWN_ITEMS[activeDropdown] : null;

//   return (
//     <>
//       <header
//         id="main-nav"
//         style={{
//           backgroundColor: isScrolled ? "rgba(12, 11, 10, 0.97)" : "transparent",
//           backdropFilter: isScrolled ? "blur(12px)" : "none",
//           transition: "transform 0.3s ease, background-color 0.3s ease",
//         }}
//         className={`fixed top-0 left-0 w-full z-50 flex items-center px-6 md:px-[64px] h-[68px] ${
//           // On mobile: always visible. On desktop: hide on scroll down.
//           isHidden ? "md:-translate-y-full translate-y-0" : "translate-y-0"
//           }`}
//       >
//         {/* Logo */}
//         <div className="flex-none flex items-center">
//           <img
//             alt="Paninian Logo"
//             className="h-[40px] object-contain brightness-0 invert"
//             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqB8GJ6tMXndhP5BiOWQzQ2oqWGtQNc7azHtnG1mMBC-jJ1Yi7Wjjc0XTc0Kepj_FoIjLMsRvWP6ggC-xki04VTR1_UmbaqtBiyL3AmIqTy97EUEaS8uMLnTZSWJTIvDQC4Z0AXaf6L5OVScF7d5YA5VIucmI00LgcJp5QExhpLmgMpu_fh19g84aIh-CBg0-7at_Ico_NFVV9uUc4LA_bTQHUhPPIr3BPoc-F7ulKCmSX31LSoMv-fxlNZwz4bOUG6Zt4hsKYFGZI"
//           />
//         </div>

//         {/* Desktop nav links (centred) */}
//         <div className="flex-grow flex justify-center">
//           <nav
//             ref={navContainerRef}
//             onMouseLeave={handleNavMouseLeave}
//             className="relative hidden md:flex items-center gap-[36px]"
//           >
//             {NAV_LINKS.map(({ label, href }) => (
//               <Link
//                 key={label}
//                 href={href}
//                 onMouseEnter={(e) => handleMouseEnter(e, label)}
//                 className={`nav-link-item font-sans font-medium text-[14px] tracking-[0.02em] transition-colors ${label === "Home" ? "text-nav-gold" : "text-nav-link hover:text-white"
//                   }`}
//               >
//                 {label}
//               </Link>
//             ))}

//             <div
//               className="absolute bottom-[-2px] left-0 h-[2px] bg-nav-gold transition-all duration-300 pointer-events-none"
//               style={{
//                 width: underlineStyle.width,
//                 transform: underlineStyle.transform,
//                 opacity: underlineStyle.opacity,
//               }}
//             />
//           </nav>
//         </div>

//         {/* Desktop spacer (balances logo) */}
//         <div className="flex-none w-[40px] hidden md:block" />

//         {/* Mobile hamburger button */}
//         <button
//           id="mobile-menu-toggle"
//           aria-label="Open navigation menu"
//           onClick={() => setIsMobileMenuOpen(true)}
//           className="ml-auto flex md:hidden flex-col justify-center items-center gap-[5px] w-[36px] h-[36px] rounded-sm"
//           style={{ background: "transparent", border: "none", cursor: "pointer" }}
//         >
//           <span className="block w-[22px] h-[2px] bg-white transition-all duration-300" />
//           <span className="block w-[22px] h-[2px] bg-white transition-all duration-300" />
//           <span className="block w-[22px] h-[2px] bg-white self-start transition-all duration-300" />
//         </button>
//       </header>

//       {/* ── Desktop Mega Menu Dropdown ─────────────────────────────── */}
//       <div
//         style={{
//           opacity: activeDropdown ? 1 : 0,
//           pointerEvents: "none",
//           transform: activeDropdown ? "translateY(0)" : "translateY(-8px)",
//           transition: "opacity 0.2s ease, transform 0.2s ease",
//           top: "68px",
//           backgroundColor: "transparent",
//           backdropFilter: "blur(16px)",
//           overflow: "hidden"
//         }}
//         className="fixed left-0 w-full h-[calc(100vh-68px)] z-40 flex justify-center hidden md:flex"
//       >
//         <div
//           onMouseEnter={handleDropdownMouseEnter}
//           onMouseLeave={handleDropdownMouseLeave}
//           style={{
//             pointerEvents: activeDropdown ? "auto" : "none",
//           }}
//           className="grid grid-cols-3 w-[80vw] h-max px-[10px]"
//         >
//           {dropdownItems?.map((item, i) => (
//             <DropdownCard key={item.name} item={item} isLast={i === dropdownItems.length - 1} />
//           ))}
//         </div>
//       </div>

//       {/* ── Mobile Drawer ──────────────────────────────────────────── */}
//       {/* Backdrop */}
//       <div
//         onClick={() => setIsMobileMenuOpen(false)}
//         className="fixed inset-0 z-[60] md:hidden"
//         style={{
//           backgroundColor: "rgba(0,0,0,0.6)",
//           backdropFilter: "blur(4px)",
//           opacity: isMobileMenuOpen ? 1 : 0,
//           pointerEvents: isMobileMenuOpen ? "auto" : "none",
//           transition: "opacity 0.3s ease",
//         }}
//       />

//       {/* Drawer panel */}
//       <div
//         className="fixed top-0 right-0 h-full z-[70] md:hidden flex flex-col"
//         style={{
//           width: "72vw",
//           maxWidth: "320px",
//           backgroundColor: "#0c0b0a",
//           borderLeft: "1px solid rgba(255,255,255,0.08)",
//           transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
//           transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
//         }}
//       >
//         {/* Drawer header: close button */}
//         <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/[0.08]">
//           <button
//             id="mobile-menu-close"
//             aria-label="Close navigation menu"
//             onClick={() => setIsMobileMenuOpen(false)}
//             style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px" }}
//           >
//             {/* X icon */}
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//               <line x1="3" y1="3" x2="17" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//               <line x1="17" y1="3" x2="3" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           </button>
//         </div>

//         {/* Nav links */}
//         <nav className="flex flex-col px-6 pt-8 gap-0">
//           {NAV_LINKS.map(({ label, href }, idx) => (
//             <Link
//               key={label}
//               href={href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="flex items-center justify-between w-full py-5 font-sans font-medium text-[18px] tracking-[0.01em] border-b border-white/[0.08]"
//               style={{ color: label === "Home" ? "#C9A84C" : "rgba(255,255,255,0.85)", textDecoration: "none" }}
//             >
//               <span>{label}</span>
//               <span className="text-white/20 text-[12px] font-mono">
//                 {String(idx + 1).padStart(2, "0")}
//               </span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </>
//   );
// }

// function DropdownCard({
//   item,
//   isLast,
// }: {
//   item: { name: string; href: string; img: string };
//   isLast: boolean;
// }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Link
//       href={item.href}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
//         position: "relative",
//         display: "block",
//         overflow: "hidden",
//         height: "320px",
//         backdropFilter: "blur(16px)",
//         textDecoration: "none",
//       }}
//     >
//       {/* Image */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `url(${item.img})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundColor: "#D3D3D3",
//         }}
//       />

//       {/* Bottom gradient for text legibility */}
//       {/* <div
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: "140px",
//           background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
//           pointerEvents: "none",
//         }}
//       /> */}
//       {/* Product name */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           left: "28px",
//           right: "28px",
//         }}
//       >
//         <span
//           className="font-display font-semibold text-black text-[24px] md:text-[32px] tracking-[0.05em]"
//           style={{
//             display: "block",
//             // color: hovered ? "#ffffff" : "rgba(255,255,255,0.75)",
//             transition: "color 0.25s ease",
//             lineHeight: 1.2,
//           }}
//         >
//           {item.name}
//         </span>

//         {/* Gold underline under name on hover */}
//         <div
//           style={{
//             marginTop: "8px",
//             height: "3px",
//             backgroundColor: "#C9A84C",
//             width: hovered ? "100%" : "0%",
//             transition: "width 0.3s ease",
//           }}
//         />
//       </div>
//     </Link>
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
    { name: "Aero Engine", href: "/power-plants/aero-engine", img: "/svayatt-aero.jpeg" },
    { name: "Marine Engine", href: "/power-plants/marine-engine", img: "/svayatt-marine.jpeg" },
    { name: "Ramjet", href: "/power-plants/ramjet", img: "/svayatt-ramjet.jpeg" },
  ],
  "Digital Platforms": [
    { name: "Kalman Intel", href: "/digital-platforms/kalman-intel", img: "/Kalman-Intel.png" },
    { name: "EntrophyHub", href: "/digital-platforms/entrophyhub", img: "/Entropy-Hub.png" },
    { name: "AirVoxels", href: "/digital-platforms/airvoxels", img: "/Air-Voxels.png" },
  ],
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  // { label: "About Us", href: "/about-us" },
  { label: "Aerial Platforms", href: "/aerial-platforms" },
  { label: "Power Plants", href: "/power-plants" },
  { label: "Digital Platforms", href: "/digital-platforms" },
  { label: "Manufacturing", href: "/manufacturing" },
];

const HEADER_HEIGHT = 68;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: "0px", transform: "translateX(0px)", opacity: 0 });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Tracks which nav label's sub-list is expanded inside the mobile drawer
  const [expandedMobileLabel, setExpandedMobileLabel] = useState<string | null>(null);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Collapse any expanded sub-list whenever the drawer closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setExpandedMobileLabel(null);
    }
  }, [isMobileMenuOpen]);

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
          // Stay opaque while the mobile drawer is open, not just while scrolled
          backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(12, 11, 10, 0.97)" : "transparent",
          backdropFilter: isScrolled || isMobileMenuOpen ? "blur(12px)" : "none",
          transition: "transform 0.3s ease, background-color 0.3s ease",
        }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center px-6 md:px-[64px] h-[68px] ${
          // On mobile: always visible. On desktop: hide on scroll down.
          isHidden ? "md:-translate-y-full translate-y-0" : "translate-y-0"
          }`}
      >
        {/* Logo */}
        <div className="flex-none flex items-center">
          <img
            alt="Paninian Logo"
            className="h-[40px] object-contain brightness-0 invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqB8GJ6tMXndhP5BiOWQzQ2oqWGtQNc7azHtnG1mMBC-jJ1Yi7Wjjc0XTc0Kepj_FoIjLMsRvWP6ggC-xki04VTR1_UmbaqtBiyL3AmIqTy97EUEaS8uMLnTZSWJTIvDQC4Z0AXaf6L5OVScF7d5YA5VIucmI00LgcJp5QExhpLmgMpu_fh19g84aIh-CBg0-7at_Ico_NFVV9uUc4LA_bTQHUhPPIr3BPoc-F7ulKCmSX31LSoMv-fxlNZwz4bOUG6Zt4hsKYFGZI"
          />
        </div>

        {/* Desktop nav links (centred) */}
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
                className={`nav-link-item font-sans font-medium text-[14px] tracking-[0.02em] transition-colors ${label === "Home" ? "text-nav-gold" : "text-nav-link hover:text-white"
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

        {/* Desktop spacer (balances logo) */}
        <div className="flex-none w-[40px] hidden md:block" />

        {/* Mobile hamburger / close button — morphs into an X in place, so the
            user's finger never has to move to close the drawer */}
        <button
          id="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="ml-auto flex md:hidden flex-col justify-center items-center gap-[5px] w-[36px] h-[36px] rounded-sm"
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <span
            className="block w-[22px] h-[2px] bg-white transition-all duration-300"
            style={{ transform: isMobileMenuOpen ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-[22px] h-[2px] bg-white transition-all duration-300"
            style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
          />
          <span
            className="block w-[22px] h-[2px] bg-white transition-all duration-300"
            style={{ transform: isMobileMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </button>
      </header>

      {/* ── Desktop Mega Menu Dropdown ─────────────────────────────── */}
      <div
        style={{
          opacity: activeDropdown ? 1 : 0,
          pointerEvents: "none",
          transform: activeDropdown ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          top: "68px",
          backgroundColor: "transparent",
          backdropFilter: "blur(16px)",
          overflow: "hidden"
        }}
        className="fixed left-0 w-full h-[calc(100vh-68px)] z-40 flex justify-center hidden md:flex"
      >
        <div
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          style={{
            pointerEvents: activeDropdown ? "auto" : "none",
          }}
          className="grid grid-cols-3 w-[80vw] h-max px-[10px]"
        >
          {dropdownItems?.map((item, i) => (
            <DropdownCard key={item.name} item={item} isLast={i === dropdownItems.length - 1} />
          ))}
        </div>
      </div>

      {/* ── Mobile Drawer ──────────────────────────────────────────── */}
      {/* Backdrop — sits BELOW the header (z-40 < header's z-50) so the header
          (logo + hamburger/X button) always stays visible and on top */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className="fixed inset-0 z-40 md:hidden"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer panel — starts below the header (top: 68px) and fills the
          rest of the viewport width + height, also below the header's z-50 */}
      <div
        className="fixed right-0 z-40 md:hidden flex flex-col"
        style={{
          top: `${HEADER_HEIGHT}px`,
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          width: "100vw",
          backgroundColor: "#0c0b0a",
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-6 gap-0 overflow-y-auto">
          {NAV_LINKS.map(({ label, href }, idx) => {
            const hasDropdown = !!DROPDOWN_ITEMS[label];
            const isExpanded = expandedMobileLabel === label;
            const subItems = DROPDOWN_ITEMS[label];

            return (
              <div key={label} className="border-b border-white/[0.08]">
                <Link
                  href={href}
                  onClick={(e) => {
                    if (hasDropdown) {
                      // Tapping a label with sub-items toggles the sub-list instead
                      // of navigating away immediately.
                      e.preventDefault();
                      setExpandedMobileLabel((prev) => (prev === label ? null : label));
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="flex items-center justify-between w-full py-5 font-sans font-medium text-[18px] tracking-[0.01em]"
                  style={{ color: label === "Home" ? "#C9A84C" : "rgba(255,255,255,0.85)", textDecoration: "none" }}
                >
                  {/* SrNo grouped to the left of the label */}
                  <span className="flex items-center gap-3">
                    <span className="text-white/20 text-[12px] font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{label}</span>
                  </span>

                  {/* Dropdown arrow only for labels that have DROPDOWN_ITEMS
                      (Aerial Platforms, Power Plants, Digital Platforms) */}
                  {hasDropdown && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        flexShrink: 0,
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    >
                      <path
                        d="M2.5 4.5L7 9L11.5 4.5"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Expandable sub-list of platform/product links */}
                {hasDropdown && (
                  <div
                    style={{
                      maxHeight: isExpanded ? `${subItems.length * 44 + 8}px` : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                    className="flex flex-col pl-9"
                  >
                    {subItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-[10px] font-sans text-[15px] text-white/55 hover:text-white transition-colors"
                        style={{ textDecoration: "none" }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
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
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#D3D3D3",
        }}
      />

      {/* Product name */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "28px",
          right: "28px",
        }}
      >
        <span
          className="font-display font-semibold text-black text-[24px] md:text-[32px] tracking-[0.05em]"
          style={{
            display: "block",
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
            height: "3px",
            backgroundColor: "#C9A84C",
            width: hovered ? "100%" : "0%",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </Link>
  );
}