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
    slug: string;
    gallery?: string[];
    features?: string[];
    technologies?: {
      frontend?: string[];
      backend?: string[];
      database?: string[];
      tools?: string[];
    };
  }>;

  // Skills & Expertise
  skills: {
    technical: string[];
    dsa: string[];
    aiml: string[];
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

  // Education
  education: Array<{
    degree: string;
    institution: string;
    duration: string;
    cgpa: string;
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

  // Achievements
  achievements: Array<{
    title: string;
    description: string;
    year: string;
  }>;

  // Navigation
  navigation: string[];
}

// 🔧 UPDATE THE INFORMATION BELOW WITH YOUR DETAILS
export const portfolioConfig: PortfolioConfig = {
  personal: {
    firstName: "MADNI",
    lastName: "SAIYED",
    fullName: "Saiyed Madni",
    title: "Full-Stack Developer | DSA Expert | Competition Winner",
    curvedText: "Full-Stack Developer",
    description:
      "Full-stack developer with expertise in React.js, JavaScript, RESTful APIs, and Data Structures & Algorithms. Competition winner for best school website design (100+ entries). Strong foundation in SQL and MongoDB with proven problem-solving abilities.",
    location: "Karelibaugh, Vadodara, Gujarat",
    profileImage: "/portrait.jpeg",
  },

  contact: {
    email: "smdmadni@gmail.com",
    phone: "9898929374",
    website: "https://profound-licorice-ede22c.netlify.app/",
    location: "Karelibaugh, Vadodara, Gujarat",
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
      handle: "@sam989892",
    },
    {
      name: "X",
      url: "https://x.com/SAMisLEARNING_",
      handle: "@SAMisLEARNING_",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@samishigh",
      handle: "@SAMisHIGH",
    },
  ],

  projects: [
    {
      id: 1,
      name: "Award-Winning School Website",
      subtitle: "Frontend Developer | Competition Winner",
      description:
        "Built responsive school landing page using HTML, CSS, JavaScript with interactive UI elements. Won 1st place among 100+ entries for best design and user experience. Implemented modern frontend practices and accessibility standards.",
      image: "/schoollpic.png",
      link: "https://delicate-tapioca-2de161.netlify.app/",
      date: "2024",
      category: "Web Development",
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
      status: "Completed",
      slug: "award-winning-school-website",
      gallery: ["/schoollpic.png", "/schoollpic.png", "/schoollpic.png"],
      features: [
        "Responsive design across all devices",
        "Interactive animations and transitions",
        "Accessibility-compliant structure",
        "SEO-optimized content",
        "Cross-browser compatibility"
      ],
      technologies: {
        frontend: ["HTML5", "CSS3", "JavaScript ES6+"],
        tools: ["VS Code", "Git", "Netlify", "Figma"]
      }
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      subtitle: "Full-Stack Developer",
      description:
        "Developed complete e-commerce solution using React.js frontend and RESTful API architecture. Implemented product catalogue, cart functionality, and responsive design patterns. Utilized JavaScript OOPs principles for modular and maintainable code structure.",
      image: "/ecommerce-pic.png",
      link: "https://gorgeous-shortbread-467224.netlify.app/",
      date: "2024",
      category: "E-Commerce",
      tags: ["React.js", "RESTful API", "OOP", "Responsive Design"],
      status: "Completed",
      slug: "ecommerce-platform",
      gallery: ["/ecommerce-pic.png", "/ecommerce-pic.png", "/ecommerce-pic.png"],
      features: [
        "Product catalog with search and filters",
        "Shopping cart with real-time updates",
        "User authentication system",
        "Order management dashboard",
        "Payment integration ready"
      ],
      technologies: {
        frontend: ["React.js", "JavaScript", "CSS3", "HTML5"],
        backend: ["RESTful API", "JSON"],
        tools: ["VS Code", "Git", "Netlify", "Postman"]
      }
    },
    {
      id: 3,
      name: "Algorithm Visualizer",
      subtitle: "DSA Implementation Project",
      description:
        "Built interactive visualization tool for sorting algorithms using JavaScript. Implemented Quick Sort, Merge Sort, and Heap Sort with O(n log n) complexity. Created comparative analysis demonstrating 40% performance improvement over bubble sort.",
      image: "/algo-pic.png",
      link: "https://clinquant-bienenstitch-5e4ca2.netlify.app/",
      date: "2024",
      category: "Data Structures & Algorithms",
      tags: ["JavaScript", "Algorithms", "Performance", "Visualization"],
      status: "Completed",
      slug: "algorithm-visualizer",
      gallery: ["/algo-pic.png", "/algo-pic.png", "/algo-pic.png"],
      features: [
        "Real-time algorithm visualization",
        "Performance comparison charts",
        "Multiple sorting algorithms",
        "Interactive speed controls",
        "Educational step-by-step breakdown"
      ],
      technologies: {
        frontend: ["JavaScript", "HTML5 Canvas", "CSS3", "Chart.js"],
        tools: ["VS Code", "Git", "Netlify"]
      }
    },
    {
      id: 4,
      name: "TechPrep App",
      subtitle: "Full-Stack Developer | Interview Preparation Platform",
      description:
        "Comprehensive technical interview preparation platform built with modern web technologies. Features coding challenges, algorithm practice, system design guides, and progress tracking to help developers ace their technical interviews.",
      image: "/techprep-pic.png", // You'll need to add this image
      link: "https://your-techprep-link.com", // Add your actual link here
      date: "2024",
      category: "EdTech Platform",
      tags: ["React.js", "Node.js", "MongoDB", "Algorithm Practice", "Interview Prep"],
      status: "Completed",
      slug: "techprep-app",
      gallery: ["/techprep-pic.png", "/techprep-pic.png", "/techprep-pic.png"],
      features: [
        "Interactive coding challenges",
        "Algorithm visualization and explanation",
        "System design interview guides",
        "Progress tracking and analytics",
        "Mock interview simulations",
        "Topic-wise practice modules"
      ],
      technologies: {
        frontend: ["React.js", "JavaScript", "CSS3", "HTML5"],
        backend: ["Node.js", "Express.js", "RESTful API"],
        database: ["MongoDB"],
        tools: ["VS Code", "Git", "Postman"]
      }
    },
  ],

  skills: {
    technical: [
      "HTML5",
      "CSS3", 
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "RESTful APIs",
      "OOP",
    ],
    dsa: [
      "Arrays",
      "Linked Lists", 
      "Trees",
      "Sorting Algorithms",
      "Dynamic Programming",
      "Time/Space Complexity",
      "Algorithm Optimization",
    ],
    aiml: [
      "Python",
      "Pandas", 
      "Neural Networks",
      "Machine Learning",
    ],
    tools: ["Git", "VS Code", "Figma"],
    languages: ["English", "Hindi"],
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

  // Education
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Parul University",
      duration: "2022-2025",
      cgpa: "8.14",
      achievements: ["Completed Web Designing & Hosting Course"],
    },
    {
      degree: "Diploma in Neural Networks & Deep Learning",
      institution: "Parul University",
      duration: "2023-2024",
      cgpa: "8.68",
      achievements: [
        "Gained expertise in Neural Networks & Machine Learning Algorithms",
        "Developed a Sentiment Analysis Model as a group project",
      ],
    },
  ],

  about: {
    intro: "Welcome to My Digital Universe",
    philosophy:
      "I believe in building high-performance, scalable applications that not only function perfectly but provide exceptional user experiences. My passion lies in merging cutting-edge technology with elegant design solutions.",
    approach:
      "I combine strong problem-solving skills with proven expertise in MERN stack development. My workflow emphasizes front-end optimization, API integration, and UI/UX best practices, delivering solutions that exceed expectations.",
    specialties: [
      {
        icon: "🏆",
        title: "Competition Winner",
        description: "1st place in university-wide web development competition (100+ participants)",
      },
      {
        icon: "🤖",
        title: "AI/ML Integration",
        description: "Neural Networks, Deep Learning, and Sentiment Analysis expertise",
      },
      {
        icon: "⚡",
        title: "Performance Expert",
        description: "50% faster load times and 99.9% app uptime achievements",
      },
      {
        icon: "👥",
        title: "Team Leadership",
        description: "Led 6-member frontend teams and mentored junior developers",
      },
    ],
  },

  achievements: [
    {
      title: "Best School Website Design Competition Winner",
      description: "Won 1st place among 100+ participants for outstanding design and user experience",
      year: "2024",
    },
    {
      title: "Frontend Team Leadership", 
      description: "Successfully led and delivered client projects as Frontend Team Lead",
      year: "2024-2025",
    },
    {
      title: "Academic Excellence",
      description: "Maintained 8+ CGPA across dual degree programs in BCA and Neural Networks",
      year: "2022-2025",
    },
  ],

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