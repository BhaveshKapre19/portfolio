import { motion } from 'framer-motion';
import profileImg from '../assets/IMG_20231213_180942_623_1.jpg';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 pb-16 overflow-hidden relative">
            {/* Enhanced Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00E5C5]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3B82F6]/10 rounded-full blur-[150px] pointer-events-none" style={{ animationDelay: '1s' }}></div>

            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00E5C5]/40 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#3B82F6]/30 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[#00E5C5]/50 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>

            <div className="container mx-auto px-6 md:px-10 max-w-6xl w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[#00E5C5] font-mono mb-5 text-sm tracking-wider"
                        >
                            Hi, my name is
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-4 tracking-tight"
                        >
                            Bhavesh Kapre.
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
                        >
                            <span className="gradient-text">Software Engineer.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#94A3B8] text-lg leading-relaxed max-w-xl mb-10"
                        >
                            I specialize in building robust cloud infrastructure and scalable web applications.
                            My passion lies in solving complex problems to deliver elegant, efficient solutions using modern technologies like AWS, Python, and React.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-transparent border-2 border-[#00E5C5] text-[#00E5C5] rounded-lg hover:bg-[#00E5C5] hover:text-[#0B1220] transition-all font-medium flex items-center gap-2 hover:gap-3 hover:shadow-[0_0_30px_rgba(0,229,197,0.3)]"
                            >
                                View Projects
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-[#1E293B] text-[#F8FAFC] rounded-lg hover:bg-[#334155] transition-all font-medium hover:shadow-lg"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-5 mt-10 justify-center lg:justify-start"
                        >
                            <a
                                href="https://github.com/Kapre1999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#94A3B8] hover:text-[#00E5C5] transition-all hover:scale-110 hover:-translate-y-1"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/bhavesh-kapre-367139216"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#94A3B8] hover:text-[#00E5C5] transition-all hover:scale-110 hover:-translate-y-1"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:kapre1999@yahoo.com"
                                className="text-[#94A3B8] hover:text-[#00E5C5] transition-all hover:scale-110 hover:-translate-y-1"
                            >
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative group w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Animated gradient ring */}
                            <div className="absolute inset-0 rounded-full gradient-border opacity-50 group-hover:opacity-70 transition-opacity duration-500 blur-sm"></div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00E5C5]/20 to-[#3B82F6]/20 blur-3xl group-hover:blur-2xl transition-all duration-500"></div>

                            {/* Profile Image */}
                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-[#1E293B] shadow-2xl group-hover:border-[#00E5C5]/30 transition-all duration-500">
                                <img
                                    src={profileImg}
                                    alt="Bhavesh Kapre"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
