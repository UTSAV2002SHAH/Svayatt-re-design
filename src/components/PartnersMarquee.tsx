"use client";

const partners = [
  {
    name: "PTC Industries",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo1tMCH2mTbYN3yvEgPBeLEIcERf4GME2kU4Ki0NUPWvS1k2UfZFpGyO5uVy3GebrAsBfAU11IRdwUcc3B8SEWsqOGjlc7uYkU0Ifya6axAu3wO_bQg4SfKDlk1VOX5wlc34Cl3_y7gxXdCBTUA3v0jOMGDQLpuipqvZaV8xkHHlZk-rPbaFbCIc6k8HTKDrbPbYIec_KAiwMLGZMWK1W5Zrv61yXxbJIQCwM6BI8KiwR83UDmGEAeU9WBWe-4f-R6WGZOIKo8cPcb",
  },
  {
    name: "Aaran 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYovzryhIyTJniFCpf3E-qRu37mAS_ABhESIly-Xl0Jll6w9Jwx8KtKB4LxY6VM7ZFx-sglKA0YBKFuBbsN15vs-P-R_T1YLzGoJ-pWp31nTq9BOAK9zqHqitkQKXzKol3ije_MqOR0X6sLjajlXlRvVOIvjbnNCSH6T7_4omWvjj9Qk__LhSVtTNSjkfi_ivfgU7riNVneHLtX_q7txcK2RGrpS2S2WKWsm0-CYtRjzT_ko73gPIBe_VpSBNwRIxPLGX1ML7LtcJV",
  },
  {
    name: "Amace",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAggEqFER8-_rgHS12feU1i3M94JF462xSxYtTPhEMR2UVwcTCe7EXAap8X_kxdDR22RC-e79FujTXAHP8qlrV2ES-uvrq4VZjGYq-7tuRw6SP6RHJCnMSJ7tzUxaIPrpEEB_SEi_G4_i2mfRK2bg926Oelit0L5l-Azq_YNcJnABBxPe-UgTb5BbDrOJsuU-5g1KEC2r_lfHB7PUIbG55Xjvhr16Cj8cVp8hnga2vuSUncRplPNqYMw6tRWNylOiMoBMZXyDIY85YO",
  },
  {
    name: "Multiscale Technologies",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX7WVeTtvM8j2j1LsLDczGX6gcJRKJOzROsiJOeLGoAWY_Ss4pd-4fcMZUoeGU9rapGx6yvxZT6vOrDrxW0C90To8AZnM7Dp9vRo6dfq8n32eVej3uF_SRhIIZDEz4qUrdQHzKPfTs3FKFZjuYScv-Rg2yYpP9dBtM9em88RylVfazB69ZTGnahkCHZ9xtQpWRdM1YoCBcEmeiXz2ai1CFearPcaQhDJREjh8XQmmXCjf1DmAfK-qUWBwNBfQc3VZoliIr4g-ODQa_",
  },
  {
    name: "DRDO",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0_h_jiByRV1UR72kFOOX2wFe_jBHy5SVNEvvbmZJR7rxiyBKb3Ho8WNHQLC1pawA87ORq4FEXbrV924QeAYf42e5eoeJ14d-UW194teiYBryfyqVJXkQJJx3yBuqOcOqNK2jWilJPyXEFEByW70avJToNJwGzoak0KnJ-nbFoEK5iTCmVNccfixECVnkDWD2gAHjrIU3iqj6eSJ0TzLlS-QrxuVa1Zj-RCLxQmX-5DhosySOmGt4vUc66hcjHLywpUjrVLzldBYAI",
  },
  {
    name: "NVIDIA",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3jO72kLSaRcbXvgM1rvu5yQwx6Ki7KzKcFmtyLg5Lw544Xm_I6F6XgGmiCeG5hE74El_qN4DR_dqrd54p3G2n7PLd_ITTZBgtIJD_VMIMOsFjokh26NPZlYf3mwHQFSyvWlZvSuRgppU95Ls6iKsRmpZGfuBzjKiCWOZ3PwXMhdg5V6j-pjW9yS5PuGo796_KaJVY477owBw544NKhxG5Zpq_3dIezeouIaeM1I38D1x-LZ0qhLUWUF5xQkiihWDVrMuOUzQSWlnC",
  },
];

export default function PartnersMarquee() {
  return (
    <section className="bg-white py-[40px] md:py-[80px] w-full overflow-hidden">
      <div className="px-6 md:px-[64px] max-w-[1440px] mx-auto">
        <h2 className="font-sans font-semibold text-[24px] md:text-[32px] text-[#1a3a6b] leading-tight">
          Our Growth Partners
        </h2>
        <p className="font-sans font-normal text-[14px] md:text-[16px] text-[#6b6660] mt-2">
          Trusted by India's leading defence and technology institutions
        </p>
      </div>
      <div className="h-[0.5px] bg-black/10 w-full mt-[30px] md:mt-[40px] mb-[40px] md:mb-[60px]"></div>
      <div className="marquee-container w-full overflow-hidden relative group">
        {/* Single flat flex row — gap is uniform so the seam between set 1 and set 2 matches */}
        <div className="animate-marquee flex items-center gap-[40px] md:gap-[80px] lg:gap-[160px] pl-[40px] md:pl-[80px] lg:pl-[160px] group-hover:[animation-play-state:paused]">
          {/* Set 1 */}
          {partners.map((partner, idx) => (
            <img
              key={`set1-${idx}`}
              alt={partner.name}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain h-[36px] md:h-[52px] lg:h[72px] w-auto shrink-0"
              src={partner.src}
            />
          ))}
          {/* Set 2 — duplicate for seamless loop */}
          {partners.map((partner, idx) => (
            <img
              key={`set2-${idx}`}
              alt={partner.name}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain h-[36px] md:h-[52px] w-auto shrink-0"
              src={partner.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
