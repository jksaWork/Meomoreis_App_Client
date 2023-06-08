import * as api from "../../APIs/users";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

export const registerAction = (user) => async (dipactch) => {
  try {
    const { data } = await api.register(user);
    dipactch({ type: REGISTER, payload: data });
  } catch (error) {
    throw error;
  }
};

export const LoginAction = (user) => async (dipactch) => {
  try {
    const { data } = await api.LoginApi(user);
    dipactch({ type: LOGIN, payload: data });
  } catch (error) {
    throw error;
  }
};
