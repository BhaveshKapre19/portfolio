import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function CertificationsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 backdrop-blur-sm hover:border-gray-700 transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-2 bg-blue-500/10 rounded-lg shrink-0"
                  whileHover={{ rotate: 10 }}
                >
                  <Award className="text-blue-400" size={24} />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{cert.date}</span>
                    {cert.grade && (
                      <>
                        <span>·</span>
                        <span className="text-green-400">{cert.grade}</span>
                      </>
                    )}
                  </div>
                  {cert.verificationUrl && (
                    <motion.a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-2 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={12} />
                      Verify Certificate
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}