import React from 'react';

const CustomBadge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200';
  
  const variants = {
    default: 'bg-gray-800 text-gray-300 border border-gray-700',
    skill: 'skill-chip',
    metric: 'bg-red-500/20 text-red-400 border border-red-500/30',
    award: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default CustomBadge;

