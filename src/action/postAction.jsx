import { FETCH_POSTS, SAVE_POST, FETCH_POSTS_RESPONCE } from "./type";
//With redux Thunk
// export const fetchPosts = () => dispatch => {
//   console.log("test");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => dispatch({ type: FETCH_POSTS, payLoad: data }));
// };

// export const savePost = postItem => dispatch => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: { Accept: "application/json", "Content-Type": "application/json" },
//     body: JSON.stringify({ postItem })
//   })
//     .then(res => res.json())
//     .then(data => dispatch({ type: SAVE_POST, payLoad: data }));
// };

export const fetchPostsAction = () => ({ type: FETCH_POSTS });
export const fetchPostsResponceAction = data => ({
  type: FETCH_POSTS_RESPONCE,
  payLoad: data
});
