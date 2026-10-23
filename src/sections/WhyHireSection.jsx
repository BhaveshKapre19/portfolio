import { motion } from 'framer-motion';
import { Brain, Cloud, Rocket, Settings, Sparkles } from 'lucide-react';
import { whyHireCards } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const icons = [Brain, Settings, Cloud, Rocket];

export default function WhyHireSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-shell border-b border-slate-900" ref={ref}>
      <div className="section-container">
        <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <div className="section-kicker mx-auto"><Sparkles size={15} /> Why hire me</div>
          <h2 className="section-title">Useful from day one, still hungry to grow.</h2>
          <p className="section-subtitle">A junior engineer profile with practical project experience, cloud fundamentals, and steady learning habits.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireCards.map((card, idx) => {
            const Icon = icons[idx] || Rocket;
            return (
              <motion.article
                key={card.title}
                className="solid-card p-6 transition-colors duration-300 hover:border-sky-300/60"
                initial={{ opacity: 0, y: 34 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-300/25 bg-slate-950 text-sky-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
