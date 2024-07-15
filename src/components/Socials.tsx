import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="absolute top-38 right-4 flex flex-col space-y-2 pt-4">
      <button className="flex items-center justify-center border-[0.5px] border-gray-400 rounded-full p-2 w-10 h-10 bg-white">
        <FaGithub />
      </button>
      <button className="flex items-center justify-center border-[0.5px] border-gray-400 rounded-full p-2 w-10 h-10 bg-white">
        <FaLinkedin />
      </button>
      <button className="flex items-center justify-center border-[0.5px] border-gray-400 rounded-full p-2 w-10 h-10 bg-white">
        <FaFacebook />
      </button>
    </div>
  );
};

export default Socials;
