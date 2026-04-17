export default function AboutSection() {
    return (
        <section id="about" className="bg-sky-100 section-spacing">
            <div className="container-max">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-neutral-900 mb-4">About Zion Financial Consultant</h2>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-left leading-tight max-w-5xl mx-auto">
                        Zion Financial Consultant is a faith-based Christian company committed to delivering  professional Human Resource and Financial Management services with integrity,  excellence, and biblical values.</p>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-left leading-tight max-w-5xl mx-auto">We exist to support organizations, ministries, and businesses in achieving sustainable  growth while honouring God in their operations. Our approach combines professional  expertise with spiritual principles to create impactful and ethical business solutions.</p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Mission Card */}
                    <div className="card group hover:shadow-xl transition-shadow">
                        <div className="text-5xl mb-6 text-primary-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-700">🎯</div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-4">To provide high-quality HR and financial management services that empower  organizations, promote integrity, and reflect the values of the Kingdom of God.
                        </p>

                    </div>

                    {/* Vision Card */}
                    <div className="card group hover:shadow-xl transition-shadow">
                        <div className="text-5xl mb-6 text-primary-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-700">✨</div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                            To become a leading Christian consulting firm in Africa and beyond, transforming  businesses through faith-driven excellence and professional service.
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

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {[
                            {
                                title: "Integrity",
                                description: "We uphold honesty and transparency in all our work",
                                emoji: "💎",
                            },
                            {
                                title: "Excellence",
                                description: "We deliver high-quality and professional services",
                                emoji: "⭐",
                            },
                            {
                                title: "Stewardship",
                                description: "We manage resources responsibly as entrusted by God",
                                emoji: "🌱",
                            },
                            {
                                title: "Faith",
                                description: "We operate under Christian principles and biblical truth",
                                emoji: "📖",
                            },
                            {
                                title: "Service",
                                description: "We are committed to serving others with humility and dedication",
                                emoji: "🤝",
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
        </section >
    );
}
