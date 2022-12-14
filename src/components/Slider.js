import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../images/222.png"; //자신이 원하는 이미지를 import 하세요.
import img2 from "../images/rabbit.jpg";
import img3 from "../images/vi.jpg";
import img4 from "../images/rabbit.jpg";
import img5 from "../images/vi.jpg";

const Container = styled.div`
  position: relative;
  width: 100vw;
  margin-bottom: 3em;

  // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button1 = styled.button`
  /* all: unset; */
  position: absolute;
  border: 1px solid grey;
  padding: 0.5em 2em;
  color: grey;
  border-radius: 10px;
  top: 9em;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const Button2 = styled.button`
  /* all: unset; */
  position: absolute;
  border: 1px solid grey;
  padding: 0.5em 2em;
  color: grey;
  border-radius: 10px;
  top: 9em;
  right: 2em;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const ContainerInner = styled.div`
  width: 50%;
  height: 40vh;
  margin: 0 2em;
`;

const FirstTitle = styled.h2`
  font-size: 3em;
  color: black;
  text-align: center;
`;

const TOTAL_SLIDES = 1;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 2);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      <FirstTitle></FirstTitle>
      <ContainerInner>
        <SliderContainer ref={slideRef}>
          <Slide img={img3} />
          <Slide img={img2} />
          <Slide img={img3} />
          <Slide img={img4} />
          <Slide img={img5} />
        </SliderContainer>
        <Button1 onClick={prevSlide}>Prev</Button1>
        <Button2 onClick={nextSlide}>Next</Button2>
      </ContainerInner>
    </Container>
  );
}
