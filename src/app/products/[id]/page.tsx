import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductData {
  name: string;
  type: string;
  status: "active" | "system" | "standby";
  image: string;
  description: string;
  specs: { label: string; value: string }[];
}

const productsData: Record<string, ProductData> = {
  m1: {
    name: "SVAYATT M1",
    type: "Collaborative Combat Aerial Vehicle",
    status: "active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaXwZHkeSF7zC77CfPgP0au84BU3RJOm4Im282wl-eVghMGZad1SewRgS5VXDud_Sh5ZKKgPjuTG6QshitIvq1kFwpEuHe57p4NictZ62qYP-Ynlo2A2zx0D5O7vG29zV_lcfQGNpt6yAEIeuCun5ltVtPYV3DQOdKSa4AhBc0fmLEaRkOVzMw6eKkZtlv0HTep2PoKne1TnKNp5xjGgWK4nCEKa3VDi-ywpUVlbWSTK0DzQdhTAq9pTYv7LL7c15EfJ9j3RFKkunE",
    description: "The premier collaborative combat aerial vehicle designed for deep-penetration tactical intelligence, surveillance, reconnaissance, and collaborative combat operations. Integrates advanced onboard AI and autonomous flight control subsystems.",
    specs: [
      { label: "Wingspan", value: "12.4 meters" },
      { label: "Max Takeoff Weight", value: "4,500 kg" },
      { label: "Operational Range", value: "1,800 km" },
      { label: "Service Ceiling", value: "45,000 ft" },
      { label: "Propulsion", value: "Single High-Bypass Turbofan" },
      { label: "Avionics Suite", value: "Paninian Multi-Spectral Sensor Array" },
    ],
  },
  l1: {
    name: "SVAYATT L1",
    type: "Long-Range Land Cruise Missile",
    status: "system",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8UAeCRbt_E6IVYy38JBf6ei63EAT8YBCRNDaIf61li6sn8TfEnoiVqhMJqCPWEKskiRkpDp8QDy_WQErp6o2fxAfiel0T0HfgC92mRK-S6165YOthQQAOe-7_W_B2yIZLtg-AoCkYP0e0gmNIG3tayiGBXA1kW9B0QhMo2_IWvMPXnZ_NKXe8izbOycsEsJ-WPv6O86YiHLjRekkHTjgwlwO75clZDmpS_2HFep7vbRqsnaI7YJM8IXen0tYOtZLuXS0yw1N2e_DDYIk",
    description: "A precision-guided long-range cruise missile built for strategic deterrence. Features high survivability against dense air defence nets through terminal low-altitude sea/land-skimming flight paths.",
    specs: [
      { label: "Missile Length", value: "6.2 meters" },
      { label: "Warhead", value: "450 kg High-Explosive Penetrator" },
      { label: "Operational Range", value: "800 km" },
      { label: "Cruising Speed", value: "Mach 0.95 (Subsonic)" },
      { label: "Guidance System", value: "Active Radar Homing + Satellite INS" },
      { label: "Launch Platforms", value: "Mobile Land Launcher, Naval Surface Vessels" },
    ],
  },
  "td-1": {
    name: "SVAYATT TD-1",
    type: "Target-Decoy System",
    status: "active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClfzIeEdcTj71ZxbUuapazJIbdngmtw6GDSqqA7Tu5NGTV9hAjCvoggFhwxFMEo2UsxSBF65OK5GYQ5KDCx3km_QRWqFJrxMvbeE3oob3SEwLPkzFVpC7jrvWCfRh5Xl2eeUQE_hAw3RfGVG2-aE7T6mrPikfhmx_nNKGGfr_eWuErbt9l4T9lHOAjZf990KicdLsJdRBF2xul3pJzAbGNzzhX4dlNCmHq7MsBEQz-hVl7y1f1C9-VrlEdmT3pcDkLgWf67-8bun-W",
    description: "An advanced deployable target-decoy system designed to replicate the flight signatures of high-value fighter platforms. Systematically draws away hostile air defence interceptors during operations.",
    specs: [
      { label: "Deployable Mode", value: "Air-launched or Land-launched packs" },
      { label: "Endurance", value: "45 minutes active broadcasting" },
      { label: "Max Speed", value: "Mach 0.8" },
      { label: "Signature Emulation", value: "Active RF transponder + Dual-band Infrared flare packs" },
      { label: "Payload Capacity", value: "Self-protection jammer subsystems" },
      { label: "Command Link", value: "S-band encrypted telemetry link" },
    ],
  },
};

export async function generateStaticParams() {
  return [{ id: "m1" }, { id: "l1" }, { id: "td-1" }];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = productsData[id.toLowerCase()];

  if (!product) {
    notFound();
  }

  const getStatusDetails = (status: ProductData["status"]) => {
    switch (status) {
      case "active":
        return { color: "bg-gold", text: "Active / Operational" };
      case "system":
        return { color: "bg-tertiary-container", text: "Processing / System Ready" };
      default:
        return { color: "bg-secondary", text: "Standby / Inactive" };
    }
  };

  const statusInfo = getStatusDetails(product.status);

  return (
    <main className="min-h-screen bg-base text-on-background py-16 px-6 md:px-[64px] font-sans flex flex-col justify-between">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Navigation back header */}
        <div className="flex justify-between items-center border-b border-[#998f81]/20 pb-6 mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-[12px] tracking-[0.15em] font-semibold uppercase text-gold hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Return to Fleet
          </Link>
          <span className="text-[11px] tracking-[0.1em] text-[#6b6660] font-mono">
            SECURE ACCESS // LEVEL 4 INTEL
          </span>
        </div>

        {/* Product detailed showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual Showcase Card */}
          <div
            className="lg:col-span-7 relative w-full aspect-video lg:h-[500px] overflow-hidden border-[0.5px] border-[#998f81]/30 bg-surface-container"
            style={{ borderRadius: "4px" }}
          >
            <img
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
              src={product.image}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(22, 19, 15, 0.95) 0%, rgba(22, 19, 15, 0) 100%)",
              }}
            />
            <div className="absolute left-6 bottom-6 flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#c7c6c5] font-mono">
                Fleet Identifier: SV-{id.toUpperCase()}
              </span>
              <h1 className="text-[32px] md:text-[48px] font-semibold tracking-tight text-[#e8e6e2] uppercase leading-none">
                {product.name}
              </h1>
            </div>
          </div>

          {/* Specifications & Details Card */}
          <div
            className="lg:col-span-5 bg-surface-container-low border-[0.5px] border-[#998f81]/30 p-8 flex flex-col gap-6"
            style={{ borderRadius: "4px" }}
          >
            {/* Status bar */}
            <div className="flex items-center gap-3 border-b border-[#998f81]/20 pb-4">
              <span className={`h-2.5 w-2.5 rounded-sm ${statusInfo.color}`}></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#e8e6e2] font-mono">
                {statusInfo.text}
              </span>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b6660]">
                Tactical Description
              </span>
              <p className="text-[14px] leading-relaxed text-[#c7c6c5] font-sans">
                {product.description}
              </p>
            </div>

            {/* Specs Table */}
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b6660]">
                Technical Specifications
              </span>
              <div className="flex flex-col border-t border-[#998f81]/10">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-[#998f81]/10"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#6b6660] font-mono">
                      {spec.label}
                    </span>
                    <span className="text-[13px] text-[#e8e6e2] font-sans text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
