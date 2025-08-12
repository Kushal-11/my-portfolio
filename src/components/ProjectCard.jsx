import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import CustomBadge from './ui/custom-badge';
import CustomButton from './ui/custom-button';

const ProjectCard = ({ project, onViewCaseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 group">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-red-500 transition-colors duration-200">
              {project.title}
            </CardTitle>
            <div className="flex space-x-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
          
          {/* Metrics/Awards */}
          {project.metrics && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.metrics.map((metric, index) => (
                <CustomBadge key={index} variant="metric">
                  {metric}
                </CustomBadge>
              ))}
            </div>
          )}
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground mb-4 flex-1">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <CustomBadge key={index} variant="skill">
                  {tech}
                </CustomBadge>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <CustomButton
            variant="secondary"
            size="sm"
            onClick={() => onViewCaseStudy(project)}
            className="w-full mt-auto"
          >
            View Case Study
          </CustomButton>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

