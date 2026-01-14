import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0B1220] flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5C5]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-10 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-[#00E5C5] font-mono mb-4 text-sm tracking-widest">04. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">Get In Touch</h2>
                    <p className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question about my work,
                        a project idea, or just want to say hi, feel free to drop a message below!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-1 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border border-[#1E293B] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5C5]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[#F8FAFC]">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-[#0B1220]/50 border border-[#1E293B] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#00E5C5] transition-colors placeholder:text-[#475569]"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[#F8FAFC]">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-[#0B1220]/50 border border-[#1E293B] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#00E5C5] transition-colors placeholder:text-[#475569]"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#F8FAFC]">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-[#0B1220]/50 border border-[#1E293B] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#00E5C5] transition-colors resize-none placeholder:text-[#475569]"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#00E5C5] to-[#00C2A5] text-[#0B1220] font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,229,197,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
