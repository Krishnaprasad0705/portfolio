"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import { ArrowUpRight } from "lucide-react";

export default function BeyondWhoIAm() {
  const identities = BEYOND_IDENTITIES.slice(0, 6);

  const handleCardClick = (id: string) => {
    const el = document.getElementById(`chapter-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="who-i-am" className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Bold Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#11100D] text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            <span>WHO I AM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#F5F0E6] tracking-tight leading-[1.08]">
            DATA IS WHAT I WORK WITH. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D06F] to-[#F5F0E6]">
              PEOPLE, CREATIVITY AND EXPERIENCES
            </span>{" "}
            ARE WHAT MAKE ME.
          </h2>

          <p className="text-sm sm:text-base text-[#A8A08F] font-mono tracking-wide max-w-2xl mx-auto leading-relaxed">
            Engineering robust systems requires precision, but living a rich life requires curiosity, movement, aesthetic intuition, and deep human empathy.
          </p>
        </div>

        {/* Six Visual Identity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {identities.map((identity, idx) => (
            <motion.div
              key={identity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              onClick={() => handleCardClick(identity.id)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#11100D] transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]"
              data-cursor="image"
            >
              {/* Card Image using Heroimg */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={identity.heroImg}
                  alt={identity.title}
                  fill
                  className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100D] via-[#11100D]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#D4AF37]">
                  {identity.number}
                </div>

                {/* Arrow Action Icon */}
                <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 border border-white/10 text-white group-hover:text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-6 relative z-10 space-y-2 border-t border-white/5">
                <div className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase">
                  {identity.subtitle}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#F5F0E6] group-hover:text-[#F4D06F] transition-colors tracking-tight">
                  {identity.title}
                </h3>

                <p className="text-xs text-[#A8A08F] line-clamp-2 leading-relaxed font-sans">
                  {identity.description}
                </p>

                <div className="pt-3 flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase group-hover:translate-x-1 transition-transform">
                  <span>ENTER CHAPTER</span>
                  <span>→</span>
                </div>
              </div>

              {/* Subtle bottom gold glow line */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
