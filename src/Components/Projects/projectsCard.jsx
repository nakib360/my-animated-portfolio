import React, { useState } from "react";
import { MdLink } from "react-icons/md";
import { GoRepo } from "react-icons/go";

const ProjectCard = ({ project }) => {
    const { name, description, repo, live, images = [] } = project;
    const [hovered, setHovered] = useState(false);

    const fanConfig = [
        { rotate: 0, x: 0, y: 0, z: 30 }, // top (first image)
        { rotate: -10, x: -26, y: 10, z: 20 }, // middle-left
        { rotate: 10, x: 26, y: 14, z: 10 }, // back-right
    ];

    return (
        <div className="w-full  rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
            <div
                className="relative w-56 h-40 shrink-0"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {images.slice(0, 3).map((img, i) => {
                    const cfg = fanConfig[i] || fanConfig[fanConfig.length - 1];
                    const hoverSpread = hovered ? cfg.x * 1.6 : cfg.x;
                    const hoverRotate = hovered ? cfg.rotate * 1.3 : cfg.rotate;
                    return (
                        <img
                            key={i}
                            src={img}
                            alt={`${name} screenshot ${i + 1}`}
                            className="absolute top-1/2 left-1/2 w-44 h-32 object-cover rounded-lg border-2 border-neutral-700 shadow-xl transition-all duration-300 ease-out"
                            style={{
                                zIndex: cfg.z,
                                transform: `translate(-50%, -50%) translate(${hoverSpread}px, ${cfg.y}px) rotate(${hoverRotate}deg)`,
                            }}
                        />
                    );
                })}
            </div>

            <div className="flex-1 min-w-0 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-black">{name}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {description}
                </p>

                <div className="mt-5 flex items-center justify-center sm:justify-start gap-3">
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors"
                        >
                            <MdLink className="text-xl"/>
                            Live
                        </a>
                    )}
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-sm font-medium transition-colors"
                    >   
                        <GoRepo/>
                        Repo
                    </a>
                </div>
            </div>
        </div>
    );
};

const ProjectCardList = ({ projects }) => (
    <div className="flex flex-col gap-6 py-6">
        {projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
        ))}
    </div>
);

export default ProjectCardList;