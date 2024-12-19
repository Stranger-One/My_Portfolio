import gsap from "gsap";
import React from "react";

const ScrollButton = ({ children, varient = "outline", to = "", className }) => {

  const scrollToSection = (section) => {
    gsap.to(window, { duration: 1, scrollTo: section });
  };

  return (
    <button
      onClick={()=>scrollToSection(`#${to}`)}
      className={`actionButton flex gap-1 items-center justify-center px-4 py-2 bg-background-light dark:bg-background-dark rounded-lg shadow-background-dark dark:shadow-background-light hoverShadow cursor-pointer w-full md:w-fit ${
        varient === "outline"
          ? "bg-transparent border-[1px] border-primary"
          : "bg-primary"
      } ${className} `}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
