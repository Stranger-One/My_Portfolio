import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MouseFollower = ({ mouseFollowerSize }) => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const handleMouseMove = (e) => {
      //   console.log(e);
      const { width, height } = followerRef.current.getBoundingClientRect();
      gsap.to(follower, {
        x: e.pageX - width / 2,
        y: e.clientY + window.scrollY - height / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("scroll", handleMouseMove);
    
    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        // window.removeEventListener("scroll", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className={`${
        mouseFollowerSize === "big" ? "w-16 h-16" : "w-7 h-7"
      } rounded-full border-[1px] absolute top-0 left-0 z-20 pointer-events-none border-background-light bg-background-light mix-blend-difference hidden md:block `}
    ></div>
  );
};

export default MouseFollower;
