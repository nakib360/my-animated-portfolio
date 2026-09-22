import { RoughNotation } from "react-rough-notation";
import portfolio_project_1 from "../../assets/rafid-project-1.jpg"
import portfolio_project_2 from "../../assets/rafid-project-2.jpg"
import portfolio_project_3 from "../../assets/rafid-project-3.jpg"
import ProjectCardList from "./projectsCard";
import see_date from "../../assets/see date.jpg"
import NodeServer from "../../assets/node server.jpg"

const Projects = () => {
    const projects = [
        { name: "Portfolio website", description: "it,s a portfolio website i made for graphics desighner S.M Rafid Ayman", repo: "https://github.com/nakib360/S-M-Rafid-Ayman-s-Portfolio-2", images: [portfolio_project_1, portfolio_project_2, portfolio_project_3], live: "https://rafid-ayman.web.app/" },
        { name: "See Date", description: "See Date is a multi-calendar date viewer built for everyday use. It displays the current date across three calendar systems at once — Gregorian, Bengali (Bangla), and Hijri — so you never have to look them up separately.", repo: "https://github.com/nakib360/see-date", images: [see_date, see_date, see_date], live: "https://see-date.vercel.app/" },
        { name: "Node Server", description: "A production-ready Node.js/Express boilerplate that runs instantly out of the box — just clone, install dependencies, and start building.", repo: "https://github.com/nakib360/Node-Server", images: [NodeServer, NodeServer, NodeServer], live: "https://node-server-xi-ruby.vercel.app/" },
        // { name: "", description: "", repo: "", images: [], live: "" },
    ];
    return (
        <div className="px-10">
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
                        <span className="inline-block">Projects</span>
                    </RoughNotation>
                </h2>
            </section>
            <ProjectCardList projects={projects} />
        </div>
    );
};

export default Projects;