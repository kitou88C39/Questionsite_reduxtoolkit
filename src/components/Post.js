import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post_info">
        <Avatar />
        <h5>Username</h5>
        <small>TimeStamp</small>
      </div>
      <div className="post_body">
        <div className="post_question">
          <p>Qusetion</p>
          <button className="post_btnAnswer">Answer</button>
        </div>
        <div className="post_question">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Post;
