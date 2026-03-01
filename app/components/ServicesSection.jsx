import { services } from "@/data/services";

export default function ServicesSection() {
    return (
        <section id="services" className="section-spacing">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-neutral-900 mb-4">Our Professional Services</h2>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-center leading-tight max-w-5xl mx-auto">
                        Comprehensive financial and accounting solutions tailored to your organization&apos;s unique needs and growth stage.
                    </p>
                </div>

                {/* Services Grid - 3 columns, all 11 services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="card group hover:border-primary-500 hover:shadow-xl hover:bg-primary-50 transition-all duration-300 cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4 group-hover:scale-120 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                {service.name}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Learn More Link - reveals on hover */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <a
                                    href="/#contact"
                                    className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1"
                                >
                                    Learn More <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
