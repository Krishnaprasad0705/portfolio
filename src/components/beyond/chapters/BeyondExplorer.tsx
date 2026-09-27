"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import LightboxModal from "@/components/beyond/LightboxModal";
import { Compass, Maximize2 } from "lucide-react";

export default function BeyondExplorer() {
  const explorerData = BEYOND_IDENTITIES.find((item) => item.id === "explorer")!;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All images for lightbox: heroimg + 7 supporting
  const allImages = [
    {
      src: explorerData.heroImg,
      title: "Explorer — Primary Exhibition Visual",
      caption: explorerData.quote,
      category: "EXPLORER // HERO",
    },
    ...explorerData.supportingImages.map((img) => ({
      src: img.src,
      title: img.title || "Exploration Journal",
      caption: img.caption || "Documenting moments beyond the familiar",
      category: "EXPLORER // JOURNAL",
    })),
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="chapter-explorer"
      className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden border-t border-white/[0.07]"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>CHAPTER 01 // IDENTITY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F5F0E6] tracking-tight leading-none">
              EXPLORER
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              CURIOUS BY DEFAULT.
            </p>
            <p className="text-sm font-serif italic text-[#F5F0E6]/90 mt-1">
              &ldquo;Always curious about what lies beyond the familiar.&rdquo;
            </p>
            <p className="text-xs text-[#A8A08F] mt-2 font-mono leading-relaxed">
              Exploration is not just about changing locations—it is an enduring state of curiosity, noticing quiet details, and embracing the beauty of the unfamiliar.
            </p>
          </div>
        </div>

        {/* Primary Hero Image Exhibition Feature (Mandatory exact heroimg) */}
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group bg-[#11100D]">
          <Image
            src={explorerData.heroImg}
            alt="Explorer Hero Visual"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">
                PRIMARY HERO VISUAL
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wider">
                THE EXPANSIVE VISTA
              </h3>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-mono"
              data-cursor="link"
            >
              <span>EXPAND</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Supporting Journal Gallery (7 Authentic Uploaded Photos) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8A08F]">
              EXPEDITION JOURNAL // {explorerData.supportingImages.length} VISUALS
            </span>
            <span className="text-xs font-mono text-[#D4AF37]">CLICK ANY PHOTO TO ENLARGE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {explorerData.supportingImages.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                onClick={() => openLightbox(idx + 1)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#11100D] hover:border-[#D4AF37] transition-all duration-500 shadow-lg"
                data-cursor="image"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
                  <Image
                    src={img.src}
                    alt={img.title || "Explorer Photo"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/70 border border-[#D4AF37] text-[#D4AF37]">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#A8A08F]">
                    <span>FRAME 0{idx + 1}</span>
                    <span className="text-[#D4AF37]">EXPEDITION</span>
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

      {/* Lightbox Modal */}
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
