"use client";

import Link from "next/link";
// import { useEffect, useRef } from "react";

const productList = [
  {
    id: "m1",
    name: "SVAYATT M1",
    type: "Collaborative Combat Aerial Vehicle",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaXwZHkeSF7zC77CfPgP0au84BU3RJOm4Im282wl-eVghMGZad1SewRgS5VXDud_Sh5ZKKgPjuTG6QshitIvq1kFwpEuHe57p4NictZ62qYP-Ynlo2A2zx0D5O7vG29zV_lcfQGNpt6yAEIeuCun5ltVtPYV3DQOdKSa4AhBc0fmLEaRkOVzMw6eKkZtlv0HTep2PoKne1TnKNp5xjGgWK4nCEKa3VDi-ywpUVlbWSTK0DzQdhTAq9pTYv7LL7c15EfJ9j3RFKkunE",
    gridClass: "md:row-span-2 h-[400px] md:h-auto",
  },
  {
    id: "l1",
    name: "SVAYATT L1",
    type: "Long-Range Land Cruise Missile",
    image: "/svayattL1-3.png",
    gridClass: "h-[300px] md:h-auto",
  },
  {
    id: "td-1",
    name: "SVAYATT TD-1",
    type: "Target-Decoy System",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClfzIeEdcTj71ZxbUuapazJIbdngmtw6GDSqqA7Tu5NGTV9hAjCvoggFhwxFMEo2UsxSBF65OK5GYQ5KDCx3km_QRWqFJrxMvbeE3oob3SEwLPkzFVpC7jrvWCfRh5Xl2eeUQE_hAw3RfGVG2-aE7T6mrPikfhmx_nNKGGfr_eWuErbt9l4T9lHOAjZf990KicdLsJdRBF2xul3pJzAbGNzzhX4dlNCmHq7MsBEQz-hVl7y1f1C9-VrlEdmT3pcDkLgWf67-8bun-W",
    gridClass: "h-[300px] md:h-auto",
  },
];

export default function Products() {
  return (
    <section className="bg-[#040404] py-16 md:py-24 scroll-reveal visible" id="products-section">
      <div className="px-6 md:px-[64px] max-w-screen mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] w-full min-h-[600px] md:h-[80vh]">
          {productList.map((product) => (
            <div
              key={product.id}
              className={`p-[3px] ${product.gridClass}`}
              style={{
                // borderRadius: "6px",
                // background: "linear-gradient(135deg, #f0ece4 0%, #a8a7a5 20%, #e8e4dc 40%, #6b6a68 55%, #d0ccc4 75%, #a8a7a5 88%, #f0ece4 100%)",
                background: "linear-gradient(135deg, #ffffff 0%, #5a5a5d 20%, #e8e8ea 40%, #18181a 55%, #c8c8cc 75%, #5a5a5d 88%, #ffffff 100%)",
                backgroundSize: "200% 200%",
                animation: "border-shine 6s ease-in-out infinite alternate",
              }}
            >
              <Link
                href={`/products/${product.id}`}
                // style={{ borderRadius: "4px" }}
                className="group relative w-full h-full overflow-hidden cursor-pointer transition-all duration-300 block"
              >
                <img
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[1] transition-all duration-[0.5s] ease-in-out group-hover:scale-105"
                  src={product.image}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 35%, transparent 65%)",
                  }}
                />
                <div className="absolute left-8 md:left-[48px] bottom-8 md:bottom-[48px] flex flex-col gap-1">
                  <span className="font-display font-semibold text-[24px] md:text-[32px] text-[#e8e6e2] tracking-[0.05em] leading-none uppercase">
                    {product.name}
                  </span>
                  <span className="font-normal text-xs md:text-[14px] font-sans text-white/70 max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-1">
                    {product.type}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}