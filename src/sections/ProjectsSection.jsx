/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  FolderKanban,
  CheckCircle2,
  Cpu,
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
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#1e2f52] bg-[#0d1627] shadow-2xl"
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#1e2f52] bg-[#0d1627]/95 px-5 py-4 backdrop-blur-md">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
              {project.category}
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1e2f52] text-slate-400 hover:border-blue-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 p-5 sm:p-7">
          {/* Screenshot Carousel */}
          {screenshots.length > 0 && (
            <div className="relative overflow-hidden rounded-xl border border-[#1e2f52] bg-[#070c18] p-2">
              <img
                src={screenshots[imgIndex]}
                alt={`${project.title} preview ${imgIndex + 1}`}
                width="1200"
                height="675"
                className="w-full rounded-lg object-contain max-h-[460px] bg-[#070c18]"
              />
              {screenshots.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#101a30]/90 text-white shadow-lg border border-[#1e2f52] hover:bg-[#162442] transition-colors"
                    onClick={() => setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length)}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#101a30]/90 text-white shadow-lg border border-[#1e2f52] hover:bg-[#162442] transition-colors"
                    onClick={() => setImgIndex((i) => (i + 1) % screenshots.length)}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-[#101a30]/80 px-3 py-1 border border-[#1e2f52]">
                    {screenshots.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === imgIndex ? 'w-4 bg-blue-400' : 'w-1.5 bg-slate-600'
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
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Project Overview
            </h4>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-200">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Key Engineering Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2.5">
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
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#1e2f52]">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary !min-h-[40px] !py-2 !px-4 text-xs font-semibold"
              >
                <GithubIcon size={15} />
                <span>View Source on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="cta-secondary !min-h-[40px] !py-2 !px-4 text-xs font-semibold ml-auto"
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
    <section id="projects" className="section-shell border-t border-[#1e2f52]" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-badge mx-auto">
            <FolderKanban size={14} className="text-blue-400" />
            <span>Selected Engineering Systems</span>
          </div>
          <h2 className="section-title">
            Projects demonstrating architecture, data integrity, and deployment.
          </h2>
          <p className="section-subtitle">
            Explore verified software artifacts: desktop ERP platforms, custom MVC engines, cloud infrastructure, and intelligent APIs.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'border border-[#1e2f52] bg-[#101a30]/60 text-slate-400 hover:border-blue-400/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MS-01 Bento Grid Architecture */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => {
            const isFeatured = activeCategory === 'All' && idx === 0;

            return (
              <motion.article
                key={project.id || project.title}
                className={`bento-card group cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Header / Banner */}
                <div
                  className={`relative w-full overflow-hidden border-b border-[#1e2f52] bg-[#070c18] flex items-center justify-center ${
                    isFeatured ? 'h-64 sm:h-72' : 'h-52'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width="800"
                    height="450"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  {isFeatured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-blue-400/40 bg-[#0b1120]/90 px-3.5 py-1 text-xs font-semibold text-blue-200 backdrop-blur-md">
                      <Cpu size={13} className="text-blue-400" />
                      <span>Featured Enterprise Architecture</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="font-mono text-xs text-slate-400">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="mt-1 text-xs font-medium text-slate-400">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#1e2f52]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, isFeatured ? 7 : 4).map((t) => (
                        <span key={t} className="tech-chip">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > (isFeatured ? 7 : 4) && (
                        <span className="tech-chip text-xs text-slate-400">
                          +{project.tech.length - (isFeatured ? 7 : 4)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon size={14} />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <span className="text-slate-400 font-mono text-xs">Desktop &amp; LAN</span>
                      )}
                      <span className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors text-xs font-medium">
                        <span>Inspect Specs</span>
                        <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
