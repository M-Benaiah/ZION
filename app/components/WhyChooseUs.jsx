export default function WhyChooseUs() {
    return (
        <section className="bg-gradient-to-b from-neutral-50 to-white section-spacing">
            <div className="container-max">
                <div className="text-center mb-16">
                    <h2 className="text-neutral-900 mb-4">Why Choose Us?</h2>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-center leading-tight max-w-5xl mx-auto">
                        Six reasons organizations partner with us for their financial needs.
                    </p>
                </div>

                {/* 6 Benefits in 3-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Rwanda-Based Expertise",
                            description:
                                "Deep understanding of Rwanda's regulatory environment, tax system, and business culture.",
                            emoji: "📍",
                        },
                        {
                            title: "Certified Professionals",
                            description:
                                "Team of qualified accountants and financial advisors with industry experience.",
                            emoji: "🏆",
                        },
                        {
                            title: "Sector Specialization",
                            description:
                                "Specialized experience serving nonprofits, churches, SMEs, and startups.",
                            emoji: "🎓",
                        },
                        {
                            title: "Affordable & Scalable",
                            description:
                                "Services tailored to your budget and growth stage without compromising quality.",
                            emoji: "💰",
                        },
                        {
                            title: "Responsive Support",
                            description:
                                "Dedicated client support team available to answer questions and provide guidance.",
                            emoji: "🤝",
                        },
                        {
                            title: "Strategic Guidance",
                            description:
                                "Beyond accounting—we provide insights and advice to help you grow and succeed.",
                            emoji: "💡",
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
        </section>
    );
}
