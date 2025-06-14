import { useState } from "react";
import { BiLoaderCircle, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { sendEmail } from "../services/emailService";
import toast from "react-hot-toast";

const ContactSection = ({ sectionId, ref }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log("Form submitted", formData);
    const response = await sendEmail(formData);

    if (response?.success) {
      toast.success("Email sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.success("Error sending email");
    }

    setLoading(false);
  };

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

  return (
    <section ref={ref} id={sectionId} className="section pb-10">
      <div className="section-container h-full w-full dark:bg-background-dark bg-background-light font-courgette grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="contact-left">
          <h2 className="text-3xl md:text-5xl font-bold  text-primary font-freeman tracking-wider cursor-none">
            Get in Touch
          </h2>
          <p className="text-lg">
            I'm always open to discussing new projects, creative ideas, or
            opportunities. Feel free to reach out!
          </p>
          <div className="space-y-2 mt-4">
            <div>
              <h3 className="text-xl font-freeman">Name</h3>
              <p className="text-lg">Dolamani Rohidas</p>
            </div>
            <div>
              <h3 className="text-lg font-freeman">Email</h3>
              <p className="text-lg">dolamanirohidas696@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-freeman">Permanent Address</h3>
              <p className="text-lg">
                Sambalpur, odisha, India <br /> 768228
              </p>
            </div>
            <div>
              <h3 className="text-lg font-freeman">Current Address</h3>
              <p className="text-lg">
                Bhubaneswar, odisha, India <br /> 752050
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full mt-10">
            {mediaLinks.map((link) => (
              <a
                aria-label={link.ariaLabel}
                key={link.id}
                href={link.path}
                target="_blank"
                className="mediaLink rounded-sm "
              >
                <link.icon size={30} className="  " />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right p-6 z-30 relative dark:bg-background-dark bg-background-light rounded-lg shadow-md shadow-secondary-dark dark:shadow-secondary-light">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium font-freeman"
              >
                Your Name
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-3 rounded-lg shadow-sm  bg-transparent border border-secondary-dark dark:border-secondary-light duration-150  "
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium font-freeman"
              >
                Your Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-3 rounded-lg shadow-sm  bg-transparent border border-secondary-dark dark:border-secondary-light duration-150 "
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium font-freeman"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                rows="4"
                required
                className="w-full mt-1 p-3 rounded-lg shadow-sm bg-transparent border border-secondary-dark dark:border-secondary-light duration-150 "
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary/80 text-text-dark text-lg p-3 rounded-lg shadow-lg hover:bg-primary transition"
            >
              {loading ? (
                <BiLoaderCircle
                  size={24}
                  className="text-text-light dark:text-text-dark mx-auto animate-spin"
                />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
