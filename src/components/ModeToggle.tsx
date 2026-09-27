"use client";

import { useMode } from "@/context/ModeContext";
import { motion } from "framer-motion";
import { Sparkles, Database } from "lucide-react";

interface ModeToggleProps {
  compact?: boolean;
}

export default function ModeToggle({ compact = false }: ModeToggleProps) {
  const { mode, toggleMode, isTransitioning } = useMode();
  const isBeyond = mode === "beyond";

  return (
    <button
      type="button"
      onClick={toggleMode}
      disabled={isTransitioning}
      title={isBeyond ? "Switch to DATA Mode" : "Switch to BEYOND DATA Mode"}
      aria-label={`Switch to ${isBeyond ? "DATA" : "BEYOND DATA"} mode`}
      className={`group relative inline-flex items-center p-1 rounded-full border transition-all duration-500 select-none focus:outline-none ${
        isBeyond
          ? "bg-[#11100D] border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]"
          : "bg-[#0A0A0A] border-white/15 shadow-[0_0_15px_rgba(255,32,40,0.15)] hover:border-[#FF2028]/60"
      }`}
      data-cursor="link"
    >
      {/* DATA Option */}
      <span
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-400 ${
          !isBeyond ? "text-white" : "text-[#A8A08F]/50 group-hover:text-[#A8A08F]"
        }`}
      >
        <Database className={`w-2.5 h-2.5 ${!isBeyond ? "text-[#FF2028]" : "opacity-40"}`} />
        <span>DATA</span>
      </span>

      {/* Sliding Pill Node */}
      <motion.span
        className={`relative z-10 flex items-center justify-center w-5 h-5 rounded-full transition-all duration-400 ${
          isBeyond
            ? "bg-gradient-to-tr from-[#D4AF37] to-[#F4D06F] text-[#080807] shadow-[0_0_10px_#D4AF37]"
            : "bg-[#FF2028] text-white shadow-[0_0_10px_#FF2028]"
        }`}
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 35,
        }}
      >
        {isBeyond ? (
          <Sparkles className="w-2.5 h-2.5 text-[#080807]" />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-white block" />
        )}
      </motion.span>

      {/* BEYOND DATA Option */}
      <span
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors duration-400 ${
          isBeyond ? "text-[#F5F0E6]" : "text-[#8A8A8A]/60 group-hover:text-white"
        }`}
      >
        <Sparkles className={`w-2.5 h-2.5 ${isBeyond ? "text-[#D4AF37]" : "opacity-40"}`} />
        <span>BEYOND DATA</span>
      </span>
    </button>
  );
}
