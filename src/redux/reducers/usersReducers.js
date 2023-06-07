import { useNavigate } from "react-router-dom";
import { REGISTER } from "../actions/users";
import { MdLocalHospital } from "react-icons/md";

const initUserSettings = {
  UserData: {},
  token: null,
};

export default (state = initUserSettings, action) => {
  //  Destuction Posts
  switch (action.type) {
    case REGISTER:
      console.log("Hello From Here");
      const data = {
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
