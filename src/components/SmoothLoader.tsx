/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SmoothLoaderProps {
  onComplete: () => void;
}

export default function SmoothLoader({ onComplete }: SmoothLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing creative engine...');

  const logs = [
    'Calibrating 3D perspective layers...',
    'Loading custom glassmorphic modules...',
    'Synchronizing mouse coordinate trackers...',
    'Mapping orange & slate color schemes...',
    'Compiling interactive canvas variables...',
    'Almost ready to interact...'
  ];

  useEffect(() => {
    // Progress counter
    const startTime = Date.now();
    const duration = 2200; // 2.2 seconds

    const update = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      
      setProgress(pct);

      // Change text at milestones
      const textIndex = Math.min(Math.floor((pct / 100) * logs.length), logs.length - 1);
      setLoadingText(logs[textIndex]);

      if (elapsed < duration) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    };

    requestAnimationFrame(update);
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0E0E10] text-[#F7F5F2] overflow-hidden select-none">
      {/* Background glowing orange orb */}
      <div className="absolute w-[400px] h-[400px] bg-[#FF6B00]/10 rounded-full blur-[120px] -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-neutral-850/20 rounded-full blur-[100px] bottom-10 right-10" />

      {/* Cyber grid wallpaper background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#FF6B00 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="text-center px-6 max-w-lg w-full relative z-10">
        {/* Dynamic Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#FF6B00] block mb-2">
            DESIGNER & DEVELOPER
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase serif italic">
            ARON GEBRU
          </h1>
        </motion.div>

        {/* Circular glassmorphic progress bar */}
        <div className="relative w-36 h-36 mx-auto mb-10 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background track circle */}
            <circle
              cx="72"
              cy="72"
              r="60"
              className="stroke-neutral-800 fill-none"
              strokeWidth="3"
            />
            {/* Orange dynamic progress track */}
            <circle
              cx="72"
              cy="72"
              r="60"
              className="stroke-[#FF6B00] fill-none"
              strokeWidth="4"
              strokeDasharray={2 * Math.PI * 60}
              strokeDashoffset={2 * Math.PI * 60 * (1 - progress / 100)}
              style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
            />
          </svg>
          {/* Inner Text with glass background */}
          <div className="absolute inset-2 bg-neutral-900/80 rounded-full flex flex-col items-center justify-center backdrop-blur-sm border border-white/5">
            <span className="text-2xl font-black font-mono tracking-tighter text-[#FF6B00]">
              {progress}%
            </span>
            <span className="text-[8px] tracking-[0.2em] font-mono text-neutral-400 uppercase mt-0.5">
              Loading
            </span>
          </div>
        </div>

        {/* Log Text & Status */}
        <motion.div
          key={loadingText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-6 flex items-center justify-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-ping" />
          <p className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
            {loadingText}
          </p>
        </motion.div>
      </div>

      {/* Slide-out overlay panels when loading finishes */}
      <AnimatePresence>
        {progress === 100 && (
          <>
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: '-100%' }}
              transition={{ duration: 0.75, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
              className="absolute inset-y-0 left-0 w-1/2 bg-[#0E0E10] border-r border-[#FF6B00]/20 z-50"
            />
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.75, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
              className="absolute inset-y-0 right-0 w-1/2 bg-[#0E0E10] border-l border-[#FF6B00]/20 z-50"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
