/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

interface HomeSectionProps {
  onNavigateToAbout: () => void;
}

export default function HomeSection({ onNavigateToAbout }: HomeSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 md:py-0 overflow-hidden bg-[#F7F5F2] text-[#1A1A1A]">
      {/* Background Graphic Watermark Word */}
      <div className="absolute right-[5%] top-[180px] text-[18vw] font-bold serif opacity-[0.03] pointer-events-none select-none tracking-tighter leading-none hidden xl:block">
        PROTOFOL
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image Block - Customized to match raw professional layout of Editorial theme */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-64 h-80 sm:w-80 sm:h-[420px] rounded-none overflow-visible shadow-xl border border-[#1A1A1A]/10 bg-[#1A1A1A]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src="/src/assets/images/aron_gebru_portrait_1781022828548.png"
                  alt="Aron Gebru portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80';
                  }}
                />
              </div>

              {/* Floating Territorial Meta Info Label Badge in terracotta */}
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 bg-[#B35D43] text-[#F7F5F2] p-5 px-3.5 shadow-xl z-20">
                <div className="vertical-label uppercase tracking-[0.4em] text-[8px] font-bold">Featured / 2026</div>
              </div>

              {/* Minimal framing border */}
              <div className="absolute -inset-3 border border-[#1A1A1A]/5 pointer-events-none -z-10" />
            </motion.div>
          </div>

          {/* Copy Writing & Greeting - Stylized with Asymmetric Serif / playfair structures */}
          <div className="col-span-1 lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h6 className="text-[#B35D43] text-xs uppercase tracking-[0.4em] font-semibold mb-4">
                hi there !
              </h6>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-[100px] font-bold leading-[0.85] tracking-tighter serif mb-6">
                Aron<br />
                <span className="italic font-normal text-[#B35D43]">{personalInfo.lastName}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/70 font-semibold leading-relaxed">
                Full-Stack Developer & <br className="hidden sm:inline" /> Creative Interaction Designer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-[#1A1A1A]/60 text-sm sm:text-[15px] leading-relaxed max-w-md mb-8 mx-auto lg:mx-0 font-normal">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Editorial Action Link Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                id="cta-about-btn"
                onClick={onNavigateToAbout}
                className="group flex items-center justify-between gap-6 px-8 py-3.5 bg-[#1A1A1A] border border-[#1A1A1A] text-[#F7F5F2] hover:bg-transparent hover:text-[#1A1A1A] rounded-none font-bold uppercase text-[10px] tracking-[0.2em] relative overflow-hidden transition-all duration-300 cursor-pointer shadow-md"
              >
                <span>Read Biography</span>
                <span className="p-1 px-1.5 bg-[#B35D43] text-white rounded-none transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
