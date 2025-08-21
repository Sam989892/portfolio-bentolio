"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Tag, Code, Award, Globe, Palette, Layout, Settings, Eye } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

interface ProjectPageClientProps {
  project: typeof portfolioConfig.projects[0];
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const router = useRouter();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [viewMode, setViewMode] = useState<'original' | 'themed' | 'bento'>('themed'); // Default to themed to match main app
  const [showControls, setShowControls] = useState(true);

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

  // Helper function to get card styling based on view mode
  const getCardStyles = () => {
    switch (viewMode) {
      case 'themed':
        return 'bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]';
      case 'bento':
        return 'bg-white/25 backdrop-blur-[10px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={
      viewMode === 'themed' || viewMode === 'bento' ? "min-h-screen relative" : 
      "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    }>
      {/* Background - Use same as main app for themed and bento */}
      {(viewMode === 'themed' || viewMode === 'bento') && (
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
      )}
      {/* Testing Controls */}
      {showControls && (
        <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Testing Controls</span>
            <button 
              onClick={() => setShowControls(false)}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          
          {/* View Mode Tabs */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-2">Layout & Theme:</p>
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setViewMode('themed')}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  viewMode === 'themed' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Palette className="w-3 h-3 inline mr-1" />
                Themed
              </button>
              <button
                onClick={() => setViewMode('bento')}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  viewMode === 'bento' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Layout className="w-3 h-3 inline mr-1" />
                Bento Grid
              </button>
              <button
                onClick={() => setViewMode('original')}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  viewMode === 'original' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Settings className="w-3 h-3 inline mr-1" />
                Original
              </button>
            </div>
          </div>
          
        </div>
      )}
      
      {/* Show Controls Button (when hidden) */}
      {!showControls && (
        <button
          onClick={() => setShowControls(true)}
          className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-lg rounded-full p-3 shadow-xl hover:bg-white transition-colors"
        >
          <Eye className="w-4 h-4" />
        </button>
      )}

      {/* Enhanced Header/Navbar */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`sticky top-0 z-40 ${
          viewMode === 'themed' || viewMode === 'bento' ? 
            "bg-white/80 backdrop-blur-[20px] border-b border-white/50 shadow-lg" : 
            "bg-white shadow-sm border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Back Button */}
            <motion.button
              onClick={() => router.back()}
              className={`group flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
                viewMode === 'themed' || viewMode === 'bento' ? 
                  "text-purple-800 hover:text-purple-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50" :
                  "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium text-lg">Back to Portfolio</span>
            </motion.button>

            {/* Project Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <motion.div
                className={`px-4 py-2 rounded-xl font-medium ${
                  viewMode === 'themed' || viewMode === 'bento' ? 
                    "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200" :
                    "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200"
                }`}
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    viewMode === 'themed' || viewMode === 'bento' ? 
                      "text-purple-700 hover:text-purple-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border border-purple-200" :
                      "text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border border-gray-200"
                  }`}
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
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    viewMode === 'themed' || viewMode === 'bento' ? 
                      "text-purple-700 hover:text-purple-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50" :
                      "text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
                  }`}
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
        {viewMode === 'bento' ? (
          /* Simplified Clean Bento Grid */
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
        ) : (
          /* Original Layout */
          <>
          {/* Project Hero with Live Preview */}
          {/* Project Hero with Live Preview */}
          <div className={`${getCardStyles()} rounded-2xl shadow-xl overflow-hidden mb-8`}>
            <div className={`p-6 ${
              viewMode === 'themed' 
                ? 'border-b border-white/30' 
                : 'border-b border-gray-200'
            }`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-800">
                {project.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                {project.subtitle}
              </p>
            </div>
            
            {/* Browser-Style Live Website Preview */}
            {project.link ? (
              <div className="relative">
                {/* Browser Frame */}
                <div className="bg-gray-200 rounded-t-xl p-3 border-b border-gray-300">
                  <div className="flex items-center gap-2">
                    {/* Browser controls */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* Address bar */}
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border">
                        <span className="text-green-600">🔒</span> {project.link}
                      </div>
                    </div>
                    {/* Refresh button */}
                    <button className="p-1 hover:bg-gray-300 rounded">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="aspect-video bg-gray-100 relative group rounded-b-xl overflow-hidden">
                  {!showFallback ? (
                    <>
                      {/* Loading overlay */}
                      {!iframeLoaded && !iframeError && (
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading live preview...</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Iframe */}
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
                    /* Fallback Preview with Project Screenshot */
                    <div className="w-full h-full bg-white relative overflow-hidden">
                      {/* Project Image/Screenshot */}
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover object-top"
                        />
                      )}
                      
                      {/* Subtle overlay for click indication */}
                      <div className="absolute inset-0 backdrop-blur-sm bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white bg-opacity-95 rounded-xl p-4 shadow-xl">
                          <div className="flex items-center gap-3">
                            <Globe className="w-6 h-6 text-blue-600" />
                            <span className="text-gray-900 font-medium">Click to visit live website</span>
                            <ExternalLink className="w-4 h-4 text-gray-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Click overlay for interaction */}
                  <div 
                    className="absolute inset-0 bg-transparent cursor-pointer group"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {/* Hover overlay */}
                    {!showFallback && (
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                        <div className="transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="bg-white rounded-xl p-6 shadow-2xl text-center max-w-sm mx-4">
                            <div className="mb-4">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <ExternalLink className="w-8 h-8 text-blue-600" />
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Visit Live Website
                              </h3>
                              <p className="text-gray-600 text-sm">
                                Click to open the full website in a new tab
                              </p>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                              <ExternalLink className="w-4 h-4" />
                              Open Website
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Corner indicator */}
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-70 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                </div>
                
                {/* Interactive Notice */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-800">
                        <strong>Live Website Preview:</strong> {showFallback ? 
                          "Some websites prevent embedding for security. Click the preview above to visit the live site." :
                          "The actual project is loading above. Click anywhere on the preview to open it in a new tab for full interaction."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 relative">
                <div className="absolute inset-0 backdrop-blur-md bg-gray-900/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Live Preview Unavailable</h2>
                    <p className="text-lg opacity-90">Project details available below</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className={`${getCardStyles()} rounded-2xl p-8 shadow-lg`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-600" />
                  Project Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technical Implementation */}
              <div className={`${getCardStyles()} rounded-2xl p-8 shadow-lg`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How It Was Built
                </h2>
                <div className="prose max-w-none text-gray-700">
                  {project.category === "Web Development" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Technical Architecture</h3>
                      <p className="mb-4">
                        This project was built using modern web development technologies with a focus on responsive design and user experience. 
                        The implementation follows best practices in frontend development including semantic HTML, CSS Grid/Flexbox layouts, and progressive enhancement.
                      </p>
                      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Responsive design that works across all device sizes</li>
                        <li>Interactive UI elements with smooth animations</li>
                        <li>Optimized performance and accessibility standards</li>
                        <li>Cross-browser compatibility</li>
                      </ul>
                    </div>
                  )}
                  
                  {project.category === "E-Commerce" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Full-Stack Architecture</h3>
                      <p className="mb-4">
                        Built as a complete e-commerce solution with React.js frontend and RESTful API backend. 
                        The architecture emphasizes modularity, scalability, and maintainable code structure using object-oriented programming principles.
                      </p>
                      <h3 className="text-xl font-semibold mb-3">Core Functionality</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Product catalog with dynamic filtering and sorting</li>
                        <li>Shopping cart with real-time updates</li>
                        <li>User authentication and session management</li>
                        <li>Responsive checkout process</li>
                        <li>Admin dashboard for inventory management</li>
                      </ul>
                    </div>
                  )}
                  
                  {project.category === "Data Structures & Algorithms" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Algorithm Implementation</h3>
                      <p className="mb-4">
                        Interactive visualization tool demonstrating the efficiency of advanced sorting algorithms. 
                        Implemented multiple algorithms with comprehensive performance analysis and comparative benchmarking.
                      </p>
                      <h3 className="text-xl font-semibold mb-3">Performance Analysis</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Quick Sort: O(n log n) average case performance</li>
                        <li>Merge Sort: Stable sorting with guaranteed O(n log n)</li>
                        <li>Heap Sort: In-place sorting with O(n log n) complexity</li>
                        <li>Comparative analysis showing 40% improvement over O(n²) algorithms</li>
                        <li>Real-time visualization of sorting process</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Experience the Project */}
              {project.link && (
                <div className={`${getCardStyles()} rounded-2xl p-8 shadow-lg`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Experience the Full Project
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The live website is embedded above so you can see it in action. For the complete experience with full functionality, responsive design, and optimal performance, visit the live site.
                    </p>
                    <div className="text-center">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Visit Live Website
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className={`${getCardStyles()} rounded-2xl p-6 shadow-lg`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Completed</p>
                      <p className="font-semibold">{project.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Category</p>
                      <p className="font-semibold">{project.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className={`${getCardStyles()} rounded-2xl p-6 shadow-lg`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* More Projects */}
              <div className={`${getCardStyles()} rounded-2xl p-6 shadow-lg`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">More Projects</h3>
                <div className="space-y-3">
                  {portfolioConfig.projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 2)
                    .map((otherProject) => (
                      <Link
                        key={otherProject.id}
                        href={`/projects/${otherProject.id}`}
                        className={`block p-4 border ${
                          viewMode === 'themed' 
                            ? 'border-white/30 hover:border-blue-300/50 hover:bg-white/20' 
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        } rounded-lg transition-colors`}
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {otherProject.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {otherProject.category}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
          </>
        )}
        </motion.div>
      </div>
    </div>
  );
}