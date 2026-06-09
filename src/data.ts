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
  address: "Mekelle, Ethiopia",
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
    title: "Headless E-Commerce System",
    category: "Web Dev",
    mediaType: "image",
    client: "Global Commerce Group",
    languagesUsed: ["React", "Tailwind CSS", "Vite"],
    description: "A gorgeous modern web front-end optimized for instant content delivery, absolute accessibility, and high-frequency visual response times. Built to support custom payment gateways and full theme customizations.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"]
  },
  {
    id: "proj-2",
    title: "Smart Business Analytics",
    category: "Analytics",
    mediaType: "youtube",
    client: "Velocity Analytics LLC",
    languagesUsed: ["TypeScript", "Recharts", "Node.js"],
    description: "An elegant dark dashboard displaying high-frequency telemetry metrics using fluid SVG charting libraries, real-time alert logs, and modular draggable bento widgets.",
    demoUrl: "https://youtu.be/dQw4w9WgXcQ",
    mediaUrls: ["https://www.youtube.com/embed/dQw4w9WgXcQ"]
  },
  {
    id: "proj-3",
    title: "Interactive Travel Guide",
    category: "Design",
    mediaType: "slider",
    client: "Voyage International",
    languagesUsed: ["Figma", "HTML", "CSS"],
    description: "A showcase travel experience page built around organic fullscreen animations, structural cards overlays, and tactile navigation controls designed exclusively for mobile responsive touchpoints.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "proj-4",
    title: "Creative Interactive Playground",
    category: "UI/UX Design",
    mediaType: "image",
    client: "Lab Experiments",
    languagesUsed: ["React", "Motion", "Tailwind"],
    description: "An experimental web interface displaying smooth spring-physics based animation curves, custom scroll triggers, and fluid mouse interaction nodes on an immersive canvas.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: ["https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"]
  },
  {
    id: "proj-5",
    title: "Developer Workstation Video Teaser",
    category: "Production",
    mediaType: "video",
    client: "Apex Tech Inc.",
    languagesUsed: ["Adobe Premier", "After Effects"],
    description: "A short, beautiful, high-contrast promotional video showing creative workspaces and web engineering workflows, integrated into an ultra-fast HTML5 background player.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: ["https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-34281-large.mp4"]
  },
  {
    id: "proj-6",
    title: "Sleek Personal Tasks Canvas",
    category: "Web Dev",
    mediaType: "image",
    client: "Self Project",
    languagesUsed: ["JavaScript", "HTML", "CSS"],
    description: "A minimal, key-value persisted task blackboard structured with custom columns, custom tags sorting, and high-contrast color codes to prioritize web development pipelines.",
    demoUrl: "https://github.com/123Aron123/protofol",
    mediaUrls: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"]
  }
];
