import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeTransition = ({ isTransitioning, fromTheme, toTheme, triggerPosition }) => {
  const [wave, setWave] = useState(null);

  useEffect(() => {
    if (isTransitioning && toTheme) {
      const themeColors = {
        dark: '#EF4444',
        light: '#EF4444', 
        cyberpunk: '#FF00FF',
        forest: '#4ADE80',
        ocean: '#0EA5E9',
        sunset: '#F97316'
      };

      const primaryColor = themeColors[toTheme] || '#EF4444';
      
      // Create single optimized wave
      const newWave = {
        id: Date.now(),
        color: primaryColor,
        duration: 0.6
      };

      setWave(newWave);

      // Clean up wave after animation
      setTimeout(() => {
        setWave(null);
      }, 700);
    }
  }, [isTransitioning, toTheme]);

  const getWaveOrigin = () => {
    if (triggerPosition) {
      return {
        left: triggerPosition.x,
        top: triggerPosition.y
      };
    }
    // Default to center of screen
    return {
      left: '50%',
      top: '50%'
    };
  };

  return (
    <AnimatePresence>
      {isTransitioning && wave && (
        <div className="theme-transition-overlay">
          <div
            className="theme-wave"
            style={{
              background: `radial-gradient(circle, ${wave.color}60 0%, ${wave.color}20 50%, transparent 100%)`,
              width: '120vmax',
              height: '120vmax',
              ...getWaveOrigin(),
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;