"use client";

import BeyondNavbar from "@/components/beyond/BeyondNavbar";
import BeyondHero from "@/components/beyond/BeyondHero";
import BeyondWhoIAm from "@/components/beyond/BeyondWhoIAm";
import BeyondIdentityWall from "@/components/beyond/BeyondIdentityWall";
import BeyondExplorer from "@/components/beyond/chapters/BeyondExplorer";
import BeyondArtist from "@/components/beyond/chapters/BeyondArtist";
import BeyondAthlete from "@/components/beyond/chapters/BeyondAthlete";
import BeyondPhotographer from "@/components/beyond/chapters/BeyondPhotographer";
import BeyondCreative from "@/components/beyond/chapters/BeyondCreative";
import BeyondPhilanthropist from "@/components/beyond/chapters/BeyondPhilanthropist";
import BeyondCollage from "@/components/beyond/chapters/BeyondCollage";
import BeyondFooter from "@/components/beyond/BeyondFooter";

export default function BeyondPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#080807] text-[#F5F0E6] selection:bg-[#D4AF37] selection:text-[#080807]">
      <BeyondNavbar />
      <main>
        <BeyondHero />
        <BeyondWhoIAm />
        <BeyondIdentityWall />
        <BeyondExplorer />
        <BeyondArtist />
        <BeyondAthlete />
        <BeyondPhotographer />
        <BeyondCreative />
        <BeyondPhilanthropist />
        <BeyondCollage />
      </main>
      <BeyondFooter />
    </div>
  );
}
