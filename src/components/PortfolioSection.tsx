/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react';
import { projects } from '../data';
import { ProjectItem } from '../types';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Extract unique categories for tabs filter
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Filter projects depending on active tab
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setCurrentSlideIndex(0);
  };

  const handleNextSlide = (urls: string[]) => {
    setCurrentSlideIndex((prev) => (prev + 1) % urls.length);
  };

  const handlePrevSlide = (urls: string[]) => {
    setCurrentSlideIndex((prev) => (prev - 1 + urls.length) % urls.length);
  };

  return (
    <section className="relative w-full min-h-screen py-24 bg-[#F7F5F2] text-[#1A1A1A] overflow-hidden">
      {/* Background decoration watermark text */}
      <div className="absolute left-6 top-1/3 text-[10vw] font-bold serif opacity-[0.02] select-none pointer-events-none tracking-widest leading-none hidden xl:block">
        WORKS
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 serif">
            MY <span className="text-[#B35D43] italic font-normal">PORTFOLIO</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#1A1A1A]/30 mx-auto mt-4" />
        </div>

        {/* Tab Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-5 py-2.5 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border"
              style={{
                backgroundColor: activeCategory === category ? '#B35D43' : 'transparent',
                color: activeCategory === category ? '#F7F5F2' : '#1A1A1A',
                borderColor: activeCategory === category ? '#B35D43' : 'rgba(26, 26, 26, 0.15)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid List with Staggered Entrance Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenProject(project)}
                className="group relative h-64 rounded-none overflow-hidden cursor-pointer shadow-md border border-[#1A1A1A]/10 bg-[#1A1A1A]"
              >
                {/* Image thumb */}
                <img
                  src={project.mediaUrls[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80';
                  }}
                />

                {/* Terracotta Graphic Overlay Hover Card */}
                <div className="absolute inset-0 bg-[#B35D43]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 z-10">
                  <div className="w-11 h-11 rounded-none bg-[#F7F5F2] text-[#B35D43] flex items-center justify-center mb-3 shadow-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    {project.mediaType === 'image' && <Eye className="w-4.5 h-4.5" />}
                    {project.mediaType === 'youtube' && <Play className="w-4.5 h-4.5 fill-current" />}
                    {project.mediaType === 'video' && <Play className="w-4.5 h-4.5 fill-current" />}
                    {project.mediaType === 'slider' && <ChevronRight className="w-4.5 h-4.5" />}
                  </div>
                  <h3 className="text-[#F7F5F2] text-[15px] font-bold uppercase tracking-widest text-center leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-[#F7F5F2]/80 text-[9px] font-bold uppercase tracking-widest mt-1 font-mono">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Project Lightbox Panel in Editorial Layout */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#F7F5F2]/95 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto"
            >
              {/* Main lightbox container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-[#F0EDE9] border border-[#1A1A1A]/15 rounded-none w-full max-w-5xl h-auto lg:max-h-[90vh] overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative shadow-2xl text-[#1A1A1A]"
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 lg:right-6 lg:top-6 z-30 p-2.5 bg-[#1A1A1A] hover:bg-[#B35D43] text-[#F7F5F2] border-0 rounded-none transition cursor-pointer shadow-md"
                >
                  <X className="w-4.5 h-4.5" />
                </button>

                {/* Left Side: Media Window */}
                <div className="col-span-1 lg:col-span-7 bg-[#1A1A1A] min-h-[300px] lg:h-[90vh] flex items-center justify-center relative select-none">
                  
                  {/* Option 1: Image type */}
                  {selectedProject.mediaType === 'image' && (
                    <img
                      src={selectedProject.mediaUrls[0]}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  )}

                  {/* Option 2: YouTube type */}
                  {selectedProject.mediaType === 'youtube' && (
                    <div className="w-full h-full aspect-video flex items-center justify-center">
                      <iframe
                        src={selectedProject.mediaUrls[0]}
                        title={selectedProject.title}
                        className="w-full h-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* Option 3: Local Video Type */}
                  {selectedProject.mediaType === 'video' && (
                    <video
                      src={selectedProject.mediaUrls[0]}
                      controls
                      autoPlay
                      muted
                      className="max-h-full max-w-full"
                    />
                  )}

                  {/* Option 4: Image Slider Carousel Type */}
                  {selectedProject.mediaType === 'slider' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSlideIndex}
                          src={selectedProject.mediaUrls[currentSlideIndex]}
                          alt={`${selectedProject.title} - Slide`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-contain"
                        />
                      </AnimatePresence>

                      {/* Previous trigger */}
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePrevSlide(selectedProject.mediaUrls); }}
                        className="absolute left-4 p-2 bg-[#1A1A1A]/80 hover:bg-[#B35D43] text-[#F7F5F2] rounded-none transition cursor-pointer z-10"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Next trigger */}
                      <button
                        onClick={(e) => { e.stopPropagation(); handleNextSlide(selectedProject.mediaUrls); }}
                        className="absolute right-4 p-2 bg-[#1A1A1A]/80 hover:bg-[#B35D43] text-[#F7F5F2] rounded-none transition cursor-pointer z-10"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Slider Index Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {selectedProject.mediaUrls.map((_, dotIdx) => (
                          <div
                            key={dotIdx}
                            className="w-2.5 h-2.5 rounded-none transition"
                            style={{
                              backgroundColor: currentSlideIndex === dotIdx ? '#B35D43' : 'rgba(255, 255, 255, 0.3)'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Description Info box */}
                <div className="col-span-1 lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh]">
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold uppercase text-[#B35D43] mb-2 leading-tight serif italic">
                      {selectedProject.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#B35D43] text-white text-[9px] font-bold uppercase tracking-widest mb-6 font-mono">
                      {selectedProject.category}
                    </span>

                    <h4 className="text-[10px] uppercase font-bold text-[#1A1A1A]/40 tracking-widest mb-2 font-mono">
                      Brief / Details
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Metadata items list */}
                    <div className="space-y-3.5 border-t border-[#1A1A1A]/10 pt-6 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#1A1A1A]/50 font-mono text-[10px] uppercase">Client:</span>
                        <span className="text-[#1A1A1A] font-semibold">{selectedProject.client || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-[#1A1A1A]/50 font-mono text-[10px] uppercase">Languages:</span>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {selectedProject.languagesUsed?.map(lang => (
                            <span key={lang} className="px-2 py-0.5 bg-[#F7F5F2] text-[#1A1A1A]/80 text-[10px] rounded-none border border-[#1A1A1A]/10 font-mono">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Link button bottom */}
                  <div className="border-t border-[#1A1A1A]/10 pt-6 mt-8 flex justify-end">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] hover:bg-[#B35D43] text-[#F7F5F2] font-bold text-[10px] uppercase tracking-widest rounded-none transition shadow-sm"
                      >
                        Launch Preview <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
