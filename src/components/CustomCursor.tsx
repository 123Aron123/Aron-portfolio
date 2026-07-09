/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<'standard' | 'interactive' | 'input' | 'expand'>('standard');

  // Track coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-responsive, fluid spring configuration for faster, smoother cursor follow
  const springConfig = { damping: 32, stiffness: 480, mass: 0.25 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices completely
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or any parent is interactive
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');

      const isInput = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('input') ||
        target.closest('textarea');

      if (isInput) {
        setIsHovered(true);
        setHoverType('input');
      } else if (isInteractive) {
        setIsHovered(true);
        // Special expand type for portfolio cards or CTA buttons
        if (target.closest('#cta-about-btn') || target.closest('[id^="nav-btn-"]') || target.closest('[class*="group relative"]')) {
          setHoverType('expand');
        } else {
          setHoverType('interactive');
        }
      } else {
        setIsHovered(false);
        setHoverType('standard');
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  // Render our two beautiful cursor layers
  return (
    <>
      {/* Outer Lagging Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-100 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isHovered 
            ? hoverType === 'input' 
              ? 'rgba(255, 107, 0, 0.4)' 
              : '#FF6B00' 
            : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: isHovered 
            ? hoverType === 'expand' 
              ? 'rgba(255, 107, 0, 0.15)' 
              : 'transparent'
            : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(255, 107, 0, 0.3)' : 'none',
        }}
        animate={{
          scale: isHovered 
            ? hoverType === 'expand' 
              ? 2.0 
              : hoverType === 'input' 
                ? 0.5 
                : 1.4
            : 1.0,
          borderRadius: hoverType === 'input' ? '2px' : '50%',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />

      {/* Inner Immediate Core Point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#FF6B00] rounded-full pointer-events-none z-100"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
