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
  // 👤 Personal Information
  personal: {
    firstName: "MADNI", // e.g., "JULIA"
    lastName: "SAIYED",   // e.g., "HUANG" 
    fullName: "Madni Saiyed",   // e.g., "Julia Huang"
    title: "Your Professional Title", // e.g., "Artist Redefining Architecture with AI-Driven Design"
    curvedText: "KeyWord",        // Word to be highlighted in title, e.g., "Architecture"
    description: "Your professional description here...", // Brief bio for about sections
    location: "Vadodara, India", // e.g., "Los Angeles, CA"
    profileImage: "/portrait.jpeg", // Make sure your portrait is in public folder
  },

  // 📧 Contact Information
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567", // Optional
    website: "https://yourwebsite.com", // Optional
    location: "Your City, Country",
  },

  // 🌐 Social Media Links
  social: [
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      handle: "@yourusername", // Optional
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/yourprofile",
      handle: "/in/yourprofile", // Optional
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername", 
      handle: "@yourusername", // Optional
    },
    // Add more social links as needed
  ],

  // 🚀 Projects Portfolio
  projects: [
    {
      id: 1,
      name: "Project ",
      subtitle: "Brief project subtitle",
      description: "Detailed description of your first project. Explain the problem you solved, the approach you took, and the impact of your work.",
      image: "/portrait.jpeg", // Replace with actual project image
      link: "https://yourproject1.com", // Optional
      date: "2024",
      category: "Your Category", // e.g., "Web Development", "Design", "Architecture"
      tags: ["Tag1", "Tag2", "Tag3"], // Relevant technologies or skills
      status: "Completed",
    },
    {
      id: 2, 
      name: "Project Two",
      subtitle: "Another project subtitle",
      description: "Description of your second project...",
      image: "/portrait.jpeg", // Replace with actual project image
      link: "#", // Optional
      date: "2024",
      category: "Your Category",
      tags: ["Tag1", "Tag2", "Tag3"],
      status: "In Development",
    },
    {
      id: 3,
      name: "Project Three", 
      subtitle: "Third project subtitle",
      description: "Description of your third project...",
      // No image for this project
      link: "#", // Optional
      date: "2023",
      category: "Your Category", 
      tags: ["Tag1", "Tag2"],
      status: "Completed",
    },
    {
      id: 4,
      name: "Project Four",
      subtitle: "Fourth project subtitle", 
      description: "Description of your fourth project...",
      date: "2023",
      category: "Your Category",
      tags: ["Tag1", "Tag2", "Tag3"],
      status: "Exhibited",
    },
  ],

  // 💼 Skills & Expertise
  skills: {
    technical: [
      "Skill 1", // e.g., "React", "Next.js", "AI/ML"
      "Skill 2", // e.g., "Python", "Architecture Design"
      "Skill 3", // e.g., "3D Modeling", "Data Analysis"
      "Skill 4",
      "Skill 5",
    ],
    tools: [
      "Tool 1", // e.g., "Figma", "Adobe Creative Suite"
      "Tool 2", // e.g., "VS Code", "AutoCAD"
      "Tool 3", // e.g., "Blender", "TensorFlow"
    ],
    languages: [
      "English", 
      "Language 2", // Add your languages
      "Language 3",
    ],
  },

  // 💼 Work Experience  
  experience: [
    {
      title: "Your Current/Recent Position",
      company: "Company Name",
      duration: "Start Date - End Date", // e.g., "2022 - Present"
      description: "Brief description of your role and responsibilities...",
      achievements: [
        "Key achievement 1",
        "Key achievement 2", 
        "Key achievement 3",
      ],
    },
    {
      title: "Previous Position",
      company: "Previous Company",
      duration: "Start Date - End Date",
      description: "Description of your previous role...",
      achievements: [
        "Achievement 1",
        "Achievement 2",
      ],
    },
  ],

  // 🎯 About Page Content
  about: {
    intro: "Welcome to My Creative Universe", // Section title
    philosophy: "Your philosophy or approach to work. Explain what drives you and your unique perspective...",
    approach: "Step into a world where traditional boundaries dissolve, giving way to innovative solutions that challenge perception and redefine experiences.",
    specialties: [
      {
        icon: "🎨", // You can use emojis or replace with icon names
        title: "Creative Vision",
        description: "Innovative approach to problem-solving",
      },
      {
        icon: "🤖",
        title: "Technology Integration", 
        description: "Cutting-edge technical solutions",
      },
      {
        icon: "🏗️",
        title: "System Design",
        description: "Scalable and efficient architecture",
      },
      {
        icon: "🌟", 
        title: "Innovation",
        description: "Future-focused solutions",
      },
    ],
  },

  // 🧭 Navigation Menu
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