"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Mail, Phone, MapPin, Send, Menu, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import Image from "next/image";

function FlowerIcon({ animate = false }) {
  return (
    <motion.div 
      className="w-16 h-16 sm:w-20 sm:h-20"
      animate={animate ? { rotate: [0, 360] } : {}}
      transition={{ duration: 20, repeat: Infinity }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 119 119"
      >
        <g clipPath="url(#clip0_2_74)">
          <path d="M59.5 0C53.7011 0 48.0344 1.14587 42.8228 3.26743C37.6113 5.38899 32.9834 8.43886 29.2218 12.2218C25.4388 15.9834 22.3889 20.6113 20.2674 25.8228C18.1459 31.0344 17 36.7011 17 42.5C17 48.2989 18.1459 53.9656 20.2674 59.1772C22.3889 64.3887 25.4388 69.0166 29.2218 72.7782C32.9834 76.5611 37.6113 79.6111 42.8228 81.7326C48.0344 83.8541 53.7011 85 59.5 85C65.2989 85 70.9656 83.8541 76.1772 81.7326C81.3887 79.6111 86.0166 76.5611 89.7782 72.7782C93.5612 69.0166 96.6111 64.3887 98.7326 59.1772C100.854 53.9656 102 48.2989 102 42.5C102 36.7011 100.854 31.0344 98.7326 25.8228C96.6111 20.6113 93.5612 15.9834 89.7782 12.2218C86.0166 8.43886 81.3887 5.38899 76.1772 3.26743C70.9656 1.14587 65.2989 0 59.5 0Z" fill="#aecfdc" />
        </g>
        <defs>
          <clipPath id="clip0_2_74">
            <rect width="119" height="119" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

function ImageWithFallback({ src, alt, width = 400, height = 300, className = "" }: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback for broken images
          const target = e.target as HTMLImageElement;
          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23e3f2f9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='%231d1d1f' font-size='16'%3EImage not found%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
  );
}

function HomePage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fcff] to-[#e3f2f9] relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={ref}
        className="bg-gradient-to-br from-[#aecfdc] to-[#aecfdc]/80 rounded-[30px] p-8 mx-4 mt-20 mb-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div style={{ y }} className="absolute top-4 right-4">
          <FlowerIcon animate={true} />
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <h1 className="text-[32px] sm:text-[48px] font-['Gilroy:Bold',_sans-serif] text-[#000000] leading-tight mb-2">
              {portfolioConfig.personal.firstName}<br />
              {portfolioConfig.personal.lastName}
            </h1>
          </div>
        </motion.div>

        <motion.p
          className="text-[16px] font-['Gilroy:Regular',_sans-serif] text-[#000000] mb-8 max-w-[300px]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {portfolioConfig.personal.description}
        </motion.p>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-[20px] px-6 py-3 font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[14px] hover:bg-white/40 transition-all duration-300 flex items-center gap-2">
            View Projects <ArrowRight size={16} />
          </button>
          <button className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-[20px] px-6 py-3 font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[14px] hover:bg-white/30 transition-all duration-300">
            Contact Me
          </button>
        </motion.div>
      </motion.section>

      {/* Profile Section */}
      <ProfileSection />

      {/* Skills Section */}
      <SkillsSection />
    </div>
  );
}

function ProfileSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8 mx-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div 
          className="w-32 h-40 mx-auto mb-6 rounded-[20px] overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <ImageWithFallback
            src={portfolioConfig.personal.profileImage}
            alt={portfolioConfig.personal.fullName}
            width={128}
            height={160}
            className="rounded-[20px]"
          />
        </motion.div>

        <motion.h2 
          className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {portfolioConfig.personal.fullName}
        </motion.h2>

        <motion.p 
          className="text-[14px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {portfolioConfig.personal.location}
        </motion.p>

        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-white/40 rounded-[15px] p-4 text-center">
            <div className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-1">
              {portfolioConfig.projects.length}+
            </div>
            <div className="text-[12px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70">
              Projects
            </div>
          </div>
          <div className="bg-white/40 rounded-[15px] p-4 text-center">
            <div className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-1">
              {portfolioConfig.experience.length}+
            </div>
            <div className="text-[12px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70">
              Experience
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8 mx-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.div 
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {[...portfolioConfig.skills.technical, ...portfolioConfig.skills.tools].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/40 rounded-[15px] px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
          >
            <span className="text-[14px] font-['Gilroy:Medium',_sans-serif] text-[#000000]">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

// Projects Page Component
function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fcff] to-[#e3f2f9] pt-20">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}

function ProjectsHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#aecfdc] to-[#aecfdc]/80 rounded-[30px] p-8 mx-4 mt-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div>
          <h1 className="text-[32px] sm:text-[40px] font-['Gilroy:Bold',_sans-serif] text-[#000000] leading-tight mb-2">
            My Projects
          </h1>
          <p className="text-[16px] font-['Gilroy:Regular',_sans-serif] text-[#000000] max-w-[300px]">
            Explore my portfolio of web applications and digital solutions.
          </p>
        </div>
        <motion.div 
          className="absolute top-4 right-4"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <FlowerIcon />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function ProjectsList() {
  return (
    <div className="px-4 pb-8">
      {portfolioConfig.projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

interface ProjectType {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image?: string;
  link?: string;
  date: string;
  category: string;
  tags: string[];
  status: string;
}

function ProjectCard({ project, index }: { project: ProjectType, index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
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
            <h3 className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[28px]">
              {project.name}
            </h3>
            <span className={`px-3 py-1 rounded-full text-[12px] font-['Gilroy:Medium',_sans-serif] ${
              project.status === 'Completed' ? 'bg-green-100 text-green-800' :
              project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
              project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {project.status}
            </span>
          </div>
          
          <p className="text-[16px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-80 mb-3">
            {project.subtitle}
          </p>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "60px" }}
            className="overflow-hidden"
          >
            <p className="text-[14px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[12px] font-['Gilroy:Medium',_sans-serif] text-[#aecfdc] hover:text-[#aecfdc]/80 mt-2 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>

        <div className="text-[14px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-60 ml-4">
          {project.date}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string, tagIndex: number) => (
          <span 
            key={tagIndex}
            className="px-3 py-1 bg-white/40 rounded-[12px] text-[12px] font-['Gilroy:Medium',_sans-serif] text-[#000000]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Image */}
      {project.image && (
        <motion.div 
          className="mb-6 rounded-[20px] overflow-hidden h-48"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.name}
            width={400}
            height={200}
          />
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {project.link && (
          <motion.button
            onClick={() => window.open(project.link, '_blank')}
            className="bg-[#aecfdc] hover:bg-[#aecfdc]/90 rounded-[20px] px-6 py-3 font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[14px] flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project <ExternalLink size={14} />
          </motion.button>
        )}
        <motion.button
          className="bg-white/40 hover:bg-white/50 rounded-[20px] px-6 py-3 font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[14px] flex items-center gap-2 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={14} /> Code
        </motion.button>
      </div>
    </motion.div>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fcff] to-[#e3f2f9] pt-20">
      <AboutHeader />
      <AboutContent />
    </div>
  );
}

function AboutHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#aecfdc] to-[#aecfdc]/80 rounded-[30px] p-8 mx-4 mt-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div>
          <h1 className="text-[32px] sm:text-[40px] font-['Gilroy:Bold',_sans-serif] text-[#000000] leading-tight mb-2">
            {portfolioConfig.about.intro}
          </h1>
          <p className="text-[16px] font-['Gilroy:Regular',_sans-serif] text-[#000000] max-w-[300px]">
            {portfolioConfig.about.philosophy}
          </p>
        </div>
        <motion.div 
          className="absolute top-4 right-4"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <FlowerIcon />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function AboutContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div className="px-4 pb-8 space-y-6">
      {/* Specialties */}
      <motion.div 
        ref={ref}
        className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-6">
          What I Do
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {portfolioConfig.about.specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="bg-white/40 rounded-[20px] p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-[32px] mb-3">{specialty.icon}</div>
              <h3 className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[16px] mb-2">
                {specialty.title}
              </h3>
              <p className="text-[12px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <ExperienceSection />
    </div>
  );
}

function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-6">
        Experience
      </h2>
      <div className="space-y-6">
        {portfolioConfig.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-[#aecfdc] pl-6 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-[#aecfdc] rounded-full"></div>
            <h3 className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[18px] mb-1">
              {exp.title}
            </h3>
            <p className="text-[14px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-80 mb-1">
              {exp.company}
            </p>
            <p className="text-[12px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-60 mb-3">
              {exp.duration}
            </p>
            <p className="text-[14px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 mb-3">
              {exp.description}
            </p>
            {exp.achievements && (
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-[12px] font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 flex items-start gap-2">
                    <span className="text-[#aecfdc] mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Contact Page Component
function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fcff] to-[#e3f2f9] pt-20">
      <ContactHeader />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

function ContactHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-br from-[#aecfdc] to-[#aecfdc]/80 rounded-[30px] p-8 mx-4 mt-4 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div>
          <h1 className="text-[32px] sm:text-[40px] font-['Gilroy:Bold',_sans-serif] text-[#000000] leading-tight mb-2">
            Let&apos;s Connect
          </h1>
          <p className="text-[16px] font-['Gilroy:Regular',_sans-serif] text-[#000000] max-w-[300px]">
            Ready to bring your ideas to life? Let&apos;s discuss how we can work together.
          </p>
        </div>
        <motion.div 
          className="absolute top-4 right-4"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <FlowerIcon />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    alert('Message sent successfully!');
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8 mx-4 mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-6">
        Send a Message
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-4 bg-white/40 rounded-[20px] border border-white/20 placeholder-[#000000]/50 text-[#000000] font-['Gilroy:Regular',_sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#aecfdc] focus:border-transparent"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-4 bg-white/40 rounded-[20px] border border-white/20 placeholder-[#000000]/50 text-[#000000] font-['Gilroy:Regular',_sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#aecfdc] focus:border-transparent"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full p-4 bg-white/40 rounded-[20px] border border-white/20 placeholder-[#000000]/50 text-[#000000] font-['Gilroy:Regular',_sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#aecfdc] focus:border-transparent resize-none"
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#aecfdc] hover:bg-[#aecfdc]/90 disabled:bg-[#aecfdc]/50 rounded-[20px] px-6 py-4 font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[16px] flex items-center justify-center gap-2 transition-all duration-300"
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-[#000000] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              Sending...
            </>
          ) : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

function ContactInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div className="px-4 pb-8 space-y-4">
      {/* Contact Details */}
      <motion.div 
        ref={ref}
        className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-6">
          Get in Touch
        </h2>
        
        <div className="space-y-4">
          <a 
            href={`mailto:${portfolioConfig.contact.email}`}
            className="flex items-center gap-4 p-4 bg-white/40 rounded-[20px] hover:bg-white/50 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[#aecfdc] rounded-full flex items-center justify-center">
              <Mail size={20} className="text-[#000000]" />
            </div>
            <div>
              <div className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[16px]">Email</div>
              <div className="font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 text-[14px]">
                {portfolioConfig.contact.email}
              </div>
            </div>
          </a>
          
          {portfolioConfig.contact.phone && (
            <a 
              href={`tel:${portfolioConfig.contact.phone}`}
              className="flex items-center gap-4 p-4 bg-white/40 rounded-[20px] hover:bg-white/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#aecfdc] rounded-full flex items-center justify-center">
                <Phone size={20} className="text-[#000000]" />
              </div>
              <div>
                <div className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[16px]">Phone</div>
                <div className="font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 text-[14px]">
                  {portfolioConfig.contact.phone}
                </div>
              </div>
            </a>
          )}
          
          <div className="flex items-center gap-4 p-4 bg-white/40 rounded-[20px]">
            <div className="w-12 h-12 bg-[#aecfdc] rounded-full flex items-center justify-center">
              <MapPin size={20} className="text-[#000000]" />
            </div>
            <div>
              <div className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[16px]">Location</div>
              <div className="font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 text-[14px]">
                {portfolioConfig.contact.location}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-[#e3f2f9] to-[#e3f2f9]/70 rounded-[30px] p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-[24px] font-['Gilroy:Bold',_sans-serif] text-[#000000] mb-6">
        Follow Me
      </h2>
      
      <div className="space-y-3">
        {portfolioConfig.social.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/40 rounded-[20px] hover:bg-white/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#aecfdc] rounded-full flex items-center justify-center">
                <span className="font-['Gilroy:Bold',_sans-serif] text-[#000000] text-[16px]">
                  {social.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-['Gilroy:Medium',_sans-serif] text-[#000000] text-[16px]">
                  {social.name}
                </div>
                {social.handle && (
                  <div className="font-['Gilroy:Regular',_sans-serif] text-[#000000] opacity-70 text-[14px]">
                    {social.handle}
                  </div>
                )}
              </div>
            </div>
            <ExternalLink size={16} className="text-[#000000] opacity-60" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

// Main Mobile App Component
export default function MobileApp() {
  const [currentPage, setCurrentPage] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = ['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'];

  const renderPage = () => {
    switch (currentPage) {
      case 'PROJECTS':
        return <ProjectsPage />;
      case 'ABOUT':
        return <AboutPage />;
      case 'CONTACT':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fcff] relative">
      {/* Header */}
      <motion.div 
        className="fixed top-0 left-0 right-0 bg-[#f9fcff]/90 backdrop-blur-md z-50 px-4 py-4 border-b border-[#e3f2f9]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-[20px] font-['Gilroy:Bold',_sans-serif] text-[#000000]"
            whileHover={{ scale: 1.05 }}
          >
            {portfolioConfig.personal.firstName}
          </motion.h1>
          
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 bg-[#e3f2f9] hover:bg-[#aecfdc] rounded-full flex items-center justify-center transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-[#000000]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-[#000000]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 bg-[#e3f2f9]/95 backdrop-blur-xl z-50 rounded-[20px] p-4 border border-white/20"
            >
              <div className="space-y-2">
                {pages.map((page, index) => (
                  <motion.button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-[16px] font-['Gilroy:Medium',_sans-serif] text-[16px] transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-[#aecfdc] text-[#000000] shadow-lg'
                        : 'text-[#000000] hover:bg-white/40'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}