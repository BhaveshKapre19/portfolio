import { motion } from 'framer-motion';
import { Target, CheckCircle2, ShieldCheck, Zap, HardDrive, HeartHandshake } from 'lucide-react';
import { whyHireCards } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = [Zap, ShieldCheck, HardDrive, HeartHandshake];

export default function WhyHireSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="why-hire" className="section-shell border-t border-slate-800/80" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto">
            <Target size={14} /> Value Proposition
          </div>
          <h2 className="section-title">
            Why I am ready to make an immediate impact on your engineering team.
          </h2>
          <p className="section-subtitle">
            Beyond standard tutorials: proven architectural thinking, real-world systems building, and dependable character.
          </p>
        </motion.div>

        {/* 4 Value Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireCards.map((card, idx) => {
            const Icon = iconMap[idx] || CheckCircle2;
            return (
              <motion.div
                key={card.title}
                className="solid-card group p-6 flex flex-col justify-between transition-all duration-300 hover:border-sky-400/50"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-slate-950 text-sky-400 group-hover:border-sky-400/60 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 size={14} />
                  <span>Verified Capability</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
