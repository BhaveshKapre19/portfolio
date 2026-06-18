import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Server } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { aboutText } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Server, label: 'Backend Dev', color: 'text-blue-400' },
  { icon: Cloud, label: 'AWS Cloud', color: 'text-purple-400' },
  { icon: Database, label: 'Databases', color: 'text-green-400' },
  { icon: Code2, label: 'APIs', color: 'text-orange-400' },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="text-gray-400 leading-relaxed space-y-4 whitespace-pre-line">
              {aboutText}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
              <div className="mb-6 overflow-hidden rounded-lg border border-gray-800 bg-gray-950">
                <img
                  src={profileImg}
                  alt="Bhavesh Kapre"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
              <h3 className="text-white font-semibold mb-6 text-lg">Quick Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="bg-gray-800/50 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1, ease: 'easeOut' }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <item.icon className={`${item.color} mx-auto mb-2`} size={24} />
                    <p className="text-gray-300 text-sm font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-blue-300 text-sm font-mono">
                  &ldquo;Ready to build and deploy production-grade systems.&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
