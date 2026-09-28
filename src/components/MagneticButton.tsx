"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline";
  dataCursor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  variant = "primary",
  dataCursor,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (clientX - centerX) * 0.28;
    const distanceY = (clientY - centerY) * 0.28;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium tracking-wider uppercase text-xs sm:text-sm px-6 py-3.5 transition-all duration-300 rounded-none overflow-hidden group select-none";

  const variantStyles = {
    primary:
      "bg-[#FF2028] text-white hover:bg-[#e01920] shadow-[0_0_20px_rgba(255,32,40,0.35)] hover:shadow-[0_0_30px_rgba(255,32,40,0.6)] border border-[#FF2028]",
    secondary:
      "bg-[#0F0F0F] text-[#F5F5F5] hover:text-white border border-white/10 hover:border-[#FF2028]/60 hover:bg-[#151515]",
    outline:
      "bg-transparent text-[#F5F5F5] border border-white/20 hover:border-[#FF2028] hover:text-[#FF2028]",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
      data-cursor={dataCursor}
    >
      <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {/* Subtle shine sweep on hover */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-block bg-transparent p-0 border-0 ${
        disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""
      }`}
    >
      {content}
    </button>
  );
}
