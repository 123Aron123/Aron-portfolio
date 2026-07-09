/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PersonalInfo, Skill, TimelineItem, ProjectItem } from './types';

export const personalInfo: PersonalInfo = {
  firstName: "Aron",
  lastName: "Gebru",
  role: "Web Based Designer & Front-End Developer",
  bio: "I'm a web-based designer & front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.",
  age: 26,
  nationality: "Ethiopian",
  freelance: "Available",
  address: "Addis Ababa, Ethiopia",
  phone: "+251 996 747 062",
  email: "arongebrut@gmail.com",
  linkedin: "Aron Gebru",
  languages: ["Amharic", "Tigrigna", "English"],
  experienceYears: 5,
  completedProjects: 5,
  happyCustomers: 5,
  awardsWon: 3
};

export const skills: Skill[] = [
  { name: "HTML", percentage: 95, color: "#ffb400" },
  { name: "CSS", percentage: 90, color: "#ffb400" },
  { name: "JavaScript", percentage: 85, color: "#ffb400" },
  { name: "React", percentage: 85, color: "#ffb400" },
  { name: "Next.js", percentage: 70, color: "#ffb400" },
  { name: "Three.js", percentage: 60, color: "#ffb400" },
  { name: "MERN", percentage: 60, color: "#ffb400" },
  { name: "WordPress", percentage: 85, color: "#ffb400" },
  { name: "PHP", percentage: 80, color: "#ffb400" },
  { name: "jQuery", percentage: 75, color: "#ffb400" },
  { name: "Angular", percentage: 70, color: "#ffb400" },
];

export const timeline: TimelineItem[] = [
  {
    id: "exp-1",
    year: "2020 - Present",
    title: "Web Developer",
    subtitle: "Freelance Client Contracts",
    description: "Developed highly optimized corporate landing pages, lightweight CMS themes, and interactive client dashboards using WordPress, PHP, and modern Javascript integrations.",
    type: "experience"
  },
  {
    id: "exp-2",
    year: "2020 - 2025",
    title: "UI/UX Designer",
    subtitle: "Creative Design Lead",
    description: "Designed responsive user interfaces, structured components wireframes, and crafted high-fidelity interactive design systems emphasizing speed, clarity, and minimalist typography.",
    type: "experience"
  },
  {
    id: "edu-1",
    year: "2021 - 2025",
    title: "Bachelor Degree Computer Science",
    subtitle: "Mekelle University",
    description: "Studied core software engineering structures, database indexing, user-centered interface designs, and complete backend service architectures.",
    type: "education"
  }
];

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Mattan Precision Engineering",
    category: "Full Stack",
    mediaType: "slider",
    client: "Mattan Precision Eng.",
    languagesUsed: ["React", "Three.js", "Tailwind CSS", "Vite"],
    description: "A high-end web application designed for a digital-first metrology and additive manufacturing facility. It features robust engineering process showcases, interactive dark/light technical aesthetics, a precision materials gallery, and fully-responsive layout designs.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: [
      "/src/assets/images/mattan_home.png",
      "/src/assets/images/mattan_process.png",
      "/src/assets/images/mattan_gallery.png"
    ]
  },
  {
    id: "proj-2",
    title: "Bingo 75 Caller & Manual Tracker",
    category: "Web Dev",
    mediaType: "slider",
    client: "Bingo Alula",
    languagesUsed: ["React", "Vite", "Tailwind CSS"],
    description: "An intuitive, real-time interactive bingo helper and manual tracking application. Equips callers with instant card marking triggers, automatic pattern checking algorithms, and high-contrast digital layouts to streamline game operations.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: [
      "/src/assets/images/bingo_tracker_1.png",
      "/src/assets/images/bingo_tracker_2.png"
    ]
  },
  {
    id: "proj-3",
    title: "StockFlow Inventory Control",
    category: "Full Stack",
    mediaType: "slider",
    client: "Enterprise Logistics Corp",
    languagesUsed: ["React", "Node.js", "Express", "Tailwind CSS"],
    description: "A professional and lightning-fast stock management suite. Engineered to support live transaction dashboard metrics, atomic status updates, multi-user role configurations, and clean light/dark theme presets.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: [
      "/src/assets/images/stock_dashboard.png",
      "/src/assets/images/stock_dashboard_light.png",
      "/src/assets/images/stock_login.png",
      "/src/assets/images/stock_admin.png"
    ]
  },
  {
    id: "proj-4",
    title: "Honey From The Mountain E-Commerce",
    category: "Design & UI",
    mediaType: "slider",
    client: "Mountain Beekeeping Co-op",
    languagesUsed: ["Figma", "HTML5", "CSS3", "JavaScript"],
    description: "A beautiful, editorial e-commerce showcase built for organic honey producers. Incorporates rich visual slider components, clean informational tabs, contact channels, and a warm rustic palette to establish a strong brand identity.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: [
      "/src/assets/images/honey_home.png",
      "/src/assets/images/honey_info.png",
      "/src/assets/images/honey_contact.png"
    ]
  }
];
