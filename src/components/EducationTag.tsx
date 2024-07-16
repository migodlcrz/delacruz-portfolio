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
      <div className="h-14 w-14 rounded-2xl bg-white"></div>
      <div className="flex flex-col space-y-1">
        <span className="text-black text-xl poppins">{school}</span>
        <span className="text-black text-sm font-semibold">{course}</span>
        <span className="text-gray-600 text-sm poppins">
          {startDate} - {endDate}
        </span>
      </div>
    </div>
  );
};

export default CertificationTag;
