import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { AchievementsSection } from "../components/Acheivements";

export const Home = () => {
    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden transition-colors duration-500">
            <StarBackground />

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <AchievementsSection />
                <ContactSection />
            </main>


        </div>
    );
};
