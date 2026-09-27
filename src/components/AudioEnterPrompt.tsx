"use client";

import { useState, useEffect } from "react";
import { useMusic } from "@/context/MusicContext";
import { useMode } from "@/context/ModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Sparkles, X } from "lucide-react";

export default function AudioEnterPrompt() {
  const { hasUserInteracted, enableAudioOnFirstInteraction, toggleMusic } = useMusic();
  const { mode } = useMode();
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Only show if user has never interacted in this session
    try {
      const dismissed = sessionStorage.getItem("krishna_audio_prompt_dismissed");
      if (!dismissed && !hasUserInteracted) {
        const timer = setTimeout(() => {
          setShowPrompt(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, [hasUserInteracted]);

  const handleEnterWithAudio = () => {
    enableAudioOnFirstInteraction();
    setShowPrompt(false);
    try {
      sessionStorage.setItem("krishna_audio_prompt_dismissed", "true");
    } catch {}
  };

  const handleMuteDismiss = () => {
    setShowPrompt(false);
    try {
      sessionStorage.setItem("krishna_audio_prompt_dismissed", "true");
    } catch {}
  };

  if (!showPrompt || hasUserInteracted) return null;

  const isBeyond = mode === "beyond";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50 max-w-sm pointer-events-auto"
      >
        <div
          className={`p-4 rounded-lg border backdrop-blur-xl shadow-2xl transition-colors duration-500 ${
            isBeyond
              ? "bg-[#080807]/95 border-[#D4AF37]/35 shadow-[0_10px_35px_rgba(212,175,55,0.15)]"
              : "bg-[#0A0A0A]/95 border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full animate-pulse ${
                  isBeyond ? "bg-[#D4AF37]" : "bg-[#FF2028]"
                }`}
              />
              <span className="text-[10px] font-mono tracking-widest text-[#8A8A8A] uppercase">
                CINEMATIC SOUNDSCAPE
              </span>
            </div>
            <button
              type="button"
              onClick={handleMuteDismiss}
              className="text-[#8A8A8A] hover:text-white transition-colors"
              aria-label="Dismiss prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#F5F5F5] font-sans mt-2 leading-relaxed">
            Experience the portfolio with atmospheric background music.
          </p>

          <div className="mt-3.5 flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleEnterWithAudio}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded text-[11px] font-mono font-bold tracking-wider uppercase transition-all ${
                isBeyond
                  ? "bg-[#D4AF37] text-[#080807] hover:bg-[#F4D06F] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "bg-[#FF2028] text-white hover:bg-[#FF3840] shadow-[0_0_15px_rgba(255,32,40,0.4)]"
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>ENABLE AUDIO</span>
            </button>

            <button
              type="button"
              onClick={handleMuteDismiss}
              className="px-3 py-2 rounded border border-white/10 hover:border-white/20 text-[11px] font-mono text-[#8A8A8A] hover:text-white transition-all uppercase"
            >
              MUTE
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
