import React from "react";
import { CertificationProps } from "../interfaces/CertificationProps";

const CertificationTag: React.FC<CertificationProps> = ({
  title,
  issuedBy,
  dateIssued,
}) => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="h-14 w-14 rounded-2xl bg-white"></div>
      <div className="flex flex-col space-y-1">
        <span className="text-black text-xl poppins">
          {title} issued by
          <span className="font-bold"> {issuedBy}</span>
        </span>
        <span className="text-gray-600 text-sm poppins">{dateIssued}</span>
      </div>
    </div>
  );
};

export default CertificationTag;
