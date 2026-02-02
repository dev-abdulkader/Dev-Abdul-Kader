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
    id: "dinmajur-service-and-delivery-platform",
    title: "Dinmajur – Service & Delivery Platform",
    description:
      "A multi-service and delivery platform connecting users with home services and grocery delivery.",

    overview:
      "Dinmajur is a scalable service and delivery platform offering home services like housekeeping, beauty salon, event cooking, and grocery delivery. I built the platform using a modern full-stack architecture with real-time notifications and automated deployment pipelines.",

    image: "/work/dinmajur-mock.png",
    category: "Full Stack Web Platform",
    year: 2025,
    role: "Full Stack Developer",

    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Socket.io",
      "OneSignal",
      "SSLCommerz",
    ],

    features: [
      "Multi-service booking system (housekeeping, salon, cooking, grocery delivery)",
      "User authentication and role-based access",
      "Admin dashboard for service and order management",
      "Real-time order and delivery tracking",
      "Service search and filtering system",
      "Push notifications for orders and status updates",
      "Scalable REST API architecture",
    ],

    challenges: [
      "Handling multiple service workflows in one platform",
      "Scalability and performance optimization",
      "Real-time notification delivery",
      "Deployment automation and server configuration",
    ],

    solution:
      "Implemented modular backend architecture, optimized MongoDB queries, integrated OneSignal for push notifications, containerized services with Docker, and automated deployment using GitHub Actions on a VPS.",

    results: [
      "Fast page load using Next.js SSR",
      "Scalable backend architecture for future services",
      "Real-time user engagement via push notifications",
      "Automated CI/CD pipeline reducing deployment time",
    ],

    links: {
      live: "https://dinmajur.com",
      github: "#",
    },
  },

  {
    id: "dinmajur-analytics-admin",
    title: "Analytics Dashboard Admin",
    description:
      "Interactive admin dashboard for managing users, bookings, orders, notifications, payments, and analytics.",
    overview:
      "Developed a full-featured admin dashboard enabling real-time monitoring of user activity, booking and order management, notifications, payments, analytics, and statistics. Implemented task management and reporting features to support operational efficiency.",
    image: "/work/dinmajur-admin-mock.png",
    category: "Dashboard",
    year: 2025,
    role: "Full Stack Developer",

    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "React-Chartjs",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Socket.io",
      "OneSignal",
    ],

    features: [
      "User management with activity tracking",
      "Booking and order management",
      "Real-time notifications (OneSignal / Socket.IO)",
      "Payment processing (Stripe / PayPal integration)",
      "Analytics dashboards with charts and statistics",
      "Task management and operational workflows",
      "Exportable reports and data insights",
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Scaling WebSocket notifications",
      "Ensuring smooth analytics rendering for many concurrent users",
    ],
    solution:
      "Implemented data aggregation, caching, and WebSocket event throttling to optimize performance and real-time updates.",
    results: [
      "Smooth real-time admin interface",
      "Faster data rendering and user insights",
      "Centralized management for bookings, orders, and notifications",
    ],
    links: {
      live: "https://dinmajur.com",
      github: "#",
      disabled: true,
    },
  },
  {
    id: "radhbo-platform",
    title: "Radhbo - Homemade Food Delivery Platform",
    description:
      "Full-stack food delivery platform with customer, partner, admin, and rider dashboards, real-time order tracking, and analytics.",
    overview:
      "Developed a comprehensive food delivery system using Next.js and NestJS with PostgreSQL and Prisma. The platform supports multiple user roles including customers, homechef partners, riders, and admin, enabling seamless ordering, payment, delivery tracking, and business analytics.",
    image: "/work/radhbo-mock.png",
    category: "Web App",
    year: 2026,
    role: "Full Stack Developer",
    techStack: [
      "Next.js",
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Socket.IO",
      "TanStack Query",
      "Zustand",
    ],
    features: [
      "Customer dashboard for ordering food and tracking delivery",
      "Homechef partner dashboard for managing dishes, orders, and availability",
      "Admin dashboard for analytics, reports, and operational management",
      "Rider dashboard for delivery assignments and real-time tracking",
      "Real-time order tracking and status updates via Socket.IO",
      "Payment processing with Stripe and PayPal integration",
      "Analytics and reporting tools for business insights",
      "Notification system for orders, updates, and delivery status",
    ],
    challenges: [
      "Managing real-time order tracking for multiple stakeholders",
      "Ensuring fast UI rendering for dashboards and large datasets",
      "Handling multi-role authentication and access control",
      "Optimizing backend queries with Prisma and PostgreSQL for performance",
    ],
    solution:
      "Implemented real-time Socket.IO updates, optimized database queries with Prisma, and designed role-based dashboards to provide a seamless user experience across all stakeholders.",
    results: [
      "Smooth, real-time order tracking for customers and riders",
      "Centralized management for admin and homechef partners",
      "Fast and responsive dashboards with actionable business analytics",
      "Efficient payment processing and notifications for all users",
    ],
    links: {
      live: "https://radhbo.com",
      github: "#",
    },
  },
  {
    id: "hypetown-platform",
    title: "Hypetown - E-commerce Platform",
    description:
      "Full-stack e-commerce platform with customer-facing website and admin dashboards for managing orders, products, customers, analytics, and statistics.",
    overview:
      "Built a modern e-commerce platform using Next.js, Tailwind CSS, Redux Toolkit, Node.js, NestJS, Prisma, and MongoDB. The platform includes an admin dashboard for product and order management, real-time analytics, and reporting, as well as a responsive website for customers to browse and purchase products.",
    image: "/work/hypetown-mock.png",
    category: "SaaS",
    year: 2025,
    role: "Frontend Engineer",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "NestJS",
      "Prisma",
      "MongoDB",
      "Framer Motion",
      "Socket.IO",
      "Docker",
    ],
    features: [
      "Admin dashboard for managing orders, products, and customers",
      "Real-time analytics and statistics for business insights",
      "Customer-facing website for browsing and purchasing products",
      "Responsive UI with smooth animations (Framer Motion)",
      "Real-time notifications and order tracking using Socket.IO",
      "Exportable reports and data insights for decision making",
    ],
    challenges: [
      "Optimizing frontend performance for dashboards with large datasets",
      "Ensuring real-time updates for orders and analytics",
      "Maintaining responsive design across multiple devices",
      "Efficient state management for complex UI interactions",
    ],
    solution:
      "Implemented Redux Toolkit for efficient state management, used data virtualization for large datasets, and applied Socket.IO for real-time updates to ensure a fast and interactive UI.",
    results: [
      "High-performance responsive UI",
      "Real-time analytics and order updates",
      "Efficient management of products, orders, and customers",
      "Improved business decision-making through actionable dashboards",
    ],
    links: {
      live: "https://hypetownbd.com",
      github: "#",
    },
  },
  {
    id: "deshi-design",
    title: "Deshi Design - Digital Marketing Agency",
    description:
      "Interactive digital agency website showcasing portfolio, services, and company information, with an admin dashboard to manage content.",
    overview:
      "Developed a full-featured digital agency website using Next.js, Tailwind CSS, Framer Motion, and GSAP. The platform includes interactive sections for portfolio, services, and team, along with an admin dashboard for uploading and managing content. Animations and smooth transitions enhance user engagement.",
    image: "/work/deshi-design-mock.png",
    category: "Company Profile",
    year: 2024,
    role: "Frontend Developer",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Responsive company website with interactive portfolio and services sections",
      "Admin dashboard to upload and manage content",
      "Animated UI components and smooth page transitions using Framer Motion & GSAP",
      "Team and client showcase sections",
      "Contact form integration with backend email handling",
      "Optimized for desktop and mobile devices",
    ],
    challenges: [
      "Designing an engaging and interactive frontend without overwhelming users",
      "Optimizing animations for smooth performance on all devices",
      "Creating an intuitive admin dashboard for content management",
    ],
    solution:
      "Built modular frontend components with Tailwind CSS, optimized animations with Framer Motion & GSAP, and implemented a minimal backend for admin content management and contact form handling.",
    results: [
      "Visually appealing and interactive digital agency website",
      "Easy content management via admin dashboard",
      "Responsive and smooth UX for all users",
      "Enhanced portfolio showcase and services presentation",
    ],
    links: {
      live: "https://deshidesign.com",
      github: "#",
    },
  },
  {
    id: "loomwave-company-profile",
    title: "Loomwave - International Clothing Manufacturer",
    description:
      "Frontend-focused company profile website showcasing Loomwave’s clothing manufacturing capabilities, services, and portfolio, with interactive UI and smooth animations.",
    overview:
      "Developed a modern, responsive company profile website for Loomwave using Next.js, TypeScript, and Tailwind CSS. The site features interactive sections highlighting company services, products, team, and contact form integration for inquiries. Animations were implemented using Framer Motion and GSAP for an engaging user experience.",
    image: "/work/loomwave-mock.png",
    category: "Frontend / Company Profile",
    year: 2026,
    role: "Frontend Developer",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
    features: [
      "Responsive company profile website with interactive sections",
      "Animated transitions and UI elements using Framer Motion & GSAP",
      "Sections for services, products, team, and portfolio showcase",
      "Contact form with email integration (backend minimal)",
      "Smooth scrolling and navigation experience",
      "Optimized for mobile and desktop devices",
    ],
    challenges: [
      "Designing a visually engaging and interactive frontend",
      "Optimizing animations for performance across devices",
      "Ensuring responsive layout for various screen sizes",
    ],
    solution:
      "Implemented modular frontend components with Tailwind CSS, optimized animations with Framer Motion and GSAP, and integrated a simple backend API for contact form handling.",
    results: [
      "Engaging, visually appealing company profile website",
      "Interactive and smooth user experience across devices",
      "Efficient email/contact form handling for inquiries",
    ],
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
