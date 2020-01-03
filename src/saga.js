import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchPostsAction,
  fetchPostsResponceAction
} from "./action/postAction";
import { FETCH_POSTS } from "./action/type";
import { fetchPosts } from "./api";
import { connect } from "react-redux";

function* getpostdata() {
  try {
    const data = yield call(fetchPosts);
    yield put(fetchPostsResponceAction(data));
  } catch (e) {
    console.log(e);
  }
}
export function* checkSaga() {
  yield takeLatest(FETCH_POSTS, getpostdata);
}
