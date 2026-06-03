"use client";

import Link from "next/link";

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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8UAeCRbt_E6IVYy38JBf6ei63EAT8YBCRNDaIf61li6sn8TfEnoiVqhMJqCPWEKskiRkpDp8QDy_WQErp6o2fxAfiel0T0HfgC92mRK-S6165YOthQQAOe-7_W_B2yIZLtg-AoCkYP0e0gmNIG3tayiGBXA1kW9B0QhMo2_IWvMPXnZ_NKXe8izbOycsEsJ-WPv6O86YiHLjRekkHTjgwlwO75clZDmpS_2HFep7vbRqsnaI7YJM8IXen0tYOtZLuXS0yw1N2e_DDYIk",
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
    <section className="bg-[#0c0b0a] py-16 md:py-24 scroll-reveal visible" id="products-section">
      <div className="px-6 md:px-[64px] max-w-[1440px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] w-full min-h-[600px] md:h-[80vh]">
          {productList.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              style={{ borderRadius: "4px" }}
              className={`group relative w-full overflow-hidden cursor-pointer transition-all duration-300 border-[0.5px] border-[#998f81]/20 hover:border-gold/50 hover:shadow-[inset_0_0_0_1px_rgba(200,169,110,0.4)] block ${product.gridClass}`}
            >
              <img
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.8] transition-all duration-[0.5s] ease-in-out group-hover:scale-105 group-hover:brightness-[0.95]"
                src={product.image}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(0deg, rgba(12, 11, 10, 0.9) 10%, rgba(12, 11, 10, 0.2) 60%)",
                }}
              />
              <div className="absolute left-8 md:left-[48px] bottom-8 md:bottom-[48px] flex flex-col gap-1">
                <span className="font-semibold text-xl md:text-[28px] text-[#e8e6e2] tracking-[0.08em] font-sans leading-none uppercase">
                  {product.name}
                </span>
                <span className="font-normal text-xs md:text-[14px] font-sans text-white/70 max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-1">
                  {product.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
