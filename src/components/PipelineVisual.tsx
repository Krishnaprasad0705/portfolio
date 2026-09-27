"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  UploadCloud,
  Workflow,
  Database,
  BarChart,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface PipelineStep {
  id: string;
  step: string;
  title: string;
  tools: string[];
  description: string;
  icon: React.ReactNode;
  dataSample: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "raw",
    step: "01",
    title: "RAW DATA",
    tools: ["CSV", "Excel", "Streams", "APIs"],
    description:
      "Unstructured & multi-source transactional feeds arriving from payment logs, flight bookings, and customer sessions.",
    icon: <FileSpreadsheet className="w-5 h-5 text-[#FF2028]" />,
    dataSample: "{ raw_bytes: 0x4f8a, session: 'upi_live', latency: '4ms' }",
  },
  {
    id: "ingestion",
    step: "02",
    title: "INGESTION",
    tools: ["AWS S3", "Auto Loader", "Databricks Volumes"],
    description:
      "Fault-tolerant, schema-evolving batch & structured streaming pipelines ingesting raw files into cloud object storage.",
    icon: <UploadCloud className="w-5 h-5 text-[#FF2028]" />,
    dataSample: "s3://bronze-landing/year=2026/month=09/records.parquet",
  },
  {
    id: "transform",
    step: "03",
    title: "TRANSFORMATION",
    tools: ["dbt Core", "PySpark", "Delta Live Tables", "Jinja"],
    description:
      "Medallion staging: cleaning, casting, deduplication, SCD Type 1 & 2 snapshots, and automated quality assertions.",
    icon: <Workflow className="w-5 h-5 text-[#FF2028]" />,
    dataSample: "ref('silver_bookings') | SCD Type 2 | tests: [not_null, unique]",
  },
  {
    id: "warehouse",
    step: "04",
    title: "DATA WAREHOUSE",
    tools: ["Snowflake", "Unity Catalog", "Delta Lake"],
    description:
      "Denormalized One Big Tables (OBT) and governed enterprise Star Schemas with surrogate keys and RBAC security.",
    icon: <Database className="w-5 h-5 text-[#FF2028]" />,
    dataSample: "AIRBNB.GOLD.FACT_BOOKINGS | Clustered by date | 100% SLA",
  },
  {
    id: "analytics",
    step: "05",
    title: "ANALYTICS",
    tools: ["Power BI", "DAX", "SQL Queries", "Tableau"],
    description:
      "High-velocity semantic layers, calculated business measures, dynamic slicers, and interactive metric cards.",
    icon: <BarChart className="w-5 h-5 text-[#FF2028]" />,
    dataSample: "EVALUATE SUMMARIZECOLUMNS(DimRegion[State], 'Margin %', [GrossMargin])",
  },
  {
    id: "insights",
    step: "06",
    title: "INSIGHTS",
    tools: ["Executive Decisions", "Anomaly Alerts", "KPI Growth"],
    description:
      "Empowering leadership to optimize marketing budgets, identify margin leakage, and detect fraudulent UPI behavior.",
    icon: <Lightbulb className="w-5 h-5 text-[#FF2028]" />,
    dataSample: "Decision Ready: +15% Operational Campaign Efficiency",
  },
];

export default function PipelineVisual() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Transformation step

  return (
    <section
      id="pipeline"
      className="relative py-28 sm:py-36 bg-[#070707] overflow-hidden border-t border-b border-white/[0.04]"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse, #FF2028 0%, rgba(5,5,5,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF2028]/10 border border-[#FF2028]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2028]" />
            <span className="text-[11px] font-mono tracking-widest text-[#FF2028] uppercase font-semibold">
              ARCHITECTURE & PHILOSOPHY
            </span>
          </div>

          <h3
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            THE DATA <span className="text-[#FF2028]">LIFECYCLE</span>
          </h3>

          <p className="mt-4 text-base sm:text-lg text-[#F5F5F5] font-normal italic">
            &ldquo;I don&apos;t just analyze data. I build the path that makes data useful.&rdquo;
          </p>
        </div>

        {/* Interactive Pipeline Track */}
        <div className="relative">
          {/* Connecting Line with Flow Animation */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[2px] bg-white/10 -translate-y-1/2 pointer-events-none z-0">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#FF2028] to-transparent opacity-80" />
          </div>

          {/* Steps Horizontal Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {PIPELINE_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  type="button"
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 sm:p-5 transition-all duration-300 relative border flex flex-col justify-between min-h-[170px] ${
                    isSelected
                      ? "bg-[#0B0B0B] border-[#FF2028] shadow-[0_0_25px_rgba(255,32,40,0.3)] scale-[1.03]"
                      : "bg-[#0A0A0A]/90 border-white/[0.08] hover:border-white/20 hover:bg-[#101010]"
                  }`}
                  data-cursor="link"
                >
                  {/* Top step number and pulse */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`font-mono text-xs tracking-widest font-bold ${
                        isSelected ? "text-[#FF2028]" : "text-[#8A8A8A]"
                      }`}
                    >
                      {step.step}
                    </span>
                    {isSelected ? (
                      <div className="w-2 h-2 rounded-full bg-[#FF2028] animate-ping" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mb-2 p-2 w-fit bg-white/[0.03] border border-white/10">
                    {step.icon}
                  </div>

                  {/* Step Title */}
                  <div>
                    <h4
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-[#8A8A8A] font-mono line-clamp-1">
                      {step.tools[0]}
                    </p>
                  </div>

                  {/* Arrow Indicator on active */}
                  {isSelected && (
                    <motion.div
                      layoutId="activePipelineStep"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF2028] rotate-45"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Inspector Panel for Selected Pipeline Stage */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 p-6 sm:p-8 bg-[#0B0B0B] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 h-full w-[3px] bg-[#FF2028]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-[#FF2028] font-bold">
                  STAGE {PIPELINE_STEPS[activeStep].step} OF 06
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs uppercase tracking-wider text-[#8A8A8A]">
                  ACTIVE INSPECTOR
                </span>
              </div>

              <h4
                className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {PIPELINE_STEPS[activeStep].title}
              </h4>

              <p className="text-sm sm:text-base text-[#8A8A8A] leading-relaxed mb-6 font-light">
                {PIPELINE_STEPS[activeStep].description}
              </p>

              {/* Tools Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#8A8A8A] mr-2">
                  TOOLS & PROTOCOLS:
                </span>
                {PIPELINE_STEPS[activeStep].tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 bg-[#121212] border border-white/10 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Terminal Snippet */}
            <div className="lg:col-span-5">
              <div className="p-4 bg-[#050505] border border-white/10 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[#8A8A8A]">
                  <span className="text-[10px] uppercase tracking-widest text-[#FF2028]">
                    DATA TELEMETRY
                  </span>
                  <span className="text-[10px]">LIVE PIPELINE</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <p className="text-[#8A8A8A]">
                    <span className="text-[#FF2028]">&gt;</span> STATUS:{" "}
                    <span className="text-emerald-400">HEALTHY / VALIDATED</span>
                  </p>
                  <p className="text-[#8A8A8A]">
                    <span className="text-[#FF2028]">&gt;</span> PAYLOAD:
                  </p>
                  <p className="text-white/90 pl-3 break-all bg-white/[0.02] p-2 border-l border-[#FF2028]">
                    {PIPELINE_STEPS[activeStep].dataSample}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
