import { useState } from "react";

import api from "../assets/tech_logos/api.svg";
import cloudinary from "../assets/tech_logos/cloudinary.svg";
import css from "../assets/tech_logos/css.svg";
import express from "../assets/tech_logos/express-js.svg";
import github from "../assets/tech_logos/github.svg";
import html from "../assets/tech_logos/html.svg";
import javascript from "../assets/tech_logos/javascript.svg";
import mongodb from "../assets/tech_logos/mongodb.svg";
import nodejs from "../assets/tech_logos/node-js.svg";
import npm from "../assets/tech_logos/npm.svg";
import react from "../assets/tech_logos/react.svg";
import redux from "../assets/tech_logos/redux.svg";
import tailwind from "../assets/tech_logos/tailwind-css.svg";
import webrtc from "../assets/tech_logos/webrtc.svg";
import socket from "../assets/tech_logos/socket.svg";
import typescript from "../assets/tech_logos/typescript.svg";
import nextjs from "../assets/tech_logos/nextjs.svg";

const techStacks = [
  html,
  css,
  javascript,
  typescript,
  react,
  nextjs,
  redux,
  tailwind,
  nodejs,
  express,
  mongodb,
  npm,
  github,
  cloudinary,
  webrtc,
  api,
  socket,
];

const TechStacks = () => {
  return (
    <div className="skill-container  relative rounded-xl p-6 flex flex-wrap w-full h-full justify-end gap-4 z-40 bg-background-light dark:bg-background-dark">
      {techStacks.map((tech, index) => (
        <img
          key={index}
          src={tech}
          alt="tech"
          className="w-20 cursor-pointer skillItem oscillate"
          style={{
          animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TechStacks;
