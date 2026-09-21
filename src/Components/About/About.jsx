import { RoughNotation } from "react-rough-notation";

const About = () => {
  const frontend = ["React", "Framer Motion", "Tailwind CSS", "Redux"];
  const backend = ["Node.js", "Express", "MongoDB", "JWT"];

  const columns = [
    { title: "Frontend", items: frontend },
    { title: "Backend", items: backend },
  ];

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
            <span className="inline-block">About</span>
          </RoughNotation>
        </h2>
      </section>

      <div className="flex flex-col items-start mt-10 w-full px-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
          <div className="flex items-center">
            <p>Skills</p>
            <hr className="flex-1 border-t border-gray-400 mx-4" />
          </div>
          <p>Web Development</p>
          <div></div>
        </div>

        <div className="h-8 w-px bg-gray-400 mx-auto" />

        <div className="relative grid grid-cols-2 w-full">
          <div className="absolute top-0 left-1/4 right-1/4 border-t border-gray-400" />

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-gray-400" />
                <p className="px-4 py-1 border border-gray-400 rounded">
                  {col.title}
                </p>
              </div>

              <div className="relative ml-[50%] flex flex-col pt-4 before:absolute before:left-0 before:top-0 before:h-4 before:w-px before:bg-gray-400">
                {col.items.map((item) => (
                  <div
                    key={item}
                    className="relative pl-8 py-3 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gray-400 last:before:h-1/2 after:absolute after:left-0 after:top-1/2 after:h-px after:w-6 after:bg-gray-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
