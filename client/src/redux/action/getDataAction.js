import axios from "axios";

export const getData = (endpoint) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });
    axios
      .get(`http://localhost:3000/${endpoint}`)
      .then((result) => {
        dispatch({
          type: "FULFILLED",
          payload: result.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "REJECTED",
          payload: error,
        });
      });
  };
};
