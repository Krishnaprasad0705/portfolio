"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass, ArrowUpRight } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";
import MusicControl from "@/components/MusicControl";

const BEYOND_NAV_LINKS = [
  { name: "Explore", href: "#chapter-explorer" },
  { name: "Art", href: "#chapter-artist" },
  { name: "Athletics", href: "#chapter-athlete" },
  { name: "Photography", href: "#chapter-photographer" },
  { name: "Creative", href: "#chapter-creative" },
  { name: "Philanthropy", href: "#chapter-philanthropist" },
  { name: "Collage", href: "#chapter-collage" },
];

export default function BeyondNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeChapter, setActiveChapter] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = BEYOND_NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveChapter(section);
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
          ? "bg-[#080807]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Title */}
        <a
          href="#beyond-hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase transition-colors shrink-0"
          data-cursor="link"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
          <span className="text-[#F5F0E6] group-hover:text-[#F4D06F] transition-colors">
            BEYOND <span className="text-[#D4AF37]">DATA</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {BEYOND_NAV_LINKS.map((link) => {
            const isActive = activeChapter === link.href.substring(1);
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
                    ? "text-[#F4D06F] font-bold"
                    : "text-[#A8A08F] hover:text-[#F5F0E6]"
                }`}
                data-cursor="link"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeBeyondNavDot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Mode Toggle + Music Control */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ModeToggle />
          <MusicControl />
        </div>

        {/* Mobile / Tablet Header Bar */}
        <div className="flex xl:hidden items-center gap-2 sm:gap-3">
          <div className="scale-90 sm:scale-100">
            <ModeToggle compact />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F0E6] hover:text-[#D4AF37] border border-[#D4AF37]/20 rounded-md transition-colors"
            aria-label="Toggle Beyond Data menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[60px] bg-[#080807]/98 backdrop-blur-2xl border-b border-[#D4AF37]/20 px-8 py-8 flex flex-col gap-6 xl:hidden shadow-2xl z-50 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
                SOUND &amp; CHAPTERS
              </span>
              <MusicControl />
            </div>

            <nav className="flex flex-col gap-4">
              {BEYOND_NAV_LINKS.map((link, idx) => (
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
                  className="flex items-center justify-between text-base font-mono font-medium tracking-widest uppercase text-[#F5F0E6] hover:text-[#D4AF37] border-b border-white/5 pb-2.5"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#A8A08F] font-mono">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
