"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMode } from "@/context/ModeContext";

export default function CustomCursor() {
  const { mode } = useMode();
  const isBeyond = mode === "beyond";

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "project" | "link" | "image">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for interpolation
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check data attributes or element tags for hover states
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "project") {
          setCursorVariant("project");
          setCursorText(isBeyond ? "VIEW\nEXHIBIT" : "VIEW\nPROJECT");
          return;
        } else if (type === "link") {
          setCursorVariant("link");
          setCursorText("OPEN");
          return;
        } else if (type === "image") {
          setCursorVariant("image");
          setCursorText(isBeyond ? "DISCOVER" : "EXPLORE");
          return;
        } else if (type === "cert") {
          setCursorVariant("image");
          setCursorText("VIEW");
          return;
        }
      }

      // Check generic interactive elements
      if (target.closest("button, a, input, textarea, [role='button']")) {
        setCursorVariant("hover");
        setCursorText("");
        return;
      }

      setCursorVariant("default");
      setCursorText("");
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, isBeyond, mouseX, mouseY]);

  if (isTouch || !isVisible) return null;

  // Colors dynamically adjust according to mode:
  // DATA mode: Red (#FF2028)
  // BEYOND DATA mode: Warm Gold (#D4AF37)
  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: isBeyond ? "#D4AF37" : "#FF2028",
      borderColor: isBeyond ? "rgba(212, 175, 55, 0.4)" : "rgba(255, 32, 40, 0.4)",
      borderWidth: 0,
      boxShadow: isBeyond ? "0 0 14px rgba(212, 175, 55, 0.9)" : "0 0 12px rgba(255, 32, 40, 0.8)",
    },
    hover: {
      width: 38,
      height: 38,
      backgroundColor: isBeyond ? "rgba(212, 175, 55, 0.15)" : "rgba(255, 32, 40, 0.15)",
      borderColor: isBeyond ? "rgba(212, 175, 55, 0.9)" : "rgba(255, 32, 40, 0.8)",
      borderWidth: 1.5,
      boxShadow: isBeyond ? "0 0 22px rgba(212, 175, 55, 0.45)" : "0 0 20px rgba(255, 32, 40, 0.4)",
    },
    project: {
      width: 88,
      height: 88,
      backgroundColor: isBeyond ? "rgba(212, 175, 55, 0.95)" : "rgba(255, 32, 40, 0.95)",
      borderColor: isBeyond ? "#F4D06F" : "#FF2028",
      borderWidth: 1,
      boxShadow: isBeyond ? "0 0 35px rgba(212, 175, 55, 0.6)" : "0 0 35px rgba(255, 32, 40, 0.6)",
    },
    link: {
      width: 64,
      height: 64,
      backgroundColor: isBeyond ? "rgba(245, 240, 230, 0.95)" : "rgba(255, 255, 255, 0.95)",
      borderColor: isBeyond ? "#D4AF37" : "#ffffff",
      borderWidth: 1,
      boxShadow: isBeyond ? "0 0 25px rgba(212, 175, 55, 0.5)" : "0 0 25px rgba(255, 255, 255, 0.5)",
    },
    image: {
      width: 76,
      height: 76,
      backgroundColor: isBeyond ? "rgba(17, 16, 13, 0.92)" : "rgba(15, 15, 15, 0.9)",
      borderColor: isBeyond ? "rgba(212, 175, 55, 0.9)" : "rgba(255, 32, 40, 0.8)",
      borderWidth: 1.5,
      boxShadow: isBeyond ? "0 0 30px rgba(212, 175, 55, 0.4)" : "0 0 30px rgba(255, 32, 40, 0.4)",
    },
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] rounded-full flex items-center justify-center text-center select-none -translate-x-1/2 -translate-y-1/2"
      style={{
        left: smoothX,
        top: smoothY,
      }}
      animate={cursorVariant}
      variants={variants}
      transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.2 }}
    >
      {cursorText && (
        <span
          className={`text-[9px] font-bold tracking-widest uppercase leading-tight whitespace-pre-line ${
            cursorVariant === "link"
              ? "text-black"
              : isBeyond && cursorVariant === "project"
              ? "text-[#080807]"
              : isBeyond
              ? "text-[#F5F0E6]"
              : "text-white"
          }`}
        >
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
