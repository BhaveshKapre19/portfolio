import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-[#F8FAFC]">
                        <span className="text-[#14F1D9] font-mono mr-2">03.</span>
                        Featured Projects
                    </h2>
                    <div className="h-px bg-[#243244] flex-grow ml-6 max-w-xs md:max-w-sm"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, 6).map((project, index) => (
                        <Motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link
                                to={`/project/${project.id}`}
                                className="block h-full"
                            >
                                <div className="rounded-2xl border border-[#243244] bg-[#0D1626]/70 overflow-hidden h-full flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:border-[#14F1D9]/50 hover:shadow-2xl hover:shadow-black/20">
                                    <div className="relative h-52 overflow-hidden">
                                        {project.images && project.images.length > 0 ? (
                                            <>
                                                <img
                                                    src={project.images[0].src}
                                                    alt={project.images[0].alt}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-transparent to-transparent opacity-70"></div>
                                            </>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#111B2D] to-[#080D18]">
                                                <span className="text-[#A8B3C7] font-mono text-sm">No Preview</span>
                                            </div>
                                        )}

                                        <div className="absolute top-4 right-4 p-2 rounded-full bg-[#080D18]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                                            <ArrowUpRight size={18} className="text-[#14F1D9]" />
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-3">
                                            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#14F1D9] transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-[#14F1D9] font-mono text-xs uppercase tracking-wider">
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-[#A8B3C7] text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#243244]">
                                            {project.techStack.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-[#07111F] text-[#A8B3C7] text-xs rounded-md font-mono border border-[#243244]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-3 py-1 bg-[#07111F] text-[#14F1D9] text-xs rounded-md font-mono border border-[#243244]">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Motion.div>
                    ))}
                </div>

                {/* View All Projects Link */}
                {projects.length > 6 && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-[#14F1D9] text-[#14F1D9] rounded-lg hover:bg-[#14F1D9] hover:text-[#07111F] transition-all font-bold group"
                        >
                            View All Projects
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;

