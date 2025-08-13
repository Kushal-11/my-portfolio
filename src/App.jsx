import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { applyTheme, getStoredTheme } from './config/themes';
import './App.css';

function App() {
  useEffect(() => {
    // Apply stored theme or default dark theme
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
