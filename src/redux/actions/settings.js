export const openModalFun = () => async (dispatch) => {
  try {
    await dispatch({ type: "MODAL", payload: true });
  } catch (error) {}
};

export const closeModalFun = () => async (dispatch) => {
  try {
    await dispatch({ type: "MODAL", payload: false });
  } catch (error) {}
};
