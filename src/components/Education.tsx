"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { education } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#060606] overflow-hidden border-t border-white/[0.04]"
    >
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
            05 / ACADEMIC FOUNDATION
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <h3
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            FORMAL <span className="text-[#FF2028]">EDUCATION</span>
          </h3>
          <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base max-w-xl">
            Computer science fundamentals, distributed systems, and algorithmic problem solving.
          </p>
        </motion.div>

        {/* Main Education Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-8 sm:p-12 bg-[#0B0B0B] border border-white/[0.08] hover:border-[#FF2028]/40 transition-colors shadow-2xl overflow-hidden"
        >
          {/* Subtle Red Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF2028] via-[#FF4D53] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Degree & Institution */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-xs font-mono text-[#FF2028]">
                <GraduationCap className="w-4 h-4" />
                <span>FINAL YEAR • 2023 – 2027</span>
              </div>

              <h4
                className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {education.degree}
              </h4>

              <p className="text-lg text-[#F5F5F5] font-medium flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8A8A8A]" />
                {education.institution}
              </p>

              {/* Progress Indicator */}
              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#8A8A8A]">
                  <span>DEGREE PROGRESS</span>
                  <span className="text-[#FF2028] font-bold">YEAR 4 / FINAL YEAR</span>
                </div>
                <div className="h-1.5 w-full bg-[#1A1A1A] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "90%" } : {}}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FF2028] to-[#FF4D53]"
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Academic Honors & Key Points */}
            <div className="lg:col-span-6 bg-[#070707] p-6 border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF2028] uppercase font-bold mb-2">
                <Award className="w-4 h-4" />
                <span>TECHNICAL EXCELLENCE & HONORS</span>
              </div>

              {education.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#FF2028] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
