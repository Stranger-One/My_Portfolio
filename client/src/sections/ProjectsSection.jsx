import React, { useEffect, useState } from "react";
import { ProjectCard } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const ProjectsSection = ({ sectionId, ref }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [fullStack, setFullStack] = useState(false);
  const [showProjects, setShowProjects] = useState(6);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState();

  const allProjects = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/150",
      title: "E-Commerce Store",
      category: "Full Stack",
      description:
        "An e-commerce platform with a shopping cart, user authentication, and payment integration.",
      features: [
        "User authentication and role-based access control.",
        "Dynamic product catalog and search functionality.",
        "Integrated payment gateway and order tracking.",
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe"],
      githubLink: "https://github.com/username/ecommerce-store",
      liveLink: "https://ecommerce-live-demo.com",
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/150",
      title: "Portfolio Website",
      category: "Frontend",
      description:
        "A visually appealing portfolio to showcase personal projects and skills.",
      features: [
        "Responsive design for all devices.",
        "Smooth animations using Framer Motion.",
        "Contact form with email integration.",
      ],
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/username/portfolio",
      liveLink: "https://portfolio-live-demo.com",
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/150",
      title: "Chat Application",
      category: "Full Stack",
      description:
        "A real-time chat application with group chats and media sharing.",
      features: [
        "Real-time messaging with WebSocket.",
        "Media sharing including images and videos.",
        "User presence and online status indicators.",
      ],
      techStack: ["React.js", "Socket.IO", "Node.js", "MongoDB", "PeerJS"],
      githubLink: "https://github.com/username/chat-app",
      liveLink: "https://chatapp-live-demo.com",
    },
    {
      id: 4,
      thumbnail: "https://via.placeholder.com/150",
      title: "Weather App",
      category: "Frontend",
      description: "A weather forecast application using real-time API data.",
      features: [
        "Displays current weather and forecasts.",
        "Location-based weather retrieval.",
        "Dynamic background changes based on weather.",
      ],
      techStack: ["React.js", "Tailwind CSS", "OpenWeatherMap API"],
      githubLink: "https://github.com/username/weather-app",
      liveLink: "https://weather-live-demo.com",
    },
    {
      id: 5,
      thumbnail: "https://via.placeholder.com/150",
      title: "Task Manager",
      category: "Backend",
      description:
        "A backend for a task management system with user authentication.",
      features: [
        "JWT-based authentication.",
        "CRUD operations for tasks and projects.",
        "Role-based user permissions.",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/username/task-manager",
      liveLink: "https://taskmanager-live-demo.com",
    },
    {
      id: 6,
      thumbnail: "https://via.placeholder.com/150",
      title: "Blog Platform",
      category: "Full Stack",
      description: "A platform for users to create and share blog posts.",
      features: [
        "Rich text editor for writing blogs.",
        "User authentication and profile management.",
        "Comments and likes on blog posts.",
      ],
      techStack: ["Next.js", "Node.js", "MongoDB", "Quill.js"],
      githubLink: "https://github.com/username/blog-platform",
      liveLink: "https://blogplatform-live-demo.com",
    },
    {
      id: 7,
      thumbnail: "https://via.placeholder.com/150",
      title: "Fitness Tracker",
      category: "Frontend",
      description:
        "A fitness tracking app to log workouts and monitor progress.",
      features: [
        "Track workouts with visual graphs.",
        "Daily goals and progress tracker.",
        "Responsive and mobile-friendly design.",
      ],
      techStack: ["React.js", "Chart.js", "Tailwind CSS"],
      githubLink: "https://github.com/username/fitness-tracker",
      liveLink: "https://fitnesstracker-live-demo.com",
    },
    {
      id: 8,
      thumbnail: "https://via.placeholder.com/150",
      title: "Online Exam System",
      category: "Full Stack",
      description: "An online examination system for schools and colleges.",
      features: [
        "Admin panel to create and manage exams.",
        "Timer and auto-submit functionality.",
        "Detailed result analysis for students.",
      ],
      techStack: ["Angular", "Node.js", "MongoDB", "Socket.IO"],
      githubLink: "https://github.com/username/online-exam-system",
      liveLink: "https://exam-system-live-demo.com",
    },
    {
      id: 9,
      thumbnail: "https://via.placeholder.com/150",
      title: "Recipe App",
      category: "Frontend",
      description: "A recipe discovery app with search and filter features.",
      features: [
        "Search recipes by ingredients or name.",
        "Save favorite recipes to user profile.",
        "Responsive and user-friendly design.",
      ],
      techStack: ["Vue.js", "Tailwind CSS", "Spoonacular API"],
      githubLink: "https://github.com/username/recipe-app",
      liveLink: "https://recipeapp-live-demo.com",
    },
    {
      id: 10,
      thumbnail: "https://via.placeholder.com/150",
      title: "Expense Tracker",
      category: "Frontend",
      description: "A simple expense tracker with monthly reports.",
      features: [
        "Track income and expenses.",
        "Generate monthly and yearly reports.",
        "Customizable categories for tracking.",
      ],
      techStack: ["React.js", "Chart.js", "Bootstrap"],
      githubLink: "https://github.com/username/expense-tracker",
      liveLink: "https://expensetracker-live-demo.com",
    },
    {
      id: 11,
      thumbnail: "https://via.placeholder.com/150",
      title: "Event Management System",
      category: "Full Stack",
      description: "A system to manage events and bookings for users.",
      features: [
        "Event creation and ticket booking.",
        "User authentication and role management.",
        "Dynamic dashboard for admins.",
      ],
      techStack: ["React.js", "Node.js", "PostgreSQL"],
      githubLink: "https://github.com/username/event-management",
      liveLink: "https://eventmanagement-live-demo.com",
    },
    {
      id: 12,
      thumbnail: "https://via.placeholder.com/150",
      title: "Quiz App",
      category: "Frontend",
      description: "A quiz app with multiple categories and difficulty levels.",
      features: [
        "Randomized questions with options.",
        "Real-time score tracking.",
        "Category and difficulty level selection.",
      ],
      techStack: ["React.js", "Redux", "Tailwind CSS"],
      githubLink: "https://github.com/username/quiz-app",
      liveLink: "https://quizapp-live-demo.com",
    },
    {
      id: 13,
      thumbnail: "https://via.placeholder.com/150",
      title: "Travel Planner",
      category: "Full Stack",
      description:
        "A travel planning app with itinerary creation and budget management.",
      features: [
        "Dynamic itinerary creation.",
        "Budget estimation for trips.",
        "Integrated map for route planning.",
      ],
      techStack: ["React.js", "Node.js", "Leaflet", "MongoDB"],
      githubLink: "https://github.com/username/travel-planner",
      liveLink: "https://travelplanner-live-demo.com",
    },
    {
      id: 14,
      thumbnail: "https://via.placeholder.com/150",
      title: "Stock Tracker",
      category: "Frontend",
      description: "An app to track stock prices and market trends.",
      features: [
        "Real-time stock price updates.",
        "Graphical representation of trends.",
        "Customizable watchlists.",
      ],
      techStack: ["React.js", "Chart.js", "Alphavantage API"],
      githubLink: "https://github.com/username/stock-tracker",
      liveLink: "https://stocktracker-live-demo.com",
    },
    {
      id: 15,
      thumbnail: "https://via.placeholder.com/150",
      title: "Language Learning App",
      category: "Full Stack",
      description: "An app to learn new languages with gamified lessons.",
      features: [
        "Interactive lessons with quizzes.",
        "Progress tracking and rewards system.",
        "User community for practice.",
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "WebSocket"],
      githubLink: "https://github.com/username/language-learning-app",
      liveLink: "https://languagelearning-live-demo.com",
    },
    {
      id: 16,
      thumbnail: "https://via.placeholder.com/150",
      title: "Language Learning App",
      category: "Full Stack",
      description: "An app to learn new languages with gamified lessons.",
      features: [
        "Interactive lessons with quizzes.",
        "Progress tracking and rewards system.",
        "User community for practice.",
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "WebSocket"],
      githubLink: "https://github.com/username/language-learning-app",
      liveLink: "https://languagelearning-live-demo.com",
    },
  ];

  useEffect(() => {
    // console.log({
    //   frontend,
    //   backend,
    //   fullStack,
    // });

    const filter = [];
    if (frontend) filter.push("Frontend");
    if (backend) filter.push("Backend");
    if (fullStack) filter.push("Full Stack");

    const projects = allProjects.filter((project) =>
      filter.includes(project.category)
    );
    // console.log(projects);
    setShowProjects(6);
    setFilteredProjects(projects);
  }, [frontend, backend, fullStack]);

  const handleLoadMore = () => {
    if (filteredProjects && showProjects < filteredProjects.length) {
      setShowProjects((state) => state + 3);
    } else if (showProjects < allProjects.length) {
      setShowProjects((state) => state + 3);
    }
  };

  useEffect(() => {
    const projects =
      filteredProjects.length > 0
        ? filteredProjects.slice(0, showProjects)
        : allProjects.slice(0, showProjects);
    // console.log(showProjects, projects);
    setProjects(projects);
  }, [showProjects, filteredProjects]);

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
          <div className="overflow-hidden flex items-center justify-between w-full">
            <h2 className="project-heading text-3xl md:text-5xl font-bold  text-primary font-freeman  ">
              My Projects
            </h2>
            <button
              type="button"
              onClick={() => {
                setIsOpenFilter((state) => !state);
                console.log("click");
              }}
              className="project-heading bg-background-light dark:bg-background-dark border-[1px] border-text-light dark:border-text-dark flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-lg relative group z-30 font-courgette "
            >
              <LuSettings2 size={20} />
              <span className="md:text-lg">filter</span>
              <IoIosArrowDown />
            </button>
          </div>

          <div
            className={`absolute top-10 right-0 pt-4 z-40 ${
              isOpenFilter ? "block" : "hidden"
            }`}
          >
            <div className="w-full h-full bg-background-light dark:bg-background-dark border-[1px] border-text-light dark:border-text-dark rounded-lg p-4">
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  id="forntend"
                  onChange={() => setFrontend((state) => !state)}
                  checked={frontend}
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500 rounded-full cursor-pointer"
                />
                <label htmlFor="forntend" className="text-lg cursor-pointer">
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
                <label htmlFor="backend" className="text-lg cursor-pointer">
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
                <label htmlFor="fullstack" className="text-lg cursor-pointer">
                  Full Stack Projects
                </label>
              </div>
            </div>
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
