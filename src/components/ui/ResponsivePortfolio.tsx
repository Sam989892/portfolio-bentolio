"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Bentolio from "./bentolio";
import { portfolioConfig, themeColors, layoutConfig } from "@/config/portfolio";

// Dynamically import mobile app to avoid SSR issues
const MobileApp = dynamic(() => import("../mobile/MobileApp"), {
  ssr: false,
});

export default function ResponsivePortfolio() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < layoutConfig.mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show nothing until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      {isMobile ? (
        <div className="md:hidden">
          <MobileApp />
        </div>
      ) : (
        <div className="hidden md:block">
          <Bentolio 
            bg={themeColors.primary}
            secondary={themeColors.secondary}
            secondaryTextColor={themeColors.text}
            name={{
              first: portfolioConfig.personal.firstName,
              last: portfolioConfig.personal.lastName,
            }}
            title={portfolioConfig.personal.title}
            curvedText={portfolioConfig.personal.curvedText}
            description={portfolioConfig.personal.description}
            projects={portfolioConfig.projects.map(project => ({
              name: project.name,
              image: project.image,
              link: project.link,
              subtitle: project.subtitle,
              description: project.description,
              tags: project.tags,
            }))}
            profileImage={portfolioConfig.personal.profileImage}
            socialLinks={portfolioConfig.social}
            contactLink={`mailto:${portfolioConfig.contact.email}`}
            navLinks={portfolioConfig.navigation}
            about={portfolioConfig.about}
          />
        </div>
      )}
    </>
  );
}