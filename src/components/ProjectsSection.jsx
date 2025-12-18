const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "A personal portfolio website built to showcase my skills, projects, and experience. Features smooth scrolling, responsive design, dark mode, and a clean UI to provide a professional online presence.",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://portfolio-five-beryl-21.vercel.app/", // add live link
        githubUrl: "https://github.com/Manisha-Bhatta/portfolio", // add repo
    },
    {
        id: 2,
        title: "Quiz App",
        description:
            "A full-stack Quiz Application designed to provide an interactive learning experience. Users can attempt quizzes, receive instant feedback, and track scores in real time.",
        tags: ["React", "Spring Boot", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects, built with a focus on clean code,
                    performance, and user experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-card p-6 rounded-lg shadow-md card-hover"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
