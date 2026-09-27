"use client";

import { useMusic } from "@/context/MusicContext";
import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";

export default function MusicControl() {
  const { isPlaying, toggleMusic } = useMusic();
  const { mode } = useMode();
  const isBeyond = mode === "beyond";

  return (
    <button
      type="button"
      onClick={toggleMusic}
      title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      aria-label={isPlaying ? "Mute background music" : "Play background music"}
      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500 text-[11px] font-mono select-none ${
        isPlaying
          ? isBeyond
            ? "bg-[#D4AF37]/10 border-[#D4AF37]/60 text-[#F5F0E6] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            : "bg-[#FF2028]/10 border-[#FF2028]/60 text-white shadow-[0_0_15px_rgba(255,32,40,0.2)]"
          : "bg-white/[0.02] border-white/10 text-[#8A8A8A] hover:border-white/25 hover:text-white"
      }`}
      data-cursor="link"
    >
      {/* Animated Equalizer Bars */}
      <div className="flex items-end gap-[2px] h-3 w-3 justify-center">
        <motion.span
          className={`w-[2px] rounded-full ${
            isPlaying
              ? isBeyond
                ? "bg-[#D4AF37]"
                : "bg-[#FF2028]"
              : "bg-[#8A8A8A]/50 h-1"
          }`}
          animate={
            isPlaying
              ? {
                  height: ["30%", "100%", "40%", "85%", "30%"],
                }
              : { height: "25%" }
          }
          transition={
            isPlaying
              ? {
                  repeat: Infinity,
                  duration: 1.1,
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
        />
        <motion.span
          className={`w-[2px] rounded-full ${
            isPlaying
              ? isBeyond
                ? "bg-[#D4AF37]"
                : "bg-[#FF2028]"
              : "bg-[#8A8A8A]/50 h-1.5"
          }`}
          animate={
            isPlaying
              ? {
                  height: ["70%", "30%", "100%", "50%", "70%"],
                }
              : { height: "45%" }
          }
          transition={
            isPlaying
              ? {
                  repeat: Infinity,
                  duration: 0.9,
                  ease: "easeInOut",
                  delay: 0.15,
                }
              : { duration: 0.3 }
          }
        />
        <motion.span
          className={`w-[2px] rounded-full ${
            isPlaying
              ? isBeyond
                ? "bg-[#D4AF37]"
                : "bg-[#FF2028]"
              : "bg-[#8A8A8A]/50 h-1"
          }`}
          animate={
            isPlaying
              ? {
                  height: ["40%", "90%", "30%", "100%", "40%"],
                }
              : { height: "30%" }
          }
          transition={
            isPlaying
              ? {
                  repeat: Infinity,
                  duration: 1.25,
                  ease: "easeInOut",
                  delay: 0.25,
                }
              : { duration: 0.3 }
          }
        />
      </div>

      {/* State Text Label */}
      <span className="tracking-wider uppercase">
        {isPlaying ? (
          <span className={isBeyond ? "text-[#D4AF37]" : "text-[#FF2028]"}>
            MUSIC ON
          </span>
        ) : (
          <span>MUSIC OFF</span>
        )}
      </span>
    </button>
  );
}
