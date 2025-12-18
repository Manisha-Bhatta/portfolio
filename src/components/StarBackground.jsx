import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        // regenerate on resize (important)
        window.addEventListener("resize", generateStars);
        return () => window.removeEventListener("resize", generateStars);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 5;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                length: Math.random() * 120 + 150, // long tail
                thickness: Math.random() * 2 + 2,  // rounded head
                x: Math.random() * 100,
                delay: Math.random() * 6 + "s",
                duration: Math.random() * 2 + 3 + "s",
                angle: Math.random() * 15 + 10, // 10°–25° tilt
            });
        }

        setMeteors(newMeteors);
    };



    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor-fall"
                    style={{
                        left: meteor.x + "%",
                        top: "-20%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.duration,
                        angle: 135 + Math.random() * 10 - 5,

                    }}
                >
                    <div
                        className="meteor meteor-real"
                        style={{
                            transform: `rotate(${meteor.angle}deg)`,
                        }}
                    >
                        {/* Head */}
                        <div
                            className="meteor-head"
                            style={{
                                width: meteor.thickness * 2 + "px",
                                height: meteor.thickness * 2 + "px",
                            }}
                        />

                        {/* Tail */}
                        <div
                            className="meteor-tail"
                            style={{
                                width: meteor.thickness + "px",
                                height: meteor.length + "px",

                            }}
                        />
                    </div>
                </div>
            ))}


        </div>
    );
};
