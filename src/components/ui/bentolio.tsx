"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ArrowRight, Send, Download } from "lucide-react";

interface Project {
  id?: number;
  name: string;
  image?: string;
  link?: string;
}

interface NameProps {
  first: string;
  last: string;
}

interface BentolioProps {
  bg?: string;
  secondary?: string;
  name?: NameProps;
  title?: string;
  secondaryTextColor?: string;
  curvedText?: string;
  description?: string;
  projects?: Project[];
  profileImage?: string;
  contactLink?: string;
  socialLinks?: {
    name: string;
    url: string;
  }[];
  navLinks?: string[];
  about?: {
    intro: string;
    philosophy: string;
    approach: string;
    specialties: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  skills?: {
    technical: string[];
    dsa: string[];
    aiml: string[];
    tools: string[];
    languages: string[];
  };
}

// Using XL layout as the final optimized layout

// Optimized XL layout configuration
const config = {
  containerClass: "relative flex flex-col gap-5 mx-auto p-5 sm:p-7 md:p-9 w-full max-w-[1800px]",
  headerClass: "rounded-[20px] w-full flex-shrink-0",
  headerPadding: "flex sm:flex-row flex-col justify-between items-center p-5 sm:p-7 md:p-9 rounded-[20px] w-full",
  mainGridGap: "gap-5 grid grid-cols-1 lg:grid-cols-9 flex-1 min-h-0",
  mainTitleText: "text-5xl sm:text-6xl md:text-7xl leading-tight",
  navText: "text-lg sm:text-xl md:text-2xl",
  descriptionText: "text-lg sm:text-xl",
  projectText: "text-3xl sm:text-4xl md:text-5xl",
  contactText: "text-5xl sm:text-6xl md:text-7xl",
  socialText: "text-base sm:text-lg md:text-xl",
  borderRadius: "rounded-[20px]",
  componentPadding: "p-5 sm:p-7 md:p-9",
  iconSizes: "w-8 sm:w-9 md:w-11",
  imageHeights: "min-h-[400px] sm:min-h-[500px] md:min-h-[550px]"
};


const flipAnimation = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
  duration: 0.8,
};

const staticAnimation = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  duration: 0.6,
};

export default function Bentolio({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bg = "#e3f2f9",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  secondary = "#a855f7", 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  secondaryTextColor = "#1d1d1f",
  name,
  title,
  curvedText,
  description,
  projects,
  profileImage = "/portrait.webp",
  socialLinks,
  contactLink = "#",
  navLinks,
  about,
  skills,
}: BentolioProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
  

  // Navigation hover animation variants
  const navHoverVariants = {
    initial: { 
      scale: 1,
      y: 0,
      opacity: 1
    },
    hover: { 
      scale: 1.05,
      y: -2,
      opacity: 0.8,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17
      }
    }
  };

  // Enhanced mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { 
        duration: 0.2
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3, 
        staggerChildren: 0.08,
        delayChildren: 0.1
      },
    },
  };

  const mobileItemVariants = {
    closed: { 
      opacity: 0, 
      x: -15,
      scale: 0.9
    },
    open: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    },
  };

  // Handle navigation click
  const handleNavClick = (navItem: string) => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
    setCurrentPage(navItem);
    setIsMobileMenuOpen(false);
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '', projectType: '', budget: '', timeline: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form input changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if we're on desktop (lg and above)
  // const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
  

  // Get page-specific content
  const getPageContent = () => {
    switch (currentPage) {
      case 'PROJECTS':
        return {
          title: "Building Digital Solutions That Matter",
          curvedText: "Digital",
          description: "Explore my portfolio of web applications, mobile apps, and digital experiences. Each project represents a unique challenge solved with modern technologies and user-centered design principles.",
          projects: projects,
          contactText: "Commission a Project",
          contactSubtext: "First 3 small projects are free!"
        };
      case 'ABOUT':
        return {
          title: about?.intro || "Full Stack Developer with Passion for Innovation",
          curvedText: "Innovation",
          description: about?.philosophy || "I'm a passionate full-stack developer with 3+ years of experience creating innovative web applications. I specialize in React, Next.js, and Node.js, focusing on user-centered design and clean, maintainable code.",
          projects: about?.specialties?.map(specialty => ({
            name: specialty.title,
            link: "#"
          })) || [
            { name: "Skills & Expertise", link: "#" },
            { name: "Experience", link: "#" },
            { name: "Education", link: "#" },
            { name: "Certifications", link: "#" },
          ],
          contactText: "Download Resume",
          contactSubtext: "Get my latest resume"
        };
      case 'CONTACT':
        return {
          title: "Let's Create Something Amazing Together",
          curvedText: "Amazing",
          description: "Ready to bring your ideas to life? I'm available for freelance projects, collaborations, and full-time opportunities. Let's discuss how we can work together to create exceptional digital experiences.",
          projects: socialLinks?.slice(0, 4).map(social => ({
            name: social.name,
            link: social.url
          })) || [],
          contactText: "Send Message",
          contactSubtext: "Start a conversation"
        };
      default: // HOME
        return {
          title: title,
          curvedText: curvedText,
          description: description,
          projects: projects,
          contactText: "Contact me",
          contactSubtext: "Have some questions?"
        };
    }
  };

  const pageContent = getPageContent();

  return (
      <div className={`${config.containerClass}`} style={{ color: "#1d1d1f" }}>
        {/* Static Header - No animations on page change */}
        <header className={config.headerClass}>
          <motion.div
            style={{ 
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
            }}
            initial={isInitialLoad ? { scale: 0 } : false}
            animate={{ scale: 1 }}
            transition={isInitialLoad ? { ...staticAnimation, delay: 0 } : { duration: 0 }}
            className={config.headerPadding}
          >
            <button 
              onClick={() => handleNavClick('HOME')}
              className="mb-2 sm:mb-0 font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-70 transition-opacity duration-200 cursor-pointer" 
              style={{ color: "#1d1d1f" }}
            >
              <i>{name?.first}</i>{" "}
              <span className="font-medium">{name?.last}</span>
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {navLinks?.map((link) => (
                <motion.button
                  key={link}
                  variants={navHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(link)}
                  className={`font-light ${config.navText} relative px-3 py-2 rounded-lg ${
                    currentPage === link 
                      ? 'text-purple-700 bg-gradient-to-r from-purple-100 to-pink-100' 
                      : 'text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50'
                  } transition-all duration-200 ease-out`}
                >
                  <span className="relative z-10">{link}</span>
                  {currentPage === link && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-100/80 to-pink-100/80 rounded-lg border border-purple-200/50"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="sm:hidden p-3 rounded-xl hover:bg-white/20 active:bg-white/30 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ 
                      duration: 0.2,
                    }}
                  >
                    <X size={26} color="#1d1d1f" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ 
                      duration: 0.2,
                    }}
                  >
                    <Menu size={26} color="#1d1d1f" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="sm:hidden fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <motion.div
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="sm:hidden absolute top-full left-0 right-0 mt-3 mx-4 z-50 shadow-2xl border border-white/30 overflow-hidden backdrop-blur-xl"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    borderRadius: '20px'
                  }}
                >
                  <div className="p-2">
                    {navLinks?.map((link) => (
                      <motion.button
                        key={link}
                        variants={mobileItemVariants}
                        onClick={() => handleNavClick(link)}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-between w-full text-left p-4 rounded-2xl transition-all duration-200 mb-1 ${
                          currentPage === link
                            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 shadow-lg scale-[1.02]'
                            : 'text-gray-700 hover:bg-white/40 active:bg-white/60'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            currentPage === link 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-150' 
                              : 'bg-gray-300 scale-100'
                          }`} />
                          <span className={`font-semibold text-lg ${currentPage === link ? 'text-purple-700' : 'text-gray-800'}`}>
                            {link}
                          </span>
                        </div>
                        <motion.div
                          animate={{ 
                            x: currentPage === link ? 2 : 0,
                            opacity: currentPage === link ? 1 : 0.6
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight
                            size={20}
                            className={`transition-all duration-200 ${
                              currentPage === link ? 'text-purple-600' : 'text-gray-500'
                            }`}
                            strokeWidth={2.5}
                          />
                        </motion.div>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-30" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content with 3D Flip Animations */}
        <div className={config.mainGridGap}>
          <div className={`${config.mainGridGap.split('grid-cols-1 lg:grid-cols-9')[0]}grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:col-span-6 h-full`}>
            {/* Title Section with 3D Flip */}
            <div className={`sm:col-span-2 lg:col-span-4 ${config.borderRadius} h-full`} style={{ perspective: "1000px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-section-${currentPage}`}
                  initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : { rotateY: -90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={isInitialLoad ? {} : { rotateY: 90 }}
                  transition={isInitialLoad ? { ...staticAnimation, delay: 0.1 } : flipAnimation}
                  style={{ 
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className={`flex flex-col justify-between ${config.componentPadding} ${config.borderRadius} h-full`}
                >
                  <div className="flex justify-end w-full">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ rotate: { duration: 20, repeat: Infinity } }}
                      className="m-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32"
                      style={{
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <Image
                        src="https://atomix-ui.vercel.app/bentolio/svg/flower.svg"
                        alt="flower"
                        width={80}
                        height={80}
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: 'hue-rotate(280deg) saturate(1.2)' }}
                      />
                    </motion.div>
                  </div>
                  <p 
                    className={`m-0 w-full sm:w-[90%] font-bold ${config.mainTitleText}`} 
                    style={{ color: "#1d1d1f" }}
                  >
                    {pageContent.title?.split(pageContent.curvedText || '').map((part, i) => (
                      <React.Fragment key={`title-part-${currentPage}-${i}`}>
                        {i === 0 ? (
                          part
                        ) : (
                          <React.Fragment key={`curved-text-${currentPage}-${i}`}>
                            <i className="font-light">{pageContent.curvedText}</i>
                            {part}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  
                  {/* Skills capsules in the Building Digital Dreams card - only show on ABOUT page */}
                  {currentPage === 'ABOUT' && skills && (
                    <div className="mt-4 sm:mt-5 md:mt-6 w-full sm:w-[90%]">
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {skills.technical?.slice(0, 6).map((skill, index) => (
                          <span
                            key={`technical-${index}`}
                            className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium border border-purple-200 hover:from-purple-200 hover:to-pink-200 transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                        {skills.dsa?.slice(0, 4).map((dsa, index) => (
                          <span
                            key={`dsa-${index}`}
                            className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs sm:text-sm font-medium border border-green-200 hover:from-green-200 hover:to-emerald-200 transition-all duration-200"
                          >
                            {dsa}
                          </span>
                        ))}
                        {skills.aiml?.slice(0, 3).map((aiml, index) => (
                          <span
                            key={`aiml-${index}`}
                            className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium border border-orange-200 hover:from-orange-200 hover:to-amber-200 transition-all duration-200"
                          >
                            {aiml}
                          </span>
                        ))}
                        {skills.tools?.slice(0, 3).map((tool, index) => (
                          <span
                            key={`tools-${index}`}
                            className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium border border-blue-200 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Consistent Portrait */}
            <div className={`sm:col-span-2 lg:col-span-2 ${config.borderRadius}`}>
              <motion.div
                key="profile-image"
                initial={isInitialLoad ? { translateX: -40, translateY: 40, opacity: 0 } : false}
                animate={{ translateX: 0, translateY: 0, opacity: 1 }}
                transition={isInitialLoad ? { ...staticAnimation, delay: 0.3 } : { duration: 0 }}
                className="w-full h-[500px] sm:h-[550px] md:h-[600px]"
              >
                <Image
                  src={profileImage}
                  alt="profile"
                  width={330}
                  height={476}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
                  className={`m-0 ${config.borderRadius} w-full h-full object-cover`}
                />
              </motion.div>
            </div>

            {/* Description Section with 3D Flip */}
            <div className="sm:col-span-1 lg:col-span-3" style={{ perspective: "1000px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`description-section-${currentPage}`}
                  initial={isInitialLoad ? { opacity: 0, scale: 0.8 } : { rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={isInitialLoad ? {} : { rotateY: 90 }}
                  transition={isInitialLoad ? { ...staticAnimation, delay: 0.4 } : { ...flipAnimation, delay: 0.1 }}
                  style={{ 
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className={`flex flex-col justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 ${config.componentPadding} ${config.borderRadius} h-full`}
                >
                  <Image
                    src="https://atomix-ui.vercel.app/bentolio/svg/circle.svg"
                    alt="circle"
                    width={32}
                    height={32}
                    loading="lazy"
                    className={config.iconSizes}
                    style={{ filter: 'hue-rotate(280deg) saturate(1.2)' }}
                  />
                  <p className={`m-0 w-full sm:w-[90%] font-light ${config.descriptionText}`}>
                    {pageContent.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Contact Section with 3D Flip */}
            <div className="sm:col-span-1 lg:col-span-3" style={{ perspective: "1000px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`contact-section-${currentPage}`}
                  initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : { rotateY: -90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={isInitialLoad ? {} : { rotateY: 90 }}
                  transition={isInitialLoad ? { ...staticAnimation, delay: 0.5 } : { ...flipAnimation, delay: 0.2 }}
                  style={{ 
                    backgroundImage: "url('/celestials-dark-bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
                    color: "white",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className={`flex flex-col justify-between ${config.componentPadding} ${config.borderRadius} h-full`}
                >
                  {currentPage === 'CONTACT' ? (
                    // Show contact info/stats instead of form when on CONTACT page
                    <div className="flex flex-col justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-full">
                      <div className="flex justify-between items-center w-full">
                        <p className={`w-16 sm:w-20 md:w-24 lg:w-28 font-light ${config.descriptionText} leading-tight`}>
                          Get in touch
                        </p>
                        <Send size={24} className={config.iconSizes} />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <p className={`m-0 font-medium ${config.contactText} mb-2`}>
                          Let&apos;s Connect
                        </p>
                        <p className={`text-sm opacity-80`}>
                          Use the form to send me a message
                        </p>
                      </div>
                    </div>
                  ) : currentPage === 'ABOUT' ? (
                    // Resume Download for ABOUT page
                    <a
                      href="/Madni_Saiyed_.pdf"
                      download="Madni_Saiyed_Resume.pdf"
                      className="flex flex-col justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-full hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                      <div className="flex justify-between items-center w-full">
                        <p className={`w-16 sm:w-20 md:w-24 lg:w-28 font-light ${config.descriptionText} leading-tight`}>
                          {pageContent.contactSubtext}
                        </p>
                        <Download size={24} className={config.iconSizes} />
                      </div>
                      <p className={`m-0 font-medium ${config.contactText}`}>
                        {pageContent.contactText}
                      </p>
                    </a>
                  ) : currentPage === 'PROJECTS' ? (
                    // Commission Project Link
                    <div
                      onClick={() => setCurrentPage('CONTACT')}
                      style={{ textDecoration: "none" }}
                      className="flex flex-col justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-full hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                      <div className="flex justify-between items-center w-full">
                        <p className={`w-16 sm:w-20 md:w-24 lg:w-28 font-light ${config.descriptionText} leading-tight`}>
                          {pageContent.contactSubtext}
                        </p>
                        <ArrowRight size={24} className={config.iconSizes} />
                      </div>
                      <p className={`m-0 font-medium ${config.contactText}`}>
                        {pageContent.contactText}
                      </p>
                    </div>
                  ) : (
                    // Regular Contact Link for other pages - navigate to CONTACT page
                    <div
                      onClick={() => setCurrentPage('CONTACT')}
                      style={{ textDecoration: "none" }}
                      className="flex flex-col justify-between items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 h-full hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                      <div className="flex justify-between items-center w-full">
                        <p className={`w-16 sm:w-20 md:w-24 lg:w-28 font-light ${config.descriptionText} leading-tight`}>
                          {pageContent.contactSubtext}
                        </p>
                        <ArrowRight size={24} className={config.iconSizes} />
                      </div>
                      <p className={`m-0 font-medium ${config.contactText}`}>
                        {pageContent.contactText}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Projects Section / Contact Form (Large) with 3D Flip */}
          <div className={`flex flex-col ${config.mainGridGap.split('grid')[0]}lg:col-span-3 h-full`} style={{ perspective: "1000px" }}>
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`projects-section-${currentPage}`}
                  initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : { rotateY: -90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={isInitialLoad ? {} : { rotateY: 90 }}
                  transition={isInitialLoad ? { ...staticAnimation, delay: 0.6 } : { ...flipAnimation, delay: 0.3 }}
                  style={{ 
                    ...(currentPage === 'CONTACT' ? {
                      backgroundImage: "url('/celestials-dark-bg.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
                      color: "white"
                    } : {
                      background: "rgba(255, 255, 255, 0.25)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                      color: "#1d1d1f"
                    }),
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className={`flex-1 ${config.componentPadding} ${config.borderRadius} h-full`}
                >
                  {currentPage === 'CONTACT' ? (
                    // Large Contact Form for CONTACT page only
                    <form onSubmit={handleFormSubmit} className="flex flex-col h-full gap-6">
                      <div className="flex justify-between items-center w-full">
                        <h2 className={`font-medium ${config.projectText}`}>
                          Send Message
                        </h2>
                        <Send size={32} className={config.iconSizes} />
                      </div>
                      
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={contactForm.name}
                            onChange={handleFormChange}
                            required
                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                          />
                          
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email *"
                            value={contactForm.email}
                            onChange={handleFormChange}
                            required
                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <select
                            name="projectType"
                            value={contactForm.projectType}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                          >
                            <option value="" className="bg-gray-800 text-white">Project Type</option>
                            <option value="website" className="bg-gray-800 text-white">Website Development</option>
                            <option value="webapp" className="bg-gray-800 text-white">Web Application</option>
                            <option value="mobile" className="bg-gray-800 text-white">Mobile App</option>
                            <option value="ecommerce" className="bg-gray-800 text-white">E-commerce</option>
                            <option value="consulting" className="bg-gray-800 text-white">Consulting</option>
                            <option value="other" className="bg-gray-800 text-white">Other</option>
                          </select>
                          
                          <select
                            name="budget"
                            value={contactForm.budget}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                          >
                            <option value="" className="bg-gray-800 text-white">Budget Range</option>
                            <option value="under-5k" className="bg-gray-800 text-white">Under $5,000</option>
                            <option value="5k-15k" className="bg-gray-800 text-white">$5,000 - $15,000</option>
                            <option value="15k-30k" className="bg-gray-800 text-white">$15,000 - $30,000</option>
                            <option value="30k-plus" className="bg-gray-800 text-white">$30,000+</option>
                            <option value="discuss" className="bg-gray-800 text-white">Let's Discuss</option>
                          </select>
                        </div>
                        
                        <select
                          name="timeline"
                          value={contactForm.timeline}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        >
                          <option value="" className="bg-gray-800 text-white">Project Timeline</option>
                          <option value="asap" className="bg-gray-800 text-white">ASAP</option>
                          <option value="1-month" className="bg-gray-800 text-white">Within 1 Month</option>
                          <option value="3-months" className="bg-gray-800 text-white">1-3 Months</option>
                          <option value="6-months" className="bg-gray-800 text-white">3-6 Months</option>
                          <option value="flexible" className="bg-gray-800 text-white">Flexible</option>
                        </select>
                        
                        <input
                          type="text"
                          name="subject"
                          placeholder="Project Subject *"
                          value={contactForm.subject}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        />
                        
                        <textarea
                          name="message"
                          placeholder="Project Details & Requirements *"
                          value={contactForm.message}
                          onChange={handleFormChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 bg-white/30 hover:bg-white/40 disabled:opacity-50 rounded-2xl font-medium transition-all ${config.descriptionText} flex items-center justify-center gap-3`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </button>

                      {/* Status Messages */}
                      <AnimatePresence>
                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="p-4 bg-green-100/80 text-green-800 rounded-2xl backdrop-blur-sm"
                          >
                            ✅ Message sent successfully! I&apos;ll get back to you soon.
                          </motion.div>
                        )}
                        
                        {submitStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="p-4 bg-red-100/80 text-red-800 rounded-2xl backdrop-blur-sm"
                          >
                            ❌ Failed to send message. Please try again.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  ) : (
                    // Regular Projects Section for all other pages
                    <>
                      {pageContent.projects?.map((project, index) => (
                        <div key={`${currentPage}-project-${index}`}>
                          {index === 0 ? (
                            <React.Fragment>
                              {/* Make entire project card clickable - goes to project page first */}
                              <div
                                onClick={() => {
                                  if ('id' in project && project.id) {
                                    router.push(`/projects/${project.id}`);
                                  } else if (project.link && project.link !== "#") {
                                    window.open(project.link, "_blank");
                                  }
                                }}
                                style={{
                                  color: "#1d1d1f",
                                  cursor: "pointer"
                                }}
                                className="w-full hover:opacity-90 active:opacity-75 active:scale-[0.98] transition-all duration-150"
                              >
                                {/* Project title and arrow */}
                                <div className="flex justify-between items-center w-full mb-2 sm:mb-3 md:mb-4 lg:mb-5">
                                  <p className={`m-0 font-medium ${config.projectText}`}>
                                    {project.name}
                                  </p>
                                  <Image
                                    src="https://atomix-ui.vercel.app/bentolio/svg/arrow.svg"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                    loading="lazy"
                                    className={config.iconSizes}
                                    style={{ filter: 'hue-rotate(280deg) saturate(1.2)' }}
                                  />
                                </div>
                                
                                {/* Browser-style project preview container - now clickable */}
                                <div className={`${config.borderRadius} w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] overflow-hidden hover:scale-[1.02] transition-transform`}>
                                {(currentPage === 'HOME' || currentPage === 'PROJECTS') && (
                                  <div className="w-full h-full">
                                    {/* Browser Frame */}
                                    <div className="bg-gray-200 p-1 sm:p-2 border-b border-gray-300">
                                      <div className="flex items-center gap-1 sm:gap-2">
                                        {/* Browser controls */}
                                        <div className="flex gap-1">
                                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        {/* Address bar */}
                                        <div className="flex-1 mx-1 sm:mx-2">
                                          <div className="bg-white rounded-sm px-1 sm:px-2 py-0.5 text-xs text-gray-600 border">
                                            <span className="text-green-600">🔒</span>
                                            <span className="hidden sm:inline"> {(() => {
                                              if (hoveredProjectIndex !== null && hoveredProjectIndex > 0) {
                                                const hoveredProject = pageContent.projects?.[hoveredProjectIndex];
                                                return hoveredProject?.name || 'project';
                                              }
                                              return 'image' in project ? project.name : 'project';
                                            })()} </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Project preview area */}
                                    <div className="flex-1 bg-gray-100 relative" style={{ height: 'calc(100% - 24px)' }}>
                                      <AnimatePresence mode="wait">
                                        <motion.div
                                          key={hoveredProjectIndex !== null ? `hovered-${hoveredProjectIndex}` : 'default'}
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="w-full h-full"
                                        >
                                          {(() => {
                                            // Show hovered project image if hovering over non-first project
                                            if (hoveredProjectIndex !== null && hoveredProjectIndex > 0) {
                                              const hoveredProject = pageContent.projects?.[hoveredProjectIndex];
                                              if (hoveredProject && 'image' in hoveredProject && hoveredProject.image) {
                                                return (
                                                  <Image
                                                    src={hoveredProject.image}
                                                    alt={hoveredProject.name}
                                                    width={330}
                                                    height={330}
                                                    loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, 330px"
                                                    className="w-full h-full object-cover"
                                                  />
                                                );
                                              }
                                            }
                                            // Default: show first project image
                                            if ('image' in project && project.image) {
                                              return (
                                                <Image
                                                  src={project.image}
                                                  alt={project.name}
                                                  width={330}
                                                  height={330}
                                                  loading="lazy"
                                                  sizes="(max-width: 768px) 100vw, 330px"
                                                  className="w-full h-full object-cover"
                                                />
                                              );
                                            }
                                            return null;
                                          })()}
                                        </motion.div>
                                      </AnimatePresence>
                                    </div>
                                  </div>
                                )}
                                {currentPage === 'ABOUT' && (
                                  <div className={`w-full h-full relative ${config.borderRadius} overflow-hidden group`}>
                                    <Image
                                      src="/compe-winner.webp"
                                      alt="Competition Winner - Best School Website Design"
                                      width={400}
                                      height={300}
                                      loading="lazy"
                                      sizes="(max-width: 768px) 100vw, 400px"
                                      className={`w-full h-full object-cover ${config.borderRadius} transition-transform duration-300 group-hover:scale-105`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent ${config.borderRadius} flex items-end p-4`}>
                                      <div className="text-white">
                                        <p className="text-sm font-bold mb-1">🏆 Competition Winner</p>
                                        <p className="text-xs opacity-90">1st Place among 100+ participants</p>
                                        <p className="text-xs opacity-80">Best School Website Design</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                </div>
                              </div>
                            </React.Fragment>
                          ) : (
                            <div
                              onMouseEnter={() => setHoveredProjectIndex(index)}
                              onMouseLeave={() => setHoveredProjectIndex(null)}
                              onClick={() => {
                                if ('id' in project && project.id) {
                                  router.push(`/projects/${project.id}`);
                                } else if (project.link && project.link !== "#") {
                                  window.open(project.link, "_blank");
                                }
                              }}
                              className="py-3 sm:py-4 md:py-6 lg:py-8 border-t-[2px] cursor-pointer hover:bg-white/20 transition-colors"
                              style={{ borderTopColor: "#a855f7" }}
                            >
                              <p className={`m-0 font-medium ${config.projectText}`}>
                                {project.name}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Social Links with 3D Flip */}
            <div className="flex-shrink-0" style={{ perspective: "1000px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`social-links-${currentPage}`}
                  className={`flex justify-between items-center ${config.componentPadding} ${config.borderRadius} font-light ${config.socialText}`}
                  style={{ 
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  initial={isInitialLoad ? { scale: 0.8, opacity: 0 } : { rotateY: -90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={isInitialLoad ? {} : { rotateY: 90 }}
                  transition={isInitialLoad ? { ...staticAnimation, delay: 0.8 } : { ...flipAnimation, delay: 0.4 }}
                >
                  {socialLinks?.map((social) => (
                    <Link
                      key={social.name}
                      className="m-0 hover:opacity-70 transition-opacity"
                      style={{
                        textDecoration: "none",
                        color: "#1d1d1f"
                      }}
                      href={social.url}
                    >
                      {social.name}
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
    </div>
  );
}