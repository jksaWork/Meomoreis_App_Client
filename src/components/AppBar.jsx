import React from "react";
import { FcPlus } from "react-icons/fc";

function AppBar() {
  return (
    <div className="drop-shadow-xl shadow-xl  py-3 px-4 flex justify-between items-center bg-primary">
      <span className="text-2xl">Memories </span>
      <span>
        {" "}
        <FcPlus size={30} />
      </span>
    </div>
  );
}

export default AppBar;
