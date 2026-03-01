import ServicesSection from "../components/ServicesSection";

export const metadata = {
    title: "Our Services",
    description: "Comprehensive financial and accounting solutions tailored to your organization's unique needs and growth stage.",
};

export default function ServicesPage() {
    return (
        <main className="bg-white">
            <ServicesSection />
        </main>
    );
}
