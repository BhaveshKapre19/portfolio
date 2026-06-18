import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section className="py-28 min-h-screen bg-[#080D18]">
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="flex items-center mb-12 pt-8">
                    <h2 className="text-3xl font-bold text-[#F8FAFC] mr-4">
                        <span className="text-[#14F1D9] mr-2">/</span>Projects
                    </h2>
                    <div className="h-px bg-[#243244] flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className="group rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-[#243244] bg-[#0D1626]/70 hover:border-[#14F1D9]/50"
                        >
                            <div className="h-48 overflow-hidden bg-[#111B2D] relative">
                                {project.images && project.images.length > 0 ? (
                                    <img
                                        src={project.images[0].src}
                                        alt={project.images[0].alt}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#A8B3C7] font-mono">
                                        No Image
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-[#07111F]/25 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#14F1D9] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[#14F1D9] text-sm font-mono mb-4">{project.subtitle}</p>
                                <p className="text-[#A8B3C7] text-sm line-clamp-3 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs text-[#A8B3C7] font-mono bg-[#07111F] border border-[#243244] px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-xs text-[#14F1D9] font-mono bg-[#07111F] border border-[#243244] px-2 py-1 rounded">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
