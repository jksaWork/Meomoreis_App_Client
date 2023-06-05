import React from "react";
import opps from "../assets/opps.svg";
function AppDenied() {
  return (
    <div className="w-full h-screen flex  bg-[#0f172a] text-white justify-center items-center">
      <div className="flex flex-col gap-4 justify-center  items-center">
        <img src={opps} className="w-[300px]" />
        <h2 className="text-2xl capitalize ">
          Opps We Don't Support Desktop yet !!
        </h2>
      </div>
    </div>
  );
}

export default AppDenied;
