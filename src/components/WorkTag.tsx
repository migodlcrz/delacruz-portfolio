import React from "react";
import { WorkProps } from "../interfaces/WorkProps";

const WorkTag: React.FC<WorkProps> = ({
  position,
  company,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-xl lg:rounded-2xl bg-white"></div>
      <div className="flex flex-col space-y-1">
        <span className="text-black text-sm lg:text-xl poppins">
          {position} at
          <span className="font-bold"> {company}</span>
        </span>
        <span className="text-gray-600 text-xs lg:text-sm poppins">
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
};

export default WorkTag;
