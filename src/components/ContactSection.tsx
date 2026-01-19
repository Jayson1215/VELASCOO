import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

/**
 * Contact Section Component
 * Contact form with validation and social media links
 */
export const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayson@example.com',
      href: 'mailto:jayson@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">Ready to collaborate on enterprise solutions. Let's discuss how I can help transform your technical vision into reality.</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full shadow-lg shadow-primary/50" />
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="glass p-6 rounded-lg flex items-start gap-4 group hover:border-primary/50"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white mb-1">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-700/30">
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="p-3 rounded-full glass hover:bg-primary/20 text-light hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/30 border border-slate-600 text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/30 border border-slate-600 text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Subject Field */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/30 border border-slate-600 text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Project inquiry"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/30 border border-slate-600 text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>

              {/* Success Message */}
              <motion.div
                className="mt-4 text-center text-primary font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : -10 }}
                transition={{ duration: 0.3 }}
              >
                ✓ Message sent successfully!
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
