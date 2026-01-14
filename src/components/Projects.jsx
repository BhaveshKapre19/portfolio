import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section className="py-16 bg-[#0B1220]">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-16">
                    <h2 className="text-3xl font-bold text-[#F8FAFC]">
                        <span className="text-[#00E5C5] font-mono mr-2">03.</span>
                        Featured Projects
                    </h2>
                    <div className="h-px bg-[#1E293B] flex-grow ml-6 max-w-xs md:max-w-sm"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, 6).map((project, index) => (
                        <motion.div
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
                                <div className="glass glass-hover rounded-xl overflow-hidden h-full flex flex-col relative">
                                    {/* Project Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        {project.images && project.images.length > 0 ? (
                                            <>
                                                <img
                                                    src={project.images[0].src}
                                                    alt={project.images[0].alt}
                                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                                />
                                                {/* Gradient overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-60"></div>
                                            </>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0B1220]">
                                                <span className="text-[#94A3B8] font-mono text-sm">No Preview</span>
                                            </div>
                                        )}

                                        {/* Floating icon */}
                                        <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0B1220]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                                            <ArrowUpRight size={18} className="text-[#00E5C5]" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-3">
                                            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00E5C5] transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-[#00E5C5] font-mono text-xs uppercase tracking-wider">
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#1E293B]">
                                            {project.techStack.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-[#1E293B] text-[#94A3B8] text-xs rounded-md font-mono border border-transparent group-hover:border-[#00E5C5]/20 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-3 py-1 bg-[#1E293B] text-[#00E5C5] text-xs rounded-md font-mono">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Hover gradient border effect */}
                                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <div className="absolute inset-0 rounded-xl border-2 border-[#00E5C5]/20"></div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Link */}
                {projects.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00E5C5] text-[#00E5C5] rounded-lg hover:bg-[#00E5C5] hover:text-[#0B1220] transition-all font-medium group"
                        >
                            View All Projects
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
