import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Calendar, ExternalLink, Github } from "lucide-react";
import imgLilcodermanPinkChairSittingOnTableInARoomInTheStyle8F5E5Aa938F84Af089F38572B0Ae93621 from "figma:asset/bdf05f127e983c7a87434379e33db88c745be221.png";

const projects = [
  {
    id: 1,
    title: "Musea",
    subtitle: "AI-Driven Museum Architecture",
    description: "A revolutionary museum design that uses AI to create adaptive spaces that respond to visitor flow and exhibition content. The architecture itself becomes part of the artistic experience.",
    image: imgLilcodermanPinkChairSittingOnTableInARoomInTheStyle8F5E5Aa938F84Af089F38572B0Ae93621,
    date: "2024",
    category: "Architecture",
    tags: ["AI Design", "Museum", "Interactive Spaces", "Adaptive Architecture"],
    status: "Completed"
  },
  {
    id: 2,
    title: "Elara",
    subtitle: "Sustainable Living Complex",
    description: "An eco-friendly residential complex designed using machine learning algorithms to optimize energy efficiency and natural light distribution throughout the year.",
    image: null,
    date: "2024",
    category: "Residential",
    tags: ["Sustainability", "ML Optimization", "Green Building", "Smart Homes"],
    status: "In Development"
  },
  {
    id: 3,
    title: "Verve",
    subtitle: "Dynamic Workspace Hub",
    description: "A flexible co-working space that uses AI to reconfigure layouts in real-time based on usage patterns and collaboration needs, creating the perfect work environment.",
    image: null,
    date: "2023",
    category: "Commercial",
    tags: ["Workspace", "Dynamic Layout", "AI Optimization", "Collaboration"],
    status: "Completed"
  },
  {
    id: 4,
    title: "Zephyr",
    subtitle: "Wind-Responsive Art Installation",
    description: "An outdoor installation that uses wind sensors and AI to create ever-changing architectural forms, making the invisible visible through responsive design.",
    image: null,
    date: "2023",
    category: "Installation",
    tags: ["Interactive Art", "Environmental Design", "Sensors", "Kinetic Architecture"],
    status: "Exhibited"
  }
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: false });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-gradient-to-br from-[#fadcd9] to-[#fadcd9]/70 rounded-[30px] p-8 mb-6 relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[28px]">
              {project.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-[12px] font-['Gilroy:Medium',_sans-serif] ${
              project.status === 'Completed' ? 'bg-green-100 text-green-800' :
              project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {project.status}
            </span>
          </div>
          <p className="font-['Gilroy:Light_Italic',_sans-serif] text-[#000000]/70 text-[18px] mb-3">
            {project.subtitle}
          </p>
          <div className="flex items-center gap-4 text-[14px] text-[#000000]/60 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {project.date}
            </span>
            <span>{project.category}</span>
          </div>
        </div>
        
        <motion.button 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f8afa6]/30"
          whileHover={{ scale: 1.1, backgroundColor: "#f8afa6" }}
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

      <p className="font-['Gilroy:Light',_sans-serif] text-[#000000] text-[16px] leading-6 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, tagIndex) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-[#f8afa6]/20 rounded-full text-[12px] font-['Gilroy:Medium',_sans-serif] text-[#000000]"
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
        className="overflow-hidden border-t border-[#f8afa6]/30 pt-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <motion.button 
            className="flex items-center justify-center gap-2 bg-[#000000] text-white px-6 py-3 rounded-full font-['Gilroy:Medium',_sans-serif] text-[14px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            View Details
          </motion.button>
          <motion.button 
            className="flex items-center justify-center gap-2 border border-[#000000] text-[#000000] px-6 py-3 rounded-full font-['Gilroy:Medium',_sans-serif] text-[14px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            Source
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-6 -right-6 w-16 h-16 bg-[#f8afa6]/10 rounded-full"
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
      className="bg-gradient-to-br from-[#f8afa6] to-[#f8afa6]/80 rounded-[30px] p-8 mx-4 mt-20 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[40px] sm:text-[48px] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Projects
      </motion.h1>
      
      <motion.p 
        className="font-['Gilroy:Light',_sans-serif] text-[#000000] text-[18px] leading-7 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Explore my portfolio of AI-driven architectural designs and innovative spatial experiences.
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
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}