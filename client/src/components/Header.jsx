import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { GiHamburgerMenu } from "react-icons/gi";

gsap.registerPlugin(ScrollToPlugin);

const Header = ({ activeSection, isOnTop }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { id: 1, label: "Home", path: "#hero" },
    { id: 2, label: "About", path: "#about" },
    { id: 4, label: "Skills", path: "#skills" },
    { id: 3, label: "Projects", path: "#projects" },
    { id: 5, label: "Experience", path: "#experience" },
    { id: 6, label: "Contact", path: "#contact" },
  ];

  const scrollToSection = (section) => {
    gsap.to(window, { duration: 1, scrollTo: section });
  };

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

  const handleMenu = () => {
    if (!isMenuOpen) {
      gsap.from(".navLink", {
        opacity: 0,
        x: -10,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.1,
      });
    }
    setIsMenuOpen((menu) => !menu);
  };

  return (
    <header
      className={`header fixed top-0 flex items-center justify-between py-2 md:duration-300 z-50 w-full
        ${
          isOnTop
            ? " bg-secondary-light dark:bg-secondary-dark px-5 md:px-10 right-1/2 translate-x-1/2"
            : "md:translate-y-5 md:w-fit md:justify-center rounded-lg bg-secondary-light dark:bg-secondary-dark bg-secondary-light/30 dark:bg-secondary-dark/30 backdrop-blur-sm px-5 md:px-2 right-0 md:right-1/2 md:translate-x-1/2 "
        }
      `}
    >
      <div
        className={`${
          isOnTop ? "" : "md:hidden"
        } transition-opacity duration-100 ease-in-out`}
      >
        <h1 className="font-bold text-lg logo font-freeman">LOGO</h1>
      </div>

      <nav
        className={`${
          isMenuOpen ? "h-fit " : "h-[0px]"
        } bg-secondary-light dark:bg-secondary-dark md:h-fit transition-all duration-150 md:rounded-lg font-courgette mt-14 md:mt-0 md:w-fit  md:bg-transparent md:dark:bg-transparent absolute md:relative right-0 top-0 w-[100vw] md:p-0 overflow-hidden`}
      >
        <ul className="flex gap-2 flex-col p-4 md:p-0 md:flex-row items-center justify-between">
          {links.map((link) => (
            <li key={link.id} className="navLink w-full">
              <span
                onClick={() => {
                  scrollToSection(link.path);
                  setIsMenuOpen((menu) => !menu);
                }}
                className={`${
                  link.path === `#${activeSection}`
                    ? "bg-primary "
                    : "bg-background-light dark:bg-background-dark"
                } transition-all duration-150 px-4 py-2 inline-block rounded-md cursor-pointer w-full text-center hover:bg-primary hover:dark:bg-primary text-text-light dark:text-text-dark`}
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="themeButton flex gap-2">
        <button
          onClick={() => setDarkMode((mode) => !mode)}
          className={`${
            isOnTop ? "" : "md:hidden"
          } p-2 rounded shadow-background-dark dark:shadow-background-light md:hoverShadow transition-opacity duration-100 ease-in-out bg-background-light dark:bg-background-dark `}
        >
          {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </button>
        <button
          onClick={handleMenu}
          className={` p-2 rounded shadow-background-dark dark:shadow-background-light md:hoverShadow transition-opacity duration-100 ease-in-out md:hidden bg-background-light dark:bg-background-dark`}
        >
          <GiHamburgerMenu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
