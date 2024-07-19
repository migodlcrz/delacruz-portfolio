import React from "react";
import { ServiceProps } from "../interfaces/ServiceProps";

const ServiceTag: React.FC<ServiceProps> = ({
  icon,
  title,
  description,
  tools,
}) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex flex-row w-1/2 items-center space-x-4">
          <div className="h-14 w-14 rounded-2xl bg-beige">
            <span className="flex items-center justify-center text-black w-full h-full text-3xl">
              {icon}
            </span>
          </div>
          <div className="flex flex-row space-y-1">
            <span className="text-black text-xl poppins-bold">{title}</span>
          </div>
        </div>
        <span className="text-gray-600 w-1/2">{description}</span>
      </div>
      <div className="w-full">
        <span className="text-black poppins-bold">Tools: </span>
        <span className="text-gray-600 poppins">{tools}</span>
      </div>
    </div>
  );
};

export default ServiceTag;
