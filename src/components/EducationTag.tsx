import React from "react";
import { EducationProps } from "../interfaces/EducationProps";

const CertificationTag: React.FC<EducationProps> = ({
  school,
  course,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-xl lg:rounded-2xl bg-white"></div>
      <div className="flex flex-col w-5/6 space-y-1">
        <span className="text-black text-sm lg:text-xl poppins-bold">
          {school}
        </span>
        <span className="text-black text-xs lg:text-sm">{course}</span>
        <span className="text-gray-600 text-sm poppins">
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
};

export default CertificationTag;
