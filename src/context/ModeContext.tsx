"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

export type PortfolioMode = "data" | "beyond";

interface ModeContextType {
  mode: PortfolioMode;
  isTransitioning: boolean;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>("data");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play subtle cinematic audio chime on mode shift
  const playTransitionSound = useCallback(async (targetMode: PortfolioMode) => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        await audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.connect(ctx.destination);

      if (targetMode === "beyond") {
        // Warm gold atmospheric cinematic chime (432Hz harmonic chord)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        osc1.type = "sine";
        osc2.type = "triangle";

        osc1.frequency.setValueAtTime(324, now); // Warm D4
        osc1.frequency.exponentialRampToValueAtTime(432, now + 0.35); // A4 (432Hz harmonic)

        osc2.frequency.setValueAtTime(432, now);
        osc2.frequency.exponentialRampToValueAtTime(648, now + 0.45); // E5

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

        osc1.connect(gain);
        osc2.connect(gain);
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.7);
        osc2.stop(now + 0.7);
      } else {
        // Tech pulse for DATA mode
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(260, now + 0.3);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.07, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch {
      // Audio might be blocked by browser policy
    }
  }, []);

  const setMode = useCallback((targetMode: PortfolioMode) => {
    if (targetMode === mode || isTransitioning) return;
    setIsTransitioning(true);
    playTransitionSound(targetMode);

    // Save mode preference
    try {
      localStorage.setItem("krishna_portfolio_mode", targetMode);
    } catch {}

    setTimeout(() => {
      setModeState(targetMode);
    }, 450);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  }, [mode, isTransitioning, playTransitionSound]);

  const toggleMode = useCallback(() => {
    setMode(mode === "data" ? "beyond" : "data");
  }, [mode, setMode]);

  // Load saved preference if any
  useEffect(() => {
    try {
      const saved = localStorage.getItem("krishna_portfolio_mode") as PortfolioMode | null;
      if (saved === "beyond" || saved === "data") {
        setModeState(saved);
      }
    } catch {}
  }, []);

  return (
    <ModeContext.Provider value={{ mode, isTransitioning, setMode, toggleMode }}>
      {children}
      {/* Global cinematic transition curtain */}
      <div
        className={`fixed inset-0 z-[99999] pointer-events-none transition-opacity duration-500 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            mode === "data"
              ? "radial-gradient(circle at center, rgba(212, 175, 55, 0.25) 0%, rgba(8, 8, 7, 0.95) 70%)"
              : "radial-gradient(circle at center, rgba(255, 32, 40, 0.2) 0%, rgba(5, 5, 5, 0.95) 70%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center font-mono text-xs tracking-[0.3em] uppercase">
            <span
              className={
                mode === "data"
                  ? "text-[#D4AF37] shadow-[0_0_20px_#D4AF37]"
                  : "text-[#FF2028] shadow-[0_0_20px_#FF2028]"
              }
            >
              {mode === "data" ? "TRANSITIONING TO BEYOND DATA..." : "ENTERING DATA MODE..."}
            </span>
          </div>
        </div>
      </div>
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
