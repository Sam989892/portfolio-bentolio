import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import { portfolioConfig } from "@/config/portfolio";

const pages = {
  home: "Home",
  projects: "Projects", 
  about: "About",
  contact: "Contact"
};

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
          className="p-2 rounded-full hover:bg-[#aecfdc]/20 transition-colors"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
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
        <nav className="flex flex-col p-4 space-y-4 font-light text-[#1d1d1f] text-[16px] uppercase">
          {Object.entries(pages).map(([key, label], index) => (
            <motion.button
              key={key}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavigation(key)}
              className={`text-left transition-colors ${
                currentPage === key 
                  ? 'text-[#3B82F6] font-medium' 
                  : 'hover:text-[#3B82F6]'
              }`}
            >
              {label}
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <PageTransition key="home">
            <HomePage />
          </PageTransition>
        );
      case 'projects':
        return (
          <PageTransition key="projects">
            <ProjectsPage />
          </PageTransition>
        );
      case 'about':
        return (
          <PageTransition key="about">
            <AboutPage />
          </PageTransition>
        );
      case 'contact':
        return (
          <PageTransition key="contact">
            <ContactPage />
          </PageTransition>
        );
      default:
        return (
          <PageTransition key="home">
            <HomePage />
          </PageTransition>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fcff] relative">
      <FloatingElements />
      <MobileNav currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
}