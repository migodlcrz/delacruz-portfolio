import React from "react";
import { InfoProps } from "../interfaces/InfoProps";

const InfoTag: React.FC<InfoProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col w-full">
      <span className="text-black gideon text-xl lg:text-3xl">{title}</span>
      <span className="text-gray-600 text-sm text-justify lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default InfoTag;
