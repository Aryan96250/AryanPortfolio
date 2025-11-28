import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, SocialLink } from './types';

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
  { platform: "GitHub", url: "https://github.com", icon: "Github" }, // Placeholder as URL wasn't explicit in prompt, assuming user has one based on context
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
    tech: ["Ionic", "Vue.js", "Cypress", "AI Integration"]
  },
  {
    id: 2,
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
    id: 3,
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
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Libs",
    skills: ["Angular", "Vue.js", "Ionic", "React Native", "Angular Material", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Tools & Platforms",
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
  },
  {
    id: 2,
    institution: "Govt Senior Secondary School",
    degree: "Higher Secondary",
    period: "2019 – 2020",
    location: "Ladrour, India",
    score: "Percentage: 69%"
  },
  {
    id: 3,
    institution: "Govt Senior Secondary School",
    degree: "Matriculation",
    period: "2017 – 2018",
    location: "Ladrour, India",
    score: "Percentage: 83.20%"
  }
];