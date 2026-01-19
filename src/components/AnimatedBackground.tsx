import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * AnimatedBackground Component
 * Creates an animated gradient background with particle effects and floating shapes
 */
export const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate subtle particles for profile portfolio
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 gradient-bg -z-10" />

      {/* Animated particles */}
      <div className="fixed inset-0 -z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-primary rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() > 0.5 ? 30 : -30, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Orb 1 - Blue */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ top: '-10%', right: '-10%' }}
        />
        
        {/* Orb 2 - Purple */}
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-15"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, -40, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ bottom: '-5%', left: '-5%' }}
        />

        {/* Orb 3 - Cyan */}
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-15"
          animate={{
            x: [0, 60, -60, 0],
            y: [0, 80, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Floating shapes - removed for cleaner look */}
    </>
  );
};
