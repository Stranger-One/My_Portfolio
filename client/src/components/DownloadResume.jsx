import { IoMdDownload } from "react-icons/io";

const DownloadResume = ({className}) => {
  return (
    <a
      href="DOLAMANI ROHIDAS - MERN STACK RESUME.pdf"
      download
      className={`actionButton group flex gap-1 items-center justify-center px-4 py-2 w-full md:w-fit text-text-light bg-primary rounded-lg shadow-background-dark dark:shadow-background-light hoverShadow z-40 relative ${className}`}
    >
      <IoMdDownload size={20} /> Download Resume
    </a>
  );
};

export default DownloadResume;
