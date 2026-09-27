"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BEYOND_IDENTITIES } from "@/data/beyond-data";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

const AUTO_ROTATE_MS = 5500;

export default function BeyondHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());

  // Carousel targets the 6 main human identities (01 to 06)
  const heroIdentities = BEYOND_IDENTITIES.slice(0, 6);
  const activeIdentity = heroIdentities[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroIdentities.length);
    setProgress(0);
    lastTimeRef.current = Date.now();
  }, [heroIdentities.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroIdentities.length) % heroIdentities.length);
    setProgress(0);
    lastTimeRef.current = Date.now();
  }, [heroIdentities.length]);

  const selectIdentity = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    lastTimeRef.current = Date.now();
  };

  // Timer loop for automatic sequence with progress bar
  useEffect(() => {
    if (isPaused) return;

    lastTimeRef.current = Date.now();

    const tick = () => {
      const now = Date.now();
      const elapsed = now - lastTimeRef.current;
      const newProgress = Math.min(100, (elapsed / AUTO_ROTATE_MS) * 100);

      setProgress(newProgress);

      if (elapsed >= AUTO_ROTATE_MS) {
        handleNext();
      } else {
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentIndex, isPaused, handleNext]);

  const scrollToNext = () => {
    const el = document.getElementById("who-i-am");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beyond-hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 bg-[#080807] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cinematic Ambient Gold Light Streaks */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-[#D4AF37]/10 via-[#F4D06F]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#3A3020]/30 blur-[120px] pointer-events-none" />

      {/* Top Section: Editorial Headings */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 sm:pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.07] pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37]">
              CINEMATIC DIGITAL EXHIBITION
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#F5F0E6] uppercase leading-[0.88] select-none">
            BEYOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D06F] to-[#F5F0E6]">
              DATA
            </span>
          </h1>
        </div>

        <div className="max-w-md md:text-right">
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#F5F0E6] uppercase font-semibold">
            THE PERSON BEHIND THE PIPELINES.
          </p>
          <p className="text-xs text-[#A8A08F] mt-2 font-mono tracking-wide leading-relaxed">
            Data is what I work with. Curiosity, creativity, movement, photography, and human connection are what make me.
          </p>
        </div>
      </div>

      {/* Middle Section: Dynamic Cinematic Identity Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Visual Image Window (Uses exact uploaded heroimg!) */}
          <div className="lg:col-span-8 relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#D4AF37]/30 shadow-[0_0_60px_rgba(0,0,0,0.85)] bg-[#11100D] group">
            {/* Subtle Gold Rim Lighting on borders */}
            <div className="absolute inset-0 border border-[#D4AF37]/20 pointer-events-none z-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdentity.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeIdentity.heroImg}
                  alt={`${activeIdentity.title} Hero Visual`}
                  fill
                  priority
                  className="object-cover object-center select-none filter contrast-[1.05] brightness-[0.98]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Gold light sweep effect across image */}
            <motion.div
              key={`sweep-${activeIdentity.id}`}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 0.35, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent skew-x-12 pointer-events-none z-15"
            />

            {/* Top-right identity tag */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
              CHAPTER {activeIdentity.number}
            </div>
          </div>

          {/* Identity Story Details & Controls */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdentity.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37]">
                  <span>{activeIdentity.number}</span>
                  <span className="text-white/20">—</span>
                  <span>{activeIdentity.subtitle}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#F5F0E6] tracking-tight leading-none">
                  {activeIdentity.title}
                </h2>

                <p className="text-sm sm:text-base font-serif italic text-[#F4D06F]/90 leading-relaxed border-l-2 border-[#D4AF37] pl-4 py-1">
                  {activeIdentity.quote}
                </p>

                <p className="text-xs sm:text-sm text-[#A8A08F] leading-relaxed font-sans">
                  {activeIdentity.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeIdentity.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase bg-[#11100D] border border-white/10 text-[#A8A08F]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={`#chapter-${activeIdentity.id}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#F5F0E6] hover:text-[#D4AF37] transition-colors group"
                  >
                    <span>EXPLORE CHAPTER</span>
                    <span className="transform group-hover:translate-x-1 transition-transform text-[#D4AF37]">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows & Progress Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-white/15 bg-white/[0.02] hover:border-[#D4AF37] hover:text-[#D4AF37] text-white transition-all"
                  aria-label="Previous identity"
                  data-cursor="link"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-white/15 bg-white/[0.02] hover:border-[#D4AF37] hover:text-[#D4AF37] text-white transition-all"
                  aria-label="Next identity"
                  data-cursor="link"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Identity 01 - 06 Direct Selectors */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {heroIdentities.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectIdentity(idx)}
                    className={`text-xs font-mono tracking-wider px-2 py-1 rounded transition-all ${
                      idx === currentIndex
                        ? "bg-[#D4AF37] text-[#080807] font-bold shadow-[0_0_10px_#D4AF37]"
                        : "text-[#A8A08F] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Progress Indicator */}
            <div className="w-full bg-white/10 h-[2px] mt-4 overflow-hidden rounded-full">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] transition-all duration-100 ease-linear shadow-[0_0_8px_#D4AF37]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-xs font-mono text-[#A8A08F]">
        <span className="hidden sm:inline tracking-widest uppercase">
          06 HUMAN IDENTITIES • 01 TAPESTRY
        </span>
        <button
          type="button"
          onClick={scrollToNext}
          className="flex items-center gap-2 mx-auto sm:mr-0 text-[#F5F0E6] hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
          data-cursor="link"
        >
          <span>SCROLL TO WHO I AM</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D4AF37]" />
        </button>
      </div>
    </section>
  );
}
