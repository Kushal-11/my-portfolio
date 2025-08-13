import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import CustomButton from '../ui/custom-button';
import CustomBadge from '../ui/custom-badge';
import { portfolioData } from '../../data/portfolio-data';

const Hero = () => {
  const { personal } = portfolioData;

  const socialLinks = [
    { icon: Github, href: personal.contact.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personal.contact.email}`, label: 'Email' }
  ];

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-foreground hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hello, I'm{' '}
                <span className="text-gradient">{personal.name.split(' ')[0]}</span>—
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-4xl font-semibold text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {personal.title}
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personal.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CustomButton
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                className="group"
              >
                View Projects
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-200" />
              </CustomButton>
              <CustomButton
                variant="secondary"
                size="lg"
                href="/placeholder.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </CustomButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-red-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 p-2 glow-effect"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold text-red-500">
                  KT
                </div>
              </motion.div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AI/ML
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card border border-border px-3 py-1 rounded-full text-sm font-medium"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                XAI Research
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Pills */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {personal.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-4 text-center min-w-[150px]"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-red-500">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

