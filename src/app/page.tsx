"use client";

import { ModeProvider, useMode } from "@/context/ModeContext";
import { MusicProvider } from "@/context/MusicContext";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import EnterExperienceOverlay from "@/components/EnterExperienceOverlay";
import DataPortfolio from "@/components/DataPortfolio";
import BeyondPortfolio from "@/components/beyond/BeyondPortfolio";
import { motion, AnimatePresence } from "framer-motion";

function PortfolioContent() {
  const { mode } = useMode();

  return (
    <AnimatePresence mode="wait">
      {mode === "data" ? (
        <motion.div
          key="data-portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <DataPortfolio />
        </motion.div>
      ) : (
        <motion.div
          key="beyond-portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <BeyondPortfolio />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <ModeProvider>
      <MusicProvider>
        <SmoothScroll>
          <CustomCursor />
          <EnterExperienceOverlay />
          <PortfolioContent />
        </SmoothScroll>
      </MusicProvider>
    </ModeProvider>
  );
}
