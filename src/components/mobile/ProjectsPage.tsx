import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

// Projects will be loaded from configuration
const projects = portfolioConfig.projects;

interface Project {
  name: string;
  description?: string;
  image?: string;
  link?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: false });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8 mb-6 relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium text-[#000000] text-[28px]">
              {project.name}
            </h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-[12px] font-medium">
              Active
            </span>
          </div>
          <p className="font-light italic text-[#000000]/70 text-[18px] mb-3">
            {project.description || "Web Application"}
          </p>
        </div>
        
        <motion.button 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#aecfdc]/30"
          whileHover={{ scale: 1.1, backgroundColor: "#aecfdc" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={20} />
          </motion.div>
        </motion.button>
      </div>

      {project.image && (
        <motion.div 
          className="h-[240px] overflow-hidden rounded-[20px] mb-6 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className="w-full h-[130%] -mt-8 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${project.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/10 to-transparent" />
        </motion.div>
      )}

      <p className="font-light text-[#000000] text-[16px] leading-6 mb-6">
        {project.description || "Modern web application built with cutting-edge technologies."}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {["React", "Next.js", "TypeScript"].map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-[#aecfdc]/20 rounded-full text-[12px] font-medium text-[#1d1d1f]"
          >
            {tag}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? "auto" : 0, 
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-[#aecfdc]/30 pt-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <motion.button 
            className="flex items-center justify-center gap-2 bg-[#000000] text-white px-6 py-3 rounded-full font-medium text-[14px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => project.link && window.open(project.link, '_blank')}
          >
            <ExternalLink size={16} />
            View Details
          </motion.button>
          <motion.button 
            className="flex items-center justify-center gap-2 border border-[#000000] text-[#000000] px-6 py-3 rounded-full font-medium text-[14px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => project.link && window.open(project.link, '_blank')}
          >
            <Github size={16} />
            Source
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-6 -right-6 w-16 h-16 bg-[#aecfdc]/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

function ProjectsHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#aecfdc] to-[#aecfdc]/80 rounded-[30px] p-8 mx-4 mt-20 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="font-medium text-[#000000] text-[40px] sm:text-[48px] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Projects
      </motion.h1>
      
      <motion.p 
        className="font-light text-[#000000] text-[18px] leading-7 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Explore my portfolio of projects and innovative solutions.
      </motion.p>

      <motion.div
        className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#ffffff]/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pb-12">
      <ProjectsHeader />
      <div className="mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}