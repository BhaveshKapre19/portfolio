import { motion as Motion } from 'framer-motion';
import { ArrowRight, Cloud, Github, Linkedin, Mail, Server, Terminal } from 'lucide-react';
import profileImg from '../assets/IMG_20231213_180942_623_1.jpg';
import { personalInfo } from '../data/context';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 84;
    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
};

const Hero = () => {
    const { name, role, email, github, linkedin, heroHeadline, heroDescription, highlights, stats } = personalInfo;

    return (
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
            <div className="absolute inset-x-6 top-28 h-px bg-gradient-to-r from-transparent via-[#14F1D9]/40 to-transparent"></div>
            <div className="absolute right-0 top-24 hidden h-[520px] w-[520px] rounded-full border border-[#14F1D9]/10 lg:block"></div>
            <div className="container mx-auto px-6 md:px-10 max-w-6xl w-full">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-16">
                    <div className="text-center lg:text-left">
                        <Motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#14F1D9]/20 bg-[#14F1D9]/8 px-4 py-2 text-sm font-medium text-[#14F1D9] shadow-[0_0_15px_rgba(20,241,217,0.15)]"
                        >
                            <Terminal size={16} />
                            {role}
                        </Motion.div>

                        <Motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-7 text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#94A3B8] tracking-tight leading-[1.03]"
                        >
                            {heroHeadline}
                        </Motion.h1>

                        <Motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-7 text-[#A8B3C7] text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        >
                            {heroDescription}
                        </Motion.p>

                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
                        >
                            {highlights.map((item) => (
                                <span key={item} className="rounded-full border border-[#243244] bg-[#0D1626]/80 px-4 py-2 text-sm text-[#C8D3E3]">
                                    {item}
                                </span>
                            ))}
                        </Motion.div>

                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group px-7 py-4 bg-gradient-to-r from-[#14F1D9] to-[#0CBAB3] text-[#07111F] rounded-lg transition-all font-bold flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(20,241,217,0.3)]"
                            >
                                View Projects
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-7 py-4 border border-[#2D3A4D] bg-[#0D1626]/70 text-[#F8FAFC] rounded-lg hover:border-[#14F1D9]/60 hover:text-[#14F1D9] hover:bg-[#14F1D9]/5 transition-all font-semibold"
                            >
                                Contact Me
                            </button>
                        </Motion.div>

                        <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex items-center gap-5 justify-center lg:justify-start"
                        >
                            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#A8B3C7] hover:text-[#14F1D9] hover:scale-110 transition-all">
                                <Github size={24} />
                            </a>
                            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#A8B3C7] hover:text-[#14F1D9] hover:scale-110 transition-all">
                                <Linkedin size={24} />
                            </a>
                            <a href={`mailto:${email}`} aria-label="Email" className="text-[#A8B3C7] hover:text-[#14F1D9] hover:scale-110 transition-all">
                                <Mail size={24} />
                            </a>
                        </Motion.div>
                    </div>

                    <Motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto w-full max-w-md lg:max-w-none"
                    >
                        <div className="rounded-[28px] border border-[#243244] bg-[#0D1626]/75 p-4 shadow-2xl shadow-black/40 backdrop-blur-md relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#14F1D9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[28px] pointer-events-none"></div>
                            <div className="overflow-hidden rounded-2xl border border-[#26374C] bg-[#07111F]">
                                <img
                                    src={profileImg}
                                    alt={name}
                                    className="h-[420px] w-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-3 pt-4">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="rounded-xl border border-[#243244] bg-[#07111F]/70 px-3 py-4 text-center">
                                        <p className="text-lg font-black text-[#F8FAFC]">{stat.value}</p>
                                        <p className="mt-1 text-xs text-[#A8B3C7]">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -left-5 top-12 hidden rounded-2xl border border-[#14F1D9]/20 bg-[#0D1626] p-4 shadow-xl lg:block">
                            <Cloud className="mb-2 text-[#14F1D9]" size={22} />
                            <p className="text-sm font-semibold text-[#F8FAFC]">AWS-ready</p>
                        </div>
                        <div className="absolute -right-5 bottom-28 hidden rounded-2xl border border-[#14F1D9]/20 bg-[#0D1626] p-4 shadow-xl lg:block">
                            <Server className="mb-2 text-[#14F1D9]" size={22} />
                            <p className="text-sm font-semibold text-[#F8FAFC]">Backend logic</p>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

