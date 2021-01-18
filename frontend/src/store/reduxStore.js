import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { userReducer } from "./reducers/userReducer";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
}
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
const persistedState = loadFromLocalStorage();
export const store = createStore(userReducer, persistedState, composeWithDevTools());
store.subscribe(() => saveToLocalStorage(store.getState()));
