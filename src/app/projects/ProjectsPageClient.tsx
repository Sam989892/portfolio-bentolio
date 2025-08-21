"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ExternalLink, ArrowRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

interface ProjectsPageClientProps {
  projects: typeof portfolioConfig.projects;
}

// Using same config as main bentolio component
const config = {
  containerClass: "relative flex flex-col gap-5 mx-auto p-5 sm:p-7 md:p-9 w-full max-w-[1800px]",
  headerClass: "rounded-[20px] w-full flex-shrink-0",
  headerPadding: "flex sm:flex-row flex-col justify-between items-center p-5 sm:p-7 md:p-9 rounded-[20px] w-full",
  mainGridGap: "gap-5 grid grid-cols-1 lg:grid-cols-9 flex-1 min-h-0",
  mainTitleText: "text-5xl sm:text-6xl md:text-7xl leading-tight",
  projectText: "text-3xl sm:text-4xl md:text-5xl",
  descriptionText: "text-lg sm:text-xl",
  borderRadius: "rounded-[20px]",
  componentPadding: "p-5 sm:p-7 md:p-9",
  iconSizes: "w-8 sm:w-9 md:w-11",
};

const flipAnimation = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  duration: 0.8,
};

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const router = useRouter();
  const [selectedProject] = useState<typeof projects[0] | null>(null);
  const [isInitialLoad] = useState(true);
  
  const bg = "#e3f2f9";
  const secondary = "#aecfdc";
  
  const currentProject = selectedProject || projects[0];

  return (
    <div className={`${config.containerClass} min-h-screen`} style={{ color: "#1d1d1f" }}>
      {/* Header */}
      <header className={config.headerClass}>
        <motion.div
          style={{ backgroundColor: bg }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={flipAnimation}
          className={config.headerPadding}
        >
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-light text-lg sm:text-xl md:text-2xl"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Back to Portfolio</span>
            </button>
          </div>
          
          <h1 className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{ color: "#1d1d1f" }}>
            <i>All</i>{" "}
            <span className="font-medium">Projects</span>
          </h1>
        </motion.div>
      </header>

      {/* Main Content with Bento Layout */}
      <div className={config.mainGridGap}>
        <div className={`${config.mainGridGap.split('grid-cols-1 lg:grid-cols-9')[0]}grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:col-span-6 h-full`}>
          {/* Featured Project Section */}
          <div className={`sm:col-span-2 lg:col-span-4 ${config.borderRadius} h-full`} style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`featured-project-${currentProject.id}`}
                initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : { rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={isInitialLoad ? {} : { rotateY: 90 }}
                transition={isInitialLoad ? { ...flipAnimation, delay: 0.1 } : flipAnimation}
                style={{ 
                  backgroundColor: bg,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                className={`flex flex-col justify-between ${config.componentPadding} ${config.borderRadius} h-full hover:scale-[1.02] transition-transform`}
              >
                <div className="flex justify-between items-start w-full mb-4">
                  <div className="flex-1">
                    <h2 className={`font-bold ${config.projectText} leading-tight mb-2`}>
                      {currentProject.name}
                    </h2>
                    <p className="text-gray-600 font-medium text-lg">
                      {currentProject.subtitle}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="ml-4"
                  >
                    <Image
                      src="https://atomix-ui.vercel.app/bentolio/svg/flower.svg"
                      alt="flower"
                      width={60}
                      height={60}
                      style={{ filter: 'hue-rotate(280deg) saturate(1.2)' }}
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center mb-4">
                  <p className={`${config.descriptionText} text-gray-700 leading-relaxed mb-4`}>
                    {currentProject.description.length > 120 
                      ? `${currentProject.description.substring(0, 120)}...` 
                      : currentProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentProject.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/50 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{currentProject.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{currentProject.category}</span>
                    </div>
                  </div>
                  <Link
                    href={`/projects/${currentProject.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured Project Image */}
          <div className={`sm:col-span-2 lg:col-span-2 ${config.borderRadius}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`project-image-${currentProject.id}`}
                initial={isInitialLoad ? { translateX: -40, translateY: 40, opacity: 0 } : { scale: 0.8, opacity: 0 }}
                animate={{ translateX: 0, translateY: 0, opacity: 1, scale: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={isInitialLoad ? { ...flipAnimation, delay: 0.3 } : flipAnimation}
                className="w-full h-[500px] sm:h-[550px] md:h-[600px] group cursor-pointer"
                onClick={() => currentProject.link ? window.open(currentProject.link, '_blank') : router.push(`/projects/${currentProject.id}`)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[20px]">
                  {currentProject.image ? (
                    <Image
                      src={currentProject.image}
                      alt={currentProject.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-gray-300 mb-2">
                          {currentProject.name.charAt(0)}
                        </div>
                        <p className="text-gray-500">No Image</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay with blur effect */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 rounded-xl p-4 shadow-xl">
                        <div className="flex items-center gap-2 text-gray-900 font-medium">
                          <ExternalLink className="w-5 h-5" />
                          <span>View Project</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Stats */}
          <div className="sm:col-span-1 lg:col-span-2" style={{ perspective: "1000px" }}>
            <motion.div
              initial={isInitialLoad ? { opacity: 0, scale: 0.8 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={isInitialLoad ? { ...flipAnimation, delay: 0.4 } : {}}
              style={{ backgroundColor: bg }}
              className={`flex flex-col justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 ${config.componentPadding} ${config.borderRadius} h-full`}
            >
              <Image
                src="https://atomix-ui.vercel.app/bentolio/svg/circle.svg"
                alt="circle"
                width={32}
                height={32}
                className={config.iconSizes}
                style={{ filter: 'hue-rotate(280deg) saturate(1.2)' }}
              />
              
              <div className="flex-1 w-full">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {projects.length}
                </h3>
                <p className="text-gray-600 font-medium text-lg mb-4">Total Projects</p>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div>
                    <h4 className="text-xl font-bold text-purple-600 mb-1">
                      {projects.filter(p => p.status === 'Completed').length}
                    </h4>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-600 mb-1">
                      {new Set(projects.map(p => p.category)).size}
                    </h4>
                    <p className="text-sm text-gray-600">Categories</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="sm:col-span-1 lg:col-span-4" style={{ perspective: "1000px" }}>
            <motion.div
              initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1 }}
              transition={isInitialLoad ? { ...flipAnimation, delay: 0.5 } : {}}
              style={{ backgroundColor: secondary, color: "#1d1d1f" }}
              className={`flex flex-col justify-between ${config.componentPadding} ${config.borderRadius} h-full`}
            >
              <div className="flex justify-between items-center w-full">
                <p className={`w-16 sm:w-20 md:w-24 lg:w-28 font-light ${config.descriptionText} leading-tight`}>
                  Browse all my work
                </p>
                <ArrowRight size={24} className={config.iconSizes} />
              </div>
              
              <p className={`m-0 font-medium ${config.projectText}`}>
                Portfolio Collection
              </p>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`flex flex-col ${config.mainGridGap.split('grid')[0]}lg:col-span-3 h-full`} style={{ perspective: "1000px" }}>
          <div className="flex-1">
            <motion.div
              initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1 }}
              transition={isInitialLoad ? { ...flipAnimation, delay: 0.6 } : {}}
              style={{ backgroundColor: bg }}
              className={`${config.componentPadding} ${config.borderRadius} h-full`}
            >
              {/* Featured project in the main area, so show other projects here */}
              {projects.slice(0, 1).map((project) => (
                <div key={`main-project-${project.id}`}>
                  <div
                    onClick={() => {
                      if (project.id) {
                        router.push(`/projects/${project.id}`);
                      } else if (project.link && project.link !== "#") {
                        window.open(project.link, "_blank");
                      }
                    }}
                    style={{
                      color: "#1d1d1f",
                      cursor: "pointer"
                    }}
                    className="flex justify-between items-center w-full hover:opacity-80 transition-opacity mb-6"
                  >
                    <p className={`m-0 font-medium ${config.projectText}`}>
                      All Projects
                    </p>
                    <Image
                      src="https://atomix-ui.vercel.app/bentolio/svg/arrow.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                      className={config.iconSizes}
                      style={{ filter: 'hue-rotate(280deg) saturate(1.2)' }}
                    />
                  </div>
                  
                  {/* Visual container for first project */}
                  <div className={`mb-6 ${config.borderRadius} w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] overflow-hidden`}>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={330}
                        height={330}
                        className={`w-full h-full object-cover ${config.borderRadius}`}
                      />
                    )}
                  </div>
                </div>
              ))}
              
              {/* List remaining projects compactly */}
              {projects.slice(1).map((project) => (
                <div
                  key={`list-project-${project.id}`}
                  onClick={() => {
                    if (project.id) {
                      router.push(`/projects/${project.id}`);
                    } else if (project.link && project.link !== "#") {
                      window.open(project.link, "_blank");
                    }
                  }}
                  className="py-3 sm:py-4 md:py-6 lg:py-8 border-t-[2px] cursor-pointer hover:bg-white/20 transition-colors"
                  style={{ borderTopColor: "#aecfdc" }}
                >
                  <p className={`m-0 font-medium ${config.projectText}`}>
                    {project.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Footer Actions */}
          <div className="flex-shrink-0" style={{ perspective: "1000px" }}>
            <motion.div
              initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1 }}
              transition={isInitialLoad ? { ...flipAnimation, delay: 0.8 } : {}}
              className={`flex justify-between items-center ${config.componentPadding} ${config.borderRadius} font-light text-base sm:text-lg`}
              style={{ backgroundColor: bg }}
            >
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}