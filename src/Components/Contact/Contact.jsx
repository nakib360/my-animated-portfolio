import { RoughNotation } from "react-rough-notation";

const Contact = () => {
    return (
        <section className="w-full px-5 py-20">
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

            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-gray-400 backdrop-blur-md md:grid-cols-[0.8fr_1.2fr]">

                <div className="relative flex flex-col justify-between border-b border-gray-400 p-6 sm:p-8 md:border-b-0 md:border-r">

                    {/* <div className="absolute right-0 top-12 hidden h-px w-8 bg-gray-400 md:block" /> */}

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

                    {/* <div className="mt-10 flex items-center gap-3 rounded-xl border border-gray-400 p-4">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-600" />
                        </span>

                        <div>
                            <p className="text-sm font-semibold text-gray-800">
                                Available for opportunities
                            </p>
                            <p className="text-xs text-gray-500">
                                Usually replies within 24 hours
                            </p>
                        </div>
                    </div> */}
                </div>

                <form className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

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
                                placeholder="John Doe"
                                className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

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
                                placeholder="john@example.com"
                                className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

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
                                placeholder="Let's build something together"
                                className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

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
                                placeholder="Tell me a little about your project..."
                                className="w-full resize-none rounded-lg border border-gray-400 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-600/10"
                            />
                        </div>

                        <div className="sm:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="group inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 active:scale-95"
                            >
                                Send Message

                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;