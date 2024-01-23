import React from "react";
import FetchEmployee from "./FetchEmployee";

const EmployeeDetails = ({ employeeId }) => {
  return (
    <div className=" p-4 mt-4 border-solid border-2	border-slate-600 rounded-md	bg-slate-900">
      <FetchEmployee employeeId={employeeId} />
    </div>
  );
};

export default EmployeeDetails;
