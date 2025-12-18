import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Send,
    GithubIcon,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        // Simulating API / Email request
        setTimeout(() => {
            console.log("Submitted Data:", formData);

            setLoading(false);
            setSuccess(true);

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities. Feel free to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* LEFT COLUMN */}
                    <div className="space-y-12">
                        {/* CONTACT INFO */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold">
                                Contact Information
                            </h3>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:manishabhatta11@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition"
                                    >
                                        manishabhatta11@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+919007196413"
                                        className="text-muted-foreground hover:text-primary transition"
                                    >
                                        (+91) 90071 96413
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">India</p>
                                </div>
                            </div>
                        </div>

                        {/* CONNECT WITH ME */}
                        <div>
                            <h4 className="text-lg font-medium mb-4">
                                Connect With Me
                            </h4>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/manisha-bhatta-653853300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                                >
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </a>

                                <a
                                    href="https://github.com/Manisha-Bhatta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                                >
                                    <GithubIcon className="h-6 w-6 text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — FORM */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6 text-center">
                            Send a Message
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I would like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    loading && "opacity-60 cursor-not-allowed"
                                )}
                            >
                                {loading ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>

                            {success && (
                                <p className="text-green-500 text-center text-sm mt-4">
                                    ✅ Message sent successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


