import React from "react";
import styled, { withTheme } from "styled-components";
import IndonesiaBG from "../images/indonesia_bg.jpg";
import IndonesiaBgLeft from "../images/indonesia_bg_left.png";
import IndonesiaBgRight from "../images/indonesia_bg_right.png";
import IndonesiaImg from "../images/indonesia_img.png";
import IndonesiaTitle from "../images/indonesia_title.png";
import CoffeeshopImg from "../images/coffeeshopsm.jpg";
import CoffeeCup from "../images/coffeecup.png";
import TextureImg from "../images/texture.jpg";
import { Link } from "react-router-dom";
import BoardScreen from "../screens/BoardScreen";

const Container = styled.div`
  position: relative;
  background-image: URL(${TextureImg});
  background-color: grey;
  /* background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%); */
  overflow: hidden;
  height: 50vh;
  background-blend-mode: soft-light, screen;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    &::before {
      content: "aaa";
      position: absolute;
      bottom: 0;
      left: -100px;
      display: none;
      background-image: url(${IndonesiaBgLeft});
      background-size: cover;
      background-repeat: no-repeat;
      width: 373px;
      height: 277px;
      opacity: 0;
    }

    &::after {
      content: "aaa";
      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      background-image: url(${IndonesiaBgRight});
      background-size: cover;
      background-repeat: no-repeat;
      width: 563px;
      height: 305px;
      opacity: 0;
    }
  }
`;

const ImgContent = styled.div`
  color: white;
  font-size: 10em;
  margin-left: 7em;
  margin-top: 1.5em;
`;

const Content = styled.div`
  color: white;
  font-size: 3em;
  margin-left: 25em;
  margin-top: 0.3em;
`;

// const Img1 = styled.img`
//   position: absolute;
//   width: 496px;
//   top: 120px;
// `;

const Img2 = styled.img`
  position: absolute;
  left: 17em;
  top: 10em;
  opacity: 1;
  width: 20vw;
`;

const Btn = styled.button`
  position: absolute;
  left: 58em;
  top: 22em;
  opacity: 1;
`;

const ContainerInner = styled.div``;

export default function Comunity() {
  return (
    <>
      <Container>
        <ContainerInner>
          {/* <Img1 src={IndonesiaTitle}></Img1> */}
          <ImgContent>Community</ImgContent>
          <Content>다른사람들의 최애메뉴가 궁금하다면?</Content>
          <Img2 src={CoffeeCup}></Img2>
          {/* <a href="#" class="btn btn--gold">
            자세히 보기
          </a> */}
          <Link to="/api/board">
            <Btn>소통하러 가기</Btn>
          </Link>
        </ContainerInner>
      </Container>
    </>
  );
}

// Notre conte du jour 우리들의 일상
// Comme d'habitude. 일반적인 상황과 마찬가지로, 혹은 항상 하던대로 라는 뜻
