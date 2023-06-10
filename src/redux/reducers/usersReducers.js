import { useNavigate } from "react-router-dom";
import { LOGIN, REGISTER, INITAPP, LOGOUT } from "../actions/users";
import { MdLocalHospital } from "react-icons/md";
import Login from "../../components/Auth/Login";

const initUserSettings = {
  UserData: {},
  token: null,
};

export default (state = initUserSettings, action) => {
  //  Destuction Posts
  let data = {};
  switch (action.type) {
    case INITAPP:
      const dataStorage = JSON.parse(localStorage.getItem("user"));

      data = {
        UserData: dataStorage.UserData,
        token: dataStorage.token,
      };
      // console.log({ ...state, ...data });
      return { ...state, ...data };
      break;
    case REGISTER:
      data = {
        UserData: action.payload.user,
        token: action.payload.token,
      };
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));

      return { ...state, ...data };
      break;

    case LOGIN:
      data = {
        UserData: action.payload.user,
        token: action.payload.token,
      };
      localStorage.setItem("user", JSON.stringify(data));
      return { ...state, ...data };
      break;

    case LOGOUT:
      data = {
        UserData: {},
        token: {},
      };
      localStorage.removeItem("user");
      return { ...state, ...data };
      break;

    default:
      return state;
      break;
  }
};
