"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import { IconGithub } from "./SocialIcons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle, #FF2028 0%, rgba(5,5,5,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[2px] bg-[#FF2028]" />
          <span className="text-xs font-mono tracking-widest text-[#FF2028] uppercase">
            03 / FEATURED PORTFOLIO
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h3
              className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              SELECTED <span className="text-[#FF2028]">WORK</span>
            </h3>
            <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base max-w-xl">
              End-to-end data pipelines, lakehouse architectures, and executive BI dashboards.
            </p>
          </div>
          <div className="text-xs font-mono text-[#8A8A8A] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2028]" />
            <span>CLICK CARD FOR CASE STUDY & REPO</span>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative bg-[#0B0B0B] border border-white/[0.08] hover:border-[#FF2028]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
                data-cursor="project"
              >
                {/* Red Accent Top Border Line that expands on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2028] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

                {/* Project Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070707] border-b border-white/[0.08]">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 bg-[#050505]/90 border border-white/10 text-white group-hover:text-[#FF2028] group-hover:border-[#FF2028]/50 transition-colors backdrop-blur-md">
                      PROJECT {project.number}
                    </span>
                    {project.status ? (
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 bg-[#FF2028]/20 border border-[#FF2028]/50 text-[#FF4D53] backdrop-blur-md">
                        {project.status}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-black/60 text-[#8A8A8A] border border-white/10">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Red corner pulse */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-3 py-1 bg-[#FF2028] text-white text-[10px] font-bold tracking-widest uppercase">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Title */}
                    <h4
                      className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#FF2028] group-hover:translate-x-1 transition-all duration-300 mb-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {project.title}
                    </h4>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed mb-6 font-light line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech Tags & Bottom Actions */}
                  <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono tracking-wider px-2.5 py-1 bg-[#050505] border border-white/10 text-[#F5F5F5] group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] font-mono px-2 py-1 text-[#8A8A8A]">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#8A8A8A]">
                      <span className="group-hover:text-white transition-colors flex items-center gap-1">
                        <span>VIEW DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2028]" />
                      </span>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-[#8A8A8A] hover:text-[#FF2028] transition-colors p-1"
                          title="Open GitHub Repository"
                        >
                          <IconGithub className="w-4 h-4" />
                          <span className="text-[11px]">REPO</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Fullscreen Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
