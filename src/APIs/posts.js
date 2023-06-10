import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:3000/api" });
API.interceptors.request.use(function (req) {
  if (localStorage.getItem("user"))
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  // Do something before request is sent
  return req;
});

export const fetchPostsAPi = async (page = 1) =>
  await API.get(`/posts?page=${page}`);

export const fetchPostAPi = async (id) => await API.get(`/posts/${id}`);
export const SerachInPostAPi = async (terms) =>
  await API.get(`/posts/search?term=${terms}`);
export const CreatePostApi = async (post) => await API.post("/posts", post);
export const UpdatePostApi = async (post, id) =>
  await axios.put(`${url}/${id}`, post);

export const likePostAPI = async (id) => await API.put(`/posts/like/${id}`);

export const DeletePostApi = async (id) => await API.delete(`posts/${id}`);
