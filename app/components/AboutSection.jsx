export default function AboutSection() {
    return (
        <section id="about" className="bg-gradient-to-b from-white to-neutral-100 section-spacing">
            <div className="container-max">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-neutral-900 mb-4">About Zion Financial Consultant</h2>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-center leading-tight max-w-5xl mx-auto">
                        Dedicated to strengthening organizational financial health through professional, compliant, and ethical services.
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Mission Card */}
                    <div className="card group hover:shadow-xl transition-shadow">
                        <div className="text-5xl mb-6 text-primary-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-700">🎯</div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                            To provide exceptional financial consulting, accounting, and governance services that empower organizations in Rwanda to achieve sustainable growth, maintain compliance, and uphold ethical financial practices.
                        </p>
                        <p className="text-neutral-600">
                            We serve SMEs, churches, nonprofits, startups, and social impact organizations with tailored solutions designed for their unique needs.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="card group hover:shadow-xl transition-shadow">
                        <div className="text-5xl mb-6 text-primary-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-700">✨</div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                            To be Rwanda&apos;s trusted partner in financial excellence, recognized for combining professional expertise with deep understanding of organizational values, ethical governance, and sustainable impact.
                        </p>
                        <p className="text-neutral-600">
                            We envision a Rwanda where every organization has access to affordable, professional financial guidance that strengthens integrity and long-term success.
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-neutral-900 mb-4">Our Core Values</h2>
                        <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-center leading-tight max-w-5xl mx-auto">
                            The principles that guide every decision and engagement.
                        </p>
                    </div>

                    {/* Values Grid - 4 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Integrity",
                                description: "Honest, transparent, and ethical in all dealings",
                                emoji: "💎",
                            },
                            {
                                title: "Professionalism",
                                description: "Expert, knowledgeable, and accountable service",
                                emoji: "⭐",
                            },
                            {
                                title: "Compliance",
                                description: "Adherence to all Rwandan regulations and standards",
                                emoji: "✓",
                            },
                            {
                                title: "Client Focus",
                                description: "Customized solutions tailored to your needs",
                                emoji: "🎯",
                            },
                        ].map((value, idx) => (
                            <div key={idx} className="card group hover:border-primary-500 hover:shadow-xl hover:bg-primary-50 transition-all duration-300 text-center">
                                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">{value.emoji}</div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
