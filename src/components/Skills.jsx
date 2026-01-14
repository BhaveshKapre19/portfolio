import { motion } from 'framer-motion';
import { Code, Cloud, Globe, Database, Wrench, Award } from 'lucide-react';

const Skills = () => {
    const skills = {
        "Programming": { items: ["Python", "PHP", "SQL"], icon: Code, color: "from-blue-500 to-cyan-500" },
        "Cloud & DevOps": { items: ["AWS", "Azure", "Docker", "Linux Server"], icon: Cloud, color: "from-purple-500 to-pink-500" },
        "Web Development": { items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS"], icon: Globe, color: "from-green-500 to-teal-500" },
        "Frameworks": { items: ["Flask", "Django", "Laravel"], icon: Code, color: "from-orange-500 to-red-500" },
        "Tools": { items: ["Git", "GitHub", "Postman"], icon: Wrench, color: "from-yellow-500 to-orange-500" },
        "Databases": { items: ["MySQL", "Database Design"], icon: Database, color: "from-indigo-500 to-purple-500" }
    };

    const certifications = [
        { name: "Microsoft Azure Fundamentals (AZ-900)", year: "2023", icon: "☁️" },
        { name: "Google IT Support Professional Certificate", year: "2023", icon: "🎓" },
        { name: "SQL Intermediate (Hackerrank)", year: "2021", icon: "💾" },
        { name: "Building Web Applications in PHP (Coursera)", year: "2020", icon: "🌐" }
    ];

    return (
        <section id="skills" className="py-16 bg-[#0B1220]">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-16">
                    <h2 className="text-3xl font-bold text-[#F8FAFC]">
                        <span className="text-[#00E5C5] font-mono mr-2">02.</span>
                        Skills & Certifications
                    </h2>
                    <div className="h-px bg-[#1E293B] flex-grow ml-6 max-w-xs"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Skills Section */}
                    <div>
                        <h3 className="text-xl font-bold text-[#F8FAFC] mb-8 flex items-center gap-2">
                            <span className="text-2xl">💻</span>
                            Technical Skills
                        </h3>
                        <div className="grid gap-8">
                            {Object.entries(skills).map(([category, data], index) => {
                                const IconComponent = data.icon;
                                return (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="glass glass-hover rounded-xl p-6"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${data.color} bg-opacity-10`}>
                                                <IconComponent size={20} className="text-[#00E5C5]" />
                                            </div>
                                            <h4 className="text-[#F8FAFC] font-semibold text-lg">{category}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {data.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-4 py-2 bg-[#1E293B] text-[#94A3B8] rounded-lg text-sm font-medium hover:bg-[#334155] hover:text-[#00E5C5] transition-all hover:scale-105 border border-transparent hover:border-[#00E5C5]/30"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div>
                        <h3 className="text-xl font-bold text-[#F8FAFC] mb-8 flex items-center gap-2">
                            <Award size={24} className="text-[#00E5C5]" />
                            Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass glass-hover rounded-xl p-6 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl group-hover:scale-110 transition-transform">
                                            {cert.icon}
                                        </span>
                                        <div className="flex-1">
                                            <h4 className="text-[#F8FAFC] font-medium mb-1 group-hover:text-[#00E5C5] transition-colors">
                                                {cert.name}
                                            </h4>
                                            <p className="text-sm text-[#94A3B8]">{cert.year}</p>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[#00E5C5]">✓</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 p-6 rounded-xl border border-[#00E5C5]/30 bg-gradient-to-br from-[#00E5C5]/5 to-transparent"
                        >
                            <p className="text-[#94A3B8] text-sm leading-relaxed">
                                Continuously learning and staying updated with the latest technologies and industry best practices.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
