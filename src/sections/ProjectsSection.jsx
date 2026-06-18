import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const screenshots = project.screenshots || [];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 border border-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 px-6 py-4 flex items-center justify-between z-10">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <motion.button onClick={onClose} className="text-gray-400 hover:text-white p-1" whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
            <X size={20} />
          </motion.button>
        </div>

        <div className="p-6 space-y-6">
          {screenshots.length > 0 && (
            <div className="relative">
              <img
                src={screenshots[imgIndex]}
                alt={`${project.title} screenshot ${imgIndex + 1}`}
                className="w-full rounded-lg border border-gray-800"
                style={{ maxHeight: '400px', objectFit: 'contain', background: '#0f172a' }}
              />
              {screenshots.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 rounded-full text-white hover:bg-black/80"
                    onClick={() => setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 rounded-full text-white hover:bg-black/80"
                    onClick={() => setImgIndex((i) => (i + 1) % screenshots.length)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                  <div className="flex justify-center gap-2 mt-3">
                    {screenshots.map((_, i) => (
                      <motion.button
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === imgIndex ? 'bg-blue-400' : 'bg-gray-600'}`}
                        onClick={() => setImgIndex(i)}
                        whileHover={{ scale: 1.5 }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <p className="text-gray-400 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md font-medium">
                {t}
              </span>
            ))}
          </div>

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <GitFork size={16} />
              View on GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-gray-800/30 overflow-hidden min-h-[200px] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ maxHeight: '280px' }}
                  />
                </div>
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ x: 2 }}
                      >
                        <GitFork size={16} />
                        GitHub
                      </motion.a>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm text-blue-400">
                      <ExternalLink size={16} />
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}