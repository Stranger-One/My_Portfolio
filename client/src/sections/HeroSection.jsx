import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useEffect, useRef, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import SplitType from "split-type";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { DownloadResume, ScrollButton } from "../components";

gsap.registerPlugin(TextPlugin);

const HeroSection = ({ sectionId }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const textRef = useRef();

  const mediaLinks = [
    { id: "1", icon: FaGithubSquare, path: "https://github.com/Stranger-One" },
    {
      id: "2",
      icon: BiLogoLinkedinSquare,
      path: "https://linkedin.com/in/dolamanirohidas",
    },
    {
      id: "3",
      icon: FaFacebookSquare,
      path: "https://www.facebook.com/profile.php?id=100053458085134",
    },
  ];

  useGSAP(() => {
    const text = new SplitType(".tagline", { types: "words, chars" });
    // console.log(text.chars);

    // Words to highlight
    const wordsToHighlight = [
      "MERN",
    ];

    // Reapply highlight class
    const words = document.querySelectorAll(".tagline .word");
    words.forEach((word) => {
      wordsToHighlight.forEach((highlightWord) => {
        if (word.textContent.includes(highlightWord)) {
          word.classList.add("highlight");
        }
      });
    });

    const tl = gsap.timeline();
    tl.from(".heading", {
      y: 100,
      opacity: 0,
      delay: 2,
    });
    tl.from(
      text.chars,
      {
        y: 20,
        x: -20,
        opacity: 0,
        stagger: 0.01,
      },
      "t1"
    );

    tl.from(
      [".profileCircle", ".profileImage"],
      {
        duration: 1,
        scale: 0,
        stagger: 0.1,
      },
      "t1"
    );
    tl.from(
      ".actionButton",
      {
        opacity: 0,
        stagger: 0.01,
      },
      "t2"
    );
    tl.from(
      ".mediaLink",
      {
        opacity: 0,
        y: 10,
        delay: 0.2,
        stagger: 0.01,
      },
      "t2"
    );
  }, {});

  return (
    <section id={sectionId} className=" relative ">
      {/* <h1>HeroSection</h1> */}
      {/* {darkMode && <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <video muted autoPlay loop playsInline src="/videoplayback (1).mp4" className=' object-bottom w-full '></video>
      </div>} */}
      <div className="absolute top-0 left-0 pt-16 w-full h-full grid grid-cols-2 gap-2">
        <div className=" flex flex-col justify-center pl-20 font-courgette">
          <div className="overflow-hidden w-fit">
            <h2 className="heading text-6xl font-semibold mb-4 font-freeman cursor-none">
              Hi, I'm <span className="text-primary">Dola.</span>
            </h2>
          </div>
          <p className="tagline text-3xl cursor-none w-fit">
            "Building seamless web solutions with <br />
            the power of the MERN Stack"
          </p>

          <div className="mt-20 flex gap-4">
            <DownloadResume />
            <ScrollButton varient="outline" to="contact">Contact Me</ScrollButton>
          </div>

          <div className=" mt-10 flex gap-4 w-full ">
            {mediaLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                target="_blank"
                className="mediaLink rounded-sm mediaLinksHoverShadow "
              >
                <link.icon
                  size={30}
                  className="text-text-light dark:text-text-dark bg-transparent "
                />
              </a>
            ))}
          </div>
        </div>

        <div className=" relative z-30 ">
          <div
            className="profileCircle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full animate-pulse"
            style={{
              boxShadow: "0 0 80px #007BFF",
            }}
          ></div>
          <div className="profileImage absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-background-dark dark:border-background-light rounded-full overflow-hidden">
            <img
              src="/profile.png"
              alt=""
              className="object-cover "
              style={{}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
