import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
   const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e) {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then (auth =>{
      navigate("/")
    })
    .catch(err => alert(err.message))
  }

  function register(e) {
    e.preventDefault();
   

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth){
            navigate("/")
          }

        })
        .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amazon_PNG6.png/800px-Amazon_PNG6.png?20200324004345"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__RegisterButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
