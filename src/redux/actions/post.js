import * as api from "../../APIs/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPostAPi();
    dispatch({ type: "FETCH_ALL_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.CreatePostApi(post);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (_id) => async (dispatch) => {
  try {
    console.log(_id);
    dispatch({ type: "EDIT_POST", payload: _id });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (post, id) => async (dispatch) => {
  try {
    const { data } = await api.UpdatePostApi(post, id);
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const DeletePost = (id) => async (dispatch) => {
  try {
    console.log(id);
    const { data } = await api.DeletePostApi(id);
    dispatch({ type: "DELETE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePostAPI(id);
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
