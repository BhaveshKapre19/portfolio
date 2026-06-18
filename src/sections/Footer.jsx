import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Designed and Developed by{' '}
            <span className="text-gray-300 hover:text-blue-400 transition-colors">Bhavesh Kapre</span>
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>© 2026</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="text-red-400 fill-red-400" /> using
            </span>
            <span className="text-gray-400">React + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}