import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

interface HomeSectionProps {
  onNavigateToAbout: () => void;
}

export default function HomeSection({ onNavigateToAbout }: HomeSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates around the center of the container
    const width = rect.width;
    const height = rect.height;
    const xc = width / 2;
    const yc = height / 2;
    
    // dx and dy ranging from -1 to 1
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;
    
    // Apply degrees of rotation
    const tiltMaxX = 14; 
    const tiltMaxY = 14;
    
    // Update tilt coordinates and position of glare/shine effect
    setCoords({
      rotateX: -dy * tiltMaxY,
      rotateY: dx * tiltMaxX,
      glareX: (x / width) * 100,
      glareY: (y / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 md:py-0 overflow-hidden bg-transparent text-[#F7F5F2]">
      {/* Background Graphic Watermark Word - Orange Glow */}
      <div className="absolute right-[5%] top-[180px] text-[18vw] font-bold serif opacity-[0.015] text-[#FF6B00] pointer-events-none select-none tracking-tighter leading-none hidden xl:block">
        CREATIVE
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image Block - 3D Perspective tilt */}
          <div 
            className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start"
            style={{ perspective: 1200 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg)`,
                transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
              className="relative w-64 h-80 sm:w-80 sm:h-[420px] rounded-2xl overflow-visible shadow-2xl glass-panel p-3 border-white/10 group cursor-pointer"
            >
              {/* Image Wrap */}
              <div 
                className="w-full h-full rounded-xl overflow-hidden relative bg-neutral-900"
                style={{ 
                  transform: 'translateZ(25px)', 
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              >
                {/* Image loading indicator / Skeleton */}
                <AnimatePresence>
                  {!imageLoaded && (
                    <motion.div 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-neutral-950"
                    >
                      {/* Smooth themed loader ring */}
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-2 border-[#FF6B00]/10" />
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="absolute inset-0 rounded-full border-2 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent"
                        />
                        <Sparkles className="w-4 h-4 text-[#FF6B00]/80 animate-pulse" />
                      </div>
                      <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-500 uppercase mt-3 animate-pulse">
                        Rendering...
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.img 
                  src="/src/assets/images/aron_gebru_portrait_1781022828548.png"
                  alt="Aron Gebru portrait"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  initial={{ scale: 1.15, filter: 'blur(10px)', opacity: 0 }}
                  animate={imageLoaded ? { scale: isHovered ? 1.06 : 1, filter: 'blur(0px)', opacity: 1 } : {}}
                  transition={{ 
                    scale: { duration: 0.6, ease: 'easeOut' },
                    filter: { duration: 0.8 },
                    opacity: { duration: 0.6 }
                  }}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://drive.google.com/file/d/1dh5gA51p79oHOsQCz8Ss18i_StLzc6lc/view?usp=drive_link';
                    setImageLoaded(true);
                  }}
                />

                {/* Subtle overlay on hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{ transform: 'translateZ(10px)' }}
                />

                {/* Parallax dynamic spotlight glare following cursor */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10 mix-blend-color-dodge"
                  style={{
                    background: `radial-gradient(circle 120px at ${coords.glareX}% ${coords.glareY}%, rgba(255,107,0,0.5), transparent)`
                  }}
                />
              </div>

              {/* Floating Territorial Meta Info Label Badge in vibrant Orange */}
              <div 
                className="absolute -left-5 top-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF6B00] to-[#E05E00] text-[#0E0E10] py-5 px-3.5 shadow-xl z-20 border border-[#FF6B00]/30 rounded-lg transition-transform duration-500"
                style={{ 
                  transform: 'translateY(-50%) translateZ(40px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="vertical-label uppercase tracking-[0.42em] text-[8px] font-black font-mono">
                  Featured / 2026
                </div>
              </div>

              {/* Glass glowing ambient light behind portrait */}
              <div 
                className="absolute -inset-1.5 bg-[#FF6B00]/10 rounded-2xl filter blur-md -z-10 transition-all duration-500 group-hover:bg-[#FF6B00]/20 group-hover:blur-xl" 
                style={{ transform: 'translateZ(-10px)' }}
              />
            </motion.div>
          </div>

          {/* Copy Writing & Greeting - Staggered Slide Reveals */}
          <div className="col-span-1 lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B00] animate-pulse" />
              <span className="text-[#FF6B00] text-xs uppercase tracking-[0.45em] font-black font-mono">
                HI THERE ! Welcome
              </span>
            </motion.div>
 
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl lg:text-[90px] font-extrabold leading-[0.9] tracking-tighter serif"
              >
                Aron<br />
                <span className="italic font-normal text-[#FF6B00] drop-shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                  {personalInfo.lastName}
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-400 font-bold font-mono leading-relaxed">
                {personalInfo.role}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Glowing Glassmorphic Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                id="cta-about-btn"
                onClick={onNavigateToAbout}
                className="group flex items-center justify-between gap-6 pl-8 pr-2.5 py-2.5 bg-white/5 border border-white/10 hover:border-[#FF6B00]/60 text-[#F7F5F2] rounded-full font-bold uppercase text-[10px] tracking-[0.25em] relative overflow-hidden transition-all duration-300 shadow-lg backdrop-blur-md cursor-pointer"
              >
                <span>Read Biography</span>
                <span className="p-2.5 bg-[#FF6B00] text-[#0E0E10] rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#FF802B]">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

