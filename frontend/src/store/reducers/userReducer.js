import { LOGIN, SIGNUP } from "../actions/users";

let initialState = { id: "" };

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        id: payload,
      };
    case SIGNUP:
      return {
        id: payload,
      };
    default:
      return state;
  }
};
