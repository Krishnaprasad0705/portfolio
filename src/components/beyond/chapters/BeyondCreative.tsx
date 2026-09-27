"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import LightboxModal from "@/components/beyond/LightboxModal";
import { Layers, Maximize2 } from "lucide-react";

export default function BeyondCreative() {
  const creativeData = BEYOND_IDENTITIES.find((item) => item.id === "creative")!;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    {
      src: creativeData.heroImg,
      title: "Creative Media Designer — Studio Feature",
      caption: creativeData.quote,
      category: "CREATIVE // HERO",
    },
    ...creativeData.supportingImages.map((img) => ({
      src: img.src,
      title: img.title || "Creative Design Archive",
      caption: img.caption || "Event and visual identity",
      category: "CREATIVE // ARCHIVE",
    })),
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="chapter-creative"
      className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#F4D06F]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#F4D06F] uppercase mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>CHAPTER 05 // VISUAL ART DIRECTION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F5F0E6] tracking-tight leading-none">
              CREATIVE MEDIA DESIGNER
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[#F4D06F] font-semibold">
              CREATIVE STUDIO ARCHIVE.
            </p>
            <p className="text-sm font-serif italic text-[#F5F0E6]/90">
              &ldquo;Bridging the gap between conceptual visual art and impactful communication.&rdquo;
            </p>
            <p className="text-xs text-[#A8A08F] font-mono leading-relaxed">
              Design is how complex technical thoughts become visually intuitive. Posters, event creatives, and visual campaigns that capture attention and tell compelling stories.
            </p>
          </div>
        </div>

        {/* Primary Hero Exhibition Visual */}
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-[#11100D]">
          <Image
            src={creativeData.heroImg}
            alt="Creative Media Designer Hero"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-75" />

          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between z-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#F4D06F] uppercase block mb-1">
                STUDIO HIGHLIGHT // 05
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wider">
                EDITORIAL ART DIRECTION
              </h3>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/70 backdrop-blur-md text-[#F5F0E6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-mono"
              data-cursor="link"
            >
              <span>INSPECT</span>
              <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* Curated Archive Gallery (4 Authentic Design Works) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8A08F]">
              DESIGN ARCHIVE // {creativeData.supportingImages.length} POSTER &amp; EVENT CREATIVES
            </span>
            <span className="text-xs font-mono text-[#F4D06F]">CLICK TO EXPAND HIGH-RES POSTER</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativeData.supportingImages.map((work, idx) => (
              <motion.div
                key={work.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                onClick={() => openLightbox(idx + 1)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#11100D] hover:border-[#D4AF37] transition-all duration-500 shadow-xl"
                data-cursor="image"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                  <Image
                    src={work.src}
                    alt={work.title || "Design Piece"}
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
                    <span>CREATIVE 0{idx + 1}</span>
                    <span className="text-[#F4D06F]">POSTER</span>
                  </div>
                  <h4 className="text-sm font-bold uppercase text-[#F5F0E6] group-hover:text-[#D4AF37] transition-colors truncate">
                    {work.title}
                  </h4>
                  <p className="text-[11px] text-[#A8A08F] font-mono truncate">{work.caption}</p>
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
