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

//Education
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

  const columns = [
    { title: "Frontend", items: frontend },
    { title: "Backend", items: backend },
  ];

  const education = [
    { title: "SSC (Dakhil)", campas: NesariaCampas, logo: NesariaLogo, name: "Chattogram Nesaria Kamil (M.A) Madrasah, Chittagong" },
    { title: "HSC (Alim)", campas: BaitCampas, logo: BaitLogo, name: "Baitush Sharaf Ideal Kamil Madrasah, Chittagong" }
  ];

  // const certificate = {
  //   provider: "Programming Hero",
  //   course: "Complete Web Development Course With Jhankar Mahbub",
  //   image: BaitCampas,
  // };

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

      {/* ================= Skills ================= */}
      <div className="flex flex-col items-start mt-10 w-full px-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
          <div className="flex items-center">
            <p className="px-4 py-1 border border-gray-400 rounded">Skills</p>
            <hr className="flex-1 border-t border-gray-400" />
          </div>
          <p className="px-4 py-1 border border-gray-400 rounded">
            Web Development
          </p>
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
                {col.items.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="relative pl-8 py-3 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gray-400 last:before:h-1/2 after:absolute after:left-0 after:top-1/2 after:h-px after:w-6 after:bg-gray-400"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={icon}
                        alt={name}
                        className="h-5 w-5 object-contain"
                      />
                      <span>{name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Certification ================= */}
      {/* <div className="flex flex-col items-start mt-16 w-full px-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
          <div className="flex items-center">
            <p className="px-4 py-1 border border-gray-400 rounded">
              Certification
            </p>
            <hr className="flex-1 border-t border-gray-400" />
          </div>
          <p className="px-4 py-1 border border-gray-400 rounded">
            {certificate.provider}
          </p>
          <div></div>
        </div>

        <div className="h-8 w-px bg-gray-400 mx-auto" />

        <div className="mx-auto w-full max-w-md overflow-hidden rounded-lg border border-gray-400">
          <a href={certificate.image} target="_blank" rel="noreferrer">
            <img
              src={certificate.image}
              alt={certificate.course}
              className="w-full object-contain"
            />
          </a>
          <div className="p-3 text-center text-sm">{certificate.course}</div>
        </div>
      </div> */}

      {/* ================= Education ================= */}
      <div className="flex flex-col items-start mt-16 w-full px-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
          <div className="flex items-center">
            <p className="px-4 py-1 border border-gray-400 rounded">
              Education
            </p>
            <hr className="flex-1 border-t border-gray-400" />
          </div>
          <p className="px-4 py-1 border border-gray-400 rounded">
            Academic Background
          </p>
          <div></div>
        </div>

        <div className="h-8 w-px bg-gray-400 mx-auto" />

        <div className="relative grid grid-cols-2 w-full">
          <div className="absolute top-0 left-1/4 right-1/4 border-t border-gray-400" />

          {education.map((edu) => (
            <div key={edu.title} className="flex flex-col items-center px-4">
              <div className="h-8 w-px bg-gray-400" />
              <p className="px-4 py-1 border border-gray-400 rounded">
                {edu.title}
              </p>

              {/* নিচে নামা দাগ */}
              <div className="h-8 w-px bg-gray-400" />

              {/* Card */}
              <div className="w-full max-w-xs overflow-hidden rounded-lg border border-gray-400">
                <img
                  src={edu.campas}
                  alt={edu.name}
                  className="h-32 w-full object-cover"
                />
                <div className="flex items-center gap-3 p-3">
                  <img
                    src={edu.logo}
                    alt=""
                    className="h-10 w-10 shrink-0 object-contain"
                  />
                  <span className="text-sm">{edu.name}</span>
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