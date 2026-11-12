/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { motion } from 'framer-motion';
import { Target, CheckCircle2, ShieldCheck, Zap, HardDrive, HeartHandshake, Terminal } from 'lucide-react';
import { whyHireCards } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

const iconMap = {
  'Project Experience': Zap,
  'Backend Skills': ShieldCheck,
  'Cloud Ready': HardDrive,
  'Growth Mindset': HeartHandshake,
};

export default function WhyHireSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const primaryCard = whyHireCards[1] || whyHireCards[0];
  const secondaryCards = whyHireCards.filter((_, i) => i !== 1);

  const PrimaryIcon = iconMap[primaryCard.tag] || ShieldCheck;

  return (
    <section id="why-hire" className="section-shell border-t border-[#1e2f52]" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-badge mx-auto">
            <Target size={14} className="text-blue-400" />
            <span>Why Hire Me</span>
          </div>
          <h2 className="section-title">
            Why I'm a good bet as your next backend hire.
          </h2>
          <p className="section-subtitle">
            Real project experience, cloud certifications, and genuine eagerness to grow on a team.
          </p>
        </motion.div>

        {/* Asymmetric Bento Architecture */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Primary Anchor Card: Server-Side & Financial Rigor */}
          <motion.div
            className="bento-card p-6 sm:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/30 bg-[#070c18] text-blue-400">
                  <PrimaryIcon size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                  {primaryCard.tag}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {primaryCard.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200">
                {primaryCard.description}
              </p>

              {/* Biller Freelancing Project Callout */}
              <div className="mt-6 terminal-box space-y-2">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-xs font-mono">
                  <Terminal size={13} />
                  <span>biller-erp — freelancing project</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  Django REST backend · GST billing engine · ESC/POS thermal printing · SQLite database · Tauri v2 desktop client
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2f52] flex items-center gap-2 text-xs font-semibold text-blue-300">
              <CheckCircle2 size={15} />
              <span>Verified via Certifications & Projects</span>
            </div>
          </motion.div>

          {/* Secondary Stacked Bento Column */}
          <div className="flex flex-col gap-6 justify-between">
            {secondaryCards.map((card, idx) => {
              const Icon = iconMap[card.tag] || CheckCircle2;

              return (
                <motion.div
                  key={card.title}
                  className="bento-card p-6 flex-1 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: (idx + 1) * 0.08, ease: 'easeOut' }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-[#070c18] text-blue-400">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                        {card.tag}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white">
                      {card.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1e2f52] flex items-center gap-1.5 text-xs font-semibold text-blue-300">
                    <CheckCircle2 size={13} />
                    <span>Verified via Projects & Certs</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
