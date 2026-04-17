export default function WhyChooseUs() {
    return (
        <section className="bg-gradient-to-b from-neutral-50 to-white section-spacing">
            <div className="container-max">
                {/* Our Christian Foundation Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-neutral-900 mb-4">Our Christian Foundation</h2>
                        <p className="mb-6 text-lg md:text-l font-semibold text-primary-900 text-left leading-tight max-w-5xl mx-auto">
                            At Zion Financial Consultant, we believe that business is a ministry. We are guided by biblical principles such as:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
                        <div className="card bg-white p-8 border-l-4 border-primary-600 shadow-md">
                            <p className="text-lg italic text-neutral-700 mb-4">
                                &quot;Commit your work to the Lord, and your plans will be established.&quot;
                            </p>
                            <p className="font-bold text-primary-800">— Proverbs 16:3</p>
                        </div>
                        <div className="card bg-white p-8 border-l-4 border-primary-600 shadow-md">
                            <p className="text-lg italic text-neutral-700 mb-4">
                                &quot;Whatever you do, work at it with all your heart, as working for the Lord.&quot;
                            </p>
                            <p className="font-bold text-primary-800">— Colossians 3:23</p>
                        </div>
                    </div>

                    <p className="mb-6 text-lg md:text-l font-semibold text-primary-1000 text-left leading-tight max-w-5xl mx-auto">
                        We aim to reflect Christ in how we serve our clients, manage resources, and build relationships.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-neutral-900 mb-4">Why Choose Us</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {[
                            {
                                title: "Faith-Based Approach",
                                description: "Faith-based and values-driven approach",
                                emoji: "🕊️",
                            },
                            {
                                title: "Professional Team",
                                description: "Professional and experienced team",
                                emoji: "🏆",
                            },
                            {
                                title: "Excellence & Integrity",
                                description: "Commitment to excellence and integrity",
                                emoji: "💎",
                            },
                            {
                                title: "Tailored Solutions",
                                description: "Tailored solutions for each client",
                                emoji: "🎯",
                            },
                            {
                                title: "Trusted Partner",
                                description: "Trusted partner for sustainable growth",
                                emoji: "🌱",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="card group hover:border-primary-500 hover:shadow-xl hover:bg-primary-50 transition-all duration-300 text-center p-6"
                            >
                                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                                    {item.emoji}
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
