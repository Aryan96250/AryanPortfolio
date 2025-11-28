export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string[];
  tech: string[];
  link?: string;
  media: {
    type: 'image' | 'video';
    url: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name reference
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}