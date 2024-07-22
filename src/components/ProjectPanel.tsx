import { ProjectProps } from "../interfaces/ProjectProps";
import { MdArrowOutward } from "react-icons/md";
import sample from "../assets/sample.jpg";

const ProjectPanel: React.FC<ProjectProps> = ({
  icon,
  title,
  description,
  tools,
  photo1,
  photo2,
  link,
}) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-x-4 lg:items-center">
        <div className="flex flex-row w-full lg:w-1/2 items-center space-x-4">
          <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-2xl bg-white">
            <span className="flex items-center justify-center text-black w-full h-full text-base lg:text-3xl">
              {icon}
            </span>
          </div>
          <div className="flex flex-row items-start space-x-1">
            <span className="text-black text-sm lg:text-xl poppins-bold">
              {title}
            </span>
            <a
              href={link}
              target="_blank"
              className="tooltip text-gray-400 text-xl hover:text-black transition-colors duration-300 cursor-pointer"
              data-tip="See Work"
            >
              <MdArrowOutward />
            </a>
          </div>
        </div>
        <span className="flex flex-row text-gray-600 text-sm lg:text-base w-full lg:w-1/2">
          <span className="text-black">{description}</span>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-1/2 bg-white rounded-2xl h-52 lg:h-96 overflow-hidden p-2">
          <img
            src={photo1}
            alt="No Image Available"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-white rounded-2xl h-52 lg:h-96 overflow-hidden p-2">
          <img
            src={photo2}
            alt="No Image Available"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
      <div className="w-full">
        <span className="text-black text-sm lg:text-base poppins-bold">
          Tools:{" "}
        </span>
        <span className="text-gray-600 text-sm lg:text-base poppins">
          {tools}
        </span>
      </div>
    </div>
  );
};

export default ProjectPanel;
