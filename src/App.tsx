/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] selection:bg-[#B35D43] selection:text-white font-sans antialiased overflow-x-hidden relative">
      
      {/* Structural Editorial Lines Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute h-full w-[1px] left-1/3 top-0 bg-[#1A1A1A]/10 hidden md:block"></div>
        <div className="absolute h-full w-[1px] left-2/3 top-0 bg-[#1A1A1A]/10 hidden md:block"></div>
        <div className="absolute w-full h-[1px] top-[120px] left-0 bg-[#1A1A1A]/10"></div>
        <div className="absolute w-full h-[1px] bottom-[80px] left-0 bg-[#1A1A1A]/10 hidden md:block"></div>
      </div>

      {/* Floating global navigation circles dock */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Frame Transition Manager container */}
      <main className="w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activeSection === 'home' && (
              <HomeSection onNavigateToAbout={() => setActiveSection('about')} />
            )}
            {activeSection === 'about' && <AboutSection />}
            {activeSection === 'portfolio' && <PortfolioSection />}
            {activeSection === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Extra Subtle decorative corners for professional design touch */}
      <div className="fixed top-8 left-8 text-[#1A1A1A]/50 text-[11px] font-semibold tracking-[0.25em] h-5 overflow-hidden flex items-center leading-none uppercase pointer-events-none z-40 serif italic">
        Aron G. // Protofol — 01
      </div>
      <div className="fixed bottom-8 left-8 text-[#1A1A1A]/40 text-[9px] font-mono tracking-[0.25em] h-5 overflow-hidden flex items-center leading-none uppercase pointer-events-none z-40 hidden md:flex">
        Creative Interaction Designer — EST. 1999
      </div>
    </div>
  );
}

