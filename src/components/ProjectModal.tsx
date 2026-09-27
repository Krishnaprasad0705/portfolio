"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Layers,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Project } from "@/data/portfolio-data";
import { IconGithub } from "./SocialIcons";
import MagneticButton from "./MagneticButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) setLightboxOpen(false);
        else onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, lightboxOpen, onClose]);

  if (!project) return null;

  const currentImage = project.images[activeImageIndex] || project.thumbnail;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-40"
        />

        {/* Modal Container */}
        <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-6 lg:p-10 z-50">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#0B0B0B] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden my-8"
          >
            {/* Top Red Bar */}
            <div className="h-1 bg-gradient-to-r from-[#FF2028] via-[#FF4D53] to-transparent w-full" />

            {/* Modal Header */}
            <div className="p-6 sm:p-8 flex items-start justify-between border-b border-white/10 bg-[#0E0E0E]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[#FF2028] font-bold">
                    PROJECT {project.number}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A]">
                    {project.category}
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 sm:p-3 text-[#8A8A8A] hover:text-white border border-white/10 hover:border-[#FF2028] transition-colors bg-[#050505]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
              {/* Main Image & Gallery Carousel */}
              <div className="space-y-4">
                <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-[#050505] group">
                  <Image
                    src={currentImage}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1000px"
                  />
                  {/* Expand Image Lightbox Button */}
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-4 right-4 p-2 bg-[#050505]/80 border border-white/20 text-white hover:text-[#FF2028] hover:border-[#FF2028] opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md"
                    title="View fullscreen screenshot"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Previous / Next arrows if multiple images */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === 0 ? project.images.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#050505]/80 border border-white/20 text-white hover:text-[#FF2028] transition-colors"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === project.images.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#050505]/80 border border-white/20 text-white hover:text-[#FF2028] transition-colors"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Strip */}
                {project.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {project.images.map((img, idx) => (
                      <button
                        type="button"
                        key={img + idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-24 h-16 flex-shrink-0 border overflow-hidden transition-all ${
                          activeImageIndex === idx
                            ? "border-[#FF2028] shadow-[0_0_12px_rgba(255,32,40,0.5)]"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} slide ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
                  TECHNOLOGY STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1.5 bg-[#050505] border border-white/15 text-[#F5F5F5] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Overview & Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="p-5 bg-[#080808] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF2028] mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    PROJECT OVERVIEW
                  </h4>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="p-5 bg-[#080808] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF2028] mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    THE PROBLEM
                  </h4>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </div>

              {/* Medallion Architecture (if applicable) */}
              {project.architectureLayers && (
                <div className="p-6 bg-[#070707] border border-white/10 space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#FF2028]" />
                    MEDALLION ARCHITECTURE WORKFLOW
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-3 bg-[#0B0B0B] border border-white/10">
                      <span className="text-[#CD7F32] font-bold block mb-1">
                        BRONZE LAYER
                      </span>
                      <p className="text-[#8A8A8A] font-sans">
                        {project.architectureLayers.bronze}
                      </p>
                    </div>
                    <div className="p-3 bg-[#0B0B0B] border border-white/10">
                      <span className="text-[#C0C0C0] font-bold block mb-1">
                        SILVER LAYER
                      </span>
                      <p className="text-[#8A8A8A] font-sans">
                        {project.architectureLayers.silver}
                      </p>
                    </div>
                    <div className="p-3 bg-[#0B0B0B] border border-white/10">
                      <span className="text-[#FFD700] font-bold block mb-1">
                        GOLD LAYER
                      </span>
                      <p className="text-[#8A8A8A] font-sans">
                        {project.architectureLayers.gold}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF2028] mb-4">
                  KEY FEATURES & CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-3 p-3 bg-[#050505] border border-white/[0.06]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#FF2028] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#F5F5F5]">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact / Results */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF2028] mb-3">
                  RESULTS & IMPACT
                </h4>
                <div className="flex flex-col gap-2">
                  {project.resultsOrImpact.map((res) => (
                    <div
                      key={res}
                      className="text-xs sm:text-sm text-[#8A8A8A] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF2028]" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 sm:p-8 bg-[#0E0E0E] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <MagneticButton
                    variant="primary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconGithub className="w-4 h-4" />
                    <span>VIEW GITHUB REPO</span>
                  </MagneticButton>
                )}

                {project.liveUrl && (
                  <MagneticButton
                    variant="secondary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-[#FF2028]" />
                    <span>LIVE DEMO</span>
                  </MagneticButton>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] hover:text-white"
              >
                CLOSE WINDOW [ESC]
              </button>
            </div>
          </motion.div>
        </div>

        {/* Fullscreen Lightbox for Screenshot Inspection */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 text-white hover:text-[#FF2028] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
              <Image
                src={currentImage}
                alt="Enlarged screenshot"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
