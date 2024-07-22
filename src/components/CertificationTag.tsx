import React from "react";
import { CertificationProps } from "../interfaces/CertificationProps";

const CertificationTag: React.FC<CertificationProps> = ({
  icon,
  title,
  issuedBy,
  dateIssued,
}) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-xl lg:rounded-2xl bg-white">
        <span className="flex items-center justify-center text-black h-full w-full text-base lg:text-3xl">
          {icon}
        </span>
      </div>
      <div className="flex flex-col space-y-1 w-5/6">
        <span className="text-black text-sm lg:text-xl poppins">
          {title} issued by
          <span className="font-bold"> {issuedBy}</span>
        </span>
        <span className="text-black text-xs lg:text-sm poppins">
          {dateIssued}
        </span>
      </div>
    </div>
  );
};

export default CertificationTag;
