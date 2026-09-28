"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { IconGithub, IconLinkedin, IconInstagram, IconLeetCode } from "./SocialIcons";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);

    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();
    const subject = formState.subject.trim();

    // 1. Validation
    if (!name) {
      setErrorMessage("Name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmitted(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage(data?.error || "TRANSMISSION FAILED. PLEASE TRY AGAIN.");
      }
    } catch {
      setErrorMessage("TRANSMISSION FAILED. PLEASE TRY AGAIN.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#040404] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Red ambient bottom flare */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse, #FF2028 0%, rgba(5,5,5,0) 70%)",
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
            07 / INITIATE CONTACT
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Dramatic Headline & Direct Reachouts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div>
              <h3
                className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                LET&apos;S <br />
                <span className="text-[#FF2028]">BUILD</span> <br />
                SOMETHING.
              </h3>

              <p className="mt-6 text-base sm:text-lg text-[#8A8A8A] font-light max-w-md leading-relaxed">
                Have a dataset, dashboard, pipeline or idea? Let&apos;s turn it into something meaningful.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 bg-[#0B0B0B] border border-white/10 hover:border-[#FF2028]/40 transition-colors">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/[0.04] border border-white/10 text-[#FF2028]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A8A] block">
                      DIRECT INQUIRIES
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.social.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#FF2028] transition-colors font-mono"
                    >
                      {PORTFOLIO_DATA.profile.social.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 bg-[#050505] border border-white/15 text-[#8A8A8A] hover:text-[#FF2028] hover:border-[#FF2028] transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Verified Profile Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
                PROFESSIONAL PLATFORMS & HANDLES
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a
                  href={PORTFOLIO_DATA.profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#080808] border border-white/10 hover:border-[#FF2028] text-xs font-mono text-white flex items-center justify-between group transition-colors"
                  data-cursor="link"
                >
                  <span className="flex items-center gap-2">
                    <IconGithub className="w-3.5 h-3.5 text-[#FF2028]" />
                    <span>GITHUB</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#8A8A8A] group-hover:text-[#FF2028] transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#080808] border border-white/10 hover:border-[#FF2028] text-xs font-mono text-white flex items-center justify-between group transition-colors"
                  data-cursor="link"
                >
                  <span className="flex items-center gap-2">
                    <IconLinkedin className="w-3.5 h-3.5 text-[#FF2028]" />
                    <span>LINKEDIN</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#8A8A8A] group-hover:text-[#FF2028] transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.skillrack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#080808] border border-white/10 hover:border-[#FF2028] text-xs font-mono text-white flex items-center justify-between group transition-colors"
                  data-cursor="link"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#FF2028]" />
                    <span>SKILLRACK</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#8A8A8A] group-hover:text-[#FF2028] transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#080808] border border-white/10 hover:border-[#FF2028] text-xs font-mono text-white flex items-center justify-between group transition-colors"
                  data-cursor="link"
                >
                  <span className="flex items-center gap-2">
                    <IconLeetCode className="w-3.5 h-3.5 text-[#FF2028]" />
                    <span>LEETCODE</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#8A8A8A] group-hover:text-[#FF2028] transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#080808] border border-white/10 hover:border-[#FF2028] text-xs font-mono text-white flex items-center justify-between group transition-colors"
                  data-cursor="link"
                >
                  <span className="flex items-center gap-2">
                    <IconInstagram className="w-3.5 h-3.5 text-[#FF2028]" />
                    <span>INSTAGRAM</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#8A8A8A] group-hover:text-[#FF2028] transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 bg-[#0B0B0B] border border-white/10 p-6 sm:p-10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2028] to-transparent" />

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FF2028]/10 border border-[#FF2028] flex items-center justify-center text-[#FF2028]">
                  <Check className="w-7 h-7" />
                </div>
                <h4
                  className="text-2xl font-black uppercase text-white tracking-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  MESSAGE TRANSMITTED SUCCESSFULLY.
                </h4>
                <p className="text-sm text-[#8A8A8A] max-w-sm">
                  Thank you for reaching out! Your message has been dispatched to{" "}
                  <span className="text-white">krishnampks07@gmail.com</span>. I will respond to your email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                  }}
                  className="text-xs font-mono text-[#FF2028] uppercase tracking-wider underline pt-4 hover:text-white transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-2">
                    YOUR NAME <span className="text-[#FF2028]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => {
                      if (errorMessage) setErrorMessage(null);
                      setFormState({ ...formState, name: e.target.value });
                    }}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF2028] focus:ring-1 focus:ring-[#FF2028] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-2">
                    YOUR EMAIL <span className="text-[#FF2028]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => {
                      if (errorMessage) setErrorMessage(null);
                      setFormState({ ...formState, email: e.target.value });
                    }}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF2028] focus:ring-1 focus:ring-[#FF2028] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="e.g. Data Engineering Project / Opportunity"
                    className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF2028] focus:ring-1 focus:ring-[#FF2028] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-2">
                    YOUR MESSAGE <span className="text-[#FF2028]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => {
                      if (errorMessage) setErrorMessage(null);
                      setFormState({ ...formState, message: e.target.value });
                    }}
                    placeholder="Tell me about your dataset, project, or role..."
                    className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF2028] focus:ring-1 focus:ring-[#FF2028] transition-all resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 bg-[#FF2028]/10 border border-[#FF2028]/40 text-[#FF2028] text-xs font-mono tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2028] shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse text-white/70" : ""}`} />
                  <span>{isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}</span>
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
