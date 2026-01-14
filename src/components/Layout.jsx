import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import logo from '../../public/logo.svg';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (!isHomePage) return;
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'About', id: 'about', href: '/#about' },
        { name: 'Skills', id: 'skills', href: '/#skills' },
        { name: 'Projects', id: 'projects', href: '/#projects' },
        { name: 'Contact', id: 'contact', href: '/#contact' },
    ];

    return (
        <div className="w-full min-h-screen bg-[#0B1220] text-[#F8FAFC] font-sans selection:bg-[#00E5C5] selection:text-[#0B1220]">
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-10 max-w-6xl flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-xl font-bold text-[#F8FAFC] hover:text-[#00E5C5] transition-colors z-50 tracking-tight"
                    >
                        Bhavesh <span className="text-[#00E5C5]">Kapre</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            isHomePage ? (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="relative text-sm font-medium text-[#94A3B8] hover:text-[#00E5C5] transition-all cursor-pointer group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00E5C5] group-hover:w-full transition-all duration-300"></span>
                                </button>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="relative text-sm font-medium text-[#94A3B8] hover:text-[#00E5C5] transition-all group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00E5C5] group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            )
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-4 py-2 border-2 border-[#00E5C5] text-[#00E5C5] rounded-lg hover:bg-[#00E5C5] hover:text-[#0B1220] transition-all text-sm font-medium ml-4 hover:scale-105"
                        >
                            Resume
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#F8FAFC] z-50 hover:text-[#00E5C5] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Nav Overlay */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                                className="fixed inset-0 bg-[#0B1220] z-40 flex flex-col items-center justify-center md:hidden"
                            >
                                <nav className="flex flex-col space-y-8 text-center text-lg">
                                    {navLinks.map((link) => (
                                        isHomePage ? (
                                            <button
                                                key={link.name}
                                                onClick={() => scrollToSection(link.id)}
                                                className="font-medium text-[#94A3B8] hover:text-[#00E5C5] transition-colors"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="font-medium text-[#94A3B8] hover:text-[#00E5C5] transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        )
                                    ))}
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        className="px-6 py-3 border border-[#00E5C5] text-[#00E5C5] rounded hover:bg-[#00E5C5]/10 transition-colors font-medium mt-4"
                                    >
                                        Resume
                                    </a>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>

            <main>{children}</main>

            <footer className="relative bg-[#0B1220] py-12 text-center mt-auto z-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5C5]/50 to-transparent"></div>

                <p className="text-[#94A3B8] text-sm mt-6">© {new Date().getFullYear()} <span className="text-[#00E5C5]">Bhavesh Kapre</span>. Built with React & Tailwind.</p>
            </footer>
        </div>
    );
};

export default Layout;
