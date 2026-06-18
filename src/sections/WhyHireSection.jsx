import { motion } from 'framer-motion';
import { whyHireCards } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function WhyHireSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Hire Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyHireCards.map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm hover:border-gray-700 transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}