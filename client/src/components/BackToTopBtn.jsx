import React, { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { Link } from "react-scroll";

const BackToTopBtn = () => {
  const [isOnTop, setIsOnTop] = useState(true);

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

  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      className={`${
        isOnTop ? "opacity-0 translate-y-20 " : "opacity-100 translate-y-0"
      } flex gap-1 items-center p-2  rounded-lg shadow-background-dark dark:shadow-background-light hoverShadow z-30 cursor-pointer bg-transparent border-[2px] border-primary fixed bottom-5 left-5 duration-150`}
    >
      <IoIosArrowUp size={28} />
    </Link>
  );
};

export default BackToTopBtn;
