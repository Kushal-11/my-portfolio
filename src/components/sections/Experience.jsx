import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../Timeline';
import { portfolioData } from '../../data/portfolio-data';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles in AI research, data science, and engineering, 
            contributing to innovative projects and advancing the field of explainable AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <Timeline experiences={experience} />
        </div>

        {/* Experience Summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">4+</div>
            <div className="text-muted-foreground">Professional Roles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

