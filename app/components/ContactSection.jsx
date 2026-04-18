"use client";

import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState({ loading: false, error: "", success: "" });

    function handleChange(e) {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ loading: true, error: "", success: "" });

        if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
            setStatus({ loading: false, error: "Please complete the required fields (name, email, subject, message).", success: "" });
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Submission failed");

            setForm({ name: "", email: "", subject: "", company: "", phone: "", service: "", message: "" });
            setStatus({ loading: false, error: "", success: "Message sent. We'll contact you shortly." });
        } catch (err) {
            setStatus({ loading: false, error: err.message || "Submission error", success: "" });
        }
    }

    return (
        <section id="contact" className="bg-white section-spacing">
            <div className="container-max">
                <div className="text-center mb-12">
                    <h2 className="text-neutral-900 mb-4">Get in Touch</h2>
                    <p className="mb-6 text-lg md:text-xl font-semibold text-primary-1000 text-center leading-tight max-w-5xl mx-auto">
                        Reach out to Zion Financial Consultant for professional accounting, auditing, taxation, and advisory services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info Card */}
                    <div className="bg-white p-6 rounded-xl border">
                        <h3 className="text-xl font-bold text-neutral-900">Zion Financial Consultant Ltd</h3>
                        <ul className="mt-6 space-y-4 text-neutral-700 text-base">
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📍</span>
                                <span><strong>Location:</strong> Kigali, Rwanda</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-xl">✉️</span>
                                <span>
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:zionfinanceconsultant@yahoo.com" className="text-primary-600 hover:underline">
                                        zionfinanceconsultant@yahoo.com
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <span>
                                    <strong>Phone:</strong>{" "}
                                    <a href="tel:+250788712930" className="text-primary-600 hover:underline">
                                        +250 788 712 930
                                    </a>
                                </span>
                            </li>
                        </ul>

                        <p className="mt-8 text-neutral-600 leading-relaxed">
                            Our team is ready to assist you with financial consulting, compliance, and governance solutions.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-xl border">
                        <h3 className="text-xl font-semibold text-neutral-900">Send a Message</h3>

                        <form className="mt-4" onSubmit={handleSubmit} noValidate>
                            {/* Error/Success Messages */}
                            {status.error && <div className="text-sm text-red-600 mb-2">{status.error}</div>}
                            {status.success && <div className="text-sm text-green-600 mb-2">{status.success}</div>}

                            {/* Full Name */}
                            <label className="block">
                                <span className="text-sm text-neutral-700">Full name *</span>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    type="text"
                                    className="mt-1 w-full border rounded-lg px-4 py-2 focus-ring"
                                    required
                                />
                            </label>

                            {/* Email */}
                            <label className="block mt-3">
                                <span className="text-sm text-neutral-700">Email address *</span>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="mt-1 w-full border rounded-lg px-4 py-2 focus-ring"
                                    required
                                />
                            </label>

                            {/* Subject */}
                            <label className="block mt-3">
                                <span className="text-sm text-neutral-700">Subject *</span>
                                <input
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    type="text"
                                    className="mt-1 w-full border rounded-lg px-4 py-2 focus-ring"
                                    required
                                />
                            </label>

                            {/* Company (Optional) */}
                            <label className="block mt-3">
                                <span className="text-sm text-neutral-700">Company (optional)</span>
                                <input
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    type="text"
                                    className="mt-1 w-full border rounded-lg px-4 py-2 focus-ring"
                                />
                            </label>

                            {/* Phone */}
                            <label className="block mt-3">
                                <span className="text-sm text-neutral-700">Phone Number</span>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    className="mt-1 w-full border rounded-lg px-4 py-2 focus-ring"
                                />
                            </label>

                            {/* Service Selection */}
                            <label className="block mt-3">
                                <span className="text-sm text-neutral-700">Service interested in (optional)</span>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="mt-1 w-full border rounded-lg px-4 py-2 focus-ring"
                                >
                                    <option value="">— Select a service —</option>
                                    <option value="HR Services">Human Resource (HR) Services</option>
                                    <option value="Financial Services">Financial Management Services</option>
                                    <option value="Business Support">Business Support Services</option>
                                </select>
                            </label>

                            {/* Message */}
                            <label className="block mt-3">
                                <span className="text-sm text-neutral-700">Message *</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 w-full border rounded-lg px-4 py-2 focus-ring"
                                    required
                                ></textarea>
                            </label>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status.loading}
                                className="mt-4 w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status.loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
