import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesPreview() {
    return (
        <section className="relative z-0 overflow-hidden section-spacing">
            {/* Background Image */}
            <Image
                src="/images/serviceP-bg.jpg"
                alt="Services Background"
                fill
                className="object-cover z-0"
            />

            {/* Light Overlay for readability */}
            <div className="absolute inset-0 bg-white/90 z-10"></div>

            <div className="container-max relative z-20">
                <div className="text-center mx-auto mb-16">
                    <span className="inline-block px-3 py-5 rounded-full bg-primary-200 text-primary-1000 text-sm font-semibold mb-6">Our Services</span>
                    <h2 className="text-neutral-900 mb-4">Comprehensive Financial Solutions</h2>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-center leading-tight max-w-5xl mx-auto">
                        From daily bookkeeping to strategic governance, we provide the complete financial support your organization needs to thrive.
                    </p>
                </div>

                {/* Display first 6 services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.slice(0, 6).map((item, i) => (
                        <div key={i} className="card group hover:border-primary-500 hover:shadow-xl hover:bg-white/50 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                            <div className="text-5xl mb-4 group-hover:scale-118 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                {item.name}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed mb-4">
                                Professional, compliant, and structured financial support.
                            </p>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="/services" className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1">
                                    Learn more <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA to scroll to full services section */}
                <div className="text-center">
                    <a href="/services" className="btn-primary">
                        Explore All Services
                    </a>
                </div>
            </div>
        </section>
    );
}
