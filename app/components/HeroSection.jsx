import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative z-0 min-h-screen flex items-center justify-center text-white"
        >
            {/* Background Image */}
            <Image
                src="/images/hero-bg.jpg"
                alt="Zion Financial Consulting Background"
                fill
                priority
                className="object-cover z-0"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Content */}
            <div className="container-max text-center relative z-20 px-6">

                <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                    Trusted Financial Consulting for Sustainable Organizations
                </h1>
                <div className="mb-6 inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white">
                        Serving God Through Excellence in Business
                    </p>
                </div>
                <p className="mb-8 text-lg md:text-xl font-semibold text-gray-200 text-left leading-tight max-w-5xl mx-auto">
                    Zion Financial Consultant provides professional accounting, auditing, taxation, and financial governance services to SMEs, churches, startups, and social impact organizations — helping them achieve transparency, compliance, and sustainable growth.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/#contact"
                        className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg"
                    >
                        Request Consultation
                    </a>

                    <a
                        href="/services"
                        className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
                    >
                        View Our Services
                    </a>
                </div>

            </div>
        </section>
    );
}