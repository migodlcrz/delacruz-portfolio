import { useState, useEffect, RefObject } from "react";
import logo from "../assets/page-logo.png";
import Socials from "../components/Socials";
import { HeaderProps } from "../interfaces/ReferenceProps";

const Header: React.FC<HeaderProps> = ({
  homeRef,
  aboutRef,
  servicesRef,
  projectsRef,
}) => {
  const [time, setTime] = useState("");

  const getManilaTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const manilaTime = new Intl.DateTimeFormat([], options).format(new Date());
    setTime(manilaTime);
  };

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

  useEffect(() => {
    getManilaTime();
    const intervalId = setInterval(getManilaTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white border-b-[0.5px]">
      <div className="flex flex-row w-full h-24 py-2 px-24">
        <div className="flex flex-row w-1/2 justify-between items-center space-x-14">
          <img src={logo} alt="" className="w-auto h-16" />
          <div className="flex flex-row w-full justify-between items-center poppins">
            <button
              onClick={() => handleScroll(homeRef)}
              className="text-black hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll(aboutRef)}
              className="text-black hover:text-gray-400 transition-colors duration-300"
            >
              About Me
            </button>
            <button
              onClick={() => handleScroll(servicesRef)}
              className="text-black hover:text-gray-400 transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => handleScroll(projectsRef)}
              className="text-black hover:text-gray-400 transition-colors duration-300"
            >
              Projects
            </button>
          </div>
        </div>
        <div className="flex flex-row w-1/2 justify-end items-center space-x-10">
          <div className="flex flex-col">
            <span className="text-gray-700">Manila, Philippines</span>
            <span className="text-black font-bold">{time}</span>
          </div>
        </div>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
