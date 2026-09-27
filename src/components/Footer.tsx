"use client";

import { ArrowUp, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { IconGithub, IconLinkedin, IconInstagram } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020202] border-t border-white/10 py-12 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Name and Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF2028] shadow-[0_0_8px_#FF2028]" />
            <span
              className="text-lg font-black uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              KRISHNA PRASAD M
            </span>
          </div>
          <p className="text-xs font-mono text-[#8A8A8A] mt-1 tracking-widest uppercase">
            DATA ENGINEER • DATA ANALYST
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={PORTFOLIO_DATA.profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] hover:text-[#FF2028] transition-colors p-2"
            title="GitHub"
            data-cursor="link"
          >
            <IconGithub className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] hover:text-[#FF2028] transition-colors p-2"
            title="LinkedIn"
            data-cursor="link"
          >
            <IconLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.social.email}`}
            className="text-[#8A8A8A] hover:text-[#FF2028] transition-colors p-2"
            title="Email"
            data-cursor="link"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] hover:text-[#FF2028] transition-colors p-2"
            title="Instagram"
            data-cursor="link"
          >
            <IconInstagram className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6 text-xs font-mono text-[#8A8A8A]">
          <span>© 2026 Krishna Prasad</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-[#FF2028] transition-colors border border-white/10 hover:border-[#FF2028] px-3 py-1.5 bg-white/[0.02]"
            data-cursor="link"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF2028]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
