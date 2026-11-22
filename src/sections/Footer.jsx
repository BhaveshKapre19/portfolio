/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { Mail, ArrowUp, BookOpen, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-subtle bg-canvas py-10 text-xs text-slate-400">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-white tracking-tight">Bhavesh Kapre</span>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-medium text-blue-400">Backend &amp; Cloud Engineer</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-slate-400 text-xs">
              <span>React 19, Tailwind CSS v4, Vite.</span>
              <span className="text-slate-600">/</span>
              <Link to="/sitemap" className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                <Compass size={12} className="text-blue-400" />
                <span>Sitemap</span>
              </Link>
              <span className="text-slate-600">/</span>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                sitemap.xml
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Technical Blog"
              title="Technical Blog (blog.bhaveshkapre.in)"
            >
              <BookOpen size={16} />
              <span className="hidden sm:inline font-medium">Blog</span>
            </a>
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
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-subtle bg-terminal-subtle text-slate-400 hover:border-blue-400/40 hover:text-white transition-colors"
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