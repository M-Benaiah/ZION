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

            {/* Dark Overlay matching HeroSection */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="container-max relative z-20">
                <div className="text-center mx-auto mb-16 text-white">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm">Our Services</span>
                    <h2 className="text-white mb-4 text-balance">Comprehensive Financial Solutions</h2>
                    <p className="mb-8 text-lg md:text-xl font-semibold text-gray-200 leading-tight max-w-5xl mx-auto">
                        From daily bookkeeping to strategic governance, we provide the complete financial support your organization needs to thrive.
                    </p>
                </div>

                {/* Display first 6 services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.slice(0, 6).map((item, i) => (
                        <div key={i} className="card group hover:border-white/50 hover:shadow-2xl hover:bg-white/20 transition-all duration-500 cursor-pointer backdrop-blur-md border border-white/20 bg-white/10 text-white">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 ease-out text-white">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-6">
                                Professional, compliant, and structured financial support tailored to your needs.
                            </p>
                            <div className="mt-auto pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <a href="/services" className="text-primary-300 font-bold text-sm hover:text-white flex items-center gap-2">
                                    Learn more <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA to scroll to full services section */}
                <div className="text-center">
                    <a href="/services" className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition inline-block">
                        Explore All Services
                    </a>
                </div>
            </div>
        </section>
    );
}
