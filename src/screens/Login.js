import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styles from "./login.css";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email, password);

        await login(email, password);
    };

    return (
        <>
            {/* <Header></Header> */}
            <Blank />
            <form className="login" onSubmit={handleSubmit}>
                <h3>로그인</h3>
                <label>이메일</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                <label>비밀번호</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button disabled={isLoading}>로그인</button>
                {error && <div className="error">{error}</div>}
                <button>
                    <Link to="/signup">회원가입</Link>
                </button>
            </form>
            <Footer></Footer>
        </>
    );
}

// import React, { useState } from "react";
// import { useLogin } from "../hooks/useLogin";
// import styled from "styled-components";
// import {
//   BrowserRouter,
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// // const Body = styled.div`
// //   width: 100vh;
// // `;
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
// `;

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login, error, isLoading } = useLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await login(email, password);
//   };
//   return (
//     <>
//       <Header></Header>
//       <Title>Login</Title>
//       <Container>
//         <Form className="login" onSubmit={handleSubmit}>
//           <Section>
//             <Label>Email:</Label>
//             <Input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//           </Section>
//           <Section>
//             <Label>Password:</Label>
//             <Input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />
//           </Section>

//           {error && <div className="error">{error}</div>}
//         </Form>
//         <Button disabled={isLoading}>Log in</Button>

//         <Link to="/signup">
//           <Button>Sign up</Button>
//         </Link>
//       </Container>
//       <Footer></Footer>
//     </>
//   );
// }
