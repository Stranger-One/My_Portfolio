import React from "react";
import { motion } from "motion/react";

const ScrollButton = ({
  children,
  varient = "outline",
  to = "",
  className,
  handleScrollToSection,
}) => {
  return (
    <motion.button
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 2 }}
      onClick={() => handleScrollToSection(to)}
      className={`actionButton flex gap-1 items-center justify-center px-4 py-2 bg-background-light dark:bg-background-dark rounded-lg shadow-background-dark dark:shadow-background-light hoverShadow cursor-pointer w-full md:w-fit ${
        varient === "outline"
          ? "bg-transparent border-[1px] border-primary"
          : "bg-primary"
      } ${className} `}
    >
      {children}
    </motion.button>
  );
};

export default ScrollButton;
