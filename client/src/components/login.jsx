import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
//import ReactDOM from 'react-dom'
import "./login.css";

export const Login = (e) => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isadmin, admin] = useState(false);

  const buttonHandler = () => {
    admin((current) => !current);
  };
  useEffect(() => {
    console.log(isadmin);
  }, [isadmin]);

  const loginn = async (e) => {
    e.preventDefault();
    console.log(userName, password, "buttonHandler");
    const resp = setInterval(
      await Axios.post("http://localhost:5000/a/auth", {
        username: userName,
        password: password,
      }),
      2000
    );
    navigate("/selectCity");
    console.log(resp);
  };

  return (
    <div
      className="auth-form-container"
    //   style={{ backgroundColor: "gray", width: "500px", height: "500px" }}
    >
      <form
        className="login_form"
        // style={{marginLeft:'100px',color:'lightskyblue'}}
      >
        <h2 style={{marginLeft:'100px',paddingTop:'150px'}}>Login</h2>
        <label htmlFor="text" style={{ fontSize: "20px" }}>
          Username:&nbsp;
        </label>
        <input
          type="text"
          placeholder="username"
          id="userName"
          name="userName"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="password" style={{ fontSize: "20px" }}>
          Password :&nbsp;
        </label>
        <input
          type="password"
          placeholder="******"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <button
          onClick={loginn}
        //   style={{ marginLeft: "100px", marginTop: "20px" }}
        >
          Login
        </button>
      </form>
    </div>

  );
};
