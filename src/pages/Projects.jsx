import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section className="py-24 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-100 mr-4">
                        <span className="text-teal-400 mr-2">/</span>Projects
                    </h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}
                            className="group bg-slate-800 rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-lg border border-slate-700 hover:border-teal-400/50"
                        >
                            <div className="h-48 overflow-hidden bg-slate-700 relative">
                                {project.images && project.images.length > 0 ? (
                                    <img
                                        src={project.images[0].src}
                                        alt={project.images[0].alt}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono">
                                        No Image
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-teal-400 text-sm font-mono mb-4">{project.subtitle}</p>
                                <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs text-slate-500 font-mono bg-slate-900 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-xs text-slate-500 font-mono bg-slate-900 px-2 py-1 rounded">
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
