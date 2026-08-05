export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  demoCredentials?: {
    email?: string;
    password?: string;
  };
  problem: string;
  solution: string;
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: "booking-villa",
    title: "Luxury Villa Booking Platform",
    category: "Full Stack Web Application",
    shortDescription: "A full-stack villa reservation system featuring real-time availability checks, Midtrans Snap payment gateway integration, NextAuth authentication, and an admin management dashboard.",
    fullDescription: "Luxury Villa Booking Platform is a modern reservation web application designed to deliver a seamless booking experience for guests and an efficient management system for villa owners. It includes dynamic price calculations, real-time date availability checking, Midtrans automated payment webhooks, and role-based administrative workflows.",
    image: "/projects/booking-villa.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Midtrans API"],
    githubUrl: "https://github.com/liv-lauflove/booking-villa",
    liveUrl: "https://booking-villa-seven.vercel.app/",
    problem: "Traditional villa booking platforms often struggle with real-time calendar availability updates, manual payment verification delays, and cumbersome administrative inventory management.",
    solution: "Engineered an end-to-end full-stack web application with Next.js App Router and Prisma ORM. Integrated Midtrans Snap payment gateway with automated webhooks to confirm bookings instantly upon payment, combined with NextAuth Google authentication and role-based route protection.",
    features: [
      "Real-time villa catalog filtering & detailed villa pages",
      "Dynamic date range availability validation & instant price calculation",
      "Midtrans Snap payment gateway integration with automated webhook handlers",
      "Google NextAuth authentication with role-based route middleware",
      "Protected Admin Dashboard to manage villa listings, photo uploads & reservations",
      "User booking history and reservation status tracking"
    ]
  },
  {
    id: "order-management",
    title: "DC Habitat Order Management System",
    category: "Full Stack Enterprise App",
    shortDescription: "An enterprise-grade order and supplier tracking platform for custom furniture manufacturing, fabric requirement calculations, PDF invoice generation, and financial analytics.",
    fullDescription: "DC Habitat Order Management System is a comprehensive enterprise web application built to streamline custom furniture production workflows. It manages customer orders, supplier purchasing, fabric stock calculations, automated PDF invoice generation, and multi-month financial metrics.",
    image: "/projects/order-management.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "PostgreSQL", "React PDF"],
    githubUrl: "https://github.com/liv-lauflove/order-management",
    liveUrl: "https://order-management-ten-delta.vercel.app/",
    demoCredentials: {
      email: "olyviaaudydj@gamil.com",
      password: "olivcantik"
    },
    problem: "Custom furniture manufacturing involves complex multi-supplier ordering, precise fabric requirement tracking, manual PDF billing, and fragmented customer order updates.",
    solution: "Designed a centralized management platform utilizing Next.js Server Components, Prisma ORM, and Supabase PostgreSQL. Features automated server-side PDF invoice streaming, supplier order status tracking, fabric inventory calculations, and real-time financial charts.",
    features: [
      "Comprehensive Dashboard with monthly revenue charts & pending deadline alerts",
      "Customer and order lifecycle management from production to shipping",
      "Fabric inventory tracking and supplier purchasing workflows",
      "Automated server-rendered PDF Invoice generation & streaming",
      "Supabase Authentication & Cloud Storage for project media",
      "Demo login credentials provided for live site testing"
    ]
  },
  {
    id: "mini-ecommerce",
    title: "Trisna Putra Baking Store",
    category: "Full Stack Web Application",
    shortDescription: "A full-featured baking & packaging supplies e-commerce store built with Laravel and MySQL, featuring category filtering, cart validation, user authentication, and admin product CRUD.",
    fullDescription: "Trisna Putra Baking Store is a full-stack e-commerce web application built using Laravel and Blade templating. It offers a smooth shopping experience for baking supplies, plastic packaging, and kitchen tools with dynamic category filtering, cart minimum order validation, user authentication, and an intuitive administrative backend.",
    image: "/projects/mini-ecommerce.png",
    techStack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/liv-lauflove/miniEcommerce",
    problem: "Baking ingredient stores need a specialized catalog solution to manage diverse product categories, minimum purchase amounts, and distance delivery validation efficiently.",
    solution: "Implemented an MVC e-commerce platform using Laravel and MySQL. Designed responsive Blade views styled with Tailwind CSS, featuring secure session authentication, cart validation rules, and full administrative CRUD management.",
    features: [
      "Product catalog with baking ingredients and packaging category filters",
      "Interactive shopping cart with minimum order & delivery distance checks",
      "User authentication, registration, and order history tracking",
      "Admin Panel for managing categories, products, and order status",
      "Relational database schema optimized with MySQL & Eloquent ORM"
    ]
  }
];
