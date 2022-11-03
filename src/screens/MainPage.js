import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import CarouselMain from "../components/CarouselM";
import CompanyIntroduce from "../components/CompanyIntroduce";
import Comunity from "../components/Comunity";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewPost from "../components/NewPost";
import Slider from "../components/Slider";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

function MainPage() {
    return (
        <>
            <Blank />
            <CarouselMain />
            <CompanyIntroduce />
            <NewPost />
            <Comunity />
            <Footer />
        </>
    );
}

export default MainPage;
