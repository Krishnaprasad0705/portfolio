"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDown,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  IconGithub,
  IconLinkedin,
  IconLeetCode,
} from "./SocialIcons";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use MotionValues instead of React useState to completely eliminate re-renders and flicker
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 25, mass: 0.2 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax offsets driven directly by smooth spring motion values
  const textX = useTransform(smoothMouseX, [-1, 1], ["12px", "-12px"]);
  const textY = useTransform(smoothMouseY, [-1, 1], ["8px", "-8px"]);

  const portraitX = useTransform(smoothMouseX, [-1, 1], ["-10px", "10px"]);
  const portraitY = useTransform(smoothMouseY, [-1, 1], ["-6px", "6px"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scrollTextY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scrollPortraitY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] md:min-h-screen w-full flex flex-col justify-between overflow-hidden pt-16 sm:pt-20 bg-[#050505] select-none"
    >
      {/* Ambient Red Glow in center behind typography */}
      <div
        className="absolute top-1/4 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[850px] h-[340px] sm:h-[450px] md:h-[550px] rounded-full blur-[100px] md:blur-[180px] pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, #FF2028 0%, rgba(200, 20, 30, 0.35) 40%, rgba(5,5,5,0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Grid Lines in background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* 1. GIANT SOLID RED EDITORIAL TYPOGRAPHY: "KRISHNA" BEHIND PORTRAIT */}
      <motion.div
        style={{
          y: scrollTextY,
          x: textX,
        }}
        className="absolute inset-x-0 top-24 sm:top-28 md:top-1/2 md:-translate-y-1/2 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[25vw] sm:text-[24vw] md:text-[23vw] font-normal uppercase tracking-tight leading-none text-[#FF2028] select-none text-center transform-gpu will-change-transform"
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            letterSpacing: "0.02em",
            textShadow: "0 0 50px rgba(255, 32, 40, 0.4)",
          }}
        >
          KRISHNA
        </motion.h1>
      </motion.div>

      {/* 2. CENTER LAYERED CUTOUT PORTRAIT (SOLID SUIT, ZERO FLICKER) */}
      <motion.div
        style={{
          y: scrollPortraitY,
          opacity: scrollOpacity,
          x: portraitX,
        }}
        className="absolute inset-x-0 top-14 sm:top-12 md:top-10 bottom-auto md:bottom-0 z-10 flex items-start md:items-end justify-center pointer-events-none transform-gpu will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[43vh] sm:h-[50vh] md:h-[84vh] max-h-[820px] w-auto aspect-[785/842] pointer-events-auto"
          data-cursor="image"
        >
          {/* Subtle Soft Red Rim Glow strictly behind portrait */}
          <div
            className="absolute inset-0 -inset-x-6 rounded-full blur-2xl opacity-30 pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(255, 32, 40, 0.5) 0%, transparent 65%)",
            }}
          />

          <Image
            src="/images/profile/hero-cutout.png"
            alt="Krishna Prasad M - Data Engineer & Analyst"
            fill
            priority
            unoptimized
            className="object-contain object-top md:object-bottom filter grayscale contrast-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
            sizes="(max-width: 768px) 90vw, 700px"
          />

          {/* Bottom subtle gradient fade to ground the torso into the dark canvas */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 md:h-24 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* 3. FOREGROUND CONTENT: LOWER-LEFT EDITORIAL BLOCK */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 w-full flex-grow flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 pointer-events-none mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-end">
          {/* Left Block: Stacked Roles + Tagline + Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-5 pointer-events-auto space-y-3 sm:space-y-4"
          >
            {/* Small Monogram / Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-full sm:rounded-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2028] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#F5F5F5] uppercase">
                CSE &apos;27 • NATIONAL ENGINEERING COLLEGE
              </span>
            </div>

            {/* Stacked Roles */}
            <div className="space-y-0.5">
              <h2
                className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Data Engineer
              </h2>
              <h2
                className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Data Analyst
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm md:text-base text-[#B0B0B0] font-light leading-relaxed max-w-md pt-0.5 sm:pt-1">
              Turning raw data into actionable insights and robust pipelines.
            </p>

            {/* Sleek Pill Buttons Side-by-Side */}
            <div className="flex items-center gap-3 pt-2 sm:pt-3">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="flex-1 sm:flex-initial text-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#FF2028] hover:bg-[#E01820] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(255,32,40,0.4)]"
                data-cursor="project"
              >
                View Projects
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="flex-1 sm:flex-initial text-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/50 text-[#F5F5F5] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md transition-all duration-300"
                data-cursor="link"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right Floating Vertical Dock / Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-6 lg:col-span-7 flex justify-start md:justify-end pointer-events-auto pt-1 md:pt-0"
          >
            <div className="flex md:flex-col items-center gap-2 sm:gap-4 p-2 sm:p-3 bg-[#0B0B0B]/90 border border-white/10 backdrop-blur-md rounded-full md:rounded-lg shadow-2xl">
              <a
                href={PORTFOLIO_DATA.profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8A8A8A] hover:text-[#FF2028] transition-colors"
                title="GitHub Profile"
                data-cursor="link"
              >
                <IconGithub className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8A8A8A] hover:text-[#FF2028] transition-colors"
                title="LinkedIn Profile"
                data-cursor="link"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.social.skillrack}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8A8A8A] hover:text-[#FF2028] transition-colors"
                title="Skillrack (1400+ Solved)"
                data-cursor="link"
              >
                <Terminal className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8A8A8A] hover:text-[#FF2028] transition-colors"
                title="LeetCode (50+ Solved)"
                data-cursor="link"
              >
                <IconLeetCode className="w-4 h-4" />
              </a>

              <span className="w-px h-4 md:w-4 md:h-px bg-white/15 mx-0.5 md:my-1" />

              {/* Scroll Trigger */}
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="p-2 text-[#8A8A8A] hover:text-[#FF2028] transition-colors"
                title="Scroll Down"
              >
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
