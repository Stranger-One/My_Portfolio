import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const ProjectCard = ({ project }) => {


  return (
    <div
      className="min-h-[250px] h-full project-card bg-white rounded-lg shadow-lg bg-cover bg-center relative group overflow-hidden border-[1px] border-text-light dark:border-text-dark dark:text-text-light text-text-dark font-courgette"
      style={{
        backgroundImage: `url(${project?.thumbnail || "/Stranger-One.png"})`,
      }}
    >
      <h3 className="absolute left-4 top-[97%] -translate-y-[100%] group-hover:-translate-y-[0%] group-hover:top-2 duration-200 z-10 text-2xl font-semibold text-primary hover:underline cursor-none line-clamp-1">
        {project.title}
      </h3>

      <div className="absolute bottom-0 w-full h-12 bg-background-light dark:bg-background-dark group-hover:opacity-0"></div>

      <div className="w-full h-full dark:bg-background-light bg-background-dark pt-10 opacity-0 group-hover:opacity-100 duration-200 p-4 flex flex-col gap-1 justify-between">
        <p className=" textAnimate line-clamp-2 leading-5 cursor-none opacity-0 delay-100 duration-300 group-hover:opacity-100">
          {project.description}
        </p>
        <ul className="text-sm w-full">
          {project?.features?.map((feature, index) => (
            <li key={index} className="textAnimate flex items-center gap-1 w-full line-clamp-1 cursor-none opacity-0 delay-200 duration-300 group-hover:opacity-100">
              <IoArrowForwardSharp /> {feature}
            </li>
          ))}
        </ul>
        <p className="textAnimate text-sm font-medium cursor-none opacity-0 delay-300 duration-300 group-hover:opacity-100 line-clamp-2">
          <strong>Tech Stack:</strong> {project?.techStack?.join(", ")}
        </p>
        <div className="flex gap-2 ">
          <a
            href={project?.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-primary rounded-md cursor-pointer relative z-30 opacity-0 delay-500 duration-200 group-hover:opacity-100"
          >
            GitHub
          </a>
          <a
            href={project?.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-primary rounded-md cursor-pointer relative z-30 opacity-0 delay-500 duration-200 group-hover:opacity-100"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
