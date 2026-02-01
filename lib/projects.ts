export interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  category: string;
  year: number;
  role: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  solution: string;
  results: string[];
  links: {
    live?: string;
    github?: string;
    case?: string;
    disabled?: boolean;
  };
}

export const projects: ProjectDetails[] = [
  {
    id: "dinmajur-ecommerce",
    title: "Service and Delivery Platform",
    description:
      "Full-stack e-commerce platform with real-time inventory and payments.",
    overview:
      "Built a scalable e-commerce system with authentication, admin dashboard, product search, and real-time stock updates.",
    image: "/projects/dinmajur-mock.png",
    category: "Web Development",
    year: 2024,
    role: "Full Stack Developer",
    techStack: ["React", "Node.js", "PostgreSQL"],
    features: [
      "User authentication",
      "Product recommendations",
      "Admin dashboard",
      "Advanced search system",
    ],
    challenges: ["Scalability", "Payment security", "Database optimization"],
    solution:
      "Used optimized PostgreSQL queries and secure payment APIs with modular backend architecture.",
    results: ["Fast load time", "Secure transactions", "Scalable architecture"],
    links: {
      live: "https://dinmajur.com",
      github: "#",
    },
  },

  {
    id: "dinmajur-analytics-admin",
    title: "Analytics Dashboard Admin",
    description:
      "Interactive analytics dashboard with real-time data visualization.",
    overview:
      "Developed a real-time analytics platform with charts and WebSocket live updates.",
    image: "/projects/dinmajur-admin-mock.png",
    category: "Dashboard",
    year: 2024,
    role: "Frontend Developer",
    techStack: ["React", "D3.js", "Express"],
    features: [
      "Live metrics",
      "Custom reports",
      "Interactive charts",
      "Export data",
    ],
    challenges: ["Large dataset rendering", "WebSocket scaling"],
    solution:
      "Used D3.js optimization and WebSocket event throttling for performance.",
    results: ["Smooth real-time UI", "Fast data rendering"],
    links: {
      live: "https://dinmajur.com",
      github: "#",
      disabled: true,
    },
  },

  {
    id: "radhbo-platform",
    title: "Homemade Food Delivery Platform",
    description: "Business platform with analytics and reporting tools.",
    overview:
      "Built a modern analytics system for business insights and reporting.",
    image: "/projects/radhbo-mock.png",
    category: "Web App",
    year: 2024,
    role: "Full Stack Developer",
    techStack: ["React", "D3.js", "Express"],
    features: ["Analytics dashboard", "Reports", "User management"],
    challenges: ["Data aggregation", "UI performance"],
    solution: "Optimized backend aggregation and frontend virtual rendering.",
    results: ["Improved business insights", "Fast UI"],
    links: {
      live: "https://radhbo.com",
      github: "#",
    },
  },

  {
    id: "hypetown-platform",
    title: "E-commerce Platform",
    description: "Interactive analytics dashboard and management platform.",
    overview:
      "Created a scalable dashboard for real-time monitoring and reporting.",
    image: "/projects/hypetown-mock.png",
    category: "SaaS",
    year: 2024,
    role: "Frontend Engineer",
    techStack: ["React", "D3.js", "Express"],
    features: ["Real-time metrics", "Custom dashboards"],
    challenges: ["Performance optimization"],
    solution: "Used efficient state management and data virtualization.",
    results: ["High performance UI", "Real-time updates"],
    links: {
      live: "https://hypetownbd.com",
      github: "#",
    },
  },

  {
    id: "deshi-design-ai",
    title: "Digital Marketing Agency",
    description: "AI-powered content generation platform.",
    overview: "Built an AI writing tool with templates and SEO optimization.",
    image: "/projects/deshi-design-mock.png",
    category: "AI SaaS",
    year: 2024,
    role: "Full Stack Developer",
    techStack: ["Next.js", "AI SDK", "Vercel"],
    features: ["Content templates", "Batch generation", "SEO tools"],
    challenges: ["AI latency", "Prompt optimization"],
    solution: "Used caching and structured prompt pipelines.",
    results: ["Fast AI responses", "Improved content quality"],
    links: {
      live: "https://deshidesign.com",
      github: "#",
    },
  },

  {
    id: "loomwave-task-saas",
    title: "International Clothing Manufacturer",
    description: "Collaborative task management platform.",
    overview: "Built a real-time team task management system with analytics.",
    image: "/projects/loomwave-mock.png",
    category: "SaaS",
    year: 2024,
    role: "Full Stack Developer",
    techStack: ["Next.js", "TypeScript", "Supabase"],
    features: ["Team workspace", "Real-time tasks", "Analytics"],
    challenges: ["Real-time sync", "Collaboration scaling"],
    solution: "Used Supabase realtime and modular architecture.",
    results: ["Smooth collaboration", "Scalable backend"],
    links: {
      live: "https://loomwaveintl.com",
      github: "#",
    },
  },
];

export function getProject(id: string): ProjectDetails | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjects(): ProjectDetails[] {
  return projects;
}
