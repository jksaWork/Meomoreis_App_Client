import React, { useEffect, useState } from "react";
import { FcPlus, FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { openModalFun } from "../redux/actions/settings";
import { avatar } from "../assets";
import { Link } from "react-router-dom";
import { Logout } from "../redux/actions/users";

const BarMenus = ({ dispatch }) => {
  return (
    <div className="fixed top-[50px]  rounded-md w-[200px] p-3 right-3  bg-card">
      <div className="relative z-[10000000]">
        <div className="w-full block p-1 hover:bg-gray-500"> My Profile </div>
        <div className="w-full block p-1 hover:bg-gray-500"> My Posts </div>
        <div
          onClick={() => dispatch(Logout())}
          className="w-full block p-1 hover:bg-gray-500 rounded-sm"
        >
          Logout
        </div>
      </div>
    </div>
  );
};
function AppBar() {
  // console.log(dispatch)
  const userstate = useSelector((state) => state.users);
  const { UserData } = userstate;
  const dispatch = useDispatch();
  const [ActiveBar, setActiveBar] = useState(false);
  const user = UserData[0];
  const OpenBars = () => {
    dispatch({ type: "RELATIVE_CLASS", payload: !ActiveBar });
    setActiveBar(!ActiveBar);
  };
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="drop-shadow-xl shadow-xl  py-3 px-4 flex justify-between items-center bg-primary">
      <span className="text-2xl">Memories </span>
      {user != null ? (
        <div
          onClick={OpenBars}
          className="flex gap-3 items-center relative cursor-pointer"
        >
          <span className="text-bold text-white">
            {" "}
            {user.first_name + " " + user.last_name}
          </span>
          <span className="text-bold text-white  ">
            <img src={avatar} className="w-[30px] h-[30px] rounded-full" />
          </span>
          {ActiveBar && <BarMenus dispatch={dispatch} />}
        </div>
      ) : (
        <span className="bg-secondary p-2 rounded-md px-4">
          <Link to="/login">Sign In</Link>
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
