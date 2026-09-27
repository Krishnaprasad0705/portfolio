"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Oversized Outlined Background Typography: "ABOUT" */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <h2
          className="text-[18vw] font-black uppercase text-white/[0.02] tracking-tighter"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)",
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          ABOUT
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[2px] bg-[#FF2028]" />
          <span className="text-xs font-mono tracking-widest text-[#FF2028] uppercase">
            01 / DISCOVERY & INTENT
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 sm:mb-20"
        >
          <h3
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            ABOUT <span className="text-[#FF2028]">ME</span>
          </h3>
          <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base max-w-xl">
            Bridging software engineering precision with analytical clarity.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative group" data-cursor="image">
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FF2028] z-20" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FF2028] z-20" />

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-[#FF2028]/10 blur-2xl group-hover:bg-[#FF2028]/20 transition-colors pointer-events-none" />

              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-[#0B0B0B]">
                <Image
                  src={PORTFOLIO_DATA.profile.images.about}
                  alt="Krishna Prasad M in workspace"
                  fill
                  className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#050505]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#FF2028]" />
                    <span className="text-[11px] font-mono text-[#F5F5F5] uppercase tracking-wider">
                      KRISHNA PRASAD M
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8A8A8A]">CSE &apos;27</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Exploring Chips, and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#8A8A8A] font-light leading-relaxed">
              <p className="text-white font-medium">
                I’m <span className="text-white font-semibold">Krishna Prasad</span>, a final-year Computer Science Engineering student focused on Data Engineering and Data Analytics.
              </p>
              <p>
                I enjoy working with raw datasets, transforming them through structured pipelines, and presenting meaningful insights through dashboards and visualization.
              </p>
              <p>
                My interests include ETL workflows, data platforms, analytics engineering, business intelligence and cloud-based data processing.
              </p>
            </div>

            {/* Currently Exploring Section */}
            <div className="pt-2">
              <p className="text-xs font-mono tracking-widest uppercase text-[#FF2028] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                CURRENTLY EXPLORING
              </p>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.profile.currentlyExploring.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 bg-[#0B0B0B] border border-white/10 text-[#F5F5F5] hover:border-[#FF2028]/60 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Count-up Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {PORTFOLIO_DATA.profile.stats.map((stat, idx) => (
                <a
                  key={stat.label}
                  href={stat.link}
                  target={stat.link.startsWith("http") ? "_blank" : undefined}
                  rel={stat.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-4 bg-[#0B0B0B]/80 border border-white/[0.08] hover:border-[#FF2028]/50 hover:bg-[#121212] transition-all group relative overflow-hidden"
                  data-cursor="link"
                >
                  <div className="flex items-center justify-between text-[#8A8A8A] group-hover:text-[#FF2028] transition-colors mb-1">
                    <span className="text-[10px] font-mono">0{idx + 1}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div
                    className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF2028] transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] text-[#8A8A8A] group-hover:text-[#F5F5F5] transition-colors font-medium mt-1 leading-snug">
                    {stat.label}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
