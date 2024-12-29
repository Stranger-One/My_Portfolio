import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ExperienceCard = ({experience}) => {
    

  return (
    <div className="w-full flex gap-2 font-courgette group">
      <div className="w-10 flex flex-col items-center">
        <div className="progress-point w-4 h-4 rounded-full bg-primary"></div>
        <div className="progress-bar w-1 h-full bg-primary"></div>
      </div>
      <div className="experience-card w-full rounded-lg px-4 pb-2 shadow-md dark:shadow-secondary-light shadow-secondary-dark mb-4 md:group-hover:scale-[1.02] duration-150">
        <h3 className="text-2xl font-bold font-freeman tracking-wider text-primary underline">{experience?.role || "Frontend Developer Intern"}</h3>
        <p className="text-lg italic">{experience?.company || "Google"}</p>
        <p className="text-sm mt-1 mb-4">{experience?.duration || "may 26 - july 26"}</p>
        <ul className="list-disc ml-5 space-y-2">
          {experience?.description.map((point, index) => (
            <li key={index} className="leading-tight ">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
