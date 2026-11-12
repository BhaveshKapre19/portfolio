/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1e2f52] bg-[#0b1120] py-10 text-xs text-slate-400">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-white tracking-tight">Bhavesh Kapre</span>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-medium text-blue-400">Backend &amp; Cloud Engineer</span>
            </div>
            <p className="mt-1 text-slate-400 text-xs">
              Engineered with React 19, Tailwind CSS v4, and Vite.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e2f52] bg-[#101a30] text-slate-400 hover:border-blue-400/40 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
