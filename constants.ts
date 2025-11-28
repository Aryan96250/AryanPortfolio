import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, SocialLink, ServiceItem } from './types';

export const PERSONAL_INFO = {
  name: "Aryan Chauhan",
  role: "Software Developer",
  location: "Mohali, Punjab, India",
  email: "aryan96250@gmail.com",
  phone: "+91 7807908572",
  tagline: "Building scalable web & mobile applications with modern technologies.",
  summary: "Experienced Software Developer specializing in Angular, Ionic, and React Native. Proven track record of improving application performance, implementing secure blockchain integrations, and creating responsive, user-centric interfaces."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/chauhan-3a11b6286", icon: "Linkedin" },
  { platform: "GitHub", url: "https://github.com", icon: "Github" }, 
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "Mail" }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    company: "Tricky Web Solution Pvt Lmt",
    role: "Software Developer - Angular",
    period: "November 2023 – Present",
    location: "Mohali, India",
    description: [
      "Built 4+ Angular apps, cutting development time by 40% via reusable component library.",
      "Reduced page-load times by 45% through lazy loading & code-splitting.",
      "Integrated Stripe & MetaMask for secure payments, boosting checkout completion by 15%.",
      "Developed a real-time web and mobile application integrating ChatGPT API for audio and text-based conversational responses.",
      "Implemented Google, Twitter, and MetaMask authentication in both React Native mobile and web applications.",
      "Integrated Sumsub for KYC verification in the web application and Stripe Identity for mobile app compliance.",
      "Integrated smart contract functions using MetaMask for secure blockchain-based operations.",
      "Developed end-to-end automation scripts using Cypress to test critical user flows.",
      "Designed enhanced web pages using HTML, CSS, Bootstrap, Angular Material, and Tailwind CSS."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Curico",
    category: "AI Children’s App",
    description: [
      "Built a secure Ionic + Vue.js app with a child-friendly UI.",
      "Integrated personalized AI-driven activities.",
      "Implemented content safety features and automation scripts using Cypress."
    ],
    tech: ["Ionic", "Vue.js", "Cypress", "AI Integration"],
    // Placeholder video. Replace with your actual project video URL.
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-girl-playing-with-a-tablet-4548-large.mp4" 
  },
  {
    id: 2,
    title: "Invioned",
    category: "Immersive Tech",
    description: [
      "A next-generation visualization tool for architectural designs.",
      "Integrated real-time rendering and interactive 3D walkthroughs.",
      "Optimized for high performance on web and mobile platforms."
    ],
    tech: ["React", "Three.js", "WebGL", "Tailwind"],
    // Placeholder video. Replace with your actual project video URL.
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-4933-large.mp4"
  },
  {
    id: 3,
    title: "SplitLevel",
    category: "Real Estate Platform",
    description: [
      "Developed blockchain-based property ownership features with MetaMask integration.",
      "Enabled secure crypto and fiat payments using Stripe.",
      "Handled smart contract interactions for decentralized transactions."
    ],
    tech: ["Blockchain", "MetaMask", "Stripe", "Smart Contracts"]
  },
  {
    id: 4,
    title: "Bloomtrak",
    category: "Workforce Management",
    description: [
      "Built real-time dashboards with Charts.js and Socket.io for live updates.",
      "Implemented role-based access control for secure user management.",
      "Added data-driven insights and notifications for efficient tracking."
    ],
    tech: ["Charts.js", "Socket.io", "Real-time Data", "RBAC"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Solidity"]
  },
  {
    category: "Frameworks",
    skills: ["Angular", "Vue.js", "Ionic", "React Native", "Tailwind CSS"]
  },
  {
    category: "Tools & Core",
    skills: ["Git", "JIRA", "Firebase", "Cypress", "MetaMask", "Stripe"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    institution: "Carrier Point University",
    degree: "Bachelor's in Computer Application (CSE)",
    period: "2020 – 2023",
    location: "Hamirpur, India",
    score: "Cum. GPA: 6.8/10.0"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern frameworks like Angular, React, and Vue.js.",
    icon: "Layout"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Creating seamless cross-platform mobile applications with Ionic and React Native for iOS and Android.",
    icon: "Smartphone"
  },
  {
    id: 3,
    title: "Blockchain Integration",
    description: "Integrating secure smart contracts, MetaMask wallets, and crypto payment gateways into applications.",
    icon: "Link"
  },
  {
    id: 4,
    title: "UI/UX Implementation",
    description: "Translating designs into pixel-perfect, interactive, and accessible user interfaces.",
    icon: "Palette"
  }
];