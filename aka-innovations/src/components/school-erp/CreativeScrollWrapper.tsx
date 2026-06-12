'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function CreativeScrollWrapper({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll();
  
  // Smooth cursor spring physics
  const cursorX = useSpring(0, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setHovered(true);
        scale.set(1.8);
      } else {
        setHovered(false);
        scale.set(1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, scale]);

  return (
    <>
      {/* Top linear scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Custom Cursor Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          scale: scale,
        }}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 border transition-colors duration-300 hidden md:block ${
          hovered 
            ? 'border-indigo-500 bg-indigo-500/10' 
            : 'border-blue-500/60 dark:border-blue-400/60 bg-transparent'
        }`}
      />

      {children}
    </>
  );
}
