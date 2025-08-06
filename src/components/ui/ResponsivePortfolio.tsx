"use client";

import Bentolio from "./bentolio";
import { portfolioConfig, themeColors } from "@/config/portfolio";

export default function ResponsivePortfolio() {
  return (
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
      }))}
      profileImage={portfolioConfig.personal.profileImage}
      socialLinks={portfolioConfig.social}
      contactLink={`mailto:${portfolioConfig.contact.email}`}
      navLinks={portfolioConfig.navigation}
      about={portfolioConfig.about}
    />
  );
}