import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, ChevronLeft, ChevronRight, X, FolderKanban } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const screenshots = project.screenshots || [];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-[#080d18]"
        initial={{ scale: 0.94, opacity: 0, y: 28 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 28 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-[#080d18] px-5 py-4">
          <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
          <motion.button onClick={onClose} className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-800 text-slate-300 hover:text-white" whileTap={{ scale: 0.95 }} aria-label="Close project details">
            <X size={20} />
          </motion.button>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          {screenshots.length > 0 && (
            <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-2">
              <img
                src={screenshots[imgIndex]}
                alt={`${project.title} screenshot ${imgIndex + 1}`}
                className="w-full rounded-lg object-contain"
                style={{ maxHeight: '440px' }}
              />
              {screenshots.length > 1 && (
                <>
                  <motion.button className="absolute left-4 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950 text-white ring-1 ring-slate-700" onClick={() => setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length)} whileTap={{ scale: 0.92 }} aria-label="Previous screenshot">
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button className="absolute right-4 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950 text-white ring-1 ring-slate-700" onClick={() => setImgIndex((i) => (i + 1) % screenshots.length)} whileTap={{ scale: 0.92 }} aria-label="Next screenshot">
                    <ChevronRight size={20} />
                  </motion.button>
                </>
              )}
            </div>
          )}

          <p className="text-base leading-8 text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">{project.tech.map((t) => <span key={t} className="tech-chip">{t}</span>)}</div>
          {project.github && (
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-secondary w-fit" whileTap={{ scale: 0.98 }}>
              <GitFork size={17} />
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
    <section id="projects" className="section-shell border-b border-slate-900" ref={ref}>
      <div className="section-container">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto"><FolderKanban size={15} /> Selected work</div>
          <h2 className="section-title">Projects that show architecture, deployment, and problem solving.</h2>
          <p className="section-subtitle">Each card opens deeper details, screenshots, and source links where available.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="solid-card group cursor-pointer overflow-hidden transition-colors duration-300 hover:border-sky-300/60"
              initial={{ opacity: 0, y: 34 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="border-b border-slate-800 bg-slate-950">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" loading={idx > 1 ? 'lazy' : undefined} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-white transition-colors duration-200 group-hover:text-sky-300">{project.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((t) => <span key={t} className="tech-chip">{t}</span>)}</div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-bold">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-slate-300 hover:text-white" onClick={(e) => e.stopPropagation()}>
                      <GitFork size={16} />
                      GitHub
                    </a>
                  )}
                  <span className="inline-flex min-h-11 items-center gap-2 text-sky-300">
                    <ExternalLink size={16} />
                    View details
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </section>
  );
}
