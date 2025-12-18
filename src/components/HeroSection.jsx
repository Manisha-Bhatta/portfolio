import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">

                    <span className=" animate-fade-in">Hi, I'm </span>
                    <span className="text-primary animate-fade-in-delay-1">
                        {" "}
                        Manisha
                    </span>
                    <span className="text-gradient ml-2 animate-fade-in-delay-2">
                        {" "}
                        Bhatta
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I’m a Computer Science undergraduate with a strong passion for problem-solving, software development, and building meaningful digital experiences. I enjoy working at the intersection of logic and creativity—whether it’s solving DSA problems, developing interactive web applications, or exploring new technologies.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-colitems-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
        </div>
    </section>
}