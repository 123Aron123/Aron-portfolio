/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import SmoothLoader from './components/SmoothLoader';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Light mouse parallax coordinates helper
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 45,
        y: (e.clientY - window.innerHeight / 2) / 45,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      let currentSection = 'home';
      let minDistance = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Find the section closest to the top area of the viewport
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = id;
          }
        }
      });

      setActiveSection((prev) => {
        if (prev !== currentSection) {
          return currentSection;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0E0E10] text-[#F7F5F2] selection:bg-[#FF6B00] selection:text-[#0E0E10] font-sans antialiased overflow-x-hidden relative animated-bg">
      
      {/* Dynamic Cursor Tracker */}
      <CustomCursor />

      {/* Loading Sequence Manager */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <SmoothLoader onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Main app contents revealed after loader is complete */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-screen w-full flex flex-col justify-between"
        >
          {/* Structural Lines Layer & Parallax Glowing Orbs */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Structural grid lines with light glowing tint */}
            <div className="absolute h-full w-[1px] left-1/3 top-0 bg-[#FF6B00]/5 hidden md:block"></div>
            <div className="absolute h-full w-[1px] left-2/3 top-0 bg-[#FF6B00]/5 hidden md:block"></div>
            <div className="absolute w-full h-[1px] top-[120px] left-0 bg-[#FF6B00]/5"></div>
            <div className="absolute w-full h-[1px] bottom-[80px] left-0 bg-[#FF6B00]/5 hidden md:block"></div>

            {/* Glowing Orange Orb with subtle parallax relative to mouse position */}
            <motion.div 
              style={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
              className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#FF6B00]/15 to-transparent blur-[110px] top-[15%] left-[20%] pointer-events-none"
            />
            {/* Subtle Grey glowing mesh */}
            <motion.div 
              style={{ x: -mousePosition.x, y: -mousePosition.y }}
              className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#8E8E93]/8 to-transparent blur-[120px] bottom-[10%] right-[15%] pointer-events-none"
            />
          </div>

          {/* Floating global navigation circles dock */}
          <Navigation activeSection={activeSection} setActiveSection={handleNavigate} />

          {/* Frame Transition Manager container */}
          <main className="w-full relative z-10 flex-1 flex flex-col">
            <div id="home" className="w-full">
              <HomeSection onNavigateToAbout={() => handleNavigate('about')} />
            </div>
            <div id="about" className="w-full">
              <AboutSection />
            </div>
            <div id="portfolio" className="w-full">
              <PortfolioSection />
            </div>
            <div id="contact" className="w-full">
              <ContactSection />
            </div>
          </main>

          {/* Extra Subtle decorative corners for professional design touch */}
          <div className="fixed top-8 left-8 text-[#FF6B00]/65 text-[11px] font-semibold tracking-[0.25em] h-5 overflow-hidden flex items-center leading-none uppercase pointer-events-none z-40 serif italic">
            Aron G. // Creative 
          </div>
          <div className="fixed bottom-8 left-8 text-neutral-400/40 text-[9px] font-mono tracking-[0.25em] h-5 overflow-hidden flex items-center leading-none uppercase pointer-events-none z-40 hidden md:flex">
            Interactive Portfolio Hub 
          </div>
        </motion.div>
      )}
    </div>
  );
}


