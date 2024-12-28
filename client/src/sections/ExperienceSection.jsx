import React, { useEffect } from "react";
import { ExperienceCard } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = ({ sectionId, ref }) => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "June 2024 - Aug 2024",
      description: [
        "Developed responsive web pages using React and Tailwind CSS.",
        "Implemented dynamic components to improve user engagement by 30%.",
        "Collaborated with a team of 5 developers in Agile methodology.",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Innovatech",
      duration: "Sept 2024 - Present",
      description: [
        "Built full-stack applications with Node.js, Express, React, and MongoDB.",
        "Integrated RESTful APIs and optimized database queries for scalability.",
        "Led a feature development cycle, achieving 20% faster deployment times.",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Innovatech",
      duration: "Sept 2024 - Present",
      description: [
        "Built full-stack applications with Node.js, Express, React, and MongoDB.",
        "Integrated RESTful APIs and optimized database queries for scalability.",
        "Led a feature development cycle, achieving 20% faster deployment times.",
      ],
    },
  ];

  return (
    <section ref={ref} id={sectionId} className="section h-full">
      <div className="section-container ">
        <div className="w-full mb-5 flex items-center justify-between bg-background-light dark:bg-background-dark">
          <div className="experience-heading overflow-hidden w-full">
            <h2 className="text-3xl md:text-5xl font-bold  text-primary font-freeman cursor-none ">
              Work History
            </h2>
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" h-full">
            {experiences?.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
          <div className=" rounded-lg shadow-sm shadow-white w-full h-[calc(100vh-160px)] hidden md:block sticky top-28"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
