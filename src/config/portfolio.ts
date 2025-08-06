// Portfolio Configuration
// Update this file with your personal information

export interface PortfolioConfig {
  // Personal Information
  personal: {
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    curvedText: string;
    description: string;
    location: string;
    profileImage: string;
  };

  // Contact Information  
  contact: {
    email: string;
    phone?: string;
    website?: string;
    location: string;
  };

  // Social Links
  social: Array<{
    name: string;
    url: string;
    handle?: string;
  }>;

  // Projects
  projects: Array<{
    id: number;
    name: string;
    subtitle: string;
    description: string;
    image?: string;
    link?: string;
    date: string;
    category: string;
    tags: string[];
    status: 'Completed' | 'In Development' | 'Planning' | 'Exhibited';
  }>;

  // Skills & Expertise
  skills: {
    technical: string[];
    tools: string[];
    languages: string[];
  };

  // Experience
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
    achievements?: string[];
  }>;

  // About sections
  about: {
    intro: string;
    philosophy: string;
    approach: string;
    specialties: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  // Navigation
  navigation: string[];
}

// 🔧 UPDATE THE INFORMATION BELOW WITH YOUR DETAILS
export const portfolioConfig: PortfolioConfig = {
  personal: {
    firstName: "MADNI",
    lastName: "SAIYED",
    fullName: "Saiyed Madni",
    title: "Frontend Developer Merging UI Elegance with AI/ML Brilliance",
    curvedText: "AI, ML, Vibe Coder",
    description:
      "Full-stack developer focused on frontend excellence using React.js and modern JavaScript, with an AI/ML edge. Passionate about building intelligent, beautiful, and impactful web interfaces.",
    location: "Vadodara, Gujarat, India",
    profileImage: "/portrait.jpeg",
  },

  contact: {
    email: "smdmadni@gmail.com",
    phone: "9898929374",
    website: "https://profound-licorice-ede22c.netlify.app/",
    location: "Vadodara, Gujarat, India",
  },

  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/madni14saiyed/",
      handle: "/in/madni14saiyed",
    },
    {
      name: "GitHub",
      url: "https://github.com/sam989892",
    },
  ],

  projects: [
    {
      id: 1,
      name: "Award-Winning School Website",
      subtitle: "Best UI Design | Competition Winner",
      description:
        "Developed a responsive school website with modern design and accessibility standards. Won 1st place among 100+ entries for best design and UX.",
      image: "/portrait.jpeg",
      link: "https://gorgeous-shortbread-467224.netlify.app/",
      date: "2024",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      subtitle: "Full-Stack MERN Application",
      description:
        "Built an end-to-end e-commerce app with product catalog, cart, and checkout functionality using React and Node.js RESTful APIs.",
      image: "/portrait.jpeg",
      link: "https://clinquant-bienenstitch-5e4ca2.netlify.app/",
      date: "2024",
      category: "Full Stack Development",
      tags: ["React", "Node.js", "MongoDB", "REST API"],
      status: "Completed",
    },
    {
      id: 3,
      name: "Algorithm Visualizer",
      subtitle: "DSA-Based Visualization Tool",
      description:
        "Created a JavaScript-based visualizer to demonstrate sorting algorithms like Quick Sort, Merge Sort, Heap Sort with real-time animation and performance analysis.",
      image: "/portrait.jpeg",
      link: "https://delicate-tapioca-2de161.netlify.app/",
      date: "2023",
      category: "Data Structures & Algorithms",
      tags: ["JavaScript", "Algorithms", "Visualization"],
      status: "Completed",
    },
  ],

  skills: {
    technical: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Python",
      "Pandas",
      "Neural Networks",
    ],
    tools: ["Git", "Visual Studio Code", "Figma"],
    languages: ["English", "Hindi", "Gujarati"],
  },

  experience: [
    {
      title: "Frontend Developer & Team Lead",
      company: "Consultancy Centre, Parul University",
      duration: "Dec 2024 – Apr 2025",
      description:
        "Led a 6-member frontend team for client projects. Integrated APIs and implemented OOPs design in JavaScript for highly maintainable and scalable code.",
      achievements: [
        "Achieved 99.9% app uptime with optimized frontend-backend integration",
        "Improved codebase maintainability by 40% using JS OOPs patterns",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "Prodigy Infotech (Remote)",
      duration: "May 2024 – June 2024",
      description:
        "Developed machine learning models using Python and Pandas with 85%+ accuracy for classification tasks.",
      achievements: [
        "Optimized ML models with algorithmic improvements",
        "Gained hands-on experience with data preprocessing and analysis",
      ],
    },
  ],

  about: {
    intro: "Welcome to My Digital Universe",
    philosophy:
      "I believe in designing systems and products that not only function well but feel intuitive and enjoyable to use. Merging aesthetics with logic is where true magic happens.",
    approach:
      "I combine structured problem-solving with a user-first mindset. My workflow is grounded in clean architecture, AI/ML possibilities, and collaborative iteration.",
    specialties: [
      {
        icon: "🎨",
        title: "Creative Interfaces",
        description: "Designing visually appealing and intuitive UIs",
      },
      {
        icon: "🤖",
        title: "AI/ML Integration",
        description: "Building intelligent features into web systems",
      },
      {
        icon: "🧠",
        title: "Problem Solving",
        description: "Structured solutions using DSA and system design",
      },
      {
        icon: "⚙️",
        title: "Full-Stack Flow",
        description: "From frontend delight to backend reliability",
      },
    ],
  },

  navigation: ["HOME", "PROJECTS", "ABOUT", "CONTACT"],
};

// 🎨 Theme Colors (Don't change these unless you want different colors)
export const themeColors = {
  primary: "#e3f2f9",      // Light blue background
  secondary: "#aecfdc",     // Medium blue accents  
  accent: "#3B82F6",       // Bright blue highlights
  text: "#1d1d1f",         // Dark text
  background: "#f9fcff",    // Page background
};

// 📱 Responsive Configuration
export const layoutConfig = {
  mobileBreakpoint: 768, // px - screens smaller than this show mobile view
};