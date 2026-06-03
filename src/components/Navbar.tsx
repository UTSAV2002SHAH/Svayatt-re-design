"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
    opacity: 0,
  });

  const lastScrollY = useRef(0);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
  };

  const handleMouseLeave = () => {
    setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header
      id="main-nav"
      style={{
        backgroundColor: isScrolled ? "rgba(12, 11, 10, 0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        transition: "transform 0.3s ease, background-color 0.3s ease",
      }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center px-6 md:px-[64px] h-[68px] ${
        isHidden ? "-translate-y-full" : "translate-y-0"
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
          onMouseLeave={handleMouseLeave}
          className="relative hidden md:flex items-center gap-[36px]"
          id="nav-container"
        >
          <Link
            onMouseEnter={handleMouseEnter}
            className="nav-link-item text-[13px] font-normal text-nav-gold"
            href="/"
          >
            Home
          </Link>
          <Link
            onMouseEnter={handleMouseEnter}
            className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
            href="#about-us"
          >
            About Us
          </Link>
          <Link
            onMouseEnter={handleMouseEnter}
            className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
            href="#products-section"
          >
            Aerial Platforms
          </Link>
          <Link
            onMouseEnter={handleMouseEnter}
            className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
            href="#products-section"
          >
            Power Plants
          </Link>
          <Link
            onMouseEnter={handleMouseEnter}
            className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
            href="#news-media-section"
          >
            Digital Platforms
          </Link>
          <Link
            onMouseEnter={handleMouseEnter}
            className="nav-link-item text-[13px] font-normal text-nav-link hover:text-white transition-colors"
            href="#news-media-section"
          >
            Manufacturing
          </Link>
          <div
            id="nav-underline"
            className="absolute bottom-[-2px] left-0 h-[2px] bg-nav-gold transition-all duration-300 pointer-events-none"
            style={{
              width: underlineStyle.width,
              transform: underlineStyle.transform,
              opacity: underlineStyle.opacity,
            }}
          />
        </nav>
      </div>
      <div className="flex-none w-[40px] hidden md:block"></div>
    </header>
  );
}
