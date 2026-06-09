/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, skills, timeline } from '../data';

export default function AboutSection() {
  const experiences = timeline.filter(item => item.type === 'experience');
  const educations = timeline.filter(item => item.type === 'education');

  return (
    <section className="relative w-full min-h-screen py-24 bg-[#F7F5F2] text-[#1A1A1A] overflow-hidden">
      {/* Background decoration text */}
      <div className="absolute right-6 top-1/4 text-[10vw] font-bold serif opacity-[0.02] select-none pointer-events-none tracking-widest leading-none hidden xl:block">
        RESUME
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10 relative">
        
        {/* Title Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 serif">
            ABOUT <span className="text-[#B35D43] italic font-normal">ME</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#1A1A1A]/30 mx-auto mt-4" />
        </div>

        {/* Info Grid: Info & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Personal Information Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-[#1A1A1A]/80 border-b border-[#1A1A1A]/10 pb-3 font-mono">
              Personal Infos
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div>
                <span className="text-neutral-500 font-medium">First Name:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">{personalInfo.firstName}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Last Name:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">{personalInfo.lastName}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Age:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">{personalInfo.age} Years</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Nationality:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">{personalInfo.nationality}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Freelance:</span>{' '}
                <span className="text-[#B35D43] font-semibold">{personalInfo.freelance}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Address:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">{personalInfo.address}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Phone:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">{personalInfo.phone}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Email:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold break-all">{personalInfo.email}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">LinkedIn:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">{personalInfo.linkedin}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Languages:</span>{' '}
                <span className="text-[#1A1A1A] font-semibold">
                  {personalInfo.languages.join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics grid (Bento Grid Style) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-5">
            {[
              { label: 'Years of Experience', val: personalInfo.experienceYears },
              { label: 'Completed Projects', val: personalInfo.completedProjects },
              { label: 'Happy Customers', val: personalInfo.happyCustomers },
              { label: 'Awards Won', val: personalInfo.awardsWon },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-[#1A1A1A]/10 bg-[#F0EDE9]/80 rounded-none p-6 flex flex-col justify-between hover:border-[#1A1A1A]/20 transition"
              >
                <div className="text-4xl sm:text-5xl font-bold serif italic text-[#B35D43] mb-2">
                  {stat.val}+
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 leading-snug font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Separator */}
        <hr className="border-[#1A1A1A]/10 my-16 max-w-xl mx-auto" />

        {/* Skills Grid Section */}
        <div className="mb-24">
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-center mb-12 font-mono text-[#1A1A1A]/80">
            My Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => {
              const radius = 40;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex flex-col items-center p-6 bg-[#F0EDE9]/50 border border-[#1A1A1A]/10 rounded-none shadow-sm"
                >
                  {/* SVG Circular Indicator */}
                  <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Gray track ring */}
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-[#1A1A1A]/5 fill-none"
                        strokeWidth="5"
                      />
                      {/* Active terracotta ring */}
                      <motion.circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-[#B35D43] fill-none"
                        strokeWidth="5"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                      />
                    </svg>
                    {/* Inner Text */}
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#1A1A1A]/85 font-mono">
                      {skill.percentage}%
                    </div>
                  </div>
                  
                  {/* Skill name */}
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/80 font-mono">
                    {skill.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Separator */}
        <hr className="border-[#1A1A1A]/10 my-16 max-w-xl mx-auto" />

        {/* Timelines Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-center mb-16 font-mono text-[#1A1A1A]/80">
            Experience & Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Experience Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#1A1A1A] rounded-none text-[#F7F5F2]">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-widest font-mono text-[#1A1A1A]">
                  Experience
                </h4>
              </div>

              <div className="relative border-l border-[#1A1A1A]/10 pl-6 space-y-12">
                {experiences.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-[-29px] top-1 w-2.5 h-2.5 rounded-full bg-[#B35D43] z-10" />
                    
                    {/* Event Header Card */}
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 bg-[#F0EDE9] text-[#1A1A1A]/60 text-[10px] rounded-none font-bold uppercase mb-1 font-mono border border-[#1A1A1A]/5">
                        {item.year}
                      </span>
                      <h5 className="text-base font-bold text-[#1A1A1A] flex flex-wrap items-center gap-1.5 leading-snug">
                        {item.title}{' '}
                        <span className="text-neutral-300 font-normal">|</span>{' '}
                        <span className="text-[#B35D43] text-xs font-semibold uppercase tracking-wider">{item.subtitle}</span>
                      </h5>
                    </div>
                    {/* Event Description */}
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/60 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#1A1A1A] rounded-none text-[#F7F5F2]">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-widest font-mono text-[#1A1A1A]">
                  Education
                </h4>
              </div>

              <div className="relative border-l border-[#1A1A1A]/10 pl-6 space-y-12">
                {educations.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-[-29px] top-1 w-2.5 h-2.5 rounded-full bg-[#B35D43] z-10" />
                    
                    {/* Event Header Card */}
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 bg-[#F0EDE9] text-[#1A1A1A]/60 text-[10px] rounded-none font-bold uppercase mb-1 font-mono border border-[#1A1A1A]/5">
                        {item.year}
                      </span>
                      <h5 className="text-base font-bold text-[#1A1A1A] flex flex-wrap items-center gap-1.5 leading-snug">
                        {item.title}{' '}
                        <span className="text-neutral-300 font-normal">|</span>{' '}
                        <span className="text-[#B35D43] text-xs font-semibold uppercase tracking-wider">{item.subtitle}</span>
                      </h5>
                    </div>
                    {/* Event Description */}
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/60 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
