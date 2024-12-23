import React, { useEffect, useState } from "react";
import { ProjectCard } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { getProjects } from "../services/ProjectService";

const ProjectsSection = ({ sectionId, ref }) => {
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [fullStack, setFullStack] = useState(false);
  const [showProjects, setShowProjects] = useState(6);
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState();

  const filtereProjects = async () => {

    const filter = [];
    if (frontend) filter.push("Frontend");
    if (backend) filter.push("Backend");
    if (fullStack) filter.push("FullStack");

    const response = await getProjects(filter);
    // console.log("response", response);
    setShowProjects(6);
    setAllProjects(response?.data);
  };

  useEffect(() => {
    filtereProjects();
  }, [frontend, backend, fullStack]);

  const handleLoadMore = () => {
    if (showProjects < allProjects.length) {
      setShowProjects((state) => state + 3);
    }
  };



  useEffect(() => {
    const projects = allProjects?.slice(0, showProjects);
    // console.log(showProjects, projects);
    setProjects(projects);
  }, [showProjects, allProjects]);

  useGSAP(() => {
    gsap.from(".project-heading", {
      scrollTrigger: {
        trigger: ".project-heading",
        start: "center 85%",
        end: "center 85%",
        scrub: 2,
        // markers: true,
      },
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(".project-grid", {
      scrollTrigger: {
        trigger: ".project-grid",
        start: "top 75%",
        end: "top 75%",
        scrub: 1,
        // markers: true,
      },
      duration: 1,
      opacity: 0,
    });

    // const cards = gsap.utils.toArray(".project-card");
    // cards.forEach((card) => {
    //   gsap.from(card, {
    //     scrollTrigger: {
    //       trigger: card,
    //       start: "center 85%",
    //       end: "center 85%",
    //       scrub: 1,
    //       markers: true,

    //     },
    //     duration: 1,
    //     x: 10,
    //     opacity: 0,
    //     ease: "power2.out",
    //   });
    // });
  }, {});

  return (
    <section ref={ref} id={sectionId} className="section">
      <div
        className="projects-section wfu
       bg-background-light dark:bg-background-dark px-5 md:px-20 pt-16 "
      >
        <div className="w-full mb-5 relative">
          <div className=" flex items-center justify-between w-full">
            <h2 className="project-heading text-3xl md:text-5xl font-bold  text-primary font-freeman  ">
              My Projects
            </h2>
            <button
              type="button"
              className="project-heading bg-background-light dark:bg-background-dark border-[1px] border-text-light dark:border-text-dark flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-lg relative group z-30 font-courgette "
            >
              <LuSettings2 size={20} />
              <span className="md:text-lg">filter</span>
              <IoIosArrowDown />

              <div className={`absolute top-10 right-0 pt-4 z-40 group-hover:block hidden `}>
                <div className="w-full h-full bg-background-light dark:bg-background-dark border-[1px] border-text-light dark:border-text-dark rounded-lg p-4">
                  <div className=" flex flex-nowrap items-center gap-2">
                    <input
                      type="checkbox"
                      id="forntend"
                      onChange={() => setFrontend((state) => !state)}
                      checked={frontend}
                      className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 rounded-full cursor-pointer"
                    />
                    <label
                      htmlFor="forntend"
                      className="text-lg cursor-pointer text-nowrap"
                    >
                      Frontend Projects
                    </label>
                  </div>
                  <div className=" flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="backend"
                      onChange={() => setBackend((state) => !state)}
                      checked={backend}
                      className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 rounded-full cursor-pointer"
                    />
                    <label htmlFor="backend" className="text-lg cursor-pointer text-nowrap">
                      Backend Projects
                    </label>
                  </div>
                  <div className=" flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="fullstack"
                      onChange={() => setFullStack((state) => !state)}
                      checked={fullStack}
                      className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 rounded-full cursor-pointer"
                    />
                    <label
                      htmlFor="fullstack"
                      className="text-lg cursor-pointer text-nowrap"
                    >
                      Full Stack Projects
                    </label>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <div key={index} className="project-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end items-center mt-10">
          <button
            type="button"
            onClick={handleLoadMore}
            className=" md:hover:underline duration-200 font-courgette"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
