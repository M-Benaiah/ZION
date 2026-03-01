export default function ValueProps() {
    return (
        <section className="bg-gradient-to-b from-white to-neutral-100 section-spacing">
            <div className="container-max">
                <div className="text-center mb-16">
                    <h2 className="text-neutral-900 mb-4">What Sets Us Apart</h2>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-center leading-tight max-w-5xl mx-auto">
                        Three core pillars define our approach to financial excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pillar 1: Compliance Focused */}
                    <div className="card group hover:border-primary-500 hover:shadow-xl hover:bg-primary-50 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-4 transition-transform duration-300 group-hover:bg-primary-200">
                            <span className="text-2xl transform transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-700">✓</span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Compliance Focused</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            Fully aligned with Rwandan regulations and professional standards ensuring your organization meets all requirements.
                        </p>
                    </div>

                    {/* Pillar 2: Ethical Governance */}
                    <div className="card group hover:border-primary-500 hover:shadow-xl hover:bg-primary-50 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-4 transition-transform duration-300 group-hover:bg-primary-200">
                            <span className="text-2xl transform transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-700">🏛️</span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Ethical Governance</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            Strong financial accountability guided by ethical principles and transparent practices that build trust.
                        </p>
                    </div>

                    {/* Pillar 3: Client-Centered */}
                    <div className="card group hover:border-primary-500 hover:shadow-xl hover:bg-primary-50 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 mb-4 transition-transform duration-300 group-hover:bg-primary-200">
                            <span className="text-2xl transform transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-700">👥</span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">Client-Centered</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            Tailored solutions designed specifically for each organization&apos;s unique size, sector, and financial goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
