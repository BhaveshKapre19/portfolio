import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm hover:border-gray-700 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <h3 className="text-white font-semibold mb-4 text-lg">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-gray-300"
                    whileHover={{ scale: 1.08, borderColor: 'rgba(59,130,246,0.4)', backgroundColor: 'rgba(59,130,246,0.1)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}