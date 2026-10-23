import { motion } from 'framer-motion';
import { ExternalLink, Award, BadgeCheck, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function CertificationsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="certifications" className="section-shell border-t border-slate-800/80" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto">
            <BadgeCheck size={14} /> Verified Credentials
          </div>
          <h2 className="section-title">
            Industry-recognized certifications and verified assessments.
          </h2>
          <p className="section-subtitle">
            Demonstrating structured expertise across Amazon Web Services, Microsoft Azure, Google Cloud, and relational databases.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.title}
              className="solid-card group flex min-h-full flex-col justify-between p-6 transition-all duration-300 hover:border-sky-400/50"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-slate-950 text-sky-400 group-hover:border-sky-400/60 transition-colors">
                    <Award size={22} />
                  </div>
                  {cert.grade && (
                    <span className="font-mono text-[11px] font-bold rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-emerald-300">
                      {cert.grade}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-bold leading-snug text-white group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-sky-400">{cert.issuer}</p>
                <p className="mt-1 font-mono text-[11px] text-slate-500">{cert.date}</p>

                {cert.skillsCovered && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s) => (
                      <span key={s} className="tech-chip text-[10px] !py-0.5 !px-2">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {cert.verificationUrl ? (
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              ) : (
                <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck size={13} className="text-slate-400" />
                  <span>Verified Skill Assessment</span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
