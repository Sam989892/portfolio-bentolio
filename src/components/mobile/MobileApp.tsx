import { useState, useRef } from "react";
import { Menu, X, Home, User, FolderOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import { portfolioConfig } from "@/config/portfolio";

const pages = {
  home: { label: "Home", icon: Home },
  projects: { label: "Projects", icon: FolderOpen }, 
  about: { label: "About", icon: User },
  contact: { label: "Contact", icon: Mail }
};

function PageIndicator({ currentPage }: { currentPage: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30"
    >
      <div className="bg-[#e3f2f9]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#aecfdc]/20">
        <span className="text-xs font-light text-[#1d1d1f]/70 uppercase">
          {pages[currentPage as keyof typeof pages]?.label || currentPage}
        </span>
      </div>
    </motion.div>
  );
}

function FloatingProjectsButton({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) {
  if (currentPage === 'home' || currentPage === 'projects') return null;
  
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onClick={() => onNavigate('projects')}
      className="fixed bottom-20 right-4 z-30 bg-[#3B82F6] text-white p-4 rounded-full shadow-lg hover:bg-[#2563EB] active:scale-95 transition-all"
      whileTap={{ scale: 0.9 }}
    >
      <FolderOpen size={20} />
    </motion.button>
  );
}

function MobileNav({ currentPage, onPageChange }: { currentPage: string; onPageChange: (page: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#e3f2f9]/95 backdrop-blur-md border-b border-[#aecfdc]/20"
    >
      <div className="flex items-center justify-between p-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => handleNavigation('home')}
          className="font-light text-[#1d1d1f] text-[20px] uppercase hover:text-[#3B82F6] transition-colors"
        >
          <span className="font-light italic">{portfolioConfig.personal.firstName}</span>{" "}
          <span className="font-medium">{portfolioConfig.personal.lastName}</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative p-3 bg-[#3B82F6]/10 rounded-xl hover:bg-[#3B82F6]/20 transition-colors border border-[#3B82F6]/20"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={22} className="text-[#3B82F6]" /> : <Menu size={22} className="text-[#3B82F6]" />}
          </motion.div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#3B82F6] rounded-full"></div>
        </motion.button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? "auto" : 0, 
          opacity: isMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-[#aecfdc]/20 bg-[#e3f2f9]/95"
      >
        <nav className="flex flex-col p-4 space-y-1">
          {Object.entries(pages).map(([key, page], index) => (
            <motion.button
              key={key}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavigation(key)}
              className={`text-left p-3 rounded-lg transition-colors ${
                currentPage === key 
                  ? 'bg-[#3B82F6]/10 text-[#3B82F6] font-medium' 
                  : 'hover:bg-[#aecfdc]/20 text-[#1d1d1f]'
              }`}
            >
              <span className="font-light text-[16px] uppercase">{page.label}</span>
            </motion.button>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
}

function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-8 w-4 h-4 bg-[#aecfdc]/30 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-3/4 left-6 w-6 h-6 bg-[#e3f2f9]/40 rounded-full"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 right-4 w-3 h-3 bg-[#aecfdc]/20 rounded-full"
      />
    </div>
  );
}


function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function MobileApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    
    // Immediate scroll for mobile reliability
    const scrollToTop = () => {
      // Method 1: Direct DOM manipulation (fastest)
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
      
      // Method 2: Scroll the container to top
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ 
          behavior: 'instant',
          block: 'start' 
        });
      }
      
      // Method 3: Window scroll as backup
      window.scrollTo(0, 0);
    };

    // Execute immediately
    scrollToTop();
    
    // Also execute on next frame to ensure it works
    requestAnimationFrame(() => {
      scrollToTop();
    });

    // And as a final backup with timeout
    setTimeout(scrollToTop, 50);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <PageTransition key="home">
            <HomePage onNavigate={handlePageChange} />
          </PageTransition>
        );
      case 'projects':
        return (
          <PageTransition key="projects">
            <ProjectsPage onNavigate={handlePageChange} />
          </PageTransition>
        );
      case 'about':
        return (
          <PageTransition key="about">
            <AboutPage onNavigate={handlePageChange} />
          </PageTransition>
        );
      case 'contact':
        return (
          <PageTransition key="contact">
            <ContactPage onNavigate={handlePageChange} />
          </PageTransition>
        );
      default:
        return (
          <PageTransition key="home">
            <HomePage onNavigate={handlePageChange} />
          </PageTransition>
        );
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f9fcff] relative">
      <FloatingElements />
      <MobileNav currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <PageIndicator currentPage={currentPage} />
      <FloatingProjectsButton currentPage={currentPage} onNavigate={handlePageChange} />
    </div>
  );
}