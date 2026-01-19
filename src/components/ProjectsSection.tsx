import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Projects Section Component
 * Displays project cards with hover effects and modal for details
 */
export const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Cloud Infrastructure Migration',
      description: 'Migrated enterprise legacy system to AWS with Kubernetes orchestration',
      longDescription: 'Led a complete cloud transformation initiative, migrating a monolithic on-premise system to AWS cloud infrastructure using Kubernetes, reducing operational costs by 40% and improving system uptime to 99.99%. Implemented auto-scaling and disaster recovery procedures.',
      tags: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Microservices Architecture',
      description: 'Designed and built scalable microservices platform handling 10M+ requests/day',
      longDescription: 'Architected a microservices-based platform from scratch, handling 10 million requests per day. Implemented service discovery, API gateways, distributed tracing, and implemented circuit breakers for fault tolerance.',
      tags: ['Node.js', 'MongoDB', 'RabbitMQ', 'ELK Stack'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Built real-time data pipeline processing 1TB+ daily with visualization',
      longDescription: 'Created a real-time analytics platform processing 1TB+ of data daily. Implemented data pipelines with Apache Kafka, stored data in PostgreSQL and ElasticSearch, and built interactive dashboards with React for business intelligence.',
      tags: ['Kafka', 'PostgreSQL', 'React', 'ElasticSearch'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'DevOps Pipeline Automation',
      description: 'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
      longDescription: 'Designed and implemented comprehensive DevOps infrastructure with Jenkins, GitLab CI/CD, automated testing, security scanning, and containerization. Reduced deployment time from 4 hours to 15 minutes and achieved 95% test coverage.',
      tags: ['Jenkins', 'GitLab CI', 'Docker', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Mobile-First API Gateway',
      description: 'Built high-performance API gateway with rate limiting and caching',
      longDescription: 'Developed a robust API gateway serving mobile applications with 5M+ monthly active users. Implemented rate limiting, caching strategies, request aggregation, and API versioning to ensure reliability and performance.',
      tags: ['Node.js', 'Redis', 'GraphQL', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Machine Learning Model Pipeline',
      description: 'Built ML ops platform for training and deploying predictive models',
      longDescription: 'Created an MLOps platform for managing end-to-end machine learning workflows. Implemented model versioning, automated retraining pipelines, A/B testing framework, and real-time inference serving with 99.5% accuracy.',
      tags: ['Python', 'TensorFlow', 'Kubernetes', 'MLflow'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    },
  ];

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

  return (
    <section
      id="projects"
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
            Featured <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Enterprise Projects</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            High-impact solutions delivering measurable business value across cloud infrastructure, microservices, and enterprise applications
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full shadow-lg shadow-primary/50" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project.id)}
            >
            <motion.div
              className="glass rounded-lg overflow-hidden h-full flex flex-col border border-primary/20 hover:border-primary/60 transition-all"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-xl" />
              
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-slate-700">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.2, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                <motion.div 
                  className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Featured
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-grow flex flex-col relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm mb-4 flex-grow line-clamp-3 opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-lg bg-primary/20 text-cyan-300 border border-primary/40 font-semibold hover:bg-primary/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* View Details Button */}
                <motion.button
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-bold hover:from-primary/40 hover:to-secondary/40 border border-primary/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedProject ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedProject(null)}
          style={{ pointerEvents: selectedProject ? 'auto' : 'none' }}
        >
          <motion.div
            className="glass rounded-2xl max-w-2xl w-full p-10 relative border border-primary/40"
            initial={{ scale: 0.75, opacity: 0, y: 50 }}
            animate={{ scale: selectedProject ? 1 : 0.75, opacity: selectedProject ? 1 : 0, y: selectedProject ? 0 : 50 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-2 hover:bg-primary/20 rounded-full transition-colors border border-primary/30 hover:border-primary/60"
              onClick={() => setSelectedProject(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="text-white" size={24} />
            </motion.button>

            {selectedProject && (() => {
              const project = projects.find(p => p.id === selectedProject);
              return (
                project && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl mb-8 shadow-xl"
                    />
                    <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                    <p className="text-white mb-8 text-lg leading-relaxed">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 rounded-lg bg-primary/20 text-cyan-300 border border-primary/40 font-semibold"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.button
                        className="flex-1 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Live
                      </motion.button>
                      <motion.button
                        className="flex-1 py-4 border-2 border-primary text-white font-bold rounded-lg hover:bg-primary/20 transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code
                      </motion.button>
                    </div>
                  </motion.div>
                )
              );
            })()}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
