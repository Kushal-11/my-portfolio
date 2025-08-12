import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Timeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 timeline-line"></div>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative flex items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-background z-10"></div>
            
            {/* Content */}
            <div className="ml-12 md:ml-20 flex-1">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {experience.role}
                    </CardTitle>
                    <span className="text-sm text-red-500 font-medium mt-1 md:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">
                    {experience.company}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-muted-foreground flex items-start"
                      >
                        <span className="text-red-500 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

