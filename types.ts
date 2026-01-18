export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface SkillData {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
  iconName: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
