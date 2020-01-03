import React, { Component } from "react";
import { connect } from "react-redux";
//import { savePost } from "../action/postAction";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    console.log(" e.target.value", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  componentWillReceiveProps(newpros) {
    const test = newpros;
    console.log("enwProps", test);
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    //  this.props.savePost(post);
  }
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>Title : </label>
          <input type="text" name="title" onChange={this.onChange} />
          <br />
          <hr />
          <label>Body : </label>
          <textarea type="text" name="body" onChange={this.onChange} />
          <br />
          <hr />
          <button type="submit">Submit</button>
        </form>
        <div>
          <hr />
          <h1>{this.props.item.title}</h1>

          <p>{this.props.item.body}</p>
          <hr />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { item: state.posts.item };
};
export default connect(mapStateToProps, null)(PostForm);
