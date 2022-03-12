import { Avatar } from "@material-ui/core";
import React from "react";
import "../css/QuoraBox.css";

const QuoraBox = () => {
  return (
    <div className="quoraBox">
      <div className="quoraBox＿info">
        <Avatar />
        <h5>Username</h5>
      </div>
      <div className="quoraBox＿quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
};

export default QuoraBox;
