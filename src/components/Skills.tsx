"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  Boxes,
  Code2,
  Cloud,
  Wrench,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "01": <BarChart3 className="w-5 h-5 text-[#FF2028]" />,
  "02": <Boxes className="w-5 h-5 text-[#FF2028]" />,
  "03": <Code2 className="w-5 h-5 text-[#FF2028]" />,
  "04": <Cloud className="w-5 h-5 text-[#FF2028]" />,
  "05": <Wrench className="w-5 h-5 text-[#FF2028]" />,
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, #FF2028 0%, rgba(5,5,5,0) 70%)",
        }}
        aria-hidden="true"
      />

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
            02 / CORE CAPABILITIES
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
              TECHNICAL <span className="text-[#FF2028]">SKILLS</span>
            </h3>
            <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base max-w-xl">
              Engineered for data fidelity, cloud scale, and strategic visual intelligence.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2028]" />
            <span>5 SPECIALIZED DOMAINS</span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => {
            const isFeatured = idx === 1; // Data Engineering featured card
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                whileHover={{ y: -6 }}
                className={`relative group p-7 sm:p-8 bg-[#0B0B0B] border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 border-[#FF2028]/40 shadow-[0_0_35px_rgba(255,32,40,0.12)]"
                    : "border-white/[0.08] hover:border-[#FF2028]/50"
                }`}
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF2028]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Animated top border line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2028] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/[0.03] border border-white/10 group-hover:border-[#FF2028]/40 transition-colors">
                      {CATEGORY_ICONS[skillGroup.index]}
                    </div>
                    <span className="font-mono text-sm tracking-widest text-[#8A8A8A] group-hover:text-[#FF2028] transition-colors">
                      {skillGroup.index}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4
                    className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#F5F5F5] transition-colors mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {skillGroup.category}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed mb-6">
                    {skillGroup.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono tracking-wider px-3 py-1.5 bg-[#050505] border border-white/10 text-[#F5F5F5] group-hover:border-white/20 transition-all duration-300 hover:!border-[#FF2028] hover:!text-white hover:shadow-[0_0_12px_rgba(255,32,40,0.3)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
