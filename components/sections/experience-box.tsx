import React, { ReactNode } from "react";
import { formatDate } from "../../core/utils";
const TimeDiff = require("js-time-diff");

interface ExperienceBoxProps {
  companyName: string;
  fromDate: Date;
  details: ReactNode;
  active?: boolean;
  toDate: Date;
}
const ExperienceBox: React.FC<ExperienceBoxProps> = ({
  companyName,
  fromDate,
  toDate,
  details,
  active,
  children,
}) => {
  return (
    <div className="avoid-page-break">
      <h4 className="my-1 font-medium text-lg">{companyName}</h4>
      <div className="text-gray-600 text-sm">
        <div className="mb-4">
          {formatDate(fromDate)} - {active ? "Present" : formatDate(toDate)} •{" "}
          {TimeDiff(fromDate, toDate).replace("ago", "").replace("after", "")}
        </div>
        <p className="mb-4">{details}</p>
        {children}
      </div>
    </div>
  );
};

export default ExperienceBox;
