import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const skills = [
  { name: "HTML5 CSS3", proficiency: 85 },
  { name: "Tailwind CSS", proficiency: 90 },
  { name: "JavaScript", proficiency: 85 },
  { name: "React", proficiency: 95 },
  { name: "GSAP", proficiency: 75 },
  { name: "Node.js", proficiency: 90 },
  { name: "Express.js", proficiency: 80 },
  { name: "MongoDB", proficiency: 75 },
  { name: "Socket.io", proficiency: 60 },
  { name: "Cloudinary", proficiency: 65 },
];

const SkillBar = ({ name, proficiency, barRef, className }) => {
  return (
    <div className={` ${className}`}>
      <div className="flex justify-between text-xl  mb-2 overflow-hidden font-courgette">
        <span className="cursor-none skill-names">{name}</span>
        <span className="cursor-none skill-names">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-400 dark:bg-gray-700 h-6 rounded">
        <div
          ref={barRef}
          className="h-6 skillBarItem bg-primary rounded"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = ({ sectionId, ref }) => {

  useGSAP(() => {
    gsap.from(".skill-heading", {
      scrollTrigger: {
        trigger: ".skill-section",
        start: "top 50%",
        end: "top 50%",
        scrub: 1,
        // markers: true,
      },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.in",
      stagger: 0.5,
    });
    gsap.from(".skill-names", {
      scrollTrigger: {
        trigger: ".skill-section",
        start: "top 50%",
        end: "top 50%",
        scrub: 1,
        // markers: true,
      },
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.in",
    });
    gsap.from(".skillBarItem", {
      scrollTrigger: {
        trigger: ".skill-section",
        start: "top 50%",
        end: "top 50%",
        scrub: 1,
        // markers: true,
      },
      width: `0%`,
      duration: 2,
      delay: 0.3,
      ease: "power3.in",
      stagger: 0.1,
    });
  }, {});

  return (
    <section
      ref={ref}
      id={sectionId}
      className="section"
    >
      <div className="section-container skill-section w-full">
        <div className=" overflow-hidden">
          <h2 className="skill-heading text-3xl md:text-5xl font-bold  text-primary font-freeman cursor-none">
            My Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
