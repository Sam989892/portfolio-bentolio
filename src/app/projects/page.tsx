import { portfolioConfig } from "@/config/portfolio";
import ProjectsPageClient from "./ProjectsPageClient";

export default function ProjectsPage() {
  return <ProjectsPageClient projects={portfolioConfig.projects} />;
}