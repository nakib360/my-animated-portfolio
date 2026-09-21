import { RoughNotation } from "react-rough-notation";

const About = () => {
  return (
    <section className="flex w-full justify-center">
      <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        <RoughNotation
          type="underline"
          show={true}
          strokeWidth={3}
          animationDuration={800}
          iterations={2}
          color="#00ffcc"
          padding={2}
        >
          <span className="inline-block">About</span>
        </RoughNotation>
      </h2>
    </section>
  );
};

export default About;
