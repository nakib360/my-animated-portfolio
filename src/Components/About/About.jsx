
import { RoughNotation } from "react-rough-notation";

// Frontend
import HtmlLogo from "../../assets/HTML.png";
import JsLogo from "../../assets/JS.png";
import ReactLogo from "../../assets/react.svg";
import MotionLogo from "../../assets/motion.png";
import TailwindLogo from "../../assets/Tailwind_CSS.png";
import ViteLogo from "../../assets/vite.svg";

// Backend
import NodeLogo from "../../assets/Node.js.png";
import ExpressLogo from "../../assets/expressjs.svg";
import MongoLogo from "../../assets/mongodb.png";
import JwtLogo from "../../assets/JWT.webp";
import FirebaseLogo from "../../assets/Firebase.png";

// Version control
import githubIcon from "../../assets/github.png";
import gitIcon from "../../assets/git.png";

// Education
import BaitCampas from "../../assets/bait_campus.jpeg";
import BaitLogo from "../../assets/BatushSharaf.png";
import NesariaCampas from "../../assets/Nesaria_campus.jpeg";
import NesariaLogo from "../../assets/Nesaria.png";

const About = () => {
  const frontend = [
    { name: "HTML", icon: HtmlLogo },
    { name: "JavaScript", icon: JsLogo },
    { name: "React", icon: ReactLogo },
    { name: "Framer Motion", icon: MotionLogo },
    { name: "Tailwind CSS", icon: TailwindLogo },
    { name: "Vite", icon: ViteLogo },
  ];

  const backend = [
    { name: "Node.js", icon: NodeLogo },
    { name: "Express", icon: ExpressLogo },
    { name: "MongoDB", icon: MongoLogo },
    { name: "JWT", icon: JwtLogo },
    { name: "Firebase", icon: FirebaseLogo },
  ];

  const versionControl = [
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
  ];

  const columns = [
    { title: "Frontend", items: frontend },
    { title: "Backend", items: backend },
    { title: "Version Control", items: versionControl },
  ];

  const education = [
    {
      title: "SSC (Dakhil)",
      campas: NesariaCampas,
      logo: NesariaLogo,
      name: "Chattogram Nesaria Kamil (M.A) Madrasah, Chittagong",
    },
    {
      title: "HSC (Alim)",
      campas: BaitCampas,
      logo: BaitLogo,
      name: "Baitush Sharaf Ideal Kamil Madrasah, Chittagong",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* ================= About ================= */}
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

      {/* ================= Skills Tree ================= */}
      <div className="mt-10 w-full px-3 sm:px-5">
        {/* Root */}
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex min-w-0 items-center">
            <p className="shrink-0 rounded border border-gray-400 px-2 py-1 text-xs sm:px-4 sm:text-base">
              Skills
            </p>

            <hr className="min-w-2 flex-1 border-t border-gray-400 sm:min-w-4" />
          </div>

          <p className="shrink-0 rounded border border-gray-400 px-2 py-1 text-center text-xs sm:px-4 sm:text-base">
            Web Development
          </p>

          <div />
        </div>

        {/* Root vertical line */}
        <div className="mx-auto h-8 w-px bg-gray-400" />

        {/* Main branches */}
        <div className="relative grid w-full grid-cols-3">
          {/* Main horizontal line */}
          <div className="absolute top-0 left-[16.6667%] right-[16.6667%] border-t border-gray-400" />

          {columns.map((col, columnIndex) => {
            const isLastColumn = columnIndex === columns.length - 1;

            return (
              <div
                key={col.title}
                className="flex min-w-0 flex-col items-center"
              >
                {/* Branch vertical line */}
                <div className="h-8 w-px bg-gray-400" />

                {/* Branch title */}
                <p className="max-w-[95%] rounded border border-gray-400 px-1.5 py-1 text-center text-[10px] leading-tight sm:px-4 sm:text-sm md:text-base">
                  {col.title}
                </p>

                {/* ================= Items Tree ================= */}
                <div
                  className={
                    isLastColumn
                      ? `
                  /* Mobile: expand toward LEFT + stagger down */
                  relative
                  mr-[50%]
                  flex
                  w-[calc(100%-50%)]
                  min-w-0
                  flex-col
                  items-end
                  pt-8

                  before:absolute
                  before:right-0
                  before:top-0
                  before:h-8
                  before:w-px
                  before:bg-gray-400

                  /* Desktop: restore original RIGHT direction */
                  sm:mr-0
                  sm:ml-[45%]
                  sm:w-[calc(100%-45%)]
                  sm:items-start
                  sm:pt-4
                  sm:before:left-0
                  sm:before:right-auto
                  sm:before:h-4

                  md:ml-[50%]
                  md:mr-0
                  md:w-[calc(100%-50%)]
                `
                      : `
                  relative
                  ml-[50%]
                  flex
                  w-[calc(100%-50%)]
                  min-w-0
                  flex-col
                  pt-4

                  before:absolute
                  before:left-0
                  before:top-0
                  before:h-4
                  before:w-px
                  before:bg-gray-400

                  sm:ml-[45%]
                  sm:w-[calc(100%-45%)]

                  md:ml-[50%]
                  md:w-[calc(100%-50%)]
                `
                  }
                >
                  {col.items.map(({ name, icon }) => (
                    <div
                      key={name}
                      className={
                        isLastColumn
                          ? `
                      /* Mobile: connector is on RIGHT */
                      relative
                      flex
                      min-w-0
                      w-full
                      justify-end
                      py-2
                      pr-8

                      before:absolute
                      before:right-0
                      before:top-0
                      before:h-full
                      before:w-px
                      before:bg-gray-400

                      after:absolute
                      after:right-0
                      after:top-1/2
                      after:h-px
                      after:w-4
                      after:bg-gray-400

                      last:before:h-1/2

                      /* Desktop: original LEFT connector */
                      sm:justify-start
                      sm:pr-0
                      sm:pl-5

                      sm:before:left-0
                      sm:before:right-auto

                      sm:after:left-0
                      sm:after:right-auto

                      sm:pl-7
                      sm:after:w-6
                    `
                          : `
                      relative
                      min-w-0
                      py-2
                      pl-5

                      before:absolute
                      before:left-0
                      before:top-0
                      before:h-full
                      before:w-px
                      before:bg-gray-400

                      last:before:h-1/2

                      after:absolute
                      after:left-0
                      after:top-1/2
                      after:h-px
                      after:w-4
                      after:bg-gray-400

                      sm:pl-7
                      sm:after:w-6
                    `
                      }
                    >
                      <div
                        className={
                          isLastColumn
                            ? "flex w-max max-w-none flex-row-reverse items-center justify-end gap-1.5 pr-1 text-right sm:flex-row sm:justify-start sm:gap-2 sm:pr-0 sm:text-left"
                            : "flex w-max max-w-none items-center gap-1.5 sm:gap-2"
                        }
                      >
                        <img
                          src={icon}
                          alt={name}
                          className="h-4 w-4 shrink-0 object-contain sm:h-5 sm:w-5"
                        />

                        <span className="whitespace-nowrap text-[10px] leading-tight sm:text-sm">
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= Education Tree ================= */}
      <div className="mt-16 w-full px-3 sm:px-5">
        {/* Root */}
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex min-w-0 items-center">
            <p className="shrink-0 rounded border border-gray-400 px-2 py-1 text-xs sm:px-4 sm:text-base">
              Education
            </p>

            <hr className="min-w-2 flex-1 border-t border-gray-400 sm:min-w-4" />
          </div>

          <p className="shrink-0 rounded border border-gray-400 px-2 py-1 text-center text-xs sm:px-4 sm:text-base">
            Academic Background
          </p>

          <div />
        </div>

        {/* Root vertical line */}
        <div className="mx-auto h-8 w-px bg-gray-400" />

        {/* Education branches */}
        <div className="relative grid w-full grid-cols-2">
          {/* Main horizontal line */}
          <div className="absolute top-0 left-1/4 right-1/4 border-t border-gray-400" />

          {education.map((edu) => (
            <div
              key={edu.title}
              className="flex min-w-0 flex-col items-center px-1 sm:px-4"
            >
              {/* Branch vertical line */}
              <div className="h-8 w-px bg-gray-400" />

              {/* Education title */}
              <p className="max-w-full rounded border border-gray-400 px-2 py-1 text-center text-[10px] leading-tight sm:px-4 sm:text-sm md:text-base">
                {edu.title}
              </p>

              {/* Connector */}
              <div className="h-8 w-px bg-gray-400" />

              {/* Card */}
              <div className="flex h-full w-full max-w-[260px] flex-col overflow-hidden rounded-lg border border-gray-400 sm:max-w-xs">
                <img
                  src={edu.campas}
                  alt={edu.name}
                  className="h-24 w-full shrink-0 object-cover sm:h-32"
                />

                <div className="flex min-h-[58px] flex-1 items-center gap-2 p-2 sm:min-h-[68px] sm:gap-3 sm:p-3">
                  <img
                    src={edu.logo}
                    alt=""
                    className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
                  />

                  <span className="min-w-0 text-[10px] leading-tight sm:text-sm">
                    {edu.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
