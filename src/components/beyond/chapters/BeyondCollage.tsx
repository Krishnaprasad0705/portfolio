"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import LightboxModal from "@/components/beyond/LightboxModal";
import { Sparkles, Maximize2 } from "lucide-react";

export default function BeyondCollage() {
  const collageData = BEYOND_IDENTITIES.find((item) => item.id === "collage")!;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [
    {
      src: collageData.heroImg,
      title: "Collage — Holistic Synthesis",
      caption: collageData.quote,
      category: "COLLAGE // FINALE",
    },
    ...collageData.supportingImages.map((img) => ({
      src: img.src,
      title: img.title || "Identity Fragment",
      caption: img.caption || "Where logic and passion converge",
      category: "COLLAGE // CONVERGENCE",
    })),
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="chapter-collage"
      className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden border-t border-white/[0.07]"
    >
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>CHAPTER 07 // HOLISTIC CONVERGENCE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F5F0E6] tracking-tight leading-none">
              COLLAGE
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
              WHERE ALL WORLDS CONVERGE.
            </p>
            <p className="text-sm font-serif italic text-[#F5F0E6]/90">
              &ldquo;The multifaceted tapestry of curiosity, art, discipline, and empathy.&rdquo;
            </p>
            <p className="text-xs text-[#A8A08F] font-mono leading-relaxed">
              No single label defines a person. In this final chapter, each chapter coalesces into a cohesive portrait of who I am.
            </p>
          </div>
        </div>

        {/* Dynamic Multi-Window Exhibition Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collageData.supportingImages.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              onClick={() => openLightbox(idx + 1)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#11100D] hover:border-[#D4AF37] transition-all duration-500 shadow-xl"
              data-cursor="image"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <Image
                  src={img.src}
                  alt={img.title || "Collage Visual"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/70 border border-[#D4AF37] text-[#D4AF37]">
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>

              <div className="p-5 space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                  SYNTHESIS 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold uppercase text-[#F5F0E6] group-hover:text-[#D4AF37] transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-[#A8A08F] font-mono">{img.caption}</p>
              </div>
            </motion.div>
          ))}
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
