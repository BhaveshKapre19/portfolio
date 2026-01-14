import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const About = () => {
    const education = [
        {
            degree: "B.Tech – Computer Science & Engineering",
            institution: "Shivajirao Kadam Institute of Technology and Management",
            graduation: "July 2022",
            cgpa: "7.5",
            icon: "🎓"
        },
        {
            degree: "Diploma – Computer Science & Engineering",
            institution: "Thakur Shivkumarsingh Memorial Polytechnic College",
            graduation: "July 2019",
            cgpa: "7.3",
            icon: "📚"
        }
    ];

    return (
        <section id="about" className="py-16 bg-[#0B1220]">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-[#F8FAFC]">
                        <span className="text-[#00E5C5] font-mono mr-2">01.</span>
                        About Me
                    </h2>
                    <div className="h-px bg-[#1E293B] flex-grow ml-6 max-w-xs"></div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <div className="text-[#94A3B8] leading-relaxed text-lg space-y-5">
                            <p>
                                Hello! I'm <span className="text-[#00E5C5] font-semibold">Bhavesh</span>, a Computer Science Engineering graduate based in <span className="inline-flex items-center gap-1"><MapPin size={16} className="inline text-[#00E5C5]" />Burhanpur, India</span>.
                                I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                            </p>
                            <p>
                                My journey involves hands-on experience in <span className="text-[#00E5C5] font-medium">cloud computing, web development, and machine learning</span>.
                                I've worked on real-world projects using AWS, Python, PHP, and MySQL.
                            </p>
                            <p>
                                I'm a quick learner with strong problem-solving abilities and a deep passion for new technologies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-[#F8FAFC] font-bold text-xl mb-6 flex items-center gap-2">
                            <GraduationCap size={24} className="text-[#00E5C5]" />
                            Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass glass-hover rounded-xl p-5 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-3xl group-hover:scale-110 transition-transform">
                                            {edu.icon}
                                        </span>
                                        <div className="flex-1">
                                            <h4 className="text-[#F8FAFC] font-semibold text-base mb-1 group-hover:text-[#00E5C5] transition-colors">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-sm text-[#00E5C5] mb-2">
                                                {edu.institution}
                                            </p>
                                            <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                                                <span>{edu.graduation}</span>
                                                <span>•</span>
                                                <span>CGPA: {edu.cgpa}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
