import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-[#A8B3C7] bg-[#080D18]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/projects" className="text-[#14F1D9] hover:underline inline-flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-28 pb-20 bg-[#080D18] text-[#F8FAFC]">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <Link to="/projects" className="inline-flex items-center text-[#14F1D9] hover:text-[#14F1D9]/80 mb-10 transition-colors font-medium">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Projects
                </Link>

                <header className="mb-12 rounded-2xl border border-[#243244] bg-[#0D1626]/70 p-7 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                        <div>
                            <Motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-3"
                            >
                                {project.title}
                            </Motion.h1>
                            <Motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-[#14F1D9] font-mono"
                            >
                                {project.subtitle}
                            </Motion.p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {project.repoLink && project.repoLink !== '#' && (
                                <a href={project.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 border border-[#243244] text-[#F8FAFC] rounded-lg hover:border-[#14F1D9] hover:text-[#14F1D9] transition-colors" title="View Source">
                                    <Github size={20} /> Source Code
                                </a>
                            )}
                            {project.liveLink && project.liveLink !== '#' && (
                                <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#14F1D9] text-[#07111F] rounded-lg hover:bg-[#14F1D9]/90 transition-colors font-bold" title="Live Demo">
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-[#07111F] text-[#A8B3C7] rounded text-sm font-mono border border-[#243244]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-14">
                        <section>
                            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-3">
                                <span className="text-[#14F1D9]">01.</span> Overview
                            </h3>
                            <p className="text-[#A8B3C7] text-lg leading-relaxed whitespace-pre-line">
                                {project.description}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-8 flex items-center gap-3">
                                <span className="text-[#14F1D9]">02.</span> Gallery
                            </h3>
                            {project.images && project.images.length > 0 ? (
                                <div className="space-y-8">
                                    {project.images.map((img) => (
                                        <div key={img.src} className="rounded-2xl overflow-hidden border border-[#243244] bg-[#0D1626]">
                                            <img src={img.src} alt={img.alt} className="w-full h-auto" />
                                            {img.alt && (
                                                <div className="p-3 text-center text-[#A8B3C7] text-sm italic bg-[#07111F]">
                                                    {img.alt}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 bg-[#0D1626]/70 rounded border border-dashed border-[#243244] text-center text-[#A8B3C7]">
                                    <p>No project screenshots available.</p>
                                </div>
                            )}
                        </section>
                    </div>

                    <aside>
                        <div className="bg-[#0D1626]/70 p-7 rounded-2xl border border-[#243244] lg:sticky lg:top-28">
                            <h3 className="text-lg font-bold text-[#F8FAFC] mb-6">Key Features</h3>
                            <ul className="space-y-4">
                                {project.features.map((feature) => (
                                    <li key={feature} className="flex items-start text-[#A8B3C7] text-sm">
                                        <CheckCircle2 className="text-[#14F1D9] mr-3 mt-0.5 flex-shrink-0" size={16} />
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

