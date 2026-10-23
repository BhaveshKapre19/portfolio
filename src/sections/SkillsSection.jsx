import { motion } from 'framer-motion';
import { Braces, Cloud, Code2, Database, Globe2, Languages, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = {
  Programming: Braces,
  Backend: Server,
  Cloud: Cloud,
  DevOps: Wrench,
  Databases: Database,
  Frontend: Code2,
  'Languages Spoken': Languages,
};

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="section-shell border-b border-slate-900" ref={ref}>
      <div className="section-container">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto"><Globe2 size={15} /> Technical toolkit</div>
          <h2 className="section-title">Backend-first skills, organized for real project work.</h2>
          <p className="section-subtitle">A practical mix of Python, PHP, cloud deployment, databases, and operational tooling.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.title] || Code2;
            return (
              <motion.div
                key={category.title}
                className="solid-card group p-6 transition-colors duration-300 hover:border-sky-300/60"
                initial={{ opacity: 0, y: 34 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-300/25 bg-slate-950 text-sky-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="tech-chip">
                      {skill.name}
                    </span>
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
