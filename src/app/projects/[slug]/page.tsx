import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";
import { portfolioConfig } from "@/config/portfolio";

// Generate static params for static export
export async function generateStaticParams() {
  return portfolioConfig.projects.map((project) => ({
    slug: project.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projectId = parseInt(slug);
  const project = portfolioConfig.projects.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}