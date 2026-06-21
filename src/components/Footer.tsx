// "use client";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#f0f0ef] border-t border-black/10 px-6 md:px-[64px] py-[40px] text-[#1a1a18] font-sans">
//       <div className="max-w-[1440px] mx-auto">
//         <div className="flex flex-col md:flex-row gap-12 md:gap-0">
//           <div className="md:w-[35%] flex flex-col items-start">
//             <img
//               alt="Paninian Logo"
//               className="h-[80px] object-contain"
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM0mhyHL82dFYz0ZOyEBP8SZtp_72vVsJp4VyzAq06zFMP0nbcch0zclTQndLCKYRjd0ci9geQKJApSbtV7PwtO38a3_zi7roLMZmEMAoXsB4pQGBCiMW8yIO_2DVHB-fjrlI4uPChU01tOI4sjhAYk61jBs3rl5M9HxRspxGuOOCQ4Li8dDdj1QQ807UvDP4piVnW5p16_OhFBxs5iHg0Mxxt9q2xeCPz2CLdA1nQ9lsPTVZTjFQEDd5atVaNL9dnJz1mVq73pZXI"
//             />
//             <p className="mt-[16px] font-sans font-medium text-[16px] text-[#3a3a38] max-w-[320px] leading-[1.6]">
//               The next generation platform for affordable autonomous aerial systems
//             </p>
//             <div className="flex gap-[12px] mt-[24px]">
//               <button
//                 className="border border-[#1a1a18] bg-transparent text-[#1a1a18] px-[20px] py-[10px] text-[12px] tracking-[0.1em] font-normal uppercase transition-colors hover:bg-[#FF5A36] hover:border-[#f0f0ef] hover:text-[#f0f0ef] cursor-pointer"
//                 style={{ borderRadius: "4px" }}
//               >
//                 Contact Us
//               </button>
//               <button
//                 className="border border-[#1a1a18] bg-transparent text-[#1a1a18] px-[20px] py-[10px] text-[12px] tracking-[0.1em] font-normal uppercase transition-colors hover:bg-[#FF5A36] hover:border-[#f0f0ef] hover:text-[#f0f0ef] cursor-pointer"
//                 style={{ borderRadius: "4px" }}
//               >
//                 Open Roles
//               </button>
//             </div>
//             {/* <img
//               alt="Make In India Logo"
//               className="mt-[24px] h-[130px] object-contain"
//               src="/Make_In_India.png"
//             /> */}
//           </div>
//           <div className="md:w-[65%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
//             <div className="flex flex-col">
//               <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
//                 Platforms
//               </span>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Unmanned Aerial
//               </a>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Surface Systems
//               </a>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
//                 Products
//               </span>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Svayatt M1
//               </a>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Svayatt L1
//               </a>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Svayatt TD-1
//               </a>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
//                 Company
//               </span>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Our Vision
//               </a>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Careers
//               </a>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Contact
//               </a>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
//                 Media
//               </span>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Newsroom
//               </a>
//               <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
//                 Resources
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-[40px] pt-[24px] border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="font-mono font-normal text-[12px] tracking-[0.01em] text-[#6b6660]">
//             © {new Date().getFullYear()} Paninian Technologies Pvt Ltd. All Rights Reserved.
//           </div>
//           <div className="flex gap-[24px]">
//             <a className="font-mono font-normal text-[12px] tracking-[0.01em] text-[#6b6660] hover:text-[#FF5A36] transition-colors" href="#">
//               Terms of Service
//             </a>
//             <a className="font-mono font-normal text-[12px] tracking-[0.01em] text-[#6b6660] hover:text-[#FF5A36] transition-colors" href="#">
//               Privacy Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// components/Footer.jsx

// "use client"

// // components/Footer.jsx
// export default function Footer() {
//   return (
//     <footer className="relative bg-[#EAEAEA] px-8 pt-10 pb-0 md:px-16 lg:px-24 overflow-hidden">
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
//             <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition">
//               CONTACT US
//             </button>
//             <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition">
//               OPEN ROLES
//             </button>
//           </div>
//           <p className="text-[11px] text-gray-500">
//             © 2026 Paninian Technologies Pvt Ltd. All Rights Reserved.
//           </p>
//         </div>

//         {/* Right zone — navigation cluster (tight internal spacing) */}
//         <div className="flex flex-wrap gap-10 md:gap-12 lg:gap-16">
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PLATFORMS</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Unmanned Aerial</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Surface Systems</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PRODUCTS</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Svayatt M1</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Svayatt L1</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Svayatt TD-1</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">COMPANY</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Our Vision</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Careers</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Contact</a>
//           </div>
//           <div className="flex flex-col gap-2.5">
//             <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">MEDIA</h4>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Newsroom</a>
//             <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Resources</a>
//           </div>
//         </div>
//       </div>

//       {/* 3) Svayatt watermark — full width */}
//       <div className="w-full text-center py-4 select-none">
//         <span
//           className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] font-bold text-[#D3D3D3] tracking-[0.15em] leading-none"
//           style={{ fontFamily: "'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif" }}
//         >
//           SVAYATT
//         </span>
//       </div>
//     </footer>
//   );
// }


"use client"

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative bg-[#EAEAEA] px-8 pt-10 pb-0 md:px-16 lg:px-24">
      {/* 1) Logo — alone in top area, nothing on right */}
      <div className="pt-6 pb-10">
        <img
          alt="Paninian Logo"
          className="h-[70px] object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM0mhyHL82dFYz0ZOyEBP8SZtp_72vVsJp4VyzAq06zFMP0nbcch0zclTQndLCKYRjd0ci9geQKJApSbtV7PwtO38a3_zi7roLMZmEMAoXsB4pQGBCiMW8yIO_2DVHB-fjrlI4uPChU01tOI4sjhAYk61jBs3rl5M9HxRspxGuOOCQ4Li8dDdj1QQ807UvDP4piVnW5p16_OhFBxs5iHg0Mxxt9q2xeCPz2CLdA1nQ9lsPTVZTjFQEDd5atVaNL9dnJz1mVq73pZXI"
        />
      </div>

      {/* 2) Two zones side by side with intentional empty space between them */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-10">

        {/* Left zone — brand identity (dense, self-contained) */}
        <div className="flex flex-col gap-5 max-w-xs">
          <p className="text-sm font-semibold text-gray-600 leading-snug">
            The next generation platform for<br />
            affordable autonomous aerial systems
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition">
              CONTACT US
            </button>
            <button className="px-4 py-2 border border-gray-500 text-gray-600 text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition">
              OPEN ROLES
            </button>
          </div>
          <p className="text-[11px] text-gray-500">
            © 2026 Paninian Technologies Pvt Ltd. All Rights Reserved.
          </p>
        </div>

        {/* Right zone — navigation cluster (tight internal spacing) */}
        <div className="flex flex-wrap gap-10 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PLATFORMS</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Unmanned Aerial</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Surface Systems</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PRODUCTS</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Svayatt M1</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Svayatt L1</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Svayatt TD-1</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">COMPANY</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Our Vision</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Careers</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Contact</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">MEDIA</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Newsroom</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#4a90a4] transition">Resources</a>
          </div>
        </div>
      </div>

      {/* 3) Svayatt watermark — full width, ghost-like, clipped at bottom */}
      <div className="w-full h-[80px] sm:h-[80px] md:h-[100px] lg:h-[280px] relative overflow-hidden">
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-0 text-[80px] sm:text-[100px] md:text-[140px] lg:text-[300px] font-light text-[#D3D3D3] tracking-[0.030em] leading-none whitespace-nowrap"
          style={{ fontFamily: "'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif" }}
        >
          SVAYATT
        </span>
      </div>
    </footer>
  );
}