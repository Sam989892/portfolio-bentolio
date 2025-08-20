"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Hero with Live Preview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {project.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
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
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-600" />
                  Project Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technical Implementation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                <div className="bg-white rounded-2xl p-8 shadow-lg">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">More Projects</h3>
                <div className="space-y-3">
                  {portfolioConfig.projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 2)
                    .map((otherProject) => (
                      <Link
                        key={otherProject.id}
                        href={`/projects/${otherProject.id}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
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
        </motion.div>
      </div>
    </div>
  );
}