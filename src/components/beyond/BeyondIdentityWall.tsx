"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import { Sparkles } from "lucide-react";

export default function BeyondIdentityWall() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values (clamped & smoothed)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle layer shifts
  const shift1X = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const shift1Y = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const shift2X = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const shift2Y = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const getIdentity = (id: string) =>
    BEYOND_IDENTITIES.find((item) => item.id === id) || BEYOND_IDENTITIES[0];

  const explorer = getIdentity("explorer");
  const artist = getIdentity("artist");
  const athlete = getIdentity("athlete");
  const photographer = getIdentity("photographer");
  const creative = getIdentity("creative");
  const philanthropist = getIdentity("philanthropist");

  return (
    <section
      id="identity-wall"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-28 px-6 sm:px-12 bg-[#080807] overflow-hidden border-t border-b border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#3A3020]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#11100D] text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>INTERACTIVE IDENTITY WALL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F5F0E6] tracking-tight">
            THE TAPESTRY OF BEING
          </h2>

          <p className="text-xs sm:text-sm text-[#A8A08F] font-mono tracking-wider max-w-xl mx-auto">
            A non-linear editorial collage where every facet of curiosity, discipline, art, and empathy intersects in harmony.
          </p>
        </div>

        {/* Asymmetric Parallax Collage Layout */}
        <div className="relative min-h-[750px] sm:min-h-[850px] lg:min-h-[950px] w-full">
          {/* 1. EXPLORER (Top Center) */}
          <motion.div
            style={{ x: shift1X, y: shift1Y }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] sm:w-[50%] lg:w-[38%] aspect-[16/9] z-20 group"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#11100D]">
              <Image
                src={explorer.heroImg}
                alt="Explorer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-left">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] block">01</span>
                <span className="text-xs sm:text-sm font-bold uppercase text-[#F5F0E6] tracking-wider">
                  EXPLORER
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2. ARTIST (Mid-Left, slightly overlapping) */}
          <motion.div
            style={{ x: shift2X, y: shift2Y }}
            className="absolute top-[22%] left-[4%] sm:left-[8%] lg:left-[10%] w-[55%] sm:w-[42%] lg:w-[32%] aspect-[16/9] z-10 group"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/15 hover:border-[#D4AF37] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.85)] bg-[#11100D]">
              <Image
                src={artist.heroImg}
                alt="Artist"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-left">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] block">02</span>
                <span className="text-xs sm:text-sm font-bold uppercase text-[#F5F0E6] tracking-wider">
                  ARTIST
                </span>
              </div>
            </div>
          </motion.div>

          {/* 3. ATHLETE (Mid-Right) */}
          <motion.div
            style={{ x: shift1X, y: shift1Y }}
            className="absolute top-[24%] right-[4%] sm:right-[8%] lg:right-[10%] w-[55%] sm:w-[42%] lg:w-[32%] aspect-[16/9] z-10 group"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/15 hover:border-[#D4AF37] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.85)] bg-[#11100D]">
              <Image
                src={athlete.heroImg}
                alt="Athlete"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-left">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] block">03</span>
                <span className="text-xs sm:text-sm font-bold uppercase text-[#F5F0E6] tracking-wider">
                  ATHLETE
                </span>
              </div>
            </div>
          </motion.div>

          {/* 4. PHOTOGRAPHER (Center Focal Feature) */}
          <motion.div
            style={{ x: shift2X, y: shift2Y }}
            className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[75%] sm:w-[55%] lg:w-[44%] aspect-[16/9] z-30 group"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(212,175,55,0.25)] bg-[#11100D]">
              <Image
                src={photographer.heroImg}
                alt="Photographer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-left">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] block">04</span>
                <span className="text-sm sm:text-base font-bold uppercase text-[#F5F0E6] tracking-wider">
                  PHOTOGRAPHER
                </span>
              </div>
            </div>
          </motion.div>

          {/* 5. CREATIVE MEDIA DESIGNER (Lower-Left) */}
          <motion.div
            style={{ x: shift1X, y: shift1Y }}
            className="absolute bottom-[4%] left-[6%] sm:left-[10%] lg:left-[14%] w-[52%] sm:w-[40%] lg:w-[30%] aspect-[16/9] z-20 group"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/15 hover:border-[#D4AF37] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.85)] bg-[#11100D]">
              <Image
                src={creative.heroImg}
                alt="Creative Media Designer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-left">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] block">05</span>
                <span className="text-xs sm:text-sm font-bold uppercase text-[#F5F0E6] tracking-wider">
                  CREATIVE DESIGNER
                </span>
              </div>
            </div>
          </motion.div>

          {/* 6. PHILANTHROPIST (Lower-Right) */}
          <motion.div
            style={{ x: shift2X, y: shift2Y }}
            className="absolute bottom-[2%] right-[6%] sm:right-[10%] lg:right-[14%] w-[52%] sm:w-[40%] lg:w-[30%] aspect-[16/9] z-20 group"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/15 hover:border-[#D4AF37] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.85)] bg-[#11100D]">
              <Image
                src={philanthropist.heroImg}
                alt="Philanthropist"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-left">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] block">06</span>
                <span className="text-xs sm:text-sm font-bold uppercase text-[#F5F0E6] tracking-wider">
                  PHILANTHROPIST
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
