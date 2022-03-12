import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";

const Login = () => {
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };
  // eslint-disable-next-line
  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };
  // eslint-disable-next-line
  const registerSignIn = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_logo">
          {/* <img
            src="155278-ffc107.png"
            src="dolphin-2-64.png"
            src="logo2.png"
            alt=""
          /> */}
        </div>
        <div className="login_desc">
          <p>Journey to the Unknown, 100 Years of Life</p>
          <p style={{ color: "green", fontSize: "25px" }}></p>
          <h1>Welcome to Dogaben</h1>
        </div>
        <div className="login_auth">
          <div className="login_authOptions">
            <div className="login_authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            <div className="login_authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
