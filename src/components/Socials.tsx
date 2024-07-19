import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="absolute top-38 right-4 flex flex-col space-y-2 pt-4">
      <a
        href="https://github.com/migodlcrz"
        target="_blank"
        className="tooltip tooltip-left cursor-pointer flex items-center justify-center border-[0.5px] border-gray-400 rounded-full p-2 w-10 h-10 bg-white"
        data-tip="Github"
      >
        <span className="text-black">
          <FaGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/lorenzo-miguel-dela-cruz-a95b14246/"
        target="_blank"
        className="tooltip tooltip-left cursor-pointer flex items-center justify-center border-[0.5px] border-gray-400 rounded-full p-2 w-10 h-10 bg-white"
        data-tip="LinkedIn"
      >
        <span className="text-black">
          <FaLinkedin />
        </span>
      </a>
      <a
        href="https://facebook.com/migodlcrz/"
        target="_blank"
        className="tooltip tooltip-left cursor-pointer flex items-center justify-center border-[0.5px] border-gray-400 rounded-full p-2 w-10 h-10 bg-white"
        data-tip="Facebook"
      >
        <span className="text-black">
          <FaFacebook />
        </span>
      </a>
    </div>
  );
};

export default Socials;
