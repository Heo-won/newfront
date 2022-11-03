import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import Signupcss from "./signup.css";
import styled from "styled-components";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="container_register">
        <form className="signup" onSubmit={handleSubmit}>
          <h1>Register</h1>

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
            <p>가입하기</p>
          </button>
          {error && <div className="error">{error}</div>}
          <button>
            <Link to="/login">
              <p>로그인하러 가기</p>
            </Link>
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
