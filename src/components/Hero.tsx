"use client";

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center" id="hero">
      <div className="absolute m-auto top-10 md:w-[90vw] h-[85vh] inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.sanity.io/files/61nocsj5/production/e84b9d303c09edffc395636a6ce6fb43a0e84042.mp4"
            type="video/mp4"
          />
        </video>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f]/95 via-[#0a0c0f]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-b from-transparent to-black pointer-events-none"></div> */}
      </div>
    </section>
  );
}
