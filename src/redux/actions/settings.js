export const openModalFun = () => async (dispatch) => {
  try {
    console.log("Modal Open");
    await dispatch({ type: "MODAL", payload: true });
  } catch (error) {
    console.log(error);
  }
};

export const closeModalFun = () => async (dispatch) => {
  try {
    console.log("Modal Open");
    await dispatch({ type: "MODAL", payload: false });
  } catch (error) {
    console.log(error);
  }
};
