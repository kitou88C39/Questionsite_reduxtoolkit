import React from "react";
import "../css/Navbar.css";
import Feed from "./Feed";
import Navbar from "./Navbar";

const Quora = () => {
  return (
    <div className="quora">
      <Navbar />
      <div className="quora_content">
        <Feed />
      </div>
    </div>
  );
};

export default Quora;
