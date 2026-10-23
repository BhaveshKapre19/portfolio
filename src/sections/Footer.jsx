import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#05070d] py-8">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm font-semibold text-slate-500">
            Designed and developed by <span className="text-slate-200">Bhavesh Kapre</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
            <span>2026</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={13} className="fill-red-400 text-red-400" /> using
            </span>
            <span className="font-bold text-slate-300">React + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
