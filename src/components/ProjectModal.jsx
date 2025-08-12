import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, User } from 'lucide-react';
import CustomBadge from './ui/custom-badge';
import CustomButton from './ui/custom-button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.timeline && (
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </div>
                )}
                {project.role && (
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{project.role}</span>
                  </div>
                )}
              </div>
              
              {/* Metrics */}
              {project.metrics && (
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, index) => (
                    <CustomBadge key={index} variant="metric">
                      {metric}
                    </CustomBadge>
                  ))}
                </div>
              )}
              
              {/* Problem */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Problem</h3>
                <p className="text-muted-foreground">{project.problem}</p>
              </div>
              
              {/* Approach */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Approach</h3>
                <p className="text-muted-foreground">{project.approach}</p>
              </div>
              
              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <CustomBadge key={index} variant="skill">
                      {tech}
                    </CustomBadge>
                  ))}
                </div>
              </div>
              
              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Results</h3>
                <p className="text-muted-foreground">{project.results}</p>
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <CustomButton
                    variant="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </CustomButton>
                )}
                {project.demo && (
                  <CustomButton
                    variant="primary"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </CustomButton>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

