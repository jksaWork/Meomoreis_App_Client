import axios from "axios";

const url = "http://127.0.0.1:3000/api/";
export const register = (user) => axios.post(url + "users/register", user);

export const LoginApi = (user) => axios.post(url + "users/login", user);
