import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formdata, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formdata, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
