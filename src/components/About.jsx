import { motion as Motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { personalInfo, educationData } from '../data/context';

const About = () => {
    const { name, location, aboutIntro, aboutOutro, strengths } = personalInfo;
    const education = educationData;

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-[#F8FAFC]">
                        <span className="text-[#14F1D9] font-mono mr-2">01.</span>
                        About Me
                    </h2>
                    <div className="h-px bg-[#243244] flex-grow ml-6 max-w-xs"></div>
                </div>

                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
                    <Motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-[#243244] bg-[#0D1626]/65 p-7 md:p-8"
                    >
                        <div className="text-[#A8B3C7] leading-relaxed text-lg space-y-5">
                            <p>
                                Hello, I am <span className="text-[#14F1D9] font-semibold">{name}</span>, a developer based in{' '}
                                <span className="inline-flex items-center gap-1 text-[#F8FAFC]"><MapPin size={16} className="text-[#14F1D9]" />{location}</span>.
                            </p>
                            <p>
                                {aboutIntro}
                            </p>
                            <p>
                                {aboutOutro}
                            </p>
                        </div>

                        <div className="mt-8 grid sm:grid-cols-3 gap-3">
                            {strengths.map((item) => (
                                <Motion.div 
                                    key={item} 
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-xl border border-[#243244] bg-[#07111F]/70 p-4 shadow-lg hover:border-[#14F1D9]/40 transition-colors"
                                >
                                    <Sparkles size={18} className="mb-3 text-[#14F1D9]" />
                                    <p className="text-sm font-semibold text-[#DDE7F5]">{item}</p>
                                </Motion.div>
                            ))}
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-[#243244] bg-[#0D1626]/65 p-7 md:p-8"
                    >
                        <h3 className="text-[#F8FAFC] font-bold text-xl mb-6 flex items-center gap-2">
                            <GraduationCap size={24} className="text-[#14F1D9]" />
                            Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <Motion.div
                                    key={edu.degree}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="rounded-xl border border-[#243244] bg-[#07111F]/70 p-5 shadow-lg hover:border-[#14F1D9]/30 hover:shadow-[#14F1D9]/10 transition-all cursor-default"
                                >
                                    <h4 className="text-[#F8FAFC] font-semibold text-base mb-2">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-sm text-[#14F1D9] mb-3">
                                        {edu.institution}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-[#A8B3C7] mt-4 pt-4 border-t border-[#243244]/50">
                                        <span className="bg-[#0D1626] px-2 py-1 rounded font-mono">{edu.graduation}</span>
                                        <span className="font-semibold text-[#F8FAFC]">CGPA: {edu.cgpa}</span>
                                    </div>
                                </Motion.div>
                            ))}
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

