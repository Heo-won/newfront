import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Logincss from "./login.css";
import styled from "styled-components";

import { useEffect } from "react";
// import { googleLogout } from "@react-oauth/google";
// import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);

    await login(email, password);
  };

  // google login

  return (
    <>
      {/* <Header></Header> */}
      <div className="container_login">
        <form className="login" onSubmit={handleSubmit}>
          <h1>WELCOME! </h1>
          {/* <label>Email:</label> */}
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          {/* <label>Password:</label> */}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />

          <button disabled={isLoading}>
            <p>Log in</p>
          </button>
          {error && <div className="error">{error}</div>}
          <button>
            <Link to="/signup">
              <p>회원가입</p>
            </Link>
          </button>
          <div className="sns_login">
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={"single_host_origin"}
            ></GoogleLogin> */}
          </div>
        </form>
        {/* 구글 로그인 양식 */}
      </div>

      <Footer></Footer>
    </>
  );
}
