import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import CustomButton from './ui/custom-button';

const ProjectPlaceholder = ({ projectName, onBack }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="space-y-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="mx-auto w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center"
            >
              <Construction className="w-10 h-10 text-red-500" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              {projectName}
            </motion.h1>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground">
                This content is currently not available.
              </p>
              <p className="text-muted-foreground">
                The project details and demo are being updated. Please check back later or explore other projects in my portfolio.
              </p>
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <CustomButton
                variant="primary"
                size="lg"
                onClick={onBack}
                className="inline-flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </CustomButton>
            </motion.div>
          </CardContent>
        </Card>

        {/* Background decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.6 }}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectPlaceholder;