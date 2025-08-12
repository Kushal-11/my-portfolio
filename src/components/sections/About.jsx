import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import CustomBadge from '../ui/custom-badge';
import { portfolioData } from '../../data/portfolio-data';

const About = () => {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 bg-background">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, education, and what drives my passion for AI and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Story</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {personal.bio}
              </p>
              
              {/* Current Role Highlight */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-red-500">Currently</span>
                </div>
                <p className="text-foreground font-medium">{personal.currentRole}</p>
              </div>
            </div>

            {/* Off the Court */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Off the Court</h4>
              <p className="text-muted-foreground">
                When I'm not immersed in code or research papers, you'll find me staying active with tennis, 
                table tennis, and padel. These sports help me maintain balance and often provide fresh 
                perspectives that I bring back to my technical work.
              </p>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                          <GraduationCap className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        {edu.gpa && (
                          <CustomBadge variant="metric" className="text-xs">
                            GPA: {edu.gpa}
                          </CustomBadge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {edu.honors && (
                    <CardContent className="pt-0">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <CustomBadge variant="award" className="text-sm">
                          {edu.honors}
                        </CustomBadge>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 p-6 bg-card border border-border rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">Academic Focus</h4>
              <p className="text-muted-foreground">
                My academic journey has been centered around the intersection of data science, 
                machine learning, and explainable AI. I'm particularly passionate about making 
                AI systems more transparent and interpretable, which led to my current research 
                contributions in the field of Explainable AI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

