import axios from "axios";

export const registerUser = () => async (dispatch) => {
  dispatch({ type: "POST_REGISTER_REQUEST" });
  try {
    const res = await axios.post("http://localhost:4000/api/user/signup");
    console.log(res);
    dispatch({ type: "POST_REGISTER_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "POST_REGISTER_FAIL", payload: err });
  }
};
