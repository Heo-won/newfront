import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import Signupcss from "./signUp.css";
import styled from "styled-components";
const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

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
            <Blank />
            <div className="wrap">
                <form className="signup" onSubmit={handleSubmit}>
                    <h3>Sign up</h3>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                    <button disabled={isLoading}>가입하기</button>
                    {error && <div className="error">{error}</div>}
                    <button>
                        <Link to="/login">로그인하러 가기</Link>
                    </button>
                </form>
                {/* <Footer /> */}
            </div>
        </>
    );
}
