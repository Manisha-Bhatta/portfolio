import { Code } from "lucide-react"
import { User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Full Stack Developer
                    </h3>
                    <p className="text-muted-foreground">
                        I have 1+ year of continuous coding experience, working on academic and personal projects while actively strengthening my problem-solving skills. I have solved numerous DSA problems, built responsive web interfaces, and maintained strong academic results in Computer Science.
                    </p>
                    <p className="text-muted-foreground">
                        I am a Computer Science undergraduate and aspiring software engineer with a strong foundation in data structures, algorithms, and web development. As a fresher, I bring high energy, adaptability, and a genuine passion for learning and building. I enjoy solving complex problems, writing clean and efficient code, and turning ideas into functional applications. I am actively seeking an opportunity where I can contribute meaningfully, grow under mentorship, and continuously improve as an engineer while delivering real value to the team.
                    </p>

                    <div className="flex fel-col sm:flex-row gap-4 pt-4 justify-center">

                        <a
                            href="/Resume (3).pdf"
                            download
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                        <a
                            href="https://leetcode.com/u/manisha_bhatta_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cosmic-button"
                        >
                            LeetCode Profile
                        </a>


                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                                <p className="text-muted-foreground">
                                    I build scalable, responsive web applications using modern frontend and backend technologies. With strong problem-solving skills , I focus on writing clean, efficient code and delivering reliable, user-centric solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software Engineering Fundamentals</h4>
                                <p className="text-muted-foreground">
                                    Strong foundation in writing clean, maintainable code, understanding system flow, debugging effectively, and collaborating using Git and modern development workflows.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Data Structures and Problem Solving</h4>
                            <p className="text-muted-foreground">
                                Demonstrates strong analytical thinking, optimized coding practices, and interview readiness through consistent problem-solving and algorithmic understanding.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}