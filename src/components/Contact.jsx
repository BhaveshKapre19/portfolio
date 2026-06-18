import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/context';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (event) => {
        setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    };

    const { email, github, linkedin, name } = personalInfo;

    const handleSubmit = (event) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${form.name || 'visitor'}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    const links = [
        { label: 'Email', value: email, href: `mailto:${email}`, icon: Mail },
        { label: 'GitHub', value: name.replace(' ', ''), href: github, icon: Github },
        { label: 'LinkedIn', value: name.toLowerCase().replace(' ', '-'), href: linkedin, icon: Linkedin },
    ];

    return (
        <section id="contact" className="py-24 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#14F1D9]/30 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-10 max-w-6xl relative z-10">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#14F1D9] font-mono mb-4 text-sm tracking-widest">04. What is next?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">Let us build something useful</h2>
                    <p className="text-[#A8B3C7] text-lg leading-relaxed max-w-2xl mx-auto">
                        I am open to developer roles, freelance work, and project collaborations around web apps,
                        backend systems, cloud deployments, and machine learning experiments.
                    </p>
                </Motion.div>

                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <Motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-[#243244] bg-[#0D1626]/70 p-7"
                    >
                        <h3 className="text-xl font-bold text-[#F8FAFC] mb-6">Contact channels</h3>
                        <div className="space-y-4">
                            {links.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                                        className="flex items-center gap-4 rounded-xl border border-[#243244] bg-[#07111F]/70 p-4 hover:border-[#14F1D9]/50 transition-colors"
                                    >
                                        <span className="rounded-lg bg-[#14F1D9]/10 p-2 text-[#14F1D9]">
                                            <Icon size={20} />
                                        </span>
                                        <span>
                                            <span className="block text-sm text-[#A8B3C7]">{link.label}</span>
                                            <span className="block font-semibold text-[#F8FAFC]">{link.value}</span>
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-[#243244] bg-[#0D1626]/70 p-7 relative overflow-hidden"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[#F8FAFC]">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#07111F]/80 border border-[#243244] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#14F1D9] transition-colors placeholder:text-[#536274]"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[#F8FAFC]">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#07111F]/80 border border-[#243244] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#14F1D9] transition-colors placeholder:text-[#536274]"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#F8FAFC]">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#07111F]/80 border border-[#243244] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#14F1D9] transition-colors resize-none placeholder:text-[#536274]"
                                    placeholder="Tell me about the role, project, or idea..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#14F1D9] text-[#07111F] font-bold py-4 rounded-lg hover:shadow-[0_18px_45px_rgba(20,241,217,0.22)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Email
                            </button>
                        </form>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

