import axios from "axios";

const url = "http://127.0.0.1:3000/api/posts";

export const fetchPostAPi = async () => await axios.get(url);
export const CreatePostApi = async (post) => await axios.post(url, post);
export const UpdatePostApi = async (post, id) =>
  await axios.put(`${url}/${id}`, post);

export const DeletePostApi = async (id) => await axios.delete(`${url}/${id}`);
