import { Award, ExternalLink } from "lucide-react";

const achievements = [
    {
        title: "Myntra HackerRamp 2025",
        issuer: "Myntra",
        year: "2025",
        link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/14d31b05-a16f-407e-a701-65aea5e26b5d.pdf",
    },
    {
        title: "TVS Credit EPIC-IT Challenge",
        issuer: "TVS",
        year: "2025",
        link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/5c321e8b-7019-4bda-9d10-e8232f4c5e2e.pdf",
    },
    {
        title: "Loreal Sustainability Challenge",
        issuer: "Loreal",
        year: "2025",
        link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/1411e231-c191-483d-9d41-5449be3b2de3.pdf",

    },
    {
        title: "FlipKart Runway",
        issuer: "Flipkart",
        year: "2025",
        link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/c262defc-4135-4ba0-878f-784da2796e44.pdf",
    },
];

export const AchievementsSection = () => {
    return (
        <section
            id="achievements"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 rounded-lg shadow-md card-hover flex items-start gap-4"
                        >
                            <div className="p-3 rounded-full bg-primary/10">
                                <Award className="h-6 w-6 text-primary" />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.issuer} • {item.year}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
                                >
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
