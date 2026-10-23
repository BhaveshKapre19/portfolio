import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, HeartHandshake, Rocket, Route, CheckCircle2 } from 'lucide-react';
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
    <section id="experience" className="section-shell border-t border-slate-800/80" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto">
            <Route size={14} /> Career &amp; Education Journey
          </div>
          <h2 className="section-title">
            From rigorous computer science education to production software craft.
          </h2>
          <p className="section-subtitle">
            A clear trajectory: formal university education, personal character tested through high-responsibility caregiving, continuous systems engineering, and immediate full-time readiness.
          </p>
        </motion.div>

        {/* Timeline Roadmap */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Track Line */}
          <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500 to-emerald-400 opacity-30" />

          <div className="space-y-8">
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
                        ? 'border-emerald-400/60 bg-emerald-950 text-emerald-300 ring-4 ring-emerald-500/20'
                        : 'border-sky-400/30 bg-slate-950 text-sky-400'
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Timeline Card */}
                  <div className="solid-card flex-1 p-5 sm:p-6 transition-all duration-300 hover:border-sky-400/50">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                        {event.period}
                      </span>
                      {event.grade && (
                        <span
                          className={`font-mono text-[11px] font-bold rounded-full px-2.5 py-0.5 border ${
                            isCurrent
                              ? 'border-emerald-500/40 bg-emerald-950/50 text-emerald-300'
                              : 'border-slate-800 bg-slate-900 text-slate-300'
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
                      <p className="mt-0.5 text-xs font-semibold text-slate-400">
                        {event.institution}
                      </p>
                    )}

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
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
