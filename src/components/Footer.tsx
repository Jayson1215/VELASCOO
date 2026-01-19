import { motion } from 'framer-motion';

/**
 * Footer Component
 * Footer with copyright information and quick links
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-primary/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-3">JTV</h3>
            <p className="text-white text-sm leading-relaxed">
              Enterprise IT Professional | Full-Stack Developer | Cloud Solutions Architect specializing in scalable systems and digital transformation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleScroll(link.id)}
                  className="block text-slate-300 hover:text-primary transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  → {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Follow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-5">Connect</h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', icon: '🐙' },
                { name: 'LinkedIn', icon: '💼' },
                { name: 'Twitter', icon: '𝕏' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all border border-primary/30 hover:border-primary/60 font-semibold"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 mb-8" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white font-medium">
            © {currentYear} Jayson T. Velasco. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Architecting tomorrow's solutions today
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
