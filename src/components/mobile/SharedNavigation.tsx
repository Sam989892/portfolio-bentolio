import { motion } from "framer-motion";

interface NavigationItem {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

interface SharedNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function SharedNavigation({ currentPage, onNavigate }: SharedNavigationProps) {
  // Define all navigation items
  const allNavItems: NavigationItem[] = [
    {
      key: 'home',
      title: 'Home',
      subtitle: 'Back to start',
      icon: '🏠',
      color: 'from-gray-50 to-gray-100'
    },
    {
      key: 'projects',
      title: 'Projects',
      subtitle: 'View my work',
      icon: '💼',
      color: 'from-blue-50 to-blue-100'
    },
    {
      key: 'about',
      title: 'About',
      subtitle: 'My story',
      icon: '👨‍💻',
      color: 'from-purple-50 to-purple-100'
    },
    {
      key: 'contact',
      title: 'Contact',
      subtitle: 'Get in touch',
      icon: '📬',
      color: 'from-green-50 to-green-100'
    }
  ];

  // Filter out current page and get next logical pages
  const getNavigationItems = (currentPage: string): NavigationItem[] => {
    switch (currentPage) {
      case 'home':
        return allNavItems.filter(item => ['projects', 'about', 'contact'].includes(item.key));
      case 'projects':
        return allNavItems.filter(item => ['about', 'contact', 'home'].includes(item.key));
      case 'about':
        return allNavItems.filter(item => ['contact', 'projects', 'home'].includes(item.key));
      case 'contact':
        return allNavItems.filter(item => ['projects', 'about', 'home'].includes(item.key));
      default:
        return allNavItems.filter(item => item.key !== currentPage);
    }
  };

  const navItems = getNavigationItems(currentPage);

  return (
    <motion.section
      className="mx-4 mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <motion.h3
        className="text-[#1d1d1f] text-lg font-medium mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {currentPage === 'home' ? 'Explore My Portfolio' : 'Continue Exploring'}
      </motion.h3>
      
      <div className="grid grid-cols-1 gap-3">
        {navItems.map((item, index) => (
          <motion.button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl border border-white/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{item.icon}</div>
              <div className="flex-1 text-left">
                <div className="font-medium text-[#1d1d1f] text-base">{item.title}</div>
                <div className="font-light text-[#1d1d1f]/70 text-sm">{item.subtitle}</div>
              </div>
              <div className="text-[#1d1d1f]/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}