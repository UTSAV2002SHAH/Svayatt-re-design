"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f0f0ef] border-t border-black/10 px-6 md:px-[64px] py-[80px] text-[#1a1a18] font-sans">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          <div className="md:w-[35%] flex flex-col items-start">
            <img
              alt="Paninian Logo"
              className="h-[24px] object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM0mhyHL82dFYz0ZOyEBP8SZtp_72vVsJp4VyzAq06zFMP0nbcch0zclTQndLCKYRjd0ci9geQKJApSbtV7PwtO38a3_zi7roLMZmEMAoXsB4pQGBCiMW8yIO_2DVHB-fjrlI4uPChU01tOI4sjhAYk61jBs3rl5M9HxRspxGuOOCQ4Li8dDdj1QQ807UvDP4piVnW5p16_OhFBxs5iHg0Mxxt9q2xeCPz2CLdA1nQ9lsPTVZTjFQEDd5atVaNL9dnJz1mVq73pZXI"
            />
            <p className="mt-[16px] font-sans font-medium text-[16px] text-[#3a3a38] max-w-[320px] leading-[1.6]">
              The next generation platform for affordable autonomous aerial systems
            </p>
            <div className="flex gap-[12px] mt-[24px]">
              <button
                className="border border-[#1a1a18] bg-transparent text-[#1a1a18] px-[20px] py-[10px] text-[12px] tracking-[0.1em] font-normal uppercase transition-colors hover:bg-[#FF5A36] hover:border-[#f0f0ef] hover:text-[#f0f0ef] cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Contact Us
              </button>
              <button
                className="border border-[#1a1a18] bg-transparent text-[#1a1a18] px-[20px] py-[10px] text-[12px] tracking-[0.1em] font-normal uppercase transition-colors hover:bg-[#FF5A36] hover:border-[#f0f0ef] hover:text-[#f0f0ef] cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Open Roles
              </button>
            </div>
            <img
              alt="Make In India Logo"
              className="mt-[24px] h-[130px] object-contain"
              src="/Make_In_India.png"
            />
          </div>
          <div className="md:w-[65%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex flex-col">
              <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
                Platforms
              </span>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Unmanned Aerial
              </a>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Surface Systems
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
                Products
              </span>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Svayatt M1
              </a>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Svayatt L1
              </a>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Svayatt TD-1
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
                Company
              </span>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Our Vision
              </a>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Careers
              </a>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Contact
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] tracking-[0.12em] font-semibold uppercase mb-[16px]">
                Media
              </span>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Newsroom
              </a>
              <a className="text-[13px] text-[#6b6660] leading-[2.5] hover:text-[#FF5A36] transition-colors" href="#">
                Resources
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[80px] pt-[24px] border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono font-normal text-[12px] tracking-[0.01em] text-[#6b6660]">
            © {new Date().getFullYear()} Paninian Technologies Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex gap-[24px]">
            <a className="font-mono font-normal text-[12px] tracking-[0.01em] text-[#6b6660] hover:text-[#FF5A36] transition-colors" href="#">
              Terms of Service
            </a>
            <a className="font-mono font-normal text-[12px] tracking-[0.01em] text-[#6b6660] hover:text-[#FF5A36] transition-colors" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}