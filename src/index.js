import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { BoardContextProvider } from "./context/BoardContext";
import { AuthContextProvider } from "./context/AuthContext";
import { EventContextProvider } from "./context/EventContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // 라우팅할려면 BrowserRouter로 감싸야한다
    <AuthContextProvider>
        <BoardContextProvider>
            <EventContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </EventContextProvider>
        </BoardContextProvider>
    </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
