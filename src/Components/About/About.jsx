import { RoughNotation } from "react-rough-notation";
import { motion } from "motion/react";

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

  /* =========================================================
     Motion Variants
  ========================================================= */

  const treeContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const horizontalLine = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: "easeInOut",
      },
    },
  };

  const verticalLine = {
    hidden: {
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const treeBox = {
    hidden: {
      opacity: 0,
      y: 8,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const toolText = {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const educationCard = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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

      {/* =========================================================
          ================= SKILLS TREE ==========================
      ========================================================= */}

      <motion.div
        className="mt-10 w-full px-3 sm:px-5"
        variants={treeContainer}
        initial="hidden"
        whileInView="visible"
        // viewport={{
        //   once: true,
        //   amount: 0.12,
        // }}
      >
        {/* ================= Root ================= */}
        <motion.div
          className="grid w-full grid-cols-[1fr_auto_1fr] items-center"
          variants={treeContainer}
        >
          <div className="flex min-w-0 items-center">
            {/* Skills */}
            <motion.p
              variants={treeBox}
              className="shrink-0 rounded border border-gray-400 px-2 py-1 text-xs sm:px-4 sm:text-base"
            >
              Skills
            </motion.p>

            {/* Root horizontal line */}
            <motion.div
              variants={horizontalLine}
              className="min-w-2 flex-1 origin-left border-t border-gray-400 sm:min-w-4"
            />
          </div>

          {/* Web Development */}
          <motion.p
            variants={treeBox}
            className="shrink-0 rounded border border-gray-400 px-2 py-1 text-center text-xs sm:px-4 sm:text-base"
          >
            Web Development
          </motion.p>

          <div />
        </motion.div>

        {/* ================= Root vertical line ================= */}
        <motion.div
          variants={verticalLine}
          className="mx-auto h-8 w-px origin-top bg-gray-400"
        />

        {/* ================= Main branches ================= */}
        <motion.div
          className="relative grid w-full grid-cols-3"
          variants={treeContainer}
        >
          {/* Main horizontal line */}
          <motion.div
            variants={horizontalLine}
            className="absolute top-0 left-[16.6667%] right-[16.6667%] origin-center border-t border-gray-400"
          />

          {columns.map((col, columnIndex) => {
            const isLastColumn =
              columnIndex === columns.length - 1;

            return (
              <motion.div
                key={col.title}
                variants={treeContainer}
                className="flex min-w-0 flex-col items-center"
              >
                {/* Branch vertical line */}
                <motion.div
                  variants={verticalLine}
                  className="h-8 w-px origin-top bg-gray-400"
                />

                {/* Branch title */}
                <motion.p
                  variants={treeBox}
                  className="max-w-[95%] rounded border border-gray-400 px-1.5 py-1 text-center text-[10px] leading-tight sm:px-4 sm:text-sm md:text-base"
                >
                  {col.title}
                </motion.p>

                {/* ================= Items Tree ================= */}
                <div
                  className={
                    isLastColumn
                      ? `
                        relative
                        mr-[50%]
                        flex
                        w-[50%]
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

                        sm:mr-0
                        sm:ml-[45%]
                        sm:w-[55%]
                        sm:items-start
                        sm:pt-4

                        sm:before:left-0
                        sm:before:right-auto
                        sm:before:h-4

                        md:ml-[50%]
                        md:mr-0
                        md:w-[50%]
                      `
                      : `
                        relative
                        ml-[50%]
                        flex
                        w-[50%]
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
                        sm:w-[55%]

                        md:ml-[50%]
                        md:w-[50%]
                      `
                  }
                >
                  {col.items.map(({ name, icon }, itemIndex) => {
                    const isLastItem =
                      itemIndex === col.items.length - 1;

                    const itemDelay = itemIndex * 0.55;

                    return (
                      <div
                        key={name}
                        className={
                          isLastColumn
                            ? `
                              relative
                              flex
                              min-w-0
                              w-full
                              justify-end
                              py-2
                              pr-8

                              sm:justify-start
                              sm:pr-0
                              sm:pl-7
                            `
                            : `
                              relative
                              min-w-0
                              py-2
                              pl-5

                              sm:pl-7
                            `
                        }
                      >
                        {/* Vertical connector */}
                        <motion.div
                          initial={{
                            scaleY: 0,
                            opacity: 0,
                          }}
                          whileInView={{
                            scaleY: 1,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: itemDelay,
                            ease: "easeInOut",
                          }}
                          // viewport={{
                          //   once: true,
                          //   amount: 0.1,
                          // }}
                          className={
                            isLastColumn
                              ? `
                                absolute
                                right-0
                                top-0
                                ${
                                  isLastItem
                                    ? "h-1/2"
                                    : "h-full"
                                }
                                w-px
                                origin-top
                                bg-gray-400

                                sm:left-0
                                sm:right-auto
                              `
                              : `
                                absolute
                                left-0
                                top-0
                                ${
                                  isLastItem
                                    ? "h-1/2"
                                    : "h-full"
                                }
                                w-px
                                origin-top
                                bg-gray-400
                              `
                          }
                        />

                        {/* Horizontal connector */}
                        <motion.div
                          initial={{
                            scaleX: 0,
                            opacity: 0,
                          }}
                          whileInView={{
                            scaleX: 1,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: itemDelay + 0.4,
                            ease: "easeOut",
                          }}
                          // viewport={{
                          //   once: true,
                          //   amount: 0.1,
                          // }}
                          className={
                            isLastColumn
                              ? `
                                absolute
                                right-0
                                top-1/2
                                h-px
                                w-4
                                origin-right
                                bg-gray-400

                                sm:left-0
                                sm:right-auto
                                sm:w-6
                                sm:origin-left
                              `
                              : `
                                absolute
                                left-0
                                top-1/2
                                h-px
                                w-4
                                origin-left
                                bg-gray-400

                                sm:w-6
                              `
                          }
                        />

                        {/* Tool */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: itemDelay + 0.7,
                            ease: "easeOut",
                          }}
                          // viewport={{
                          //   once: true,
                          //   amount: 0.1,
                          // }}
                          className={
                            isLastColumn
                              ? `
                                flex
                                w-max
                                max-w-none
                                flex-row-reverse
                                items-center
                                justify-end
                                gap-1.5
                                pr-1
                                text-right

                                sm:flex-row
                                sm:justify-start
                                sm:gap-2
                                sm:pr-0
                                sm:text-left
                              `
                              : `
                                flex
                                w-max
                                max-w-none
                                items-center
                                gap-1.5

                                sm:gap-2
                              `
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
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* =========================================================
          ================= EDUCATION TREE ========================
      ========================================================= */}

      <motion.div
        className="mt-16 w-full px-3 sm:px-5"
        variants={treeContainer}
        initial="hidden"
        whileInView="visible"
        // viewport={{
        //   once: true,
        //   amount: 0.12,
        // }}
      >
        {/* ================= Root ================= */}
        <motion.div
          className="grid w-full grid-cols-[1fr_auto_1fr] items-center"
          variants={treeContainer}
        >
          <div className="flex min-w-0 items-center">
            {/* Education */}
            <motion.p
              variants={treeBox}
              className="shrink-0 rounded border border-gray-400 px-2 py-1 text-xs sm:px-4 sm:text-base"
            >
              Education
            </motion.p>

            {/* Root horizontal line */}
            <motion.div
              variants={horizontalLine}
              className="min-w-2 flex-1 origin-left border-t border-gray-400 sm:min-w-4"
            />
          </div>

          {/* Academic Background */}
          <motion.p
            variants={treeBox}
            className="shrink-0 rounded border border-gray-400 px-2 py-1 text-center text-xs sm:px-4 sm:text-base"
          >
            Academic Background
          </motion.p>

          <div />
        </motion.div>

        {/* ================= Root vertical line ================= */}
        <motion.div
          variants={verticalLine}
          className="mx-auto h-8 w-px origin-top bg-gray-400"
        />

        {/* ================= Education branches ================= */}
        <motion.div
          className="relative grid w-full grid-cols-2"
          variants={treeContainer}
        >
          {/* Main horizontal line */}
          <motion.div
            variants={horizontalLine}
            className="absolute top-0 left-1/4 right-1/4 origin-center border-t border-gray-400"
          />

          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              variants={treeContainer}
              className="flex min-w-0 flex-col items-center px-1 sm:px-4"
            >
              {/* Branch vertical line */}
              <motion.div
                variants={verticalLine}
                className="h-8 w-px origin-top bg-gray-400"
              />

              {/* Education title */}
              <motion.p
                variants={treeBox}
                className="max-w-full rounded border border-gray-400 px-2 py-1 text-center text-[10px] leading-tight sm:px-4 sm:text-sm md:text-base"
              >
                {edu.title}
              </motion.p>

              {/* Connector */}
              <motion.div
                variants={verticalLine}
                // viewport={{
                //   once: true,
                //   amount: 0.1,
                // }}
                className="h-8 w-px origin-top bg-gray-400"
              />

              {/* Education card */}
              <motion.div
                variants={educationCard}
                // viewport={{
                //   once: true,
                //   amount: 0.1,
                // }}
                className="flex h-full w-full max-w-65 flex-col overflow-hidden rounded-lg border border-gray-400 sm:max-w-xs"
              >
                <img
                  src={edu.campas}
                  alt={edu.name}
                  className="h-24 w-full shrink-0 object-cover sm:h-32"
                />

                <div className="flex min-h-14.5 flex-1 items-center gap-2 p-2 sm:min-h-17 sm:gap-3 sm:p-3">
                  <img
                    src={edu.logo}
                    alt=""
                    className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
                  />

                  <span className="min-w-0 text-[10px] leading-tight sm:text-sm">
                    {edu.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;