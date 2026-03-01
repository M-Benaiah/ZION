export default function CTASection() {
    return (
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-spacing relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container-max text-center relative z-10">
                <h2 className="text-white mb-4">Ready to Strengthen Your Organization?</h2>
                <p className="mb-6 text-white md:text-xl font-semibold text-center leading-tight max-w-5xl mx-auto">
                    Let&apos;s discuss how we can support your financial growth and compliance goals.
                </p>
                <a
                    href="#contact"
                    className="inline-block px-8 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
                >
                    Schedule a Consultation
                </a>
            </div>
        </section>
    );
}
