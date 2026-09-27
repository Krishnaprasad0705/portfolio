import React from "react";

export function IconGithub({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function IconLinkedin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function IconInstagram({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function IconLeetCode({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 4.735 5.374 5.374 0 0 0 2.29 2.274 5.313 5.313 0 0 0 4.887-.197l5.424-3.528a1.376 1.376 0 1 0-1.492-2.316l-5.422 3.527a2.585 2.585 0 0 1-2.378.096 2.618 2.618 0 0 1-1.116-1.107 2.69 2.69 0 0 1-.132-2.308 2.586 2.586 0 0 1 .59-1.025l3.85-4.12 4.41-4.786a1.376 1.376 0 0 0-.982-2.355z" />
      <path d="M9.833 13.916a1.376 1.376 0 0 0-.97 2.351l4.417 4.793c.3.326.68.583 1.108.751a5.374 5.374 0 0 0 4.887-.197 5.374 5.374 0 0 0 2.29-2.274 5.527 5.527 0 0 0 .271-4.735 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104l-3.854-4.126a1.376 1.376 0 1 0-2.012 1.88l3.854 4.125c.34.364.55.828.59 1.025.07.785-.02 1.58-.27 2.308-.24.73-.7 1.36-1.32 1.82a2.585 2.585 0 0 1-2.378-.096l-3.41-3.698a1.374 1.374 0 0 0-.973-.484z" />
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
