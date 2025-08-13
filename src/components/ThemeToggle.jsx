import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { themes, applyTheme, getStoredTheme } from '../config/themes';
import CustomButton from './ui/custom-button';
import ThemeTransition from './ThemeTransition';

const ThemeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionData, setTransitionData] = useState({ from: null, to: null, position: null });
  const buttonRef = useRef(null);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setCurrentTheme(storedTheme);
    applyTheme(storedTheme, { animated: false });
  }, []);


  const handleThemeChange = (themeKey, event) => {
    if (themeKey === currentTheme) {
      setIsOpen(false);
      return;
    }

    // Get click position for animation origin
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };

    // Start transition
    setTransitionData({
      from: currentTheme,
      to: themeKey,
      position
    });
    setIsTransitioning(true);
    setIsOpen(false);

    // Apply theme with animation
    applyTheme(themeKey, {
      animated: true,
      onTransitionStart: () => {
        // Additional transition start logic if needed
      },
      onTransitionEnd: () => {
        setIsTransitioning(false);
        setTransitionData({ from: null, to: null, position: null });
      }
    });

    setCurrentTheme(themeKey);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <CustomButton
        ref={buttonRef}
        variant="ghost"
        size="sm"
        onClick={toggleOpen}
        className="p-2 relative z-50"
        aria-label="Toggle theme selector"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Palette className="w-5 h-5" />
        </motion.div>
      </CustomButton>

      {/* Theme Selector Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-border">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Choose Theme
                </h3>
                <p className="text-xs text-muted-foreground">
                  Select your preferred color scheme
                </p>
              </div>

              {/* Theme Options */}
              <div className="p-2 max-h-80 overflow-y-auto">
                <div className="grid grid-cols-1 gap-1">
                  {Object.entries(themes).map(([key, theme]) => (
                    <motion.button
                      key={key}
                      onClick={(e) => handleThemeChange(key, e)}
                      className={`w-full p-3 rounded-md text-left transition-all duration-200 hover:bg-muted/50 group relative overflow-hidden ${
                        currentTheme === key ? 'bg-muted ring-2 ring-primary/20' : ''
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isTransitioning}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {/* Theme Icon */}
                          <div className="text-lg">{theme.icon}</div>
                          
                          {/* Theme Info */}
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {theme.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {key === 'dark' && 'Default dark theme'}
                              {key === 'light' && 'Clean light theme'}
                              {key === 'cyberpunk' && 'Neon cyberpunk vibes'}
                              {key === 'forest' && 'Nature-inspired greens'}
                              {key === 'ocean' && 'Deep blue waters'}
                              {key === 'sunset' && 'Warm orange tones'}
                            </div>
                          </div>
                        </div>

                        {/* Color Preview */}
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div 
                              className="w-3 h-3 rounded-full border border-border/50"
                              style={{ backgroundColor: theme.colors.primary }}
                            />
                            <div 
                              className="w-3 h-3 rounded-full border border-border/50"
                              style={{ backgroundColor: theme.colors.accent }}
                            />
                            <div 
                              className="w-3 h-3 rounded-full border border-border/50"
                              style={{ backgroundColor: theme.colors.card }}
                            />
                          </div>
                          
                          {/* Selected Indicator */}
                          {currentTheme === key && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-2"
                            >
                              <Check className="w-4 h-4 text-primary" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-border bg-muted/30">
                <p className="text-xs text-muted-foreground text-center">
                  Theme preference is saved locally
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Theme Transition Animation */}
      <ThemeTransition
        isTransitioning={isTransitioning}
        fromTheme={transitionData.from}
        toTheme={transitionData.to}
        triggerPosition={transitionData.position}
      />
    </div>
  );
};

export default ThemeToggle;