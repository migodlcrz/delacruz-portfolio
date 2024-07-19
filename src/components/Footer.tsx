import { RefObject } from "react";
import profile from "../assets/profile.jpg";
import { FooterProps } from "../interfaces/ReferenceProps";

const Footer: React.FC<FooterProps> = ({
  homeRef,
  aboutRef,
  servicesRef,
  projectsRef,
}) => {
  const handleScroll = (
    ref: RefObject<HTMLDivElement>,
    offset: number = 96
  ) => {
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-full h-96 bg-black px-40 py-5">
      <div className="flex flex-col w-full h-full text-center items-center justify-center space-y-12">
        <div className="flex flex-col space-y-4">
          <span className="text-beige text-xl gideon">Have an idea?</span>
          <span className="text-beige text-5xl poppins-bold">
            Let's talk with me
          </span>
        </div>
        <button className="bg-beige px-5 py-2 rounded-full">
          <span className="text-black poppins">Contact Me</span>
        </button>
      </div>
      <div className="flex flex-row w-full px-18 justify-between">
        <div className="flex flex-row space-x-10 items-center justify-center">
          <div className="flex flex-row space-x-3 items-center justify-center">
            <img src={profile} alt="" className="h-8 w-8 rounded-xl" />
            <span className="text-beige poppins-bold">LMDC</span>
          </div>
          <span className="text-beige poppins">Software Engineer</span>
        </div>
        <div className="flex flex-row justify-between space-x-36">
          <button
            onClick={() => handleScroll(homeRef)}
            className="text-beige poppins"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll(aboutRef)}
            className="text-beige poppins"
          >
            About Me
          </button>
          <button
            onClick={() => handleScroll(servicesRef)}
            className="text-beige poppins"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll(projectsRef)}
            className="text-beige poppins"
          >
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
