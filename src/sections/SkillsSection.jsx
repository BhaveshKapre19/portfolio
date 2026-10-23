import { motion } from 'framer-motion';
import {
  Server,
  Monitor,
  Cloud,
  Database,
  Printer,
  Wrench,
  Cpu,
  Layers,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = {
  'Backend & APIs': Server,
  'Cloud & Infrastructure': Cloud,
  'Databases & Ledgers': Database,
  'Domain & Hardware Integrations': Printer,
  'Developer Tooling & Workflow': Wrench,
};

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="section-shell border-t border-slate-800/80" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto">
            <Cpu size={14} /> Technical Competencies
          </div>
          <h2 className="section-title">
            Skills honed through building end-to-end production systems.
          </h2>
          <p className="section-subtitle">
            A practical, multi-disciplinary toolkit centered on backend rigor, desktop ergonomics, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Category Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.title] || Layers;
            return (
              <motion.div
                key={category.title}
                className="solid-card group p-6 transition-all duration-300 hover:border-sky-400/50 flex flex-col justify-between"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-slate-950 text-sky-400 transition-colors group-hover:border-sky-400/60">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-sky-500/40 hover:text-white"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                          • {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
