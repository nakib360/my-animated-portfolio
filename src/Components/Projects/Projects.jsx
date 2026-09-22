import { RoughNotation } from "react-rough-notation";
import portfolio_project_1 from "../../assets/rafid-project-1.jpg"
import portfolio_project_2 from "../../assets/rafid-project-2.jpg"
import portfolio_project_3 from "../../assets/rafid-project-3.jpg"
import ProjectCardList from "./projectsCard";
import see_date from "../../assets/see date.jpg"
import NodeServer from "../../assets/node server.jpg"
import resize_photo_1 from "../../assets/resize_photo_1.jpg"
import resize_photo_2 from "../../assets/resize_photo_2.jpg"
import resize_photo_3 from "../../assets/resize_photo_3.jpg"

const Projects = () => {
    const projects = [
        { name: "Portfolio website", description: "A sleek, animated portfolio website built for graphic designers to showcase their creative work and personal brand. The site blends smooth motion design with a clean, gallery-style layout.", repo: "https://github.com/nakib360/S-M-Rafid-Ayman-s-Portfolio-2", images: [portfolio_project_1, portfolio_project_2, portfolio_project_3], live: "https://rafid-ayman.web.app/" },
        { name: "See Date", description: "See Date is a multi-calendar date viewer built for everyday use. It displays the current date across three calendar systems at once — Gregorian, Bengali (Bangla), and Hijri — so you never have to look them up separately.", repo: "https://github.com/nakib360/see-date", images: [see_date, see_date, see_date], live: "https://see-date.vercel.app/" },
        { name: "Node Server", description: "A production-ready Node.js/Express boilerplate that runs instantly out of the box — just clone, install dependencies, and start building.", repo: "https://github.com/nakib360/Node-Server", images: [NodeServer, NodeServer, NodeServer], live: "https://node-server-xi-ruby.vercel.app/" },
        { name: "Resize Picture", description: "A blazing-fast photo resizer that runs entirely in your browser, with zero latency and zero loading time. It lets you instantly adjust image dimensions (width/height) and quality without ever uploading your files to a server. Since everything is processed locally on your device, your photos stay completely private — nothing is stored, transmitted, or saved anywhere.", repo: "https://github.com/nakib360/resizephoto", images: [resize_photo_1, resize_photo_2, resize_photo_3], live: "https://resizephoto-two.vercel.app/" },
        // { name: "", description: "", repo: "", images: [], live: "" },
    ];
    return (
        <div className="px-20">
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