import "../components/Login.css"
import LoginPicture from "../images/Vector.svg";
import Logo from "../images/Vectorlogo.svg";
import Visibility from "../images/Vectorvisibility.svg";
import Avatar from "../images/User-avatar 1.svg";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [showInputs, setShowInputs] = useState(true);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name.trim() === "") {
      window.alert("შეიყვანეთ მეილი");
      return;
    }
    if (password.trim() === "") {
      window.alert("შეიყვანეთ პაროლი");
      return;
    }
    if (password.length < 8) {
      window.alert("პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან");
      return;
    }
    setShowInputs(!showInputs);
    setLoggedIn(!LoggedIn);
    setShowAvatar(!LoggedIn);
    if (!showInputs) {
      setName("");
    }
    if (LoggedIn) {
      setPassword("");
    }
  };

  const ChangeEmail = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="big-box">
        <div className="login-pic">
          <img src={LoginPicture} alt="Login Icon" />
        </div>
        {showInputs && <h1>Login</h1>}
        {showInputs && <p className="greeting">Hello My Friend</p>}
        <div className="input-box">
          {showInputs ? (
            <>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Email"
                  value={name}
                  onChange={ChangeEmail}
                />
                <button type="button" className="input-button">
                  <img src={Logo} alt="Logo" />
                </button>
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button type="button" className="input-button">
                  <img src={Visibility} alt="Visibility Logo" />
                </button>
              </div>
            </>
          ) : (
            <div className="name-box">
              <p className="name">{name}</p>
              {LoggedIn && <img src={Avatar} alt="Avatar" className="avatar" />}
            </div>
          )}
          <button className="login-button" onClick={handleLogin}>
            {LoggedIn ? "LOG OUT" : "LOG IN"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;