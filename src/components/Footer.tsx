"use client"

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative bg-[#EAEAEA] px-8 pt-10 pb-0 md:px-16 lg:px-24 h-full">
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

        {/* Right zone — navigation cluster (tight internal spacing) */}
        <div className="flex flex-wrap gap-10 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PLATFORMS</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Unmanned Aerial</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Surface Systems</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">PRODUCTS</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt M1</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt L1</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Svayatt TD-1</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">COMPANY</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Our Vision</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Careers</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Contact</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold text-gray-600 tracking-wide uppercase">MEDIA</h4>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Newsroom</a>
            <a href="#" className="text-xs text-gray-500 hover:text-[#ff6343] transition">Resources</a>
          </div>
        </div>
      </div>

      {/* 3) Svayatt watermark — full width, ghost-like, clipped at bottom */}
      <div className="w-full h-[80px] sm:h-[80px] md:h-[100px] lg:h-[280px] relative overflow-hidden flex justify-center items-end">
        <span
          className="bottom-0 text-[14vw] font-medium font-[family-name:var(--font-orbitron)] text-[#D3D3D3] tracking-[0.030em] leading-none whitespace-nowrap inline-block origin-bottom scale-y-[1.5]"
        >
          SVAYATT
        </span>
      </div>
    </footer>
  );
}