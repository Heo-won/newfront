import React from "react";
import CustomerBenner from "../components/CustomerBenner";
import CustomerIdea from "../components/CustomerIdea";
import CustomerSearch from "../components/CustomerSearch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

export default function CustomerService() {
    return (
        <>
            <Blank />
            <CustomerBenner />
            <CustomerSearch />
            {/* <CustomerIdea /> */}
            <Footer />
        </>
    );
}
