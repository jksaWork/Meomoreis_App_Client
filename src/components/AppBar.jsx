import React from "react";
import { FcPlus, FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { openModalFun } from "../redux/actions/settings";

function AppBar() {
  const dis = useDispatch();
  return (
    <div className="drop-shadow-xl shadow-xl  py-3 px-4 flex justify-between items-center bg-primary">
      <span className="text-2xl">Memories </span>
      <span onClick={() => dis(openModalFun())} className="cursor-pointer">
        {" "}
        <FcPlus size={30} />
      </span>
    </div>
  );
}

export default AppBar;
