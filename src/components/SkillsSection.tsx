import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Skills Section Component
 * Displays animated skill cards and progress bars
 */
export const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { category: 'Languages', items: ['JavaScript/TypeScript', 'Python', 'Java', 'Go', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend & Cloud', items: ['Node.js', 'Express', 'Django', 'AWS', 'Azure', 'GCP'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Terraform'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'ElasticSearch'] },
    { category: 'Other Skills', items: ['Microservices', 'REST APIs', 'GraphQL', 'System Design', 'Agile'] },
  ];

  const technicalSkills = [
    { name: 'Full-Stack Development', level: 95 },
    { name: 'Cloud Architecture (AWS/Azure)', level: 92 },
    { name: 'DevOps & Infrastructure', level: 90 },
    { name: 'System Design & Scalability', level: 88 },
    { name: 'Database Design & Optimization', level: 92 },
    { name: 'API Development & Integration', level: 94 },
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
      id="skills"
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
            My <span className="text-white">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="glass p-6 rounded-xl border border-primary/20 hover:border-cyan-400/60 transition-all group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative z-10">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{skillGroup.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 group/item"
                      whileHover={{ x: 6 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-primary shadow-lg shadow-cyan-400/50"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm text-white group-hover/item:text-cyan-300 transition-colors font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-light mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-light font-medium text-sm">{skill.name}</span>
                  <span className="text-white font-semibold text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
