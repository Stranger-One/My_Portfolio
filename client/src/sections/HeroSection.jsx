import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from "split-type";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { DownloadResume, ScrollButton } from "../components";

gsap.registerPlugin(TextPlugin);

const HeroSection = ({ sectionId, ref }) => {
  const mediaLinks = [
    {
      id: "1",
      icon: FaGithubSquare,
      path: "https://github.com/Stranger-One",
      ariaLabel: "GitHub",
    },
    {
      id: "2",
      icon: BiLogoLinkedinSquare,
      path: "https://linkedin.com/in/dolamanirohidas",
      ariaLabel: "LinkedIn",
    },
    {
      id: "3",
      icon: FaFacebookSquare,
      path: "https://www.facebook.com/profile.php?id=100053458085134",
      ariaLabel: "Facebook",
    },
  ];

  useGSAP(() => {
    const text = new SplitType(".tagline", { types: "words, chars" });
    // console.log(text.chars);

    // Words to highlight
    const wordsToHighlight = ["MERN", "freelance"];

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
    tl.from([".profileCircle", ".profileImage"], {
      duration: 1,
      scale: 0,
      stagger: 0.1,
      delay: 1,
    });

    gsap.from(".heading", {
      y: 100,
      opacity: 0,
      delay: 1,
    });

    gsap.from(text.chars, {
      opacity: 0,
      stagger: 0.01,
      delay: 1.2,
    });

    gsap.from(".actionButton", {
      opacity: 0,
      stagger: 0.01,
      delay: 1.4,
    });
    gsap.from(".mediaLink", {
      opacity: 0,
      x: -10,
      stagger: 0.1,
      delay: 1.6,
    });
  }, {});

  return (
    <section
      ref={ref}
      id={sectionId}
      className="section h-[90vh] md:h-screen section-container flex items-center"
    >
      <div className=" w-full h-fit flex flex-col-reverse md:flex-row items-center gap-10 relative ">
        <div className="w-full flex flex-col justify-center font-courgette space-y-10">
          <div className="overflow-hidden w-fit">
            <h2 className="heading text-4xl md:text-6xl font-semibold mb-4 font-freeman cursor-none">
              Hi, I'm <span className="text-primary">Dola.</span>
            </h2>
          </div>

          <p className="tagline text-2xl md:text-3xl cursor-none md:w-[80%]  ">
            "Building seamless web solutions with the power of the MERN Stack."
          </p>

          <p className="tagline text-2xl md:text-3xl cursor-none md:w-[80%]  ">
            "Available for freelance opportunities — let's build something
            awesome together!"
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <DownloadResume className={" text-secondary-dark "} />
            <ScrollButton varient="outline" to="contact">
              Contact Me
            </ScrollButton>
          </div>

          <div className="flex gap-4 w-full">
            {mediaLinks.map((link) => (
              <a
                aria-label={link.ariaLabel}
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
              fetchPriority="high"
              loading="eager"
              src="/profile.webp"
              alt="My-Profile-Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
