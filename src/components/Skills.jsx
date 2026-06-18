import { motion as Motion } from 'framer-motion';
import { skillsData } from '../data/context';

const Skills = () => {
    const skills = skillsData;

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-[#F8FAFC]">
                        <span className="text-[#14F1D9] font-mono mr-2">02.</span>
                        Technical Skills
                    </h2>
                    <div className="h-px bg-[#243244] flex-grow ml-6 max-w-xs md:max-w-md"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills).map(([category, data], index) => {
                            const IconComponent = data.icon;
                            return (
                                <Motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="rounded-2xl border border-[#243244] bg-[#0D1626]/70 p-6 shadow-lg hover:border-[#14F1D9]/40 hover:shadow-[0_10px_30px_rgba(20,241,217,0.1)] transition-all relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F1D9]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                                    <div className="flex items-center gap-4 mb-5 relative z-10">
                                        <div className="p-3 rounded-xl bg-[#07111F] border border-[#243244] group-hover:border-[#14F1D9]/50 transition-colors">
                                            <IconComponent size={24} className="text-[#14F1D9]" />
                                        </div>
                                        <h4 className="text-[#F8FAFC] font-bold text-lg">{category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {data.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 bg-[#07111F] text-[#A8B3C7] rounded-md text-sm border border-[#243244] group-hover:border-[#243244]/80 transition-colors"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </Motion.div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default Skills;

