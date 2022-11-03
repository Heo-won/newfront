import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

export default function Notfound() {
    return (
        <>
            <Header />
            <Blank />
            <img src="/images/notfound.png" alt="notfound" />
            <Footer />
        </>
    );
}
