import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "../css/QuoraBox.css";
import { selectUser } from "../features/userSlice";

const QuoraBox = () => {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox＿info">
        <Avatar src={user.photo} />
        <h5>{user.displayName}</h5>
      </div>
      <div className="quoraBox＿quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
};

export default QuoraBox;
