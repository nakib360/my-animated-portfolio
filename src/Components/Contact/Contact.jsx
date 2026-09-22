import { RoughNotation } from "react-rough-notation";

const Contact = () => {
    return (
        <div>
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
                        <span className="inline-block">Contact with me</span>
                    </RoughNotation>
                </h2>
            </section>
        </div>
    );
};

export default Contact;