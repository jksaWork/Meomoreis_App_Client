import React, { useEffect, useState } from "react";
import { FcPlus, FcLike, FcSearch } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { openModalFun } from "../redux/actions/settings";
import { avatar } from "../assets";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logout } from "../redux/actions/users";
// import { Form, Formik, Filed } from "formik";
import { Field, Form, Formik } from "formik";
import { SerachInPost } from "../redux/actions/post";
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

      <div className="flex gap-3 items-center">
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
        <Search />
      </div>
    </div>
  );
}

function Search() {
  const dispatch = useDispatch();
  const SubmitSearch = (values) => {
    setOpenSerach(!OpenSerach);
    console.log(values);
    dispatch(SerachInPost(values.term));
  };
  const [OpenSerach, setOpenSerach] = useState(false);
  return (
    <div>
      <span
        className="cursor-pointer"
        onClick={() => setOpenSerach(!OpenSerach)}
      >
        <FcSearch size={25} />
      </span>
      <div
        className={`absolute ${
          !OpenSerach ? "top-[-100%]" : "top-0"
        } transition-all  duration-[2000]
      left-0 w-full bg-white h-[100%]  py-2`}
      >
        <Formik
          initialValues={{
            term: "",
          }}
          onSubmit={SubmitSearch}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="realtive flex items-center justify-around">
                <Field
                  className="p-2 w-11/12 h-full
                   text-black bg-transparent 
                    rounded-md
                   focus:border-blue-500
                   active:border-none
                   "
                  name="term"
                  id="term"
                />
                <button type="submit" className="icon">
                  <BsSearch color="#000" size={20} />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
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
