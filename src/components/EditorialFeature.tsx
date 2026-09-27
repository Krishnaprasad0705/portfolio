"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, Terminal, Flame, Compass } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function EditorialFeature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#030303] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Cinematic Spotlight in center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, #FF2028 0%, rgba(20,20,20,0.5) 50%, rgba(3,3,3,0) 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Massive Editorial Cinematic Title Sequence */}
        <div className="relative text-center mb-16 sm:mb-24 select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF2028]/10 border border-[#FF2028]/30 mb-6"
          >
            <Flame className="w-3.5 h-3.5 text-[#FF2028]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#FF2028] uppercase font-bold">
              THE CREATIVE MINDSET • DIGITAL STUDIO AESTHETICS
            </span>
          </motion.div>

          {/* HTML-based responsive metallic title card */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #E2E2E2 40%, #707070 70%, #202020 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 35px rgba(255, 32, 40, 0.35)",
            }}
          >
            KRISHNA PRASAD
          </motion.h2>

          <p className="mt-4 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#8A8A8A]">
            DATA CRAFTSMANSHIP • ARCHITECTURAL CLARITY • VISUAL IMPACT
          </p>
        </div>

        {/* Editorial Frame Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text / Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="border-l-2 border-[#FF2028] pl-6 space-y-4">
              <h3
                className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Data is chaotic until sculptured with intention.
              </h3>
              <p className="text-sm sm:text-base text-[#8A8A8A] leading-relaxed font-light">
                Whether writing high-throughput PySpark scripts, tuning Snowflake clusters, or architecting multi-hop dbt models, I approach every system like a piece of precision engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#090909] border border-white/[0.08]">
                <Compass className="w-5 h-5 text-[#FF2028] mb-2" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1 font-mono">
                  ANALYTIC RIGOR
                </h4>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  Every metric reflects an uncompromised single source of truth.
                </p>
              </div>

              <div className="p-4 bg-[#090909] border border-white/[0.08]">
                <Sparkles className="w-5 h-5 text-[#FF2028] mb-2" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1 font-mono">
                  VISUAL PRECISION
                </h4>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  Clean design elevates complex findings into swift executive action.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#070707] border border-[#FF2028]/20 flex items-center gap-3">
              <Terminal className="w-4 h-4 text-[#FF2028] shrink-0" />
              <span className="text-xs font-mono text-[#F5F5F5]">
                B.E. CSE Final Year • Open to Data Engineer & Analytics roles.
              </span>
            </div>
          </motion.div>

          {/* Right: Editorial Cutout Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="relative group max-w-md mx-auto" data-cursor="image">
              {/* Outer decorative film frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/20 bg-[#0B0B0B] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                <Image
                  src={PORTFOLIO_DATA.profile.images.editorial}
                  alt="Krishna Prasad M - Editorial Portrait"
                  fill
                  className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                {/* Red ambient side glare */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2028]/20 blur-2xl pointer-events-none" />

                {/* Editorial Corner Text */}
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-white/60 uppercase">
                  VOL. 2026 // EDITION 01
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80 border-t border-white/15 pt-2">
                  <span>KRISHNA PRASAD M</span>
                  <span className="text-[#FF2028]">STUDIO SERIES</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
