import * as api from "../../APIs/users";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

export const registerAction = (user) => async (dipactch) => {
  const { data } = await api.register();
  dipactch({ type: REGISTER, payload: data });
};
