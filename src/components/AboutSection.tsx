import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * About Section Component
 * Displays user bio and skills summary with scroll animations
 */
export const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light mb-4">
            About <span className="text-white">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        {/* Bio Card */}
        <motion.div
          className="glass rounded-xl p-8 sm:p-10 border border-primary/20 mb-12"
          variants={itemVariants}
        >
          <p className="text-white text-lg leading-relaxed mb-6">
            I'm a results-driven IT professional with 8+ years of experience building enterprise-grade applications and leading digital transformation initiatives. My expertise spans full-stack development, cloud architecture, and DevOps practices.
          </p>
          <p className="text-white text-lg leading-relaxed mb-6">
            I specialize in designing scalable microservices, implementing CI/CD pipelines, and optimizing system performance. My passion lies in solving complex technical challenges and mentoring junior developers to achieve excellence.
          </p>
          <p className="text-white text-lg leading-relaxed">
            Currently focused on cloud-native technologies, containerization with Kubernetes, and building robust APIs that power modern applications serving millions of users.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={itemVariants}
        >
          {[
            { label: 'Projects', value: '40+', icon: '📁' },
            { label: 'Experience', value: '8+yrs', icon: '⏱️' },
            { label: 'Clients', value: '25+', icon: '🏢' },
            { label: 'Technologies', value: '20+', icon: '🛠️' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-lg p-6 text-center border border-primary/20 hover:border-primary/60 transition-all"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
