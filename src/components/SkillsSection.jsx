
const skills = [
    { name: "OS", level: 80, category: "CS fundamentals" },
    { name: "CN", level: 90, category: "CS fundamentals" },
    { name: "LLM", level: 85, category: "CS fundamentals" },
    { name: "DBMS", level: 65, category: "CS fundamentals" },
    { name: "HTML/CSS", level: 75, category: "frontend" },
    { name: "JavaScript", level: 60, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 40, category: "frontend" },

    { name: "STS", level: 70, category: "backend" },
    { name: "MySQL", level: 75, category: "backend" },
    { name: "VS Code", level: 55, category: "tools" },
    { name: "Git/GitHub", level: 65, category: "tools" },

]

export const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 rounded-lg shadow-md card-hover"
                        >
                            {/* Skill name */}
                            <h3 className="text-lg font-semibold mb-1">
                                {skill.name}
                            </h3>

                            {/* Category */}
                            <p className="text-sm text-muted-foreground mb-3">
                                {skill.category}
                            </p>

                            {/* Progress bar */}
                            <div className="w-full bg-muted rounded-full h-2 mb-2">
                                <div
                                    className="bg-primary h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>

                            {/* Percentage */}
                            <p className="text-sm font-medium text-primary">
                                Proficiency: {skill.level}%
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};