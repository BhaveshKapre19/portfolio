import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, Route } from 'lucide-react';
import { timeline } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = { education: GraduationCap, career: Briefcase, break: BookOpen };

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="experience" className="section-shell border-b border-slate-900" ref={ref}>
      <div className="section-container">
        <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <div className="section-kicker mx-auto"><Route size={15} /> Timeline</div>
          <h2 className="section-title">A clear path from education to focused backend readiness.</h2>
          <p className="section-subtitle">The story is direct: formal CS training, continued learning, project building, and a committed move into engineering roles.</p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 sm:block" />
          <div className="space-y-5">
            {timeline.map((event, idx) => {
              const Icon = iconMap[event.type] || Briefcase;
              return (
                <motion.article
                  key={`${event.year}-${event.title}`}
                  className="relative grid gap-4 sm:grid-cols-[2.75rem_1fr]"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                >
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-300/30 bg-slate-950 text-sky-300">
                    <Icon size={20} />
                  </div>
                  <motion.div className="solid-card p-6" whileHover={{ x: 4 }}>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-sky-300">{event.year}</span>
                    <h3 className="font-display mt-2 text-xl font-bold text-white">{event.title}</h3>
                    {event.subtitle && <p className="mt-1 text-sm font-semibold text-slate-500">{event.subtitle}</p>}
                    <p className="mt-3 text-sm leading-7 text-slate-400">{event.description}</p>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
