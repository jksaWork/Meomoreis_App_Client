import { useNavigate } from "react-router-dom";
import { LOGIN, REGISTER } from "../actions/users";
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
    case REGISTER:
      console.log("Hello From Here");
      data = {
        UserData: action.payload.body,
        token: action.payload.body,
      };
      localStorage.setItem("user", JSON.stringify(data));
      return { ...state, ...data };
      break;

    case LOGIN:
      data = {
        UserData: action.payload.body,
        token: action.payload.body,
      };
      localStorage.setItem("user", JSON.stringify(data));
      return { ...state, ...data };
      break;
    default:
      return state;
      break;
  }
};
