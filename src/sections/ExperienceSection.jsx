/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, HeartHandshake, Rocket, Route } from 'lucide-react';
import { timeline } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = {
  education: GraduationCap,
  growth: HeartHandshake,
  career: Rocket,
};

export default function ExperienceSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="experience" className="section-shell border-t border-subtle" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-badge mx-auto">
            <Route size={14} className="text-blue-400" />
            <span>Career &amp; Education Journey</span>
          </div>
          <h2 className="section-title">
            Engineering Milestones &amp; Professional Journey.
          </h2>
          <p className="section-subtitle">
            Formal computer science foundation, independent systems engineering, production POS delivery, and active cloud preparation.
          </p>
        </motion.div>

        {/* Timeline Roadmap */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Track Line */}
          <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-400 via-sky-400 to-indigo-500 opacity-30" />

          <div className="space-y-7">
            {timeline.map((event, idx) => {
              const Icon = iconMap[event.type] || Briefcase;
              const isCurrent = event.type === 'career';

              return (
                <motion.article
                  key={event.period + event.title}
                  className="relative flex items-start gap-4 sm:gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                >
                  {/* Timeline Node Icon */}
                  <div
                    className={`relative z-10 flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border shadow-lg ${
                      isCurrent
                        ? 'border-blue-400/60 bg-blue-950 text-blue-200 ring-4 ring-blue-500/20'
                        : 'border-subtle bg-canvas-subtle text-blue-400'
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  {/* Timeline Card */}
                  <div className="bento-card flex-1 p-5 sm:p-6 transition-colors hover:border-blue-400/50">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                        {event.period}
                      </span>
                      {event.grade && (
                        <span
                          className={`text-xs font-semibold rounded-full px-2.5 py-0.5 border ${
                            isCurrent
                              ? 'border-blue-400/40 bg-blue-950/50 text-blue-200'
                              : 'border-subtle bg-terminal-subtle text-slate-300'
                          }`}
                        >
                          {event.grade}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {event.title}
                    </h3>

                    {event.institution && (
                      <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-400">
                        {event.institution}
                      </p>
                    )}

                    <p className="mt-3 text-sm leading-relaxed text-slate-300 font-normal">
                      {event.details}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}