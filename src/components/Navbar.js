import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="qHeader">
      <Avatar />
      {/* {display} */}
      <h1>'s Dogaben</h1>
      <div className="qHeader-content">
        <div className="qHeader_logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader_icons">
          <div className="qHeader_icon">
            <HomeIcon />
          </div>
          <div className="qHeader_icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader_icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader_icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader_icon">
            <NotificationsOutlined />
          </div>
        </div>
        <div className="qHeader_input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader_Rem">{/* {login} */}</div>
        <Button variant="outlined">Add Question</Button>
      </div>
    </div>
  );
};

export default Navbar;
