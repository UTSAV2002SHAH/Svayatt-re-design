// "use client"

// // components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="relative bg-[#EAEAEA] px-8 pt-10 pb-0 md:px-16 lg:px-24 h-full">
//       {/* 1) Logo — alone in top area, nothing on right */}
//       <div className="pt-6 pb-10">
//         <img
//           alt="Paninian Logo"
//           className="h-[70px] object-contain"
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM0mhyHL82dFYz0ZOyEBP8SZtp_72vVsJp4VyzAq06zFMP0nbcch0zclTQndLCKYRjd0ci9geQKJApSbtV7PwtO38a3_zi7roLMZmEMAoXsB4pQGBCiMW8yIO_2DVHB-fjrlI4uPChU01tOI4sjhAYk61jBs3rl5M9HxRspxGuOOCQ4Li8dDdj1QQ807UvDP4piVnW5p16_OhFBxs5iHg0Mxxt9q2xeCPz2CLdA1nQ9lsPTVZTjFQEDd5atVaNL9dnJz1mVq73pZXI"
//         />
//       </div>

//       {/* 2) Two zones side by side with intentional empty space between them */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-10">

//         {/* Left zone — brand identity (dense, self-contained) */}
//         <div className="flex flex-col gap-5 max-w-xs">
//           <p className="text-sm font-semibold text-gray-600 leading-snug">
//             The next generation platform for<br />
//             affordable autonomous aerial systems
//           </p>
//           <div className="flex gap-3">
//             <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-[#ff6343] hover:text-white hover:border-0 transition">
//               CONTACT US
//             </button>
//             <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-[#ff6343] hover:text-white hover:border-0 transition">
//               OPEN ROLES
//             </button>
//           </div>
//           <p className="text-[11px] text-gray-500">
//             © 2026 Paninian Technologies Pvt Ltd. All Rights Reserved.
//           </p>
//         </div>

//         {/* Right zone — navigation cluster (tight internal spacing) */}
//         {/* <div className="flex flex-wrap gap-10 md:gap-12 lg:gap-16">
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PLATFORMS</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Unmanned Aerial</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Surface Systems</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PRODUCTS</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt M1</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt L1</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt TD-1</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">COMPANY</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Our Vision</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Careers</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Contact</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">MEDIA</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Newsroom</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Resources</a>
//           </div>
//         </div> */}

//         {/* Right zone — navigation cluster */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 md:flex md:flex-wrap md:gap-10 lg:gap-16">
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PLATFORMS</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Unmanned Aerial</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Surface Systems</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PRODUCTS</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt M1</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt L1</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt TD-1</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">COMPANY</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Our Vision</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Careers</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Contact</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">MEDIA</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Newsroom</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Resources</a>
//           </div>
//         </div>
//       </div>

//       {/* 3) Svayatt watermark — full width, ghost-like, clipped at bottom */}
//       <div className="w-full h-0 hidden lg:h-[410px] relative overflow-hidden hidden md:flex justify-center items-end">
//         <img
//           src="/svayatt-watermark-2.png"
//           alt=""
//           aria-hidden="true"
//           className="h-[240%] w-full max-w-none object-contain select-none pointer-events-none opacity-40"
//           style={{ transform: "translateY(30%)" }}
//         />
//       </div>
//     </footer>
//   );
// }



"use client"

import { useState } from "react";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections: FooterSection[] = [
    {
      title: "PLATFORMS",
      links: [
        { label: "Unmanned Aerial", href: "#" },
        { label: "Surface Systems", href: "#" },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { label: "Svayatt M1", href: "#" },
        { label: "Svayatt L1", href: "#" },
        { label: "Svayatt TD-1", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "Our Vision", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "MEDIA",
      links: [
        { label: "Newsroom", href: "#" },
        { label: "Resources", href: "#" },
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <footer className="relative bg-[#EAEAEA] px-8 pt-10 pb-0 md:px-16 lg:px-24 h-full">
      {/* 1) Logo */}
      <div className="pt-6 pb-10">
        <img
          alt="Paninian Logo"
          className="h-[70px] object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM0mhyHL82dFYz0ZOyEBP8SZtp_72vVsJp4VyzAq06zFMP0nbcch0zclTQndLCKYRjd0ci9geQKJApSbtV7PwtO38a3_zi7roLMZmEMAoXsB4pQGBCiMW8yIO_2DVHB-fjrlI4uPChU01tOI4sjhAYk61jBs3rl5M9HxRspxGuOOCQ4Li8dDdj1QQ807UvDP4piVnW5p16_OhFBxs5iHg0Mxxt9q2xeCPz2CLdA1nQ9lsPTVZTjFQEDd5atVaNL9dnJz1mVq73pZXI"
        />
      </div>

      {/* 2) Two zones */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-8 pb-10">

        {/* Left zone — brand identity */}
        <div className="flex flex-col gap-5 max-w-xs">
          <p className="text-sm font-semibold text-gray-600 leading-snug">
            The next generation platform for<br />
            affordable autonomous aerial systems
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-[#ff6343] hover:text-white hover:border-0 transition">
              CONTACT US
            </button>
            <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-[#ff6343] hover:text-white hover:border-0 transition">
              OPEN ROLES
            </button>
          </div>
          <p className="text-[11px] text-gray-500">
            © 2026 Paninian Technologies Pvt Ltd. All Rights Reserved.
          </p>
        </div>

        {/* Right zone — nav: flex row on md+, accordion below md */}
        <div className="md:flex md:flex-wrap md:gap-12 lg:gap-16 w-full md:w-auto">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border-b border-gray-300 md:border-none"
            >
              {/* Mobile: tappable header */}
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                aria-expanded={openSection === section.title}
                className="w-full flex justify-between items-center py-3 md:hidden"
              >
                <span className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">
                  {section.title}
                </span>
                <span className="text-gray-500 text-sm">
                  {openSection === section.title ? "−" : "+"}
                </span>
              </button>

              {/* Desktop: static heading */}
              <h4 className="hidden md:block text-[11px] font-bold text-gray-600 tracking-wide uppercase mb-2.5">
                {section.title}
              </h4>

              {/* Links — collapsible on mobile, always visible on desktop */}
              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  md:!h-auto md:!opacity-100 md:overflow-visible
                  ${openSection === section.title ? "opacity-100" : "max-h-0 opacity-0 md:max-h-none"}
                `}
                style={{
                  maxHeight:
                    openSection === section.title ? "500px" : undefined,
                }}
              >
                <div className="flex flex-col gap-2.5 pb-4 md:pb-0">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-[#ff6343] transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3) Svayatt watermark */}
      <div className="w-full h-0 hidden lg:h-[410px] relative overflow-hidden hidden md:flex justify-center items-end">
        <img
          src="/svayatt-watermark-2.png"
          alt=""
          aria-hidden="true"
          className="h-[240%] w-full max-w-none object-contain select-none pointer-events-none opacity-40"
          style={{ transform: "translateY(30%)" }}
        />
      </div>
    </footer>
  );
}