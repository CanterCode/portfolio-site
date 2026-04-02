export type MediaType = 'video' | 'image' | 'loom';

export interface MediaItem {
  type: MediaType;
  url: string;
  alt?: string;
}

export interface Project {
  id: number;
  title: string;
  role: string;
  subtitle?: string;
  stack?: string[];
  description: string;
  media?: MediaItem[];
  link?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'EZ Track',
    role: 'Full Stack Software Engineer',
    subtitle: 'Enterprise Construction Asset Management',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Supabase',
      'Tailwind',
      'Swagger UI',
      'Figma',
    ],
    description:
      'As a Full Stack Software Engineer, I wasn\'t just coding; I was architecting the "Single Source of Truth" for construction inventory. I spearheaded the Supabase schema design and built the Express.js API layers that allowed for sub-second tool check-ins. My focus was on data integrity—ensuring that when a project manager looks at their dashboard, the material costs are accurate to the penny.',
    githubUrl: 'https://github.com/bananabrann/eztrack',
    isFeatured: true,
    media: [
      { type: 'video', url: '/project media/eztrack/eztrack-demo-video.mp4' },
      { type: 'image', url: '/project media/eztrack/ez-pic-1.jpeg' },
      { type: 'image', url: '/project media/eztrack/ez-pic-2.jpeg' },
      { type: 'image', url: '/project media/eztrack/ez-pic-3.jpeg' },
      { type: 'image', url: '/project media/eztrack/ez-pic-4.jpeg' },
      { type: 'image', url: '/project media/eztrack/ez-pic-5.jpeg' },
      { type: 'image', url: '/project media/eztrack/ez-pic-6.jpeg' },
      { type: 'image', url: '/project media/eztrack/ez-pic-7.jpeg' },
      { type: 'image', url: '/project media/eztrack/ez-pic-8.jpeg' },
    ],
  },
  {
    id: 2,
    title: 'AstroSkill',
    role: 'Lead Frontend Engineer',
    subtitle: 'Aerospace Talent & Learning Ecosystem',
    stack: ['React', 'TypeScript', 'AWS', 'Custom Auth/Login'],
    description:
      'Serving as the Lead Frontend Engineer, I acted as the bridge between design vision and technical execution. I managed a team of developers to ensure our React/TypeScript architecture was modular and scalable. Beyond coding, I spent my time in cross-functional war rooms with cybersecurity and data analytics teams, ensuring that our aerospace learning platform was as secure as it was accessible.',
    githubUrl: 'PRIVATE',
    isFeatured: true,
    media: [
      {
        type: 'loom',
        url: 'https://www.loom.com/embed/4a938e62b02e44ea9d67dd14969dd299',
      },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-1.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-2.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-3.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-4.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-5.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-6.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-7.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-8.png' },
      { type: 'image', url: '/project media/astroskill/astroskill-pic-9.png' },
    ],
  },
  {
    id: 3,
    title: 'Integrity Renovations',
    role: 'Full Stack Developer',
    subtitle: 'High-Conversion Home Improvement Platform',
    stack: ['React', 'TypeScript', 'EmailJS', 'Tailwind'],
    description:
      'In this Full Stack Developer role, I acted as a technical consultant for a local business. I didn\'t just build a site; I built a lead-generation engine. I focused on "Time-to-Lead" optimization—designing a custom React architecture that facilitates immediate SMS/Email notifications for the owner, ensuring they never miss a high-value home improvement inquiry.',
    githubUrl: 'https://github.com/CanterCode/integrity-reno',
    isFeatured: true,
    media: [
      { type: 'video', url: '/project media/integ/demo-1.mp4' },
      { type: 'image', url: '/project media/integ/integ-pic-1.png' },
      { type: 'image', url: '/project media/integ/integ-pic-2.png' },
      { type: 'image', url: '/project media/integ/integ-pic-3.png' },
      { type: 'image', url: '/project media/integ/integ-pic-4.png' },
      { type: 'video', url: '/project media/integ/demo-2-ba.mp4' },
    ],
  },
  {
    id: 4,
    title: 'Job Search & Ranking Algorithm',
    role: 'Python Developer',
    stack: ['Python', 'Adzuna API', 'JSON', 'Config-driven logic'],
    description:
      'Designed a highly customizable, config-driven algorithm to automate bulk job searches via the Adzuna API. Implemented a custom scoring and ranking system that evaluates results based on user-defined parameters, significantly optimizing the signal-to-noise ratio in job discovery.',
    isFeatured: false,
    media: [{ type: 'image', url: '/project media/other projects/job-search-tool-pic.png' }],
  },
  {
    id: 5,
    title: 'Portfolio v2 (This Site)',
    role: 'Frontend Architect',
    stack: ['React', 'TypeScript', 'Redux', 'Tailwind', 'EmailJS', 'AI-Augmented Dev'],
    description:
      'Architected a high-performance portfolio featuring a custom Redux-managed theme engine with distinct design personalities. Engineered modular React components and integrated EmailJS for automated lead notifications. Utilized AI-augmented development protocols to ensure rapid iteration and code consistency.',
    isFeatured: false,
    media: [{ type: 'image', url: '/project media/other projects/portfolio-pic.png' }],
  },
  {
    id: 6,
    title: 'Funky Finds E-Commerce',
    role: 'Full Stack Developer (Capstone)',
    stack: ['React', 'Firebase', 'Redux', 'React Query', 'FakeStore API'],
    description:
      'Constructed a complete e-commerce platform incorporating Firebase Authentication and comprehensive cart state management via Redux. Leveraged React Query for scalable data fetching, demonstrating robust API integration and modern global state practices.',
    isFeatured: false,
    media: [{ type: 'image', url: '/project media/other projects/funky-finds-pic.jpeg' }],
  },
  {
    id: 7,
    title: 'Finance Mobile App',
    role: 'Mobile UI Developer',
    stack: ['React Native (Expo 4)', 'TypeScript', 'Financial APIs'],
    description:
      'Developed a cross-platform mobile utility focused on financial UX, integrating real-time stock dashboards powered by external APIs. Built dynamic tools including a loan amortizer and service tipping calculator to explore complex React Native state flows.',
    isFeatured: false,
    media: [{ type: 'image', url: '/project media/other projects/finance-app-pic.png' }],
  },
];
