"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { useMode } from "@/context/ModeContext";

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  hasUserInteracted: boolean;
  enableAudioOnFirstInteraction: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Audio file paths in public/audio/
const AUDIO_PATHS = {
  data: "/audio/data.mp3",
  beyond: "/audio/beyond.mp3",
};

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const { mode } = useMode();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);

  // Audio HTML elements
  const dataAudioRef = useRef<HTMLAudioElement | null>(null);
  const beyondAudioRef = useRef<HTMLAudioElement | null>(null);

  // Target volume for subtle cinematic background (1.8s crossfade)
  const TARGET_VOLUME = 0.35;
  const CROSSFADE_STEPS = 36; // 36 steps * 50ms = 1800ms
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fallback Web Audio Ambient Synthesizer if files ever fail to load
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthGainRef = useRef<GainNode | null>(null);
  const synthOsc1Ref = useRef<OscillatorNode | null>(null);
  const synthOsc2Ref = useRef<OscillatorNode | null>(null);

  const startFallbackSynth = useCallback((currentMode: "data" | "beyond") => {
    try {
      if (!synthCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) synthCtxRef.current = new AudioCtx();
      }
      const ctx = synthCtxRef.current;
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      if (!synthGainRef.current) {
        synthGainRef.current = ctx.createGain();
        synthGainRef.current.connect(ctx.destination);
      }

      synthGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      synthGainRef.current.gain.setValueAtTime(synthGainRef.current.gain.value, ctx.currentTime);
      synthGainRef.current.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.8);

      if (!synthOsc1Ref.current) {
        synthOsc1Ref.current = ctx.createOscillator();
        synthOsc2Ref.current = ctx.createOscillator();
        synthOsc1Ref.current.connect(synthGainRef.current);
        synthOsc2Ref.current.connect(synthGainRef.current);
        synthOsc1Ref.current.start();
        synthOsc2Ref.current.start();
      }

      if (synthOsc1Ref.current && synthOsc2Ref.current) {
        if (currentMode === "beyond") {
          synthOsc1Ref.current.type = "sine";
          synthOsc2Ref.current.type = "triangle";
          synthOsc1Ref.current.frequency.setTargetAtTime(216, ctx.currentTime, 0.9);
          synthOsc2Ref.current.frequency.setTargetAtTime(324, ctx.currentTime, 0.9);
        } else {
          synthOsc1Ref.current.type = "sine";
          synthOsc2Ref.current.type = "sine";
          synthOsc1Ref.current.frequency.setTargetAtTime(110, ctx.currentTime, 0.9);
          synthOsc2Ref.current.frequency.setTargetAtTime(164.81, ctx.currentTime, 0.9);
        }
      }
    } catch {}
  }, []);

  const stopFallbackSynth = useCallback(() => {
    if (synthGainRef.current && synthCtxRef.current) {
      const ctx = synthCtxRef.current;
      synthGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      synthGainRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    }
  }, []);

  // Initialize audio elements with user's uploaded tracks
  useEffect(() => {
    const dataAudio = new Audio(AUDIO_PATHS.data);
    dataAudio.loop = true;
    dataAudio.volume = 0;
    dataAudio.preload = "auto";
    dataAudioRef.current = dataAudio;

    const beyondAudio = new Audio(AUDIO_PATHS.beyond);
    beyondAudio.loop = true;
    beyondAudio.volume = 0;
    beyondAudio.preload = "auto";
    beyondAudioRef.current = beyondAudio;

    // Check saved session preferences
    try {
      const savedPlaying = sessionStorage.getItem("krishna_music_playing");
      const userInteracted = sessionStorage.getItem("krishna_user_interacted");
      if (userInteracted === "true") {
        setHasUserInteracted(true);
      }
      if (savedPlaying === "true") {
        setIsPlaying(true);
      }
    } catch {}

    return () => {
      dataAudio.pause();
      beyondAudio.pause();
      stopFallbackSynth();
      if (synthCtxRef.current && synthCtxRef.current.state !== "closed") {
        synthCtxRef.current.close().catch(() => {});
      }
    };
  }, [stopFallbackSynth]);

  // Smooth 1.8-second Cross-Fade Engine between DATA and BEYOND DATA
  const crossFadeTo = useCallback(
    (targetMode: "data" | "beyond", shouldPlay: boolean) => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      const activeAudio = targetMode === "data" ? dataAudioRef.current : beyondAudioRef.current;
      const inactiveAudio = targetMode === "data" ? beyondAudioRef.current : dataAudioRef.current;

      if (!shouldPlay) {
        // Fade out active track smoothly
        let step = 0;
        const totalSteps = 24;
        fadeIntervalRef.current = setInterval(() => {
          step++;
          const factor = Math.max(0, 1 - step / totalSteps);
          if (activeAudio) activeAudio.volume = TARGET_VOLUME * factor;
          if (inactiveAudio) inactiveAudio.volume = TARGET_VOLUME * factor;

          if (step >= totalSteps) {
            if (activeAudio) {
              activeAudio.pause();
              activeAudio.volume = 0;
            }
            if (inactiveAudio) {
              inactiveAudio.pause();
              inactiveAudio.volume = 0;
            }
            stopFallbackSynth();
            if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          }
        }, 50);
        return;
      }

      stopFallbackSynth();

      // Start active track (preserves current position if already playing or paused)
      if (activeAudio && activeAudio.paused) {
        activeAudio.volume = 0;
        const playPromise = activeAudio.play();
        if (playPromise) {
          playPromise.catch(() => {
            startFallbackSynth(targetMode);
          });
        }
      }

      // Execute smooth 1.8s crossfade
      let step = 0;
      const initialInactiveVol = inactiveAudio?.volume || 0;

      fadeIntervalRef.current = setInterval(() => {
        step++;
        const progress = Math.min(1, step / CROSSFADE_STEPS);

        // Fade down outgoing
        if (inactiveAudio) {
          const newInactiveVol = Math.max(0, initialInactiveVol * (1 - progress));
          inactiveAudio.volume = newInactiveVol;
          if (progress >= 1) {
            inactiveAudio.pause();
            inactiveAudio.volume = 0;
          }
        }

        // Fade up incoming
        if (activeAudio) {
          activeAudio.volume = Math.min(TARGET_VOLUME, TARGET_VOLUME * progress);
        }

        if (progress >= 1) {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        }
      }, 50);
    },
    [startFallbackSynth, stopFallbackSynth]
  );

  // Trigger crossfade only on actual mode change or play/pause toggle
  useEffect(() => {
    if (isPlaying && hasUserInteracted) {
      crossFadeTo(mode, true);
    } else {
      crossFadeTo(mode, false);
    }
  }, [mode, isPlaying, hasUserInteracted, crossFadeTo]);

  // Direct synchronous play inside user click event for 100% browser autoplay approval
  const enableAudioOnFirstInteraction = useCallback(() => {
    setHasUserInteracted(true);
    setIsPlaying(true);
    try {
      sessionStorage.setItem("krishna_music_playing", "true");
      sessionStorage.setItem("krishna_user_interacted", "true");
    } catch {}

    const targetAudio = mode === "data" ? dataAudioRef.current : beyondAudioRef.current;
    if (targetAudio) {
      targetAudio.volume = TARGET_VOLUME;
      targetAudio.play().catch(() => {
        startFallbackSynth(mode);
      });
    }
  }, [mode, startFallbackSynth]);

  const toggleMusic = useCallback(() => {
    setHasUserInteracted(true);
    setIsPlaying((prev) => {
      const next = !prev;
      try {
        sessionStorage.setItem("krishna_music_playing", String(next));
        sessionStorage.setItem("krishna_user_interacted", "true");
      } catch {}

      if (next) {
        const targetAudio = mode === "data" ? dataAudioRef.current : beyondAudioRef.current;
        if (targetAudio) {
          targetAudio.volume = TARGET_VOLUME;
          targetAudio.play().catch(() => {
            startFallbackSynth(mode);
          });
        }
      } else {
        if (dataAudioRef.current) dataAudioRef.current.pause();
        if (beyondAudioRef.current) beyondAudioRef.current.pause();
        stopFallbackSynth();
      }

      return next;
    });
  }, [mode, startFallbackSynth, stopFallbackSynth]);

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        toggleMusic,
        hasUserInteracted,
        enableAudioOnFirstInteraction,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
