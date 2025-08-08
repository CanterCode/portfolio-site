export interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  link?: string;
  githubUrl?: string;
  isHighlight?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AstroSkill",
    description: "Placeholder description for project highlight 1. You can include features, stack, or a short pitch here.",
    videoUrl: "",
    link: "",
    githubUrl: "",
    isHighlight: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Placeholder description for project highlight 2. You can include features, stack, or a short pitch here.",
    videoUrl: "",
    link: "",
    githubUrl: "",
    isHighlight: true,
  },
  {
    id: 3,
    title: "Integrity Renovations",
    description: "Placeholder description for project highlight 3. You can include features, stack, or a short pitch here.",
    videoUrl: "",
    link: "",
    githubUrl: "",
    isHighlight: true,
  }
]