import React from "react";
import { FcPlus, FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { openModalFun } from "../redux/actions/settings";
import { avatar } from "../assets";
import {Link} from 'react-router-dom';

function AppBar() {
  const dis = useDispatch();
  const user = null;
  return (
    <div className="drop-shadow-xl shadow-xl  py-3 px-4 flex justify-between items-center bg-primary">
      <span className="text-2xl">Memories </span>
      {user ? (
        <span className="flex gap-3 items-center ">
          <span className="text-bold text-white"> Mohammed altigani</span>
          <span className="text-bold text-white ">
            <img src={avatar} className="w-[30px] h-[30px] rounded-full" />
          </span>
        </span>
      ) : (
        <span className="bg-secondary p-2 rounded-md px-4">
          <Link to='/login'>Sign In</Link>
        </span>
      )}
    </div>
  );
}
{
  /* <span onClick={() => dis(openModalFun())} className="cursor-pointer">
        {" "}
        <FcPlus size={30} />
      </span> */
}
export default AppBar;
