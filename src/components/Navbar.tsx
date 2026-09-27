"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import ModeToggle from "@/components/ModeToggle";
import MusicControl from "@/components/MusicControl";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Pipeline", href: "#pipeline" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracking
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase transition-colors shrink-0"
          data-cursor="link"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2028] shadow-[0_0_8px_#FF2028]" />
          <span className="text-white group-hover:text-[#FF2028] transition-colors">
            KRISHNA <span className="text-[#FF2028]">PRASAD</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-[11px] font-mono tracking-widest uppercase transition-colors py-1 ${
                  isActive
                    ? "text-[#FF2028] font-bold"
                    : "text-[#8A8A8A] hover:text-white"
                }`}
                data-cursor="link"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeDataNavDot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF2028] shadow-[0_0_6px_#FF2028]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Mode Toggle + Music Control + Resume CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ModeToggle />
          <MusicControl />

          <a
            href={PORTFOLIO_DATA.profile.social.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#FF2028] hover:text-[#FF2028] text-white text-[11px] font-mono tracking-wider transition-all"
            data-cursor="link"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3 h-3 text-[#8A8A8A]" />
          </a>
        </div>

        {/* Mobile / Tablet Header Bar */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          <div className="scale-90 sm:scale-100">
            <ModeToggle compact />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#FF2028] border border-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Elegant Mobile Full-Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[60px] bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 px-8 py-8 flex flex-col gap-6 lg:hidden shadow-2xl z-50 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            {/* Top Quick Controls in Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono tracking-widest text-[#8A8A8A] uppercase">
                SOUND &amp; MODE
              </span>
              <MusicControl />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between text-base font-mono font-medium tracking-widest uppercase text-[#F5F5F5] hover:text-[#FF2028] border-b border-white/5 pb-2.5"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#8A8A8A] font-mono">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>

            {/* Resume & Social Links in Mobile Menu */}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={PORTFOLIO_DATA.profile.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded bg-[#FF2028] text-white text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(255,32,40,0.3)]"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono text-[#8A8A8A]">
                <a
                  href={PORTFOLIO_DATA.profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GITHUB
                </a>
                <span>•</span>
                <a
                  href={PORTFOLIO_DATA.profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LINKEDIN
                </a>
                <span>•</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.social.email}`}
                  className="hover:text-white"
                >
                  EMAIL
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
