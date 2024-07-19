import { RefObject, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/page-logo.png";
import Socials from "../components/Socials";
import { HeaderProps } from "../interfaces/ReferenceProps";
import SocialsMobile from "./SocialsMobile";

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
      <div className="flex flex-row w-full h-16 lg:h-24 p-4 lg:py-2 lg:px-24">
        <div className="flex flex-row w-1/2 justify-between items-center space-x-14">
          <img src={logo} alt="" className="w-auto h-8 lg:h-16" />
          <div className=" hidden lg:flex lg:flex-row w-full justify-between items-center poppins">
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
        <div className="hidden lg:flex flex-row w-1/2 justify-end items-center space-x-10">
          <div className="flex flex-col">
            <span className="text-gray-700 font-bold">Manila, Philippines</span>
            <span className="text-black">{time}</span>
          </div>
        </div>
        <div className="flex w-1/2 justify-end items-center lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-black">
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu flex flex-col bg-white z-[1] shadow-lg border-gray-500 w-52 p-4"
            >
              <div className="flex flex-col lg:hidden w-full justify-between items-start poppins space-y-6">
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
              <SocialsMobile />
              <div className="flex flex-col w-full pt-4 justify-center">
                <span className="text-gray-700 font-bold">
                  Manila, Philippines
                </span>
                <span className="text-black">{time}</span>
              </div>
            </ul>
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
