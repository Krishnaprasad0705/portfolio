"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { PORTFOLIO_DATA, Certification } from "@/data/portfolio-data";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/3 w-[600px] h-[300px] rounded-full blur-[160px] pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(ellipse, #FF2028 0%, rgba(5,5,5,0) 70%)",
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
            06 / ACCREDITATIONS & CREDENTIALS
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
              INDUSTRY <span className="text-[#FF2028]">CERTIFICATIONS</span>
            </h3>
            <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base max-w-xl">
              Verified platform credentials in Snowflake, Databricks, database design, and cloud analytics.
            </p>
          </div>
          <div className="text-xs font-mono text-[#8A8A8A] flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF2028]" />
            <span>7 VERIFIED CREDENTIALS • CLICK TO ZOOM</span>
          </div>
        </motion.div>

        {/* 3D Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                onClick={() => setActiveCert(cert)}
                className="group relative bg-[#0B0B0B] border border-white/[0.08] hover:border-[#FF2028]/60 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between"
                data-cursor="cert"
              >
                {/* Red Accent Top Glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2028] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                {/* Certificate Image Frame */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#070707] border-b border-white/[0.08]">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

                  {/* Zoom Badge */}
                  <div className="absolute bottom-3 right-3 p-2 bg-[#050505]/90 border border-white/20 text-white group-hover:text-[#FF2028] group-hover:border-[#FF2028] transition-colors backdrop-blur-md opacity-0 group-hover:opacity-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Issuer Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#050505]/90 border border-white/10 backdrop-blur-md font-mono text-[10px] uppercase tracking-wider text-white">
                    {cert.issuer}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h4
                      className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#FF2028] transition-colors mb-2 line-clamp-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {cert.title}
                    </h4>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A] mb-4">
                      <Calendar className="w-3 h-3 text-[#FF2028]" />
                      <span>{cert.issueDate}</span>
                      {cert.expiryDate && <span>• Exp: {cert.expiryDate}</span>}
                    </div>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#050505] border border-white/10 text-[#8A8A8A]"
                      >
                        {s}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#555]">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Enlarged Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0B0B0B] border border-white/15 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#FF2028] uppercase font-bold">
                  {activeCert.issuer} • {activeCert.type}
                </span>
                <h4
                  className="text-xl sm:text-2xl font-black uppercase text-white mt-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {activeCert.title}
                </h4>
                <p className="text-xs font-mono text-[#8A8A8A]">
                  Issued: {activeCert.issueDate}
                  {activeCert.expiryDate && ` — Expiration: ${activeCert.expiryDate}`}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="p-2 border border-white/10 hover:border-[#FF2028] text-white hover:text-[#FF2028] transition-colors"
                aria-label="Close certificate lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate High-Res Visual */}
            <div className="relative aspect-[16/10] w-full bg-[#050505] border border-white/10 overflow-hidden">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Skills & Close */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {activeCert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 bg-[#050505] border border-white/10 text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] hover:text-white"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
