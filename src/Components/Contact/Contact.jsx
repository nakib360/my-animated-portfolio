
import { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { RoughNotation } from "react-rough-notation";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [toast, setToast] = useState({
        show: false,
        type: "",
        message: "",
    });

    // Check all fields in real time
    const isFormValid =
        formData.name.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
        formData.subject.trim() !== "" &&
        formData.message.trim() !== "";

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const showToast = (type, message) => {
        setToast({
            show: true,
            type,
            message,
        });

        setTimeout(() => {
            setToast((prev) => ({
                ...prev,
                show: false,
            }));
        }, 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid || isSubmitting) return;

        setIsSubmitting(true);

        const googleFormUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLSeU9yFFC9ksYE-tnNFKClv2rPWB6biRfVW9BxPlLCDkA-IXkA/formResponse";

        const data = new URLSearchParams();

        data.append("entry.1329136068", formData.name);
        data.append("entry.1188355088", formData.email);
        data.append("entry.2005891418", formData.subject);
        data.append("entry.1378365906", formData.message);

        try {
            await fetch(googleFormUrl, {
                method: "POST",
                mode: "no-cors",
                body: data,
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            showToast(
                "success",
                "Your message has been sent successfully."
            );
        } catch (error) {
            console.error("Form submission error:", error);

            showToast(
                "error",
                "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full px-5">
            {/* Toast */}
            <div
                className={`fixed right-5 top-5 z-50 w-[calc(100%-2.5rem)] max-w-sm transition-all duration-500 ${toast.show
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[120%] opacity-0"
                    }`}
            >
                <div
                    className={`flex items-center gap-3 rounded-xl border bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md ${toast.type === "success"
                        ? "border-green-200"
                        : "border-red-200"
                        }`}
                >
                    <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${toast.type === "success"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                    >
                        {toast.type === "success" ? (
                            <FiCheck className="text-lg" />
                        ) : (
                            <FiX className="text-lg" />
                        )}
                    </div>

                    <div className="min-w-0">
                        <p
                            className={`text-sm font-semibold ${toast.type === "success"
                                ? "text-green-700"
                                : "text-red-700"
                                }`}
                        >
                            {toast.type === "success"
                                ? "Message Sent"
                                : "Submission Failed"}
                        </p>

                        <p className="mt-0.5 text-xs leading-5 text-gray-600">
                            {toast.message}
                        </p>
                    </div>
                </div>
            </div>


            <section className="flex w-full justify-center">
                <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
                    <RoughNotation
                        type="underline"
                        show={true}
                        strokeWidth={3}
                        animationDuration={800}
                        iterations={2}
                        color="#7C3AED"
                        padding={-8}
                    >
                        <span className="inline-block">Contact</span>
                    </RoughNotation>
                </h2>
            </section>

            <div className="mx-auto mt-8 h-10 w-px bg-gray-400" />    

            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-gray-400 md:grid-cols-[0.8fr_1.2fr]">

                <div className="relative flex flex-col justify-between border-b border-gray-400 p-6 sm:p-8 md:border-b-0 md:border-r">

                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-purple-600">
                            Let's Connect
                        </p>

                        <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                            Have a project
                            <br />
                            <span className="text-purple-600">in mind?</span>
                        </h3>

                        <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                            Whether you have a project idea, a question, or just want to
                            say hello, feel free to send me a message.
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-6 sm:p-8"
                >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                        {/* Name */}
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Your Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                                className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-1">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                                className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

                        {/* Subject */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="subject"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Subject
                            </label>

                            <input
                                id="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Let's build something together"
                                required
                                className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me a little about your project..."
                                required
                                className="w-full resize-none rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end sm:col-span-2">
                            <button
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className={`group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition ${isFormValid && !isSubmitting
                                    ? "bg-purple-600 hover:bg-purple-700 active:scale-95"
                                    : "cursor-not-allowed bg-gray-400 opacity-70"
                                    }`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}

                                {!isSubmitting && (
                                    <span
                                        className={`transition-transform duration-200 ${isFormValid
                                            ? "group-hover:translate-x-1"
                                            : ""
                                            }`}
                                    >
                                        →
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
