'use client'
import React from 'react'
import { motion } from 'motion/react'

// Cosmic Button Component
export const CosmicButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  isDarkMode = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-Ovo rounded-full cosmic-hover transition-all duration-300 flex items-center gap-3 justify-center'
  
  const variants = {
    primary: isDarkMode 
      ? 'border-cosmic-pink bg-cosmic-pink/10 text-cosmic-pink hover:bg-cosmic-pink hover:text-white' 
      : 'border-gray-600 bg-gray-900 text-white hover:bg-gray-800',
    secondary: isDarkMode 
      ? 'border-star-gold bg-star-gold/10 text-star-gold hover:bg-star-gold hover:text-black' 
      : 'border-gray-500 bg-white text-gray-700 hover:bg-gray-100',
    ghost: isDarkMode 
      ? 'border-cosmic-pink/30 text-cosmic-pink hover:bg-cosmic-pink/10' 
      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
  }
  
  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-10 py-4 text-base',
    lg: 'px-12 py-5 text-lg'
  }
  
  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Cosmic Card Component
export const CosmicCard = ({ 
  children, 
  isDarkMode = false, 
  className = '',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-500'
  const hoverClasses = hover ? 'cosmic-hover' : ''
  
  const themeClasses = isDarkMode 
    ? 'border-cosmic-pink/30 hover:border-cosmic-pink hover:bg-cosmic-pink/5' 
    : 'border-gray-400 hover:border-gray-600 hover:bg-gray-50'
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${themeClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { 
        scale: 1.02,
        y: -5,
        boxShadow: isDarkMode ? '0 10px 30px rgba(251, 191, 36, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)'
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Cosmic Title Component
export const CosmicTitle = ({ 
  children, 
  level = 2, 
  isDarkMode = false, 
  className = '',
  cosmic = true,
  ...props 
}) => {
  const Tag = `h${level}`
  const cosmicClass = cosmic && isDarkMode ? 'cosmic-text' : ''
  
  return (
    <motion.div
      as={Tag}
      className={`font-Ovo ${cosmicClass} ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Cosmic Icon Component
export const CosmicIcon = ({ 
  children, 
  isDarkMode = false, 
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      className={`cosmic-hover ${className}`}
      whileHover={{ 
        scale: 1.1,
        rotate: 10,
        boxShadow: isDarkMode ? '0 5px 20px rgba(251, 191, 36, 0.4)' : '0 5px 20px rgba(0, 0, 0, 0.2)'
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Cosmic Section Component
export const CosmicSection = ({ 
  children, 
  id,
  isDarkMode = false,
  className = '',
  ...props 
}) => {
  return (
    <motion.section
      id={id}
      className={`w-full px-[12%] py-10 scroll-mt-20 relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

// Cosmic Particle Component
export const CosmicParticle = ({ 
  size = 'sm',
  color = 'gold',
  position = 'absolute',
  className = '',
  ...props 
}) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  }
  
  const colors = {
    gold: 'bg-star-gold',
    pink: 'bg-cosmic-pink',
    green: 'bg-aurora-green',
    purple: 'bg-cosmic-purple'
  }
  
  return (
    <motion.div
      className={`${sizes[size]} ${colors[color]} rounded-full ${position} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 1, 0.3],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      {...props}
    />
  )
}

// Cosmic Glow Effect Component
export const CosmicGlow = ({ 
  children, 
  isDarkMode = false,
  intensity = 'medium',
  className = '',
  ...props 
}) => {
  const intensities = {
    low: 'shadow-cosmic',
    medium: 'shadow-nebula',
    high: 'shadow-cosmic shadow-nebula'
  }
  
  return (
    <motion.div
      className={`relative ${intensities[intensity]} ${className}`}
      animate={isDarkMode ? {
        boxShadow: [
          '0 0 20px rgba(251, 191, 36, 0.3)',
          '0 0 40px rgba(236, 72, 153, 0.4)',
          '0 0 20px rgba(251, 191, 36, 0.3)'
        ]
      } : {}}
      transition={{ duration: 3, repeat: Infinity }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

