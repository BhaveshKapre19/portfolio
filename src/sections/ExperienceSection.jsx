import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { timeline } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = { education: GraduationCap, career: Briefcase, break: BookOpen };
const colorMap = { education: 'border-blue-500', career: 'border-green-500', break: 'border-purple-500' };
const bgMap = { education: 'bg-blue-500/10 text-blue-400', career: 'bg-green-500/10 text-green-400', break: 'bg-purple-500/10 text-purple-400' };

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span> Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-12">
            {timeline.map((event, idx) => {
              const Icon = iconMap[event.type] || Briefcase;
              return (
                <motion.div
                  key={idx}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
                >
                  <motion.div
                    className={`absolute left-4 -translate-x-1/2 w-10 h-10 rounded-full border-2 ${colorMap[event.type]} ${bgMap[event.type]} flex items-center justify-center`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon size={18} />
                  </motion.div>

                  <motion.div
                    className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm hover:border-gray-700 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-xs font-mono text-blue-400 mb-1 block">{event.year}</span>
                    <h3 className="text-white font-semibold text-lg mb-1">{event.title}</h3>
                    {event.subtitle && <p className="text-gray-500 text-sm mb-2">{event.subtitle}</p>}
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}