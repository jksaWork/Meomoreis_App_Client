import React from "react";
import { FcPlus } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { openModalFun } from "../redux/actions/settings";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppBar() {
  const dis = useDispatch();
  return (
    <div className="drop-shadow-xl shadow-xl  py-3 px-4 flex justify-between items-center bg-primary">
      <span className="text-2xl">Memories </span>
      <span onClick={() => dis(openModalFun())} class="cursor-pointer">
        {" "}
        <FcPlus size={30} />
      </span>
    </div>
  );
}

export default AppBar;
