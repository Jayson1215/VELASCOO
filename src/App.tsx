import { motion } from 'framer-motion';
import { AnimatedBackground, Navbar, HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection, Footer } from './components';
import './index.css';

/**
 * Main App Component
 * Combines all sections into a complete portfolio website
 */
function App() {
  return (
    <motion.div 
      className="bg-dark min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default App;
