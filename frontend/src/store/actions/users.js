import { v4 } from "uuid";
import { getUser, register } from "../../utils/api";

export const SIGNUP = "SIGNUP";
export const signUp = (email) => {
  const id = v4();
  register({
    id: id,
    email: email,
    name: "",
    tribeName: "",
  });

  return {
    type: SIGNUP,
    payload: id,
  };
};

export const LOGIN = "LOGIN";
export const logIn = async (email) => {
  const getuser = await getUser(email);
  return {
    type: LOGIN,
    payload: getuser,
  };
};
