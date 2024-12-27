import React, { useEffect } from "react";
import { ExperienceCard } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = ({
  sectionId,
  ref,
  showProjects,
  setShowProjects,
}) => {
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
  ];

  // useEffect(() => {
  //   // Function to kill existing ScrollTriggers for the cards
  //   const killScrollTriggers = () => {
  //     document.querySelectorAll(".experience-card").forEach((card) => {
  //       const trigger = ScrollTrigger.getById(card.id);
  //       if (trigger) trigger.kill();
  //     });
  //   };

  //   // Function to initialize animations
  //   const initAnimations = () => {
  //     const expCards = gsap.utils.toArray(".experience-card");
  //     expCards.forEach((card) => {
  //       gsap.from(card, {
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 70%",
  //           end: "top 70%",
  //           scrub: 0.5,
  //           markers: false, // Set to true for debugging
  //         },
  //         y: 20,
  //         opacity: 0,
  //         duration: 1,
  //         ease: "power2.in",
  //       });
  //     });
  //   };

  //   // Cleanup and reinitialize
  //   killScrollTriggers();
  //   initAnimations();

  //   // Refresh ScrollTrigger
  //   ScrollTrigger.refresh();

  //   // Cleanup on unmount
  //   return () => {
  //     killScrollTriggers();
  //   };
  // }, [showProjects]);

  useGSAP(() => {
    gsap.from(".experience-heading", {
      scrollTrigger: {
        trigger: ".experience-heading",
        start: "center 90%",
        end: "center 90%",
        scrub: 2,
        // markers: true,
      },
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });
  }, {});

  return (
    <section ref={ref} id={sectionId} className="section h-full p-5 md:p-20">
      <div className="w-full mb-5 flex items-center justify-between bg-background-light dark:bg-background-dark">
        <div className="overflow-hidden w-full">
          <h2 className="experience-heading text-3xl md:text-5xl font-bold  text-primary font-freeman cursor-none ">
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
        <div className="bg-green-600 w-full h-[calc(100vh-160px)] hidden md:block sticky top-28">
          {/* <img src="https://media.istockphoto.com/id/1342587548/vector/online-course-with-a-boy-sitting-on-the-desk.jpg?s=612x612&w=0&k=20&c=UZtAfMfCtHZND4W1Ial5s16bg7D9XXB-hN1GGj607Zc=" alt="" className='object-cover bg-blend-difference' /> */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
