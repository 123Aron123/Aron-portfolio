/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  age: number;
  nationality: string;
  freelance: string;
  address: string;
  phone: string;
  email: string;
  linkedin: string;
  languages: string[];
  experienceYears: number;
  completedProjects: number;
  happyCustomers: number;
  awardsWon: number;
}

export interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'experience' | 'education';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  mediaType: 'image' | 'video' | 'youtube' | 'slider';
  mediaUrls: string[];
  demoUrl?: string;
  client?: string;
  languagesUsed?: string[];
  description?: string;
}
