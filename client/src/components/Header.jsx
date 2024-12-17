import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-scroll";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOnTop, setIsOnTop] = useState(true);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const links = [
    { id: 1, label: "Home", path: "hero" },
    { id: 2, label: "About", path: "about" },
    { id: 3, label: "Projects", path: "projects" },
    { id: 4, label: "Skills", path: "skills" },
    { id: 5, label: "Experience", path: "experience" },
    { id: 6, label: "Contact", path: "contact" },
  ];
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const handleScroll = () => {
    // console.log((window.scrollY).toFixed(0))
    if (window.scrollY.toFixed(0) > 50) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from([".themeButton", ".logo"], {
      opacity: 0,
      y: -10,
      duration: 0.5,
      delay: 1,
    });
    tl.from(".navLink", {
      opacity: 0,
      x: -10,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.1,
    });
  }, {});

  return (
    <header
      className={`header py-2 fixed  flex items-center top-0 left-1/2 -translate-x-1/2 transition-all duration-100 ease-in-out z-50 ${
        isOnTop
          ? "w-full justify-between bg-secondary-light dark:bg-secondary-dark px-10"
          : "translate-y-5 w-fit justify-center rounded-lg bg-secondary-light/30 dark:bg-secondary-dark/30 backdrop-blur-sm px-2"
      }`}
    >
      <div
        className={`${
          isOnTop ? "" : "hidden"
        } transition-opacity duration-100 ease-in-out`}
      >
        <h1 className="font-bold text-lg logo font-freeman">LOGO</h1>
      </div>
      <nav className="p-2 rounded-lg font-courgette">
        <ul className="flex gap-2 items-center justify-between">
          {links.map((link) => (
            <li key={link.id} className="navLink ">
              <Link
                to={link.path}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onSetActive={() => handleSetActive(link.path)}
                className={`${
                  link.path === activeLink
                    ? "bg-primary "
                    : "bg-background-light dark:bg-background-dark"
                } transition-all duration-100 px-4 py-2 rounded-md cursor-pointer shadow-background-dark dark:shadow-background-light hoverShadow`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="themeButton">
        <button
          onClick={() => setDarkMode((mode) => !mode)}
          className={`${
            isOnTop ? "" : "hidden"
          } p-2 rounded shadow-background-dark dark:shadow-background-light hoverShadow transition-opacity duration-100 ease-in-out bg-background-light dark:bg-background-dark `}
        >
          {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
