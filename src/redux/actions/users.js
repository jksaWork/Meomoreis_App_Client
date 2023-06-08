import * as api from "../../APIs/users";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const INITAPP = "INITAPP";
export const LOGOUT = "LOGOUT";

export const registerAction = (user) => async (dipactch) => {
  try {
    const { data } = await api.register(user);
    dipactch({ type: REGISTER, payload: data });
  } catch (error) {
    throw error;
  }
};

export const initAppAction = () => async (dipactch) => {
  try {
    dipactch({ type: INITAPP, payload: null });
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

export const Logout = () => async (dipactch) => {
  try {
    dipactch({ type: LOGOUT, payload: null });
  } catch (error) {
    throw error;
  }
};
