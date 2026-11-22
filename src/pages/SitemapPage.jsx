/* <!-- hallmark: macrostructure=MS-01-bento-grid --> */
/* <!-- hallmark: theme=TH-08-midnight-cobalt --> */
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Compass, FolderKanban, BookOpen, Route, ShieldCheck, FileCode } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

export default function SitemapPage() {
  const sections = [
    { name: 'Hero / Overview', href: '/#home', desc: 'Engineering headline, active tech stack & live workbench' },
    { name: 'Selected Projects', href: '/#projects', desc: 'Biller ERP, Custom MVC Engine, Cloud Infrastructure, Machine Learning' },
    { name: 'Professional Background', href: '/#about', desc: 'Education, career context, and core backend principles' },
    { name: 'Technical Competencies', href: '/#skills', desc: 'APIs, relational databases, cloud infrastructure, POS protocols' },
    { name: 'Verified Credentials', href: '/#certifications', desc: 'AWS Certified Cloud Practitioner, Azure, GCP, Database certifications' },
    { name: 'Career Journey', href: '/#experience', desc: 'Academic degrees, freelance systems delivery & career milestones' },
    { name: 'Why Hire Me', href: '/#why-hire', desc: 'Production delivery proof, database reliability, and AWS readiness' },
    { name: 'Direct Channels', href: '/#contact', desc: 'Email dispatch, social profiles, and interview availability' },
  ];

  return (
    <div className="min-h-screen bg-canvas text-slate-100 flex flex-col justify-between">
      <header className="border-b border-subtle bg-canvas-subtle/80 backdrop-blur-md sticky top-0 z-40">
        <div className="section-container flex items-center justify-between h-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
          <span className="font-mono text-xs text-blue-400">bhaveshkapre.in / sitemap</span>
        </div>
      </header>

      <main className="section-shell flex-1">
        <div className="section-container max-w-4xl">
          <div className="mb-10 text-center sm:text-left">
            <div className="section-badge mb-3">
              <Compass size={14} className="text-blue-400" />
              <span>Index &amp; Crawl Directory</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Website Sitemap &amp; Directory
            </h1>
            <p className="section-subtitle !mx-0 mt-2">
              Complete index of portfolio routes, anchor sections, production systems, and engineering writing.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1: Portfolio Sections */}
            <div className="bento-card p-6 sm:p-7">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Route size={16} />
                <span>Single-Page Architecture &amp; Sections</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {sections.map((s) => (
                  <Link
                    key={s.name}
                    to={s.href}
                    className="terminal-box p-3.5 hover:border-blue-400/50 transition-colors group"
                  >
                    <p className="font-display text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {s.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Section 2: Projects Index */}
            <div className="bento-card p-6 sm:p-7">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                <FolderKanban size={16} />
                <span>Software Systems &amp; Codebases</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {projects.map((p) => (
                  <div key={p.title} className="terminal-box p-3.5">
                    <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wide">
                      {p.category}
                    </span>
                    <h3 className="font-display text-sm font-bold text-white mt-0.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Publications & External Profiles */}
            <div className="bento-card p-6 sm:p-7">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                <BookOpen size={16} />
                <span>Writing, Machine-Readable Feeds &amp; Channels</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                <a
                  href={personalInfo.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-box p-3.5 hover:border-blue-400/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-blue-300 flex items-center justify-between">
                      <span>Technical Blog</span>
                      <ExternalLink size={12} className="text-slate-400" />
                    </span>
                    <p className="text-xs text-slate-400 mt-1">blog.bhaveshkapre.in</p>
                  </div>
                </a>

                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-box p-3.5 hover:border-blue-400/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-blue-300 flex items-center justify-between">
                      <span>XML Sitemap</span>
                      <FileCode size={12} className="text-blue-400" />
                    </span>
                    <p className="text-xs text-slate-400 mt-1">/sitemap.xml (SEO Feed)</p>
                  </div>
                </a>

                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-box p-3.5 hover:border-blue-400/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-blue-300 flex items-center justify-between">
                      <span>robots.txt</span>
                      <ShieldCheck size={12} className="text-blue-400" />
                    </span>
                    <p className="text-xs text-slate-400 mt-1">Crawler Permissions</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-subtle bg-canvas-subtle py-6 text-center text-xs text-slate-400">
        <div className="section-container flex items-center justify-between">
          <span>&copy; {new Date().getFullYear()} Bhavesh Kapre</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-white transition-colors">Portfolio</Link>
            <a href={personalInfo.blog} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a>
            <a href="/sitemap.xml" className="text-blue-400 hover:underline">sitemap.xml</a>
          </div>
        </div>
      </footer>
    </div>
  );
}