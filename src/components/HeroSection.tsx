import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

/**
 * Hero Section Component
 * Full-screen hero section with animated background and call-to-action buttons
 */
export const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Premium Profile Card */}
        <motion.div
          className="glass rounded-3xl p-8 sm:p-16 border border-primary/40 backdrop-blur-xl shadow-2xl hover:border-secondary/60 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500"
          variants={itemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-lg shadow-primary/50 border border-cyan-400/30"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🏆 Enterprise IT Professional
            </motion.div>
          </motion.div>

          {/* Avatar Section - Premium */}
          <motion.div
            className="flex justify-center mb-10"
            variants={itemVariants}
          >
            <motion.div 
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-cyan-400 p-1 flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer relative"
              whileHover={{ scale: 1.08, rotate: 5 }}
              animate={{ boxShadow: ['0 0 20px rgba(99, 102, 241, 0.3)', '0 0 40px rgba(99, 102, 241, 0.6)', '0 0 20px rgba(99, 102, 241, 0.3)'] }}
              transition={{ boxShadow: { duration: 3, repeat: Infinity } }}
            >
              <img 
                src="/images/profile.jpg" 
                alt="Jayson T. Velasco" 
                className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-500" />
            </motion.div>
          </motion.div>

          {/* Name - Large & Impressive */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-white mb-2 tracking-tight bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            variants={itemVariants}
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Jayson T. Velasco
          </motion.h1>

          {/* Job Title - Premium */}
          <motion.p
            className="text-center text-xl sm:text-2xl font-bold text-white mb-8"
            variants={itemVariants}
          >
            Full-Stack Developer & Enterprise IT Architect
          </motion.p>

          {/* Elegant Divider */}
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-cyan-400 mx-auto mb-10 rounded-full shadow-lg shadow-primary/50"
            variants={itemVariants}
          />

          {/* Professional Bio - Enhanced */}
          <motion.p
            className="text-center text-white text-lg leading-relaxed mb-2 max-w-2xl mx-auto font-medium"
            variants={itemVariants}
          >
            8+ Years | Architecting Enterprise-Scale Solutions | Cloud Infrastructure Expert
          </motion.p>
          <motion.p
            className="text-center text-white text-base leading-relaxed mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Specialized in designing high-performance microservices, cloud-native solutions, and leading digital transformation for enterprise clients.
          </motion.p>

          {/* Key Info Grid - Premium */}
          <motion.div
            className="grid grid-cols-3 gap-6 mb-12 p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-cyan-400/10 rounded-2xl border border-primary/20"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl font-bold text-white drop-shadow-lg">8+</div>
              <div className="text-sm text-white mt-2 font-semibold">Years Experience</div>
              <div className="text-xs text-white mt-1">Enterprise Systems</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl font-bold text-white drop-shadow-lg">40+</div>
              <div className="text-sm text-white mt-2 font-semibold">Projects Delivered</div>
              <div className="text-xs text-white mt-1">Mission-Critical Apps</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl font-bold text-white drop-shadow-lg">25+</div>
              <div className="text-sm text-white mt-2 font-semibold">Enterprise Clients</div>
              <div className="text-xs text-white mt-1">Fortune 500 Partners</div>
            </motion.div>
          </motion.div>

          {/* Social Links - Premium */}
          <motion.div
            className="flex justify-center gap-6 mb-10"
            variants={itemVariants}
          >
            {[
              { icon: Github, label: 'GitHub', href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Mail, label: 'Email', href: '#' },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                className="p-4 rounded-xl border-2 border-primary/50 text-light hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent hover:shadow-xl hover:shadow-primary/50 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons - Premium */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-primary via-secondary to-cyan-400 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all flex items-center justify-center gap-3 text-lg relative overflow-hidden group"
              whileHover={{ y: -6, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll('projects')}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <ArrowRight size={22} className="relative z-10" />
            </motion.button>
            <motion.button
              className="px-10 py-4 border-3 border-primary text-white font-bold rounded-xl hover:bg-primary/20 hover:border-secondary transition-all text-lg relative overflow-hidden group"
              whileHover={{ y: -6, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll('contact')}
            >
              <span className="relative z-10">Let's Connect</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
