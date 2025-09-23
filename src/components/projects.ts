export interface Project {
  id: number;
  title: string;
  role: string;
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
    role: "Lead Frontend Developer",
    description:
      "A learning and talent platform for the aerospace industry, designed to help underrepresented youth in Africa and the Middle East access educational resources, gain exposure to cutting-edge technology, and connect with employers seeking to fill aerospace positions.",
    videoUrl: "",
    link: "",
    githubUrl: "",
    isHighlight: true,
  },
  {
    id: 2,
    title: "Integrity Renovations",
    role: "Freelance Developer",
    description:
      "A professional home improvement website that showcases services and makes it easy for visitors to request quotes or consultations, with contact requests sent directly to the business owner’s phone for faster response.",
    videoUrl: "",
    link: "",
    githubUrl: "",
    isHighlight: true,
  },
  {
    id: 3,
    title: "Funky Finds",
    role: "Full Stack Coding Student",
    description:
      "A fully functional e-commerce experience where users can browse products, filter by category, add items to a cart, and complete a mock checkout process with order history tracking.",
    videoUrl: "",
    link: "",
    githubUrl: "",
    isHighlight: true,
  },
];
