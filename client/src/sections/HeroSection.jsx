import React from "react";
import SplitType from "split-type";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { DownloadResume, ScrollButton } from "../components";


const HeroSection = ({ sectionId, ref, handleScrollToSection }) => {

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
  

  return (
    <section ref={ref} id={sectionId} className="section h-[90vh] md:h-screen section-container flex items-center">
      <div className=" w-full h-fit flex flex-col-reverse md:flex-row items-center gap-10 relative ">
        <div className="w-full flex flex-col justify-center font-courgette">
          <div className="overflow-hidden w-fit">
            <h2 className="heading text-4xl md:text-6xl font-semibold mb-4 font-freeman cursor-none">
              Hi, I'm <span className="text-primary">Dola.</span>
            </h2>
          </div>

          <p className="tagline text-2xl md:text-3xl cursor-none md:w-[80%]  ">
            "Building seamless web solutions with the power of the MERN Stack."
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <DownloadResume className={' text-secondary-dark '} />
            <ScrollButton varient="outline" to="#contact" handleScrollToSection={handleScrollToSection}>Contact Me</ScrollButton>
          </div>

          <div className="flex gap-4 w-full mt-10">
            {mediaLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                target="_blank"
                className="mediaLink rounded-sm mediaLinksHoverShadow "
              >
                <link.icon size={30} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-30 md:h-[400px] flex items-center justify-center">
          <div
            className="profileCircle w-[200px] h-[200px] md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px] rounded-full animate-pulse"
            style={{
              boxShadow: "0 0 80px #007BFF",
            }}
          ></div>
          <div className="profileImage absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px] border-2 border-background-dark dark:border-background-light rounded-full overflow-hidden">
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
