import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0B1220] flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5C5]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-10 max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-[#00E5C5] font-mono mb-4 text-sm tracking-widest">04. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">Get In Touch</h2>
                    <p className="text-[#94A3B8] text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question about my work,
                        a project idea, or just want to say hi, my inbox is always open!
                    </p>

                    {/* Social Links Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <motion.a
                            href="mailto:kapre1999@yahoo.com"
                            whileHover={{ y: -5 }}
                            className="glass glass-hover rounded-xl p-6 group"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <div className="p-4 bg-[#1E293B] rounded-full group-hover:bg-[#00E5C5]/10 transition-all">
                                    <Mail size={28} className="text-[#00E5C5]" />
                                </div>
                                <div>
                                    <h3 className="text-[#F8FAFC] font-semibold mb-1">Email</h3>
                                    <p className="text-sm text-[#94A3B8]">kapre1999@yahoo.com</p>
                                </div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/bhavesh-kapre-367139216"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="glass glass-hover rounded-xl p-6 group"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <div className="p-4 bg-[#1E293B] rounded-full group-hover:bg-[#00E5C5]/10 transition-all">
                                    <Linkedin size={28} className="text-[#00E5C5]" />
                                </div>
                                <div>
                                    <h3 className="text-[#F8FAFC] font-semibold mb-1">LinkedIn</h3>
                                    <p className="text-sm text-[#94A3B8]">Connect with me</p>
                                </div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://github.com/Kapre1999"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="glass glass-hover rounded-xl p-6 group"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <div className="p-4 bg-[#1E293B] rounded-full group-hover:bg-[#00E5C5]/10 transition-all">
                                    <Github size={28} className="text-[#00E5C5]" />
                                </div>
                                <div>
                                    <h3 className="text-[#F8FAFC] font-semibold mb-1">GitHub</h3>
                                    <p className="text-sm text-[#94A3B8]">Check my code</p>
                                </div>
                            </div>
                        </motion.a>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="mailto:kapre1999@yahoo.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-10 py-4 border-2 border-[#00E5C5] text-[#00E5C5] font-medium rounded-lg hover:bg-[#00E5C5] hover:text-[#0B1220] transition-all hover:shadow-[0_0_30px_rgba(0,229,197,0.3)]"
                    >
                        <Send size={20} />
                        Say Hello
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
