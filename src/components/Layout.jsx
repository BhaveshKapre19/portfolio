import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/context';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (!isHomePage) {
            navigate('/', { state: { scrollTo: id } });
            setIsMobileMenuOpen(false);
            return;
        }

        const element = document.getElementById(id);
        if (!element) return;

        const headerOffset = 84;
        const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const { name, email, github, linkedin } = personalInfo;

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Certifications', id: 'certifications' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    const socialLinks = [
        { label: 'GitHub', href: github, icon: Github },
        { label: 'LinkedIn', href: linkedin, icon: Linkedin },
        { label: 'Email', href: `mailto:${email}`, icon: Mail },
    ];

    return (
        <div className="w-full min-h-screen bg-[#080D18] text-[#F8FAFC] font-sans selection:bg-[#14F1D9] selection:text-[#07111F]">
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-2xl shadow-black/20' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 md:px-10 max-w-6xl flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-xl font-bold text-[#F8FAFC] hover:text-[#14F1D9] transition-colors z-50 tracking-tight"
                    >
                        {name.split(' ')[0]} <span className="text-[#14F1D9]">{name.split(' ')[1] || ''}</span>
                    </Link>

                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="relative text-sm font-medium text-[#A8B3C7] hover:text-[#14F1D9] transition-all cursor-pointer group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14F1D9] group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-[#14F1D9]/70 text-[#14F1D9] rounded-lg hover:bg-[#14F1D9] hover:text-[#07111F] transition-all text-sm font-semibold ml-2 hover:scale-105"
                        >
                            <Mail size={15} />
                            Hire Me
                        </a>
                    </nav>

                    <button
                        className="md:hidden text-[#F8FAFC] z-50 hover:text-[#14F1D9] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <Motion.div
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                                className="fixed inset-0 bg-[#080D18] z-40 flex flex-col items-center justify-center md:hidden"
                            >
                                <nav className="flex flex-col space-y-8 text-center text-lg">
                                    {navLinks.map((link) => (
                                        <button
                                            key={link.name}
                                            onClick={() => scrollToSection(link.id)}
                                            className="font-medium text-[#A8B3C7] hover:text-[#14F1D9] transition-colors"
                                        >
                                            {link.name}
                                        </button>
                                    ))}
                                    <a
                                        href={`mailto:${email}`}
                                        className="px-6 py-3 border border-[#14F1D9] text-[#14F1D9] rounded-lg hover:bg-[#14F1D9]/10 transition-colors font-medium mt-4"
                                    >
                                        Hire Me
                                    </a>
                                </nav>
                            </Motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>

            <main>{children}</main>

            <footer className="relative bg-[#080D18] py-12 text-center mt-auto z-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#14F1D9]/50 to-transparent"></div>
                <div className="flex items-center justify-center gap-4 mb-5">
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                                aria-label={link.label}
                                className="text-[#A8B3C7] hover:text-[#14F1D9] transition-colors"
                            >
                                <Icon size={20} />
                            </a>
                        );
                    })}
                </div>
                <p className="text-[#A8B3C7] text-sm mt-8">
                    Copyright {new Date().getFullYear()} <span className="text-[#14F1D9]">{name}</span>. Built with React, Tailwind, and Vite.
                </p>
            </footer>
        </div>
    );
};

export default Layout;

