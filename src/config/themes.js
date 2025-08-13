export const themes = {
  dark: {
    name: 'Dark',
    icon: '🌙',
    class: 'theme-dark',
    colors: {
      background: '#0E0E10',
      foreground: '#FAFAFA',
      card: '#1A1A1A',
      'card-foreground': '#FAFAFA',
      popover: '#1A1A1A',
      'popover-foreground': '#FAFAFA',
      primary: '#EF4444',
      'primary-foreground': '#FAFAFA',
      secondary: '#262626',
      'secondary-foreground': '#FAFAFA',
      muted: '#262626',
      'muted-foreground': '#A1A1AA',
      accent: '#EF4444',
      'accent-foreground': '#FAFAFA',
      destructive: '#DC2626',
      border: 'rgba(255, 255, 255, 0.1)',
      input: 'rgba(255, 255, 255, 0.15)',
      ring: '#8B5CF6'
    }
  },
  light: {
    name: 'Light',
    icon: '☀️',
    class: 'theme-light',
    colors: {
      background: '#FFFFFF',
      foreground: '#0F172A',
      card: '#FFFFFF',
      'card-foreground': '#0F172A',
      popover: '#FFFFFF',
      'popover-foreground': '#0F172A',
      primary: '#EF4444',
      'primary-foreground': '#FFFFFF',
      secondary: '#F1F5F9',
      'secondary-foreground': '#0F172A',
      muted: '#F1F5F9',
      'muted-foreground': '#64748B',
      accent: '#EF4444',
      'accent-foreground': '#FFFFFF',
      destructive: '#DC2626',
      border: '#E2E8F0',
      input: '#E2E8F0',
      ring: '#8B5CF6'
    }
  },
  cyberpunk: {
    name: 'Cyberpunk',
    icon: '🔮',
    class: 'theme-cyberpunk',
    colors: {
      background: '#0D001A',
      foreground: '#E0F8FF',
      card: '#1A0033',
      'card-foreground': '#E0F8FF',
      popover: '#1A0033',
      'popover-foreground': '#E0F8FF',
      primary: '#FF44FF',
      'primary-foreground': '#000000',
      secondary: '#330066',
      'secondary-foreground': '#E0F8FF',
      muted: '#330066',
      'muted-foreground': '#B8B8FF',
      accent: '#44FFFF',
      'accent-foreground': '#000000',
      destructive: '#FF0066',
      border: 'rgba(255, 68, 255, 0.3)',
      input: 'rgba(68, 255, 255, 0.2)',
      ring: '#FF44FF'
    }
  },
  forest: {
    name: 'Forest',
    icon: '🌲',
    class: 'theme-forest',
    colors: {
      background: '#0A1F0A',
      foreground: '#E8F5E8',
      card: '#1B3B1B',
      'card-foreground': '#E8F5E8',
      popover: '#1B3B1B',
      'popover-foreground': '#E8F5E8',
      primary: '#4ADE80',
      'primary-foreground': '#0A1F0A',
      secondary: '#2D5A2D',
      'secondary-foreground': '#E8F5E8',
      muted: '#2D5A2D',
      'muted-foreground': '#86EFAC',
      accent: '#10B981',
      'accent-foreground': '#0A1F0A',
      destructive: '#EF4444',
      border: 'rgba(74, 222, 128, 0.2)',
      input: 'rgba(74, 222, 128, 0.1)',
      ring: '#4ADE80'
    }
  },
  ocean: {
    name: 'Ocean',
    icon: '🌊',
    class: 'theme-ocean',
    colors: {
      background: '#0C1B3B',
      foreground: '#E0F2FE',
      card: '#1E3A5F',
      'card-foreground': '#E0F2FE',
      popover: '#1E3A5F',
      'popover-foreground': '#E0F2FE',
      primary: '#0EA5E9',
      'primary-foreground': '#FFFFFF',
      secondary: '#334155',
      'secondary-foreground': '#E0F2FE',
      muted: '#334155',
      'muted-foreground': '#94A3B8',
      accent: '#06B6D4',
      'accent-foreground': '#FFFFFF',
      destructive: '#EF4444',
      border: 'rgba(14, 165, 233, 0.2)',
      input: 'rgba(14, 165, 233, 0.1)',
      ring: '#0EA5E9'
    }
  },
  sunset: {
    name: 'Sunset',
    icon: '🌅',
    class: 'theme-sunset',
    colors: {
      background: '#2D1B1B',
      foreground: '#FFF5E6',
      card: '#4A2C2A',
      'card-foreground': '#FFF5E6',
      popover: '#4A2C2A',
      'popover-foreground': '#FFF5E6',
      primary: '#F97316',
      'primary-foreground': '#FFFFFF',
      secondary: '#7C2D12',
      'secondary-foreground': '#FFF5E6',
      muted: '#7C2D12',
      'muted-foreground': '#FDBA74',
      accent: '#EAB308',
      'accent-foreground': '#1F2937',
      destructive: '#DC2626',
      border: 'rgba(249, 115, 22, 0.2)',
      input: 'rgba(249, 115, 22, 0.1)',
      ring: '#F97316'
    }
  }
};

export const getThemeCSS = (themeName) => {
  const theme = themes[themeName];
  if (!theme) return '';

  return Object.entries(theme.colors)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n  ');
};

export const applyTheme = (themeName, options = {}) => {
  const theme = themes[themeName];
  if (!theme) return;

  const { animated = true, onTransitionStart, onTransitionEnd } = options;

  if (animated && onTransitionStart) {
    onTransitionStart(themeName);
  }

  // Apply changes immediately for smoother experience
  const applyChanges = () => {
    // Use requestAnimationFrame for optimal timing
    requestAnimationFrame(() => {
      // Remove all theme classes
      Object.values(themes).forEach(t => {
        document.documentElement.classList.remove(t.class);
      });

      // Add new theme class
      document.documentElement.classList.add(theme.class);

      // Apply CSS variables in batches for better performance
      const root = document.documentElement;
      const colorEntries = Object.entries(theme.colors);
      
      // Apply colors in chunks to avoid blocking
      const applyInChunks = (entries, chunkSize = 5) => {
        for (let i = 0; i < entries.length; i += chunkSize) {
          const chunk = entries.slice(i, i + chunkSize);
          setTimeout(() => {
            chunk.forEach(([key, value]) => {
              root.style.setProperty(`--${key}`, value);
            });
          }, 0);
        }
      };

      applyInChunks(colorEntries);

      // Store theme preference
      localStorage.setItem('portfolio-theme', themeName);
    });

    // Callback when theme is applied
    if (animated && onTransitionEnd) {
      setTimeout(() => {
        onTransitionEnd(themeName);
      }, 400); // Reduced timing for faster feel
    }
  };

  if (animated) {
    // Start immediately for smoother transition
    applyChanges();
  } else {
    applyChanges();
  }
};

export const getStoredTheme = () => {
  return localStorage.getItem('portfolio-theme') || 'dark';
};