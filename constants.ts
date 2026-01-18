import { Project, SkillData, Experience } from "./types";

export const SOCIALS = [
  {
    iconName: "Github",
    href: "https://github.com/Arturdan1elyan",
    label: "GitHub",
  },
  { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { iconName: "Mail", href: "https://gmail.com", label: "Email" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "fake-store",
    description:
      "E-commerce demo app built with React and Redux Toolkit, featuring product browsing, cart management, and responsive design.",
    tags: ["React", "TypeScript", "Redux/toolkit", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    link: "https://fake-store-three-gray.vercel.app/products",
    github: "https://github.com/Arturdan1elyan/fake-store",
  },
  {
    id: "2",
    title: "Store",
    description:
      "E-commerce demo app built with React, showcasing products, cart functionality, and responsive design.",
    tags: ["Next.js", "typeScript", "Tailwind", "Context"],
    imageUrl:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    link: "https://store-beta-ivory-55.vercel.app/products",
    github: "https://github.com/Arturdan1elyan/store",
  },
  {
    id: "3",
    title: "Admin Panel",
    description:
      "Responsive Admin Panel built with React and Ant Design for intuitive dashboards and seamless data management.",
    tags: ["React", "Next.js", "Ant Design", "TypeScript"],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "https://project-it-xi.vercel.app/admin/navbar",
    github: "https://github.com/Arturdan1elyan/project_it",
  },
];

export const SKILLS: SkillData[] = [
  { name: "HTML", category: "Frontend", iconName: "Code2" },
  { name: "CSS", category: "Frontend", iconName: "Palette" },
  { name: "JavaScript", category: "Frontend", iconName: "Terminal" },
  { name: "TypeScript", category: "Frontend", iconName: "Code2" },
  { name: "React", category: "Frontend", iconName: "Layers" },
  { name: "Next.js", category: "Frontend", iconName: "Globe" },
  { name: "Redux Toolkit", category: "Frontend", iconName: "Cpu" },
  { name: "Tailwind CSS", category: "Design", iconName: "Palette" },
  { name: "Sass (SCSS)", category: "Design", iconName: "Palette" },
  { name: "Ant Design", category: "Design", iconName: "Monitor" },
  { name: "Git", category: "Tools", iconName: "Terminal" },
  { name: "GitHub", category: "Tools", iconName: "Github" },
  { name: "API Integration", category: "Tools", iconName: "Zap" },
  { name: "Vite (basic)", category: "Tools", iconName: "Zap" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Personal Projects",
    role: "Junior Frontend Developer",
    period: "2024 — Present",
    description: [
      "Built responsive web applications using React, TypeScript, and Next.js",
      "Implemented smooth UI animations with Framer Motion",
      "Worked with REST APIs using Fetch and Axios",
      "Styled modern interfaces using Tailwind CSS, SCSS, and Ant Design",
      "Used Git and GitHub for version control and project collaboration",
    ],
  },
  {
    company: "Self-Directed Learning",
    role: "Frontend Development Journey",
    period: "2024 — 2026",
    description: [
      "Learned core web technologies: HTML, CSS, and modern JavaScript",
      "Built multiple small and medium projects to practice real-world scenarios",
      "Focused on clean code, reusable components, and responsive design",
    ],
  },
];
