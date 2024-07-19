import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialsMobile = () => {
  return (
    <div className="flex flex-row w-full items-center justify-center space-x-2 pt-4">
      <a
        href="https://github.com/migodlcrz"
        target="_blank"
        className="tooltip tooltip-left cursor-pointer flex items-center justify-center border-[0.5px] text-xs border-gray-400 rounded-full p-2 w-8 h-8 lg:w-10 lg:h-10 bg-white text-black hover:bg-gray-700 hover:text-white transition-colors"
        data-tip="Github"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/lorenzo-miguel-dela-cruz-a95b14246/"
        target="_blank"
        className="tooltip tooltip-left cursor-pointer flex items-center justify-center border-[0.5px] text-xs border-gray-400 rounded-full p-2 w-8 h-8 lg:w-10 lg:h-10 bg-white text-black hover:bg-gray-700 hover:text-white transition-colors"
        data-tip="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://facebook.com/migodlcrz/"
        target="_blank"
        className="tooltip tooltip-left cursor-pointer flex items-center justify-center border-[0.5px] text-xs border-gray-400 rounded-full p-2 w-8 h-8 lg:w-10 lg:h-10 bg-white text-black hover:bg-gray-700 hover:text-white transition-colors"
        data-tip="Facebook"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialsMobile;
