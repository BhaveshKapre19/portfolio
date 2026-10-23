import { motion } from 'framer-motion';
import { ExternalLink, Award, BadgeCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function CertificationsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="certifications" className="section-shell border-b border-slate-900" ref={ref}>
      <div className="section-container">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="section-kicker mx-auto"><BadgeCheck size={15} /> Credentials</div>
          <h2 className="section-title">Verified learning across cloud, support, SQL, and web systems.</h2>
          <p className="section-subtitle">Certification links open the original credential pages, including the Microsoft verification link.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.title}
              className="solid-card group flex min-h-full flex-col p-6 transition-colors duration-300 hover:border-sky-300/60"
              initial={{ opacity: 0, y: 34 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-300/25 bg-slate-950 text-sky-300">
                <Award size={24} />
              </div>
              <h3 className="font-display text-lg font-bold leading-6 text-white group-hover:text-sky-300">{cert.title}</h3>
              <p className="mt-3 text-sm font-bold text-slate-400">{cert.issuer}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span>{cert.date}</span>
                {cert.grade && <span className="rounded-full border border-emerald-400/30 px-2 py-1 text-emerald-300">{cert.grade}</span>}
              </div>
              {cert.verificationUrl && (
                <motion.a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-5 text-sm font-bold text-sky-300 hover:text-sky-100" whileTap={{ scale: 0.98 }}>
                  <ExternalLink size={16} />
                  Verify credential
                </motion.a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
