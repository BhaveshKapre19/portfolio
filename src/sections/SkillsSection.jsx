/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
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
    <section id="skills" className="section-shell border-t border-[#1e2f52]" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-badge mx-auto">
            <Cpu size={14} className="text-blue-400" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">
            Skills honed through building production-grade systems.
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
                className="bento-card group p-6 transition-colors hover:border-blue-400/50 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-[#070c18] text-blue-400 transition-colors group-hover:border-blue-400/60">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed font-normal">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1e2f52]">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="tech-chip"
                    >
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs text-blue-400 font-semibold">
                          [{skill.level}]
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
