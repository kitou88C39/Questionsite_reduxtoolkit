import React, { useState } from "react";
import "../css/Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  ExpandMore,
  Link,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
} from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
//import { auth, db } from "../firebase";
import { auth } from "../firebase";
import db from "../firebase";
import Modal from "react-modal";
import firebase from "../firebase";

const Navbar = () => {
  const user = useSelector(selectUser);
  const [opneModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleQuestion = (e) => {
    e.preventDefault();

    setOpenModal(false);

    db.collection("questions").add({
      question: input,
      imageUrl: inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
    });
    setInput("");
    setInputUrl("");
  };

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
        <div className="qHeader_Rem">
          <div className="qHeader_avatar">
            <Avatar onClick={() => auth.signOut()} src={user.photo} />
          </div>
        </div>

        <Button onClick={() => setOpenModal(true)} variant="outlined">
          Add Question
        </Button>
        <Modal
          isOpen={opneModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal_title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
            <div className="modal_info">
              <Avatar className="avatar" src={user.photo} />
              <p>{user.displayName ? user.displayName : user.email}asked</p>
              <div className="modal_scope">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal_Field">
              <Input
                required
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                PeopleAltOutlined="start your question with 'What,'How','Why' etc.'"
              />
            </div>
            <div className="modal_fieldLink">
              <Link />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                PeopleAltOutlined="Optional:inclue a link that gives context"
              ></input>
            </div>
            <div className="modal_buttons">
              <button onClick={() => setOpenModal(false)}>Close</button>
              <button onClick={handleQuestion} type="submit" className="add">
                Add Question
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
