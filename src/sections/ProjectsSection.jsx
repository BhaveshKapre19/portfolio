import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  FolderKanban,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const categories = ['All', 'Backend & Systems', 'Backend & APIs', 'Cloud & DevOps', 'Machine Learning'];

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const screenshots = project.screenshots || (project.image ? [project.image] : []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-5 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#080d1a] shadow-2xl"
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-[#080d1a]/95 px-5 py-4 backdrop-blur-md">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sky-400">
              {project.category}
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 p-5 sm:p-7">
          {/* Screenshot Carousel */}
          {screenshots.length > 0 && (
            <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950 p-2">
              <img
                src={screenshots[imgIndex]}
                alt={`${project.title} preview ${imgIndex + 1}`}
                className="w-full rounded-lg object-contain max-h-[460px] bg-slate-950/60"
              />
              {screenshots.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-lg border border-slate-700 hover:bg-slate-800 transition-colors"
                    onClick={() => setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length)}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-lg border border-slate-700 hover:bg-slate-800 transition-colors"
                    onClick={() => setImgIndex((i) => (i + 1) % screenshots.length)}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 border border-slate-700/80">
                    {screenshots.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          idx === imgIndex ? 'w-4 bg-sky-400' : 'bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-400">
              Project Overview
            </h4>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables */}
          {project.highlights && (
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-400">
                Key Engineering Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary !min-h-[42px] !py-2 !px-4 text-xs font-bold"
              >
                <GithubIcon size={15} />
                <span>View Source on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="cta-secondary !min-h-[42px] !py-2 !px-4 text-xs font-bold ml-auto"
            >
              Close Window
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="section-shell border-t border-slate-800/80" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto">
            <FolderKanban size={14} /> Selected Work
          </div>
          <h2 className="section-title">
            Projects that show architecture, deployment, and problem solving.
          </h2>
          <p className="section-subtitle">
            Each card opens deeper details, screenshots, and source links where available.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Regular Clean 2-Column Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id || project.title}
              className="solid-card group cursor-pointer overflow-hidden transition-all duration-300 hover:border-sky-400/50"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Preview Image */}
              <div className="h-52 w-full overflow-hidden border-b border-slate-800 bg-slate-950 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-1 font-semibold text-xs text-slate-400">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 5).map((t) => (
                      <span key={t} className="tech-chip">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="tech-chip text-[10px] text-slate-400">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <span className="text-slate-500 font-mono text-[11px]">Desktop &amp; LAN</span>
                    )}
                    <span className="inline-flex items-center gap-1 text-sky-400 group-hover:text-sky-300">
                      <span>View details</span>
                      <ExternalLink size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
