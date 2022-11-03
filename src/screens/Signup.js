import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import styles from "./signUp.css";
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
                <Footer />
            </div>
        </>
    );
}

// import React, { useState } from "react";
// import { useSignup } from "../hooks/useSignup";
// import styled from "styled-components";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {
//   BrowserRouter,
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";

// const Title = styled.h1`
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   text-align: center;
//   color: #ff8000;
//   font-size: 5em;
//   margin-top: 3em;
// `;

// const Container = styled.div`
//   position: relative;
//   width: 50%;
//   height: 100vh;
//   /* border: 1px solid red; */
//   border-radius: 3px;
//   /* background-color: #ff8000; */
//   display: flex;

//   align-items: center;
//   left: 25%;

//   flex-direction: column;
// `;
// const Form = styled.form`
//   width: 70%;
//   /* border: 1px solid yellow; */

//   /* border: 1px solid black; */
//   margin-bottom: 3em;
// `;
// const Label = styled.label`
//   font-size: 3em;
//   color: #ff8000;
// `;

// const Section = styled.div`
//   /* width: 50%; */
//   display: flex;
//   margin-top: 2em;
// `;

// const Input = styled.input`
//   width: 450px;
//   border: 1px solid #ff8000;
//   margin-left: 1em;
//   border-radius: 3px;
// `;

// const Button = styled.button`
//   border: 1px solid #000;
//   position: relative;
//   border: none;
//   display: inline-block;
//   width: 410px;
//   box-sizing: border-box;
//   border-radius: 5px;
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
//   background-color: #ff8000;
//   text-decoration: none;
//   transition: 0.25s;
//   margin-bottom: 1em;
//   color: white;
//   /* margin-top: 0.5em; */
// `;

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [nickname, setNickname] = useState("");
//   const { signup, error, isLoading } = useSignup();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log("asdf");

//     await signup(email, password);
//   };
//   return (
//     <>
//       <Header></Header>
//       <Title>Sign up</Title>
//       <Container>
//         <Form className="signup" onSubmit={handleSubmit}>
//           {/* <Section>
//             <Label>Nickname:</Label>
//             <Input
//               type="text"
//               onChange={(e) => setNickname(e.target.value)}
//               value={nickname}
//             />
//           </Section> */}
//           <Section>
//             <Label>Email:</Label>
//             <Input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//           </Section>
//           <Section>
//             <Label>Password</Label>
//             <Input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />
//           </Section>
//         </Form>
//         <Button disabled={isLoading}>Sign up</Button>
//         {error && <div className="error">{error}</div>}
//         <Link to="/login">
//           <Button>로그인 화면</Button>
//         </Link>
//         <Link to="/">
//           <Button>돌아가기</Button>
//         </Link>
//       </Container>
//       <Footer></Footer>
//     </>
//   );
// }
