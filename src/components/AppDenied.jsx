import React from "react";
import opps from "../assets/opps.svg";
function AppDenied({
  img = opps,
  mes = "Opps We Don't Support Desktop yet !!",
}) {
  return (
    <div className="w-full h-screen flex  bg-[#0f172a] text-white justify-center items-center">
      <div className="flex flex-col gap-4 justify-center  items-center">
        <img src={img} className="w-[300px]" />
        <h2 className="text-2xl capitalize ">{mes}</h2>
      </div>
    </div>
  );
}

export default AppDenied;
