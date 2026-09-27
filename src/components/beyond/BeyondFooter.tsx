"use client";

import { useMode } from "@/context/ModeContext";
import { ArrowUp, Sparkles, Database } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function BeyondFooter() {
  const { setMode } = useMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 px-6 sm:px-12 bg-[#080807] border-t border-[#D4AF37]/20 text-[#A8A08F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
              <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
                EXHIBITION CURATION
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#F5F0E6] tracking-tight">
              KRISHNA PRASAD M
            </h3>
            <p className="text-xs text-[#A8A08F] font-mono mt-1">
              THE PERSON BEHIND THE PIPELINES
            </p>
          </div>

          {/* Quick CTA to return to DATA mode */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setMode("data")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:border-[#FF2028] hover:bg-[#FF2028]/10 text-white transition-all text-xs font-mono font-bold"
              data-cursor="link"
            >
              <Database className="w-3.5 h-3.5 text-[#FF2028]" />
              <span>RETURN TO DATA MODE</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
              aria-label="Back to top"
              data-cursor="link"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chapter Links */}
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-6 text-[#A8A08F]">
            <a href="#chapter-explorer" className="hover:text-[#D4AF37] transition-colors">
              01 EXPLORE
            </a>
            <a href="#chapter-artist" className="hover:text-[#D4AF37] transition-colors">
              02 ART
            </a>
            <a href="#chapter-athlete" className="hover:text-[#D4AF37] transition-colors">
              03 ATHLETICS
            </a>
            <a href="#chapter-photographer" className="hover:text-[#D4AF37] transition-colors">
              04 PHOTOGRAPHY
            </a>
            <a href="#chapter-creative" className="hover:text-[#D4AF37] transition-colors">
              05 CREATIVE
            </a>
            <a href="#chapter-philanthropist" className="hover:text-[#D4AF37] transition-colors">
              06 PHILANTHROPY
            </a>
            <a href="#chapter-collage" className="hover:text-[#D4AF37] transition-colors">
              07 COLLAGE
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PORTFOLIO_DATA.profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              GITHUB
            </a>
            <span>•</span>
            <a
              href={PORTFOLIO_DATA.profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              LINKEDIN
            </a>
            <span>•</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.social.email}`}
              className="hover:text-[#D4AF37] transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#A8A08F]/60">
          <span>&copy; {new Date().getFullYear()} KRISHNA PRASAD M • BEYOND DATA</span>
          <span>CURATED PERSONAL ARCHIVE • DESIGNED WITH CRAFT</span>
        </div>
      </div>
    </footer>
  );
}
