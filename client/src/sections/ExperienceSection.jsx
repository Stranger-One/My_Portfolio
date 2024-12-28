import React, { useEffect } from "react";
import { ExperienceCard } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../services/data.js";


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = ({ sectionId, ref }) => {


  return (
    <section ref={ref} id={sectionId} className="section h-full">
      <div className="section-container  grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full mb-5 bg-background-light dark:bg-background-dark">
          <div className="experience-heading overflow-hidden w-full">
            <h2 className="text-3xl md:text-5xl font-bold  text-primary font-freeman cursor-none ">
              Work History
            </h2>
          </div>
          <div className="mt-10 h-full">
            {experiences?.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <div className=" rounded-lg w-full h-[calc(100vh-160px)] hidden md:block sticky top-28 z-30 bg-background-light dark:bg-background-dark">
            <img src="/screen.png" alt="" className="object-contain animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
