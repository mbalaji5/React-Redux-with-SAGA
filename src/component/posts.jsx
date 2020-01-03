import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAction } from "../action/postAction";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPostsAction();
  }

  render() {
    console.log("this.props.posts", this.props);
    const PostItems = this.props.posts
      ? this.props.posts.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })
      : "";
    return (
      <>
        <div>Welcome to my Post</div>
        {PostItems}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return { posts: state.posts.items };
};
export default connect(mapStateToProps, { fetchPostsAction })(Posts);
