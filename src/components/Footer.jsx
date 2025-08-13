import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Trophy, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  const socialLinks = [
    {
      name: 'GitHub',
      href: personal.contact.github,
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: personal.contact.linkedin,
      icon: Linkedin
    },
    {
      name: 'DevPost',
      href: personal.contact.devpost,
      icon: Trophy
    },
    {
      name: 'HackerRank',
      href: personal.contact.hackerrank,
      icon: Code
    },
    {
      name: 'Email',
      href: `mailto:${personal.contact.email}`,
      icon: Mail
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">KT</h3>
            <p className="text-muted-foreground">
              Data Science Graduate & ML/DL Engineer specializing in practical AI solutions and explainable AI research.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-red-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Kushal Therokar. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React, Tailwind CSS & Framer Motion</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Designed with accessibility in mind. This website follows WCAG guidelines.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

