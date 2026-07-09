import { Briefcase, GraduationCap, Award, CheckCircle, Heart, FolderOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, skills, timeline } from '../data';

export default function AboutSection() {
  const experiences = timeline.filter(item => item.type === 'experience');
  const educations = timeline.filter(item => item.type === 'education');

  return (
    <section className="relative w-full min-h-screen py-24 bg-transparent text-[#F7F5F2] overflow-hidden">
      {/* Background decoration text */}
      <div className="absolute right-6 top-1/4 text-[10vw] font-bold serif opacity-[0.015] text-[#FF6B00] select-none pointer-events-none tracking-widest leading-none hidden xl:block">
        RESUME
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10 relative">
        
        {/* Title Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 serif">
            ABOUT <span className="text-[#FF6B00] italic font-normal drop-shadow-[0_0_15px_rgba(255,107,0,0.15)]">ME</span>
          </h2>
          <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
        </div>

        {/* Info Grid: Info & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Personal Information Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-[#F7F5F2]/90 border-b border-white/5 pb-3 font-mono">
              Personal Info
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">First Name:</span>
                <span className="text-white font-semibold">{personalInfo.firstName}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Last Name:</span>
                <span className="text-white font-semibold">{personalInfo.lastName}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Age:</span>
                <span className="text-white font-semibold">{personalInfo.age} Years</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Nationality:</span>
                <span className="text-white font-semibold">{personalInfo.nationality}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Freelance:</span>
                <span className="text-[#FF6B00] font-bold font-mono text-xs uppercase animate-pulse">{personalInfo.freelance}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Address:</span>
                <span className="text-white font-semibold">{personalInfo.address}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Phone:</span>
                <span className="text-white font-semibold">{personalInfo.phone}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Email:</span>
                <span className="text-white font-semibold break-all text-xs">{personalInfo.email}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">LinkedIn:</span>
                <span className="text-white font-semibold">{personalInfo.linkedin}</span>
              </div>
              <div className="flex justify-between sm:justify-start gap-2 border-b border-white/[0.02] pb-1.5">
                <span className="text-neutral-400 font-medium font-mono text-xs uppercase">Languages:</span>
                <span className="text-white font-semibold">
                  {personalInfo.languages.join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics grid (Glassmorphic Bento Grid Style) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { label: 'Years of Experience', val: personalInfo.experienceYears, icon: Award },
              { label: 'Completed Projects', val: personalInfo.completedProjects, icon: FolderOpen },
              { label: 'Happy Customers', val: personalInfo.happyCustomers, icon: Heart },
              { label: 'Awards Won', val: personalInfo.awardsWon, icon: CheckCircle },
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-[#FF6B00]/40 transition-all duration-300 relative group overflow-hidden cursor-default"
                >
                  {/* Subtle corner icon */}
                  <div className="absolute right-4 top-4 text-white/5 group-hover:text-[#FF6B00]/10 transition-colors duration-300">
                    <IconComponent className="w-12 h-12 stroke-[1.5]" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold serif italic text-[#FF6B00] mb-2 drop-shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                    {stat.val}+
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 leading-snug font-mono">
                    {stat.label}
                  </div>

                  {/* Glass glowing bottom strip */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Separator */}
        <hr className="border-white/5 my-16 max-w-xl mx-auto" />

        {/* Skills Grid Section */}
        <div className="mb-24">
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-center mb-12 font-mono text-[#F7F5F2]/90">
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
                  className="flex flex-col items-center p-6 glass-panel rounded-2xl hover:border-[#FF6B00]/30 transition-all duration-300 group cursor-default"
                >
                  {/* SVG Circular Indicator */}
                  <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Gray track ring */}
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-neutral-800 fill-none"
                        strokeWidth="5"
                      />
                      {/* Active orange ring */}
                      <motion.circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-[#FF6B00] fill-none"
                        strokeWidth="5"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                        style={{ filter: 'drop-shadow(0 0 4px rgba(255,107,0,0.4))' }}
                      />
                    </svg>
                    {/* Inner Text */}
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white font-mono">
                      {skill.percentage}%
                    </div>
                  </div>
                  
                  {/* Skill name */}
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 font-mono group-hover:text-[#FF6B00] transition-colors duration-300">
                    {skill.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Separator */}
        <hr className="border-white/5 my-16 max-w-xl mx-auto" />

        {/* Timelines Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-center mb-16 font-mono text-[#F7F5F2]/90">
            Experience & Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Experience Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 border border-white/10 text-[#FF6B00] rounded-xl shadow-md backdrop-blur-md">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-widest font-mono text-[#F7F5F2]">
                  Experience
                </h4>
              </div>

              <div className="relative border-l border-white/10 pl-6 space-y-12">
                {experiences.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group cursor-default"
                  >
                    {/* Timeline Node Point (Illuminated Orange Dot) */}
                    <div className="absolute left-[-30px] top-1.5 w-3 h-3 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] z-10 transition-transform duration-300 group-hover:scale-125" />
                    
                    {/* Event Header Card */}
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 bg-white/5 text-[#FF6B00] text-[10px] rounded-full font-bold uppercase mb-1.5 font-mono border border-white/10 backdrop-blur-sm shadow-sm">
                        {item.year}
                      </span>
                      <h5 className="text-base font-bold text-white flex flex-wrap items-center gap-1.5 leading-snug">
                        {item.title}{' '}
                        <span className="text-neutral-700 font-normal">|</span>{' '}
                        <span className="text-[#FF6B00] text-xs font-semibold uppercase tracking-wider">{item.subtitle}</span>
                      </h5>
                    </div>
                    {/* Event Description */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 border border-white/10 text-[#FF6B00] rounded-xl shadow-md backdrop-blur-md">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-widest font-mono text-[#F7F5F2]">
                  Education
                </h4>
              </div>

              <div className="relative border-l border-white/10 pl-6 space-y-12">
                {educations.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group cursor-default"
                  >
                    {/* Timeline Node Point (Illuminated Orange Dot) */}
                    <div className="absolute left-[-30px] top-1.5 w-3 h-3 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] z-10 transition-transform duration-300 group-hover:scale-125" />
                    
                    {/* Event Header Card */}
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 bg-white/5 text-[#FF6B00] text-[10px] rounded-full font-bold uppercase mb-1.5 font-mono border border-white/10 backdrop-blur-sm shadow-sm">
                        {item.year}
                      </span>
                      <h5 className="text-base font-bold text-white flex flex-wrap items-center gap-1.5 leading-snug">
                        {item.title}{' '}
                        <span className="text-neutral-700 font-normal">|</span>{' '}
                        <span className="text-[#FF6B00] text-xs font-semibold uppercase tracking-wider">{item.subtitle}</span>
                      </h5>
                    </div>
                    {/* Event Description */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
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

