import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Code, Layers, Image as ImageIcon } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-[#94A3B8] bg-[#0B1220]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/#projects" className="text-[#00E5C5] hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-[#0B1220] text-[#F8FAFC]">
            <div className="container mx-auto px-6 max-w-6xl">
                <Link to="/#projects" className="inline-flex items-center text-[#00E5C5] hover:text-[#00E5C5]/80 mb-12 transition-colors font-medium">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Projects
                </Link>

                <header className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-3"
                            >
                                {project.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-[#00E5C5] font-mono"
                            >
                                {project.subtitle}
                            </motion.p>
                        </div>

                        <div className="flex gap-4">
                            {project.repoLink && project.repoLink !== '#' && (
                                <a href={project.repoLink} className="flex items-center gap-2 px-4 py-2 border border-[#94A3B8] text-[#F8FAFC] rounded hover:border-[#00E5C5] hover:text-[#00E5C5] transition-colors" title="View Source">
                                    <Github size={20} /> Source Code
                                </a>
                            )}
                            {project.liveLink && project.liveLink !== '#' && (
                                <a href={project.liveLink} className="flex items-center gap-2 px-4 py-2 bg-[#00E5C5] text-[#0B1220] rounded hover:bg-[#00E5C5]/90 transition-colors font-medium" title="Live Demo">
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-[#1E293B] text-[#94A3B8] rounded text-sm font-mono border border-[#334155]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Description */}
                        <section>
                            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-3">
                                <span className="text-[#00E5C5]">01.</span> Overview
                            </h3>
                            <p className="text-[#94A3B8] text-lg leading-relaxed whitespace-pre-line">
                                {project.description}
                            </p>
                        </section>

                        {/* Gallery */}
                        <section>
                            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-8 flex items-center gap-3">
                                <span className="text-[#00E5C5]">02.</span> Gallery
                            </h3>
                            {project.images && project.images.length > 0 ? (
                                <div className="space-y-8">
                                    {project.images.map((img, index) => (
                                        <div key={index} className="rounded-lg overflow-hidden border border-[#1E293B] bg-[#111827]">
                                            <img src={img.src} alt={img.alt} className="w-full h-auto" />
                                            {img.alt && (
                                                <div className="p-3 text-center text-[#94A3B8] text-sm italic bg-[#0B1220]">
                                                    {img.alt}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 bg-[#1E293B]/50 rounded border border-dashed border-[#334155] text-center text-[#94A3B8]">
                                    <p>No project screenshots available.</p>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-10">
                        <div className="bg-[#111827] p-8 rounded-lg border border-[#1E293B]">
                            <h3 className="text-lg font-bold text-[#F8FAFC] mb-6 flex items-center gap-2">
                                Key Features
                            </h3>
                            <ul className="space-y-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-[#94A3B8] text-sm">
                                        <span className="text-[#00E5C5] mr-3 mt-1.5 flex-shrink-0">▹</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
