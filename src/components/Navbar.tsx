import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Sticky navigation bar with smooth animations and mobile menu
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-slate-700/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform"
            whileHover={{ scale: 1.15 }}
            onClick={() => handleScroll('home')}
          >
            JTV
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:text-primary hover:bg-primary/10 transition-all duration-200"
                onClick={() => handleScroll(item)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-light"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-light hover:text-primary hover:bg-slate-700/30"
                onClick={() => handleScroll(item)}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
