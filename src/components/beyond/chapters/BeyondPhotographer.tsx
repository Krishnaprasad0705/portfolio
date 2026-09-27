"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import LightboxModal from "@/components/beyond/LightboxModal";
import { Camera, Maximize2, ArrowRight } from "lucide-react";

export default function BeyondPhotographer() {
  const photoData = BEYOND_IDENTITIES.find((item) => item.id === "photographer")!;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    {
      src: photoData.heroImg,
      title: "The Viewfinder — Primary Exhibition Feature",
      caption: photoData.quote,
      category: "PHOTOGRAPHY // HERO",
    },
    ...photoData.supportingImages.map((img) => ({
      src: img.src,
      title: img.title || "Visual Journal Entry",
      caption: img.caption || "Through the lens",
      category: "PHOTOGRAPHY // JOURNAL",
    })),
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="chapter-photographer"
      className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-[#D4AF37]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Editorial Exhibition Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>CHAPTER 04 // VISUAL EXHIBITION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F5F0E6] tracking-tight leading-none">
              PHOTOGRAPHER
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              A PERSONAL VISUAL JOURNAL.
            </p>
            <p className="text-sm font-serif italic text-[#F5F0E6]/90">
              &ldquo;Capturing moments, perspectives and stories through a different lens.&rdquo;
            </p>
            <p className="text-xs text-[#A8A08F] font-mono leading-relaxed">
              Not a commercial showroom, but an intimate chronicle of light, contrast, fleeting expressions, and quiet geometry seen along the way.
            </p>
          </div>
        </div>

        {/* 1. Fullscreen Feature Hero Image (Mandatory uploaded heroimg) */}
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border-2 border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(212,175,55,0.15)] group bg-[#11100D]">
          <Image
            src={photoData.heroImg}
            alt="Photographer Hero Feature"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />

          {/* Minimal Viewfinder Lines */}
          <div className="absolute inset-8 border border-white/10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none flex items-center justify-center">
            <span className="w-4 h-[1px] bg-[#D4AF37]/60 absolute" />
            <span className="h-4 w-[1px] bg-[#D4AF37]/60 absolute" />
          </div>

          <div className="absolute bottom-10 left-12 right-12 flex items-end justify-between z-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">
                FEATURE ARCHIVE // 04
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-wider">
                COMPOSITION &amp; PERSPECTIVE
              </h3>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37] bg-black/70 backdrop-blur-md text-[#F5F0E6] hover:bg-[#D4AF37] hover:text-[#080807] transition-all text-xs font-mono font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              data-cursor="link"
            >
              <span>OPEN FULLSCREEN</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. Curated Exhibition Gallery (8 Uploaded Personal Photographs) */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8A08F]">
              CURATED VISUAL JOURNAL // {photoData.supportingImages.length} FRAMES
            </span>
            <span className="text-xs font-mono text-[#D4AF37]">CLICK ANY PHOTOGRAPH TO VIEW</span>
          </div>

          {/* Asymmetric Gallery Grid with Hover Reveals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photoData.supportingImages.map((photo, idx) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.55 }}
                onClick={() => openLightbox(idx + 1)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#11100D] hover:border-[#D4AF37] transition-all duration-500 shadow-xl"
                data-cursor="image"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <Image
                    src={photo.src}
                    alt={photo.title || "Photograph"}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Hover Floating Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-full bg-black/80 border border-[#D4AF37] text-xs font-mono tracking-widest text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-1.5">
                      <span>VIEW IMAGE</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-md text-[9px] font-mono text-[#D4AF37] border border-white/10">
                    EXH 0{idx + 1}
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-bold uppercase text-[#F5F0E6] group-hover:text-[#D4AF37] transition-colors truncate">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-[#A8A08F] font-mono truncate">{photo.caption}</p>
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
