"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import LightboxModal from "@/components/beyond/LightboxModal";
import { Palette, Maximize2 } from "lucide-react";

export default function BeyondArtist() {
  const artistData = BEYOND_IDENTITIES.find((item) => item.id === "artist")!;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    {
      src: artistData.heroImg,
      title: "The Artist's Eye — Primary Hero Exhibition",
      caption: artistData.quote,
      category: "ARTIST // HERO",
    },
    ...artistData.supportingImages.map((img) => ({
      src: img.src,
      title: img.title || "Artistic Study",
      caption: img.caption || "Original visual work",
      category: "ARTIST // GALLERY",
    })),
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="chapter-artist"
      className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#F4D06F]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Chapter Header with Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-8">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#F4D06F] uppercase mb-2">
              <Palette className="w-3.5 h-3.5" />
              <span>CHAPTER 02 // VISUAL ARTS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F5F0E6] tracking-tight leading-none">
              ARTIST
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[#F4D06F] font-semibold">
              THE ARTIST&apos;S EYE.
            </p>
            <p className="text-sm font-serif italic text-[#F5F0E6]/90">
              &ldquo;Finding different ways to see, create and express beyond words and data.&rdquo;
            </p>
            <p className="text-xs text-[#A8A08F] font-mono leading-relaxed">
              Craftsmanship, patient linework, and visual balance. Step into the intimate process of rendering ideas with hands, paper, and digital canvas.
            </p>
          </div>
        </div>

        {/* Primary Hero Exhibition Visual */}
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-[#11100D]">
          <Image
            src={artistData.heroImg}
            alt="Artist Hero Visual"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-75" />

          {/* Gold Decorative Corner Strokes */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />

          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between z-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#F4D06F] uppercase block mb-1">
                EXHIBITION CURATION // 02
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wider">
                EXPRESSIVE FORM & DETAIL
              </h3>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 bg-black/70 backdrop-blur-md text-[#F5F0E6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-mono"
              data-cursor="link"
            >
              <span>INSPECT PIECE</span>
              <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>

        {/* Gallery of 4 Supporting Original Artworks */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8A08F]">
              ORIGINAL ARTWORKS // {artistData.supportingImages.length} STUDIES
            </span>
            <span className="text-xs font-mono text-[#F4D06F]">CLICK TO EXPAND ARTWORK</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artistData.supportingImages.map((art, idx) => (
              <motion.div
                key={art.src}
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
                    src={art.src}
                    alt={art.title || "Art Piece"}
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
                    <span>STUDY 0{idx + 1}</span>
                    <span className="text-[#F4D06F]">ORIGINAL</span>
                  </div>
                  <h4 className="text-sm font-bold uppercase text-[#F5F0E6] group-hover:text-[#D4AF37] transition-colors truncate">
                    {art.title}
                  </h4>
                  <p className="text-[11px] text-[#A8A08F] font-mono truncate">{art.caption}</p>
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
