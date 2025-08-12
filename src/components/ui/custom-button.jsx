import React from 'react';
import { motion } from 'framer-motion';

const CustomButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500';
  
  const variants = {
    primary: 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const MotionButton = motion.button;
  const MotionLink = motion.a;
  
  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }
  
  return (
    <MotionButton
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export default CustomButton;

