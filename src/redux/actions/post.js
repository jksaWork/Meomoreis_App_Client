import * as api from "../../APIs/posts";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch("LOADING");
    // console.log("Dipatch TO Fetch Posrt");
    const {
      data: { data, current_page, number_of_page },
    } = await api.fetchPostAPi(page);
    console.log(data);
    dispatch({
      type: "FETCH_ALL_POST",
      payload: { current_page, number_of_page, posts: data },
    });
  } catch (error) {}
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
    const { data } = await api.DeletePostApi(id);
    dispatch({ type: "DELETE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const SerachInPost = (term) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: null });
  const { data } = await api.SerachInPostAPi(term);
  console.log(data);
  dispatch({ type: "SEARCHING_IN_POST", payload: data });
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePostAPI(id);
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
