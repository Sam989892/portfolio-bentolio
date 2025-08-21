"use client";

import ResponsivePortfolio from "@/components/ui/ResponsivePortfolio";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Preload other background images
    const img1 = new Image(); img1.src = '/francium-light-bg.webp';
    const img2 = new Image(); img2.src = '/celestials-dark-bg.webp';
  }, []);

  return (
    <div 
      className="h-screen w-screen overflow-auto relative" 
      style={{ 
        backgroundImage: "url('/dreamy-fabrica-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <ResponsivePortfolio />
    </div>
  );
}