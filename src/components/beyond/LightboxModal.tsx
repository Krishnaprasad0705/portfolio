"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface LightboxImage {
  src: string;
  title?: string;
  caption?: string;
  category?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function LightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#080807]/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Ambient Top Bar */}
        <div
          className="absolute top-0 inset-x-0 p-6 sm:p-8 flex items-center justify-between z-20 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
            <span className="text-xs font-mono tracking-widest text-[#F5F0E6] uppercase">
              {currentImage.category || "EXHIBITION ARCHIVE"}
            </span>
            <span className="text-[#A8A08F]/40">•</span>
            <span className="text-xs font-mono text-[#D4AF37]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#F5F0E6] transition-all text-xs font-mono"
            aria-label="Close fullscreen modal"
            data-cursor="link"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full border border-white/10 bg-black/60 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all backdrop-blur-md"
            aria-label="Previous image"
            data-cursor="link"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full border border-white/10 bg-black/60 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all backdrop-blur-md"
            aria-label="Next image"
            data-cursor="link"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Central Large Photo */}
        <div
          className="relative max-w-6xl max-h-[82vh] w-full mx-auto px-6 sm:px-12 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative flex items-center justify-center overflow-hidden border border-[#D4AF37]/20 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[75vh]"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.title || "Exhibition Asset"}
              width={1672}
              height={941}
              priority
              className="max-h-[72vh] w-auto h-auto object-contain select-none"
            />
          </motion.div>

          {/* Caption & Metadata */}
          {(currentImage.title || currentImage.caption) && (
            <motion.div
              key={`caption-${currentImage.src}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-center max-w-xl"
            >
              {currentImage.title && (
                <h4 className="text-sm sm:text-base font-semibold text-[#F5F0E6] tracking-wide">
                  {currentImage.title}
                </h4>
              )}
              {currentImage.caption && (
                <p className="text-xs text-[#A8A08F] mt-1 font-mono tracking-wider">
                  {currentImage.caption}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
