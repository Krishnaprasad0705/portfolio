"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/context/MusicContext";
import { useMode } from "@/context/ModeContext";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function EnterExperienceOverlay() {
  const { enableAudioOnFirstInteraction, hasUserInteracted } = useMusic();
  const { mode } = useMode();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const hasEntered = sessionStorage.getItem("krishna_has_entered");
      if (!hasEntered) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  const handleEnterWithSound = () => {
    try {
      sessionStorage.setItem("krishna_has_entered", "true");
    } catch {}
    enableAudioOnFirstInteraction();
    setIsOpen(false);
  };

  const handleEnterSilently = () => {
    try {
      sessionStorage.setItem("krishna_has_entered", "true");
      sessionStorage.setItem("krishna_music_playing", "false");
      sessionStorage.setItem("krishna_user_interacted", "true");
    } catch {}
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  const isBeyond = mode === "beyond";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#050505] text-[#F5F5F5] select-none p-6"
      >
        {/* Ambient background light */}
        <div
          className={`absolute w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700 ${
            isBeyond ? "bg-[#D4AF37]/10" : "bg-[#FF2028]/10"
          }`}
        />

        <div className="relative z-10 max-w-md w-full text-center space-y-8">
          {/* Subtle Monogram / Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isBeyond ? "bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" : "bg-[#FF2028] shadow-[0_0_10px_#FF2028]"
              }`}
            />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8A8A8A]">
              KRISHNA PRASAD M
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              PORTFOLIO <br />
              <span
                className={`text-transparent bg-clip-text ${
                  isBeyond
                    ? "bg-gradient-to-r from-[#D4AF37] via-[#F4D06F] to-[#F5F0E6]"
                    : "bg-gradient-to-r from-[#FF2028] via-white to-[#F5F5F5]"
                }`}
              >
                EXPERIENCE
              </span>
            </h1>
            <p className="text-xs sm:text-sm font-mono tracking-widest text-[#8A8A8A] uppercase pt-1">
              DATA ENGINEER &amp; CREATIVE EXPLORER
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-4 flex flex-col items-center gap-4"
          >
            <button
              type="button"
              onClick={handleEnterWithSound}
              className={`group w-full max-w-xs flex items-center justify-center gap-3 py-3.5 px-6 rounded-full border text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl ${
                isBeyond
                  ? "bg-[#D4AF37] border-[#D4AF37] text-[#080807] hover:bg-[#F4D06F] shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  : "bg-[#FF2028] border-[#FF2028] text-white hover:bg-[#FF3840] shadow-[0_0_30px_rgba(255,32,40,0.4)]"
              }`}
            >
              <Volume2 className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>ENTER EXPERIENCE</span>
            </button>

            <button
              type="button"
              onClick={handleEnterSilently}
              className="text-[11px] font-mono tracking-wider text-[#8A8A8A] hover:text-white transition-colors uppercase py-1"
            >
              Enter Silently (Muted)
            </button>
          </motion.div>

          {/* Minimal Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[10px] font-mono tracking-widest text-[#8A8A8A]/50 uppercase"
          >
            AUDIO CAN BE TOGGLED AT ANY TIME IN THE NAVIGATION BAR
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
