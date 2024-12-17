import React from "react";
import { IoMdDownload } from "react-icons/io";

const DownloadResume = () => {
  return (
    <a
      href="/DOLAMANI ROHIDAS Resume.pdf"
      download
      className="actionButton group flex gap-1 items-center px-4 py-2 bg-primary rounded-lg shadow-background-dark dark:shadow-background-light hoverShadow  z-40 relative"
    >
      <IoMdDownload size={20} /> Download Resume
    </a>
  );
};

export default DownloadResume;
