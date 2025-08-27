"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Tag, Code, Award, Globe } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

interface ProjectPageClientProps {
  project: typeof portfolioConfig.projects[0];
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const router = useRouter();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Reset states when project changes
    setIframeLoaded(false);
    setIframeError(false);
    setShowFallback(false);
    
    // Set a shorter timeout to show fallback if iframe doesn't load quickly
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        console.log('Iframe failed to load within timeout, showing fallback');
        setShowFallback(true);
      }
    }, 2000); // 2 seconds timeout for faster fallback

    return () => clearTimeout(timer);
  }, [project.link, iframeLoaded]);

  // Card styling for bento layout
  const getCardStyles = () => {
    return 'bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]';
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: "url('/dreamy-fabrica-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Enhanced Header/Navbar */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-[20px] border-b border-white/50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Back Button */}
            <motion.button
              onClick={() => router.back()}
              className="group flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 text-purple-800 hover:text-purple-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium text-lg">Back to Portfolio</span>
            </motion.button>

            {/* Project Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <motion.div
                className="px-4 py-2 rounded-xl font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Project Details
              </motion.div>
              
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 text-purple-700 hover:text-purple-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border border-purple-200"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
            </nav>

            {/* Mobile Menu - Project Actions */}
            <div className="md:hidden">
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-purple-700 hover:text-purple-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        {/* Simplified Clean Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Hero Card - Main Project Info */}
            <motion.div 
              className={`${getCardStyles()} rounded-2xl p-8 lg:col-span-2 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full"></div>
              
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {project.name}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{project.tags.length} Technologies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  )}
                  <button 
                    onClick={() => router.back()}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-purple-200 text-purple-700 rounded-xl hover:bg-purple-50 transition-all font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div 
              className={`${getCardStyles()} rounded-2xl p-6 flex flex-col relative overflow-hidden`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg rotate-12"></div>
              
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Tech Stack</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Live Preview Card */}
            <motion.div 
              className={`${getCardStyles()} rounded-2xl overflow-hidden lg:col-span-3 relative`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {project.link ? (
                <div className="aspect-video bg-gray-100 relative group">
                  {!showFallback ? (
                    <>
                      {!iframeLoaded && !iframeError && (
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading live preview...</p>
                          </div>
                        </div>
                      )}
                      <iframe
                        src={project.link}
                        className={`w-full h-full border-0 transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                        title={`Live preview of ${project.name}`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                        onLoad={() => {
                          setIframeLoaded(true);
                          setIframeError(false);
                        }}
                        onError={() => {
                          setIframeError(true);
                          setShowFallback(true);
                        }}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-white relative overflow-hidden">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover object-top"
                        />
                      )}
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 bg-transparent cursor-pointer group"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white rounded-xl p-6 shadow-2xl text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <ExternalLink className="w-6 h-6 text-purple-600" />
                          </div>
                          <p className="text-gray-900 font-medium">Click to visit live site</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Project Preview</h2>
                    <p className="opacity-90">Live demo unavailable</p>
                  </div>
                </div>
              )}
            </motion.div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}