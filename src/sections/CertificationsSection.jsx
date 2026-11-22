/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { motion } from 'framer-motion';
import { ExternalLink, Award, BadgeCheck, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function CertificationsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="certifications" className="section-shell border-t border-subtle" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-badge mx-auto">
            <BadgeCheck size={14} className="text-blue-400" />
            <span>Verified Credentials</span>
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
              className="bento-card group flex min-h-full flex-col justify-between p-6 transition-colors hover:border-blue-400/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-canvas-subtle text-blue-400 group-hover:border-blue-400/60 transition-colors">
                    <Award size={20} />
                  </div>
                  {cert.grade && (
                    <span className="text-xs font-semibold rounded-full border border-blue-400/30 bg-blue-950/40 px-2.5 py-0.5 text-blue-200">
                      {cert.grade}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-bold leading-snug text-white group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-400">{cert.issuer}</p>
                <p className="mt-1 text-xs text-slate-400 font-normal">{cert.date}</p>

                {cert.skillsCovered && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s) => (
                      <span key={s} className="tech-chip text-xs !py-0.5 !px-2.5">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {cert.verificationUrl ? (
                <div className="mt-6 pt-4 border-t border-subtle">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              ) : (
                <div className="mt-6 pt-4 border-t border-subtle text-xs text-slate-400 flex items-center gap-1">
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