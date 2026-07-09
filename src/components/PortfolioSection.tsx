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
    <section className="relative w-full min-h-screen py-24 bg-transparent text-[#F7F5F2] overflow-hidden">
      {/* Background decoration watermark text */}
      <div className="absolute left-6 top-1/3 text-[10vw] font-bold serif opacity-[0.015] text-[#FF6B00] select-none pointer-events-none tracking-widest leading-none hidden xl:block">
        WORKS
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 serif">
            MY <span className="text-[#FF6B00] italic font-normal drop-shadow-[0_0_15px_rgba(255,107,0,0.15)]">PORTFOLIO</span>
          </h2>
          <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
        </div>

        {/* Tab Category Filters (Glassmorphic Pills) */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer border backdrop-blur-md shadow-sm"
              style={{
                backgroundColor: activeCategory === category ? '#FF6B00' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === category ? '#0E0E10' : '#F7F5F2',
                borderColor: activeCategory === category ? '#FF6B00' : 'rgba(255, 255, 255, 0.08)',
                boxShadow: activeCategory === category ? '0 0 15px rgba(255, 107, 0, 0.25)' : 'none'
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
                className="group relative h-64 rounded-2xl overflow-hidden shadow-2xl glass-panel p-2 border-white/10 cursor-pointer"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-neutral-900">
                  {/* Image thumb */}
                  <img
                    src={project.mediaUrls[0]}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80';
                    }}
                  />

                  {/* Dark-to-Orange Gradient Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-[#FF6B00]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 z-10 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-[#FF6B00] text-[#0E0E10] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,107,0,0.5)] transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      {project.mediaType === 'image' && <Eye className="w-5 h-5 stroke-[2.5]" />}
                      {project.mediaType === 'youtube' && <Play className="w-5 h-5 fill-current stroke-[2.5]" />}
                      {project.mediaType === 'video' && <Play className="w-5 h-5 fill-current stroke-[2.5]" />}
                      {project.mediaType === 'slider' && <ChevronRight className="w-5 h-5 stroke-[2.5]" />}
                    </div>
                    <h3 className="text-[#F7F5F2] text-[15px] font-bold uppercase tracking-[0.15em] text-center leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[#FF6B00] text-[9px] font-bold uppercase tracking-widest mt-1.5 font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Glass glowing subtle outer border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#FF6B00]/20 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Project Lightbox Panel (Glassmorphic Overlay) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4 overflow-y-auto"
            >
              {/* Main lightbox container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-neutral-900/90 glass-panel border-white/10 rounded-3xl w-full max-w-5xl h-auto lg:max-h-[90vh] overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative shadow-2xl text-[#F7F5F2] cursor-default"
              >
                {/* Close Button top-right (illuminate core orange circle) */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 lg:right-6 lg:top-6 z-30 p-2.5 bg-[#FF6B00] hover:bg-[#FF802B] text-[#0E0E10] border-0 rounded-full transition cursor-pointer shadow-md"
                >
                  <X className="w-4.5 h-4.5 stroke-[2.5]" />
                </button>

                {/* Left Side: Media Window */}
                <div className="col-span-1 lg:col-span-7 bg-neutral-950 min-h-[250px] sm:min-h-[350px] lg:h-[90vh] flex items-center justify-center relative select-none">
                  
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
                        className="absolute left-4 p-2 bg-black/60 hover:bg-[#FF6B00] text-white hover:text-[#0E0E10] border border-white/10 hover:border-[#FF6B00] rounded-full transition cursor-pointer z-10"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Next trigger */}
                      <button
                        onClick={(e) => { e.stopPropagation(); handleNextSlide(selectedProject.mediaUrls); }}
                        className="absolute right-4 p-2 bg-black/60 hover:bg-[#FF6B00] text-white hover:text-[#0E0E10] border border-white/10 hover:border-[#FF6B00] rounded-full transition cursor-pointer z-10"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Slider Index Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
                        {selectedProject.mediaUrls.map((_, dotIdx) => (
                          <div
                            key={dotIdx}
                            className="w-2 h-2 rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: currentSlideIndex === dotIdx ? '#FF6B00' : 'rgba(255, 255, 255, 0.25)',
                              boxShadow: currentSlideIndex === dotIdx ? '0 0 8px #FF6B00' : 'none'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Description Info box */}
                <div className="col-span-1 lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between lg:overflow-y-auto lg:max-h-[90vh]">
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold uppercase text-[#FF6B00] mb-2 leading-tight serif italic drop-shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                      {selectedProject.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[#FF6B00] text-[9px] font-bold uppercase tracking-widest mb-6 font-mono rounded-full">
                      {selectedProject.category}
                    </span>

                    <h4 className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-2 font-mono">
                      Brief / Details
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Metadata items list */}
                    <div className="space-y-3.5 border-t border-white/5 pt-6 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400 font-mono text-[10px] uppercase">Client:</span>
                        <span className="text-white font-semibold">{selectedProject.client || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-neutral-400 font-mono text-[10px] uppercase mt-1">Tech Stack:</span>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {selectedProject.languagesUsed?.map(lang => (
                            <span key={lang} className="px-2 py-0.5 bg-white/5 text-[#FF6B00] text-[10px] rounded-full border border-white/10 font-mono">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Link button bottom */}
                  <div className="border-t border-white/5 pt-6 mt-8 flex justify-end">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#FF802B] text-[#0E0E10] font-bold text-[10px] uppercase tracking-[0.2em] rounded-full transition shadow-[0_0_15px_rgba(255,107,0,0.2)]"
                      >
                        Launch Preview <ExternalLink className="w-3.5 h-3.5" />
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

