"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import LightboxModal from "@/components/beyond/LightboxModal";
import { Activity, Zap, Maximize2 } from "lucide-react";

export default function BeyondAthlete() {
  const athleteData = BEYOND_IDENTITIES.find((item) => item.id === "athlete")!;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    {
      src: athleteData.heroImg,
      title: "Athlete & Sportsperson — Primary Hero Exhibition",
      caption: athleteData.quote,
      category: "ATHLETE // HERO",
    },
    ...athleteData.supportingImages.map((img) => ({
      src: img.src,
      title: img.title || "Athletic Discipline",
      caption: img.caption || "Persistence in motion",
      category: "ATHLETE // ACTION",
    })),
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="chapter-athlete"
      className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-2">
              <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>CHAPTER 03 // PHYSICAL RESILIENCE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F5F0E6] tracking-tight leading-none">
              ATHLETE &amp; SPORTSPERSON
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
              <span>DISCIPLINE</span>
              <span>•</span>
              <span>MOVEMENT</span>
              <span>•</span>
              <span>PERSISTENCE</span>
            </div>
            <p className="text-sm font-serif italic text-[#F5F0E6]/90">
              &ldquo;Energy, focus and physical persistence that fuels mental clarity.&rdquo;
            </p>
            <p className="text-xs text-[#A8A08F] font-mono leading-relaxed">
              Sports and physical conditioning sharpen focus, teach grit in the face of fatigue, and build the physical stamina needed to solve hard intellectual problems.
            </p>
          </div>
        </div>

        {/* Primary Hero Exhibition Visual */}
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-[#11100D]">
          <Image
            src={athleteData.heroImg}
            alt="Athlete Hero Visual"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-75" />

          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between z-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">
                KINETIC MOMENT // 03
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wider">
                ENDURANCE &amp; REFLEX
              </h3>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/70 backdrop-blur-md text-[#F5F0E6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-mono"
              data-cursor="link"
            >
              <span>EXPAND</span>
              <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* Kinetic Rhythm Banner: DISCIPLINE. MOVEMENT. PERSISTENCE. */}
        <div className="py-6 border-y border-[#D4AF37]/20 flex flex-wrap items-center justify-around gap-4 text-center font-black tracking-widest text-lg sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D06F] to-[#F5F0E6] uppercase select-none">
          <span className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#D4AF37]" /> DISCIPLINE
          </span>
          <span className="text-white/20">•</span>
          <span>MOVEMENT</span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-3">
            PERSISTENCE <Zap className="w-5 h-5 text-[#D4AF37]" />
          </span>
        </div>

        {/* Supporting Athlete Photos Gallery (8 Authentic Photos) */}
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8A08F]">
              KINETIC ARCHIVE // {athleteData.supportingImages.length} MOMENTS
            </span>
            <span className="text-xs font-mono text-[#D4AF37]">CLICK ANY PHOTO TO ENLARGE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {athleteData.supportingImages.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                onClick={() => openLightbox(idx + 1)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#11100D] hover:border-[#D4AF37] transition-all duration-500 shadow-xl"
                data-cursor="image"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/50">
                  <Image
                    src={img.src}
                    alt={img.title || "Athletic Frame"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/70 border border-[#D4AF37] text-[#D4AF37]">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#A8A08F]">
                    <span>FRAME 0{idx + 1}</span>
                    <span className="text-[#D4AF37]">MOTION</span>
                  </div>
                  <h4 className="text-sm font-bold uppercase text-[#F5F0E6] group-hover:text-[#D4AF37] transition-colors truncate">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-[#A8A08F] font-mono truncate">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
