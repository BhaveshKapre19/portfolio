import { motion as Motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/context';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-[#0B1220]">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-[#F8FAFC]">
                        <span className="text-[#14F1D9] font-mono mr-2">03.</span>
                        Certifications
                    </h2>
                    <div className="h-px bg-[#243244] flex-grow ml-6 max-w-xs md:max-w-md"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certificationsData.map((cert, index) => (
                        <Motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="rounded-2xl border border-[#243244] bg-[#0D1626]/70 p-6 shadow-lg hover:border-[#14F1D9]/40 hover:shadow-[0_10px_30px_rgba(20,241,217,0.1)] transition-all relative overflow-hidden group flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#14F1D9]/10 to-transparent rounded-bl-full -mr-20 -mt-20 transition-transform duration-500 group-hover:scale-150"></div>
                            
                            <div className="flex items-start justify-between mb-4 relative z-10">
                                <div className="p-3 rounded-xl bg-[#07111F] border border-[#243244] group-hover:border-[#14F1D9]/50 transition-colors">
                                    <Award size={28} className="text-[#14F1D9]" />
                                </div>
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="p-2 rounded-full bg-[#14F1D9]/10 text-[#14F1D9] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#14F1D9] hover:text-[#07111F]"
                                    aria-label={`Verify ${cert.name}`}
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <div className="mb-4 flex-grow relative z-10">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#14F1D9] transition-colors line-clamp-2">
                                    {cert.name}
                                </h3>
                                <p className="text-[#A8B3C7] text-sm">Issued by <span className="font-semibold text-[#E2E8F0]">{cert.issuer}</span></p>
                            </div>

                            {cert.courses && (
                                <div className="mb-4 relative z-10">
                                    <p className="text-xs font-mono text-[#14F1D9] mb-2 uppercase tracking-wider">Courses Include:</p>
                                    <ul className="space-y-1.5">
                                        {cert.courses.map((course, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-[#A8B3C7]">
                                                <CheckCircle size={14} className="text-[#14F1D9] mt-0.5 flex-shrink-0" />
                                                <span className="line-clamp-1">{course}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#243244]/50 relative z-10">
                                <div className="flex items-center gap-2 text-[#A8B3C7] text-sm">
                                    <Calendar size={14} className="text-[#14F1D9]" />
                                    <span>{cert.date}</span>
                                </div>
                                {cert.grade && (
                                    <span className="px-3 py-1 bg-[#14F1D9]/10 text-[#14F1D9] text-xs font-bold rounded-md font-mono border border-[#14F1D9]/20">
                                        Grade: {cert.grade}
                                    </span>
                                )}
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
