import React from "react";
import { Link } from "react-scroll";

const ScrollButton = ({ children, varient = "outline", to = "" }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className={`actionButton flex gap-1 items-center px-4 py-2 bg-background-light dark:bg-background-dark rounded-lg shadow-background-dark dark:shadow-background-light hoverShadow cursor-pointer ${
        varient === "outline"
          ? "bg-transparent border-[1px] border-primary"
          : "bg-primary"
      } `}
    >
      {children}
    </Link>
  );
};

export default ScrollButton;
