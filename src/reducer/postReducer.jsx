import {} from "redux";
import { FETCH_POSTS, SAVE_POST, FETCH_POSTS_RESPONCE } from "../action/type";
const initialState = { items: [], item: {} };

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, items: action.payLoad };
    case SAVE_POST:
      return { ...state, item: action.payLoad };
    case FETCH_POSTS_RESPONCE:
      return { ...state, items: action.payLoad };
    default:
      return state;
  }
}
