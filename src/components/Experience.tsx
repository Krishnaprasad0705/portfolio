"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-white/[0.04]"
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
            04 / CAREER TRACK
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h3
              className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              PROFESSIONAL <span className="text-[#FF2028]">EXPERIENCE</span>
            </h3>
            <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base max-w-xl">
              Proven impact across data engineering pipelines and business analytics.
            </p>
          </div>
          <div className="text-xs font-mono text-[#8A8A8A] flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-[#FF2028]" />
            <span>INTERNSHIPS & PRODUCTION WORK</span>
          </div>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-[1px] bg-gradient-to-b from-[#FF2028] via-white/10 to-transparent pointer-events-none" />

          {PORTFOLIO_DATA.experiences.map((exp, idx) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative md:pl-24 group"
              >
                {/* Timeline node icon */}
                <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-[#FF2028] group-hover:scale-110 transition-all duration-300 items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#FF2028]" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 bg-[#0B0B0B] border border-white/[0.08] group-hover:border-[#FF2028]/50 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle red corner glow on hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2028]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-6">
                    <div className="flex items-center gap-4">
                      {/* Company Logo Frame */}
                      <div className="relative w-14 h-14 bg-white/[0.03] border border-white/10 p-2 overflow-hidden shrink-0 flex items-center justify-center">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain p-1 filter contrast-110"
                          sizes="56px"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#FF2028] uppercase font-bold block">
                          {exp.badge}
                        </span>
                        <h4
                          className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {exp.role}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#8A8A8A] font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration Pill */}
                    <div className="flex items-center gap-2 self-start sm:self-center px-3 py-1.5 bg-[#050505] border border-white/10 text-xs font-mono text-[#8A8A8A]">
                      <Calendar className="w-3.5 h-3.5 text-[#FF2028]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((ach) => (
                      <div key={ach} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-[#FF2028] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-[#8A8A8A] group-hover:text-[#F5F5F5] transition-colors leading-relaxed">
                          {ach}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 bg-[#050505] border border-white/10 text-[#8A8A8A]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
