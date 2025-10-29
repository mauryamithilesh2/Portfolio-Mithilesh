'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const UniverseBackground = ({ isDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Create floating particles
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 2
        })
      }
      setParticles(newParticles)
    }

    createParticles()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!isDarkMode) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep Space Background */}
      <div className="absolute inset-0 universe-bg" />
      
      {/* Nebula Clouds */}
      <div className="absolute inset-0 nebula-overlay" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-star-gold"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, mousePosition.x * particle.speed * 0.01],
            y: [0, mousePosition.y * particle.speed * 0.01],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: 3 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars */}
      <motion.div
        className="absolute w-1 h-20 bg-gradient-to-r from-transparent via-star-gold to-transparent"
        style={{
          top: '20%',
          left: '-100px',
          transform: 'rotate(45deg)',
        }}
        animate={{
          x: [0, window.innerWidth + 100],
          y: [0, 100],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeInOut",
        }}
      />

      {/* Cosmic Energy Orbs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-radial from-cosmic-pink/20 via-transparent to-transparent"
        style={{
          top: '30%',
          right: '10%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-radial from-aurora-green/20 via-transparent to-transparent"
        style={{
          bottom: '20%',
          left: '15%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Galaxy Spiral */}
      <motion.div
        className="absolute w-40 h-40 rounded-full border border-star-gold/20"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute w-32 h-32 rounded-full border border-cosmic-pink/20"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute w-24 h-24 rounded-full border border-aurora-green/20"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Cosmic Dust */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 70%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default UniverseBackground

