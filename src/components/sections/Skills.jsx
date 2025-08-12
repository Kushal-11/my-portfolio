import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Eye, MessageSquare, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import CustomBadge from '../ui/custom-badge';
import { portfolioData } from '../../data/portfolio-data';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "ML & DL",
      icon: Brain,
      skills: skills["ML & DL"],
      description: "Machine Learning and Deep Learning frameworks and techniques"
    },
    {
      title: "Python & Libraries",
      icon: Code,
      skills: skills["Python & Libraries"],
      description: "Core Python ecosystem and data science libraries"
    },
    {
      title: "XAI",
      icon: Eye,
      skills: skills["XAI"],
      description: "Explainable AI and model interpretability methods"
    },
    {
      title: "NLP & LLMs",
      icon: MessageSquare,
      skills: skills["NLP & LLMs"],
      description: "Natural Language Processing and Large Language Models"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: skills["Cloud & DevOps"],
      description: "Cloud platforms and development operations tools"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-card/30">
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
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning machine learning, data science, and cloud technologies 
            to build robust AI solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-red-500 transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + skillIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                        >
                          <CustomBadge 
                            variant="skill"
                            className="hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </CustomBadge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground">
              I'm constantly expanding my skill set and staying up-to-date with the latest developments 
              in AI, machine learning, and data science. My approach combines theoretical understanding 
              with practical implementation to solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

