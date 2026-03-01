export default function ProcessSection() {
    return (
        <section className="bg-neutral-50 section-spacing">
            <div className="container-max">
                <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Our Approach</h2>
                <div className="max-w-5xl mx-auto space-y-6">
                    {[
                        {
                            step: "01",
                            title: "Understand",
                            description: "We take time to understand your organization's goals, challenges, and regulatory requirements.",
                        },
                        {
                            step: "02",
                            title: "Plan",
                            description: "We develop customized financial strategies and solutions aligned with your objectives.",
                        },
                        {
                            step: "03",
                            title: "Implement",
                            description: "We execute solutions with precision, ensuring compliance and best practices.",
                        },
                        {
                            step: "04",
                            title: "Support",
                            description: "We provide ongoing support, reporting, and guidance to help you succeed.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-6 items-start">
                            <div className="w-16 h-16 bg-primary-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                                {item.step}
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
