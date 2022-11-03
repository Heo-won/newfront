import React from "react";
import styled from "styled-components";
import NewPostImg from "../images/wonddo.png";
import CoffeeImg from "../images/starbucks.png";
import CoffeeBean from "../images/coffeebean.jpg";

const Container = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${NewPostImg});
  /* background-color: grey; */
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const LeftDiv = styled.div`
  position: relative;
  width: 50%;
  height: 20vh;
`;

const Title = styled.div``;

const TitleOne = styled.div`
  position: absolute;
  font-size: 5em;
  font-weight: bold;
  top: 60vh;
  left: 2em;
  color: #f4a460;
`;

const TitleTwo = styled.div`
  position: absolute;
  font-size: 4em;
  top: 70vh;
  left: 2.5em;
  color: #f4a460;
`;

const TitleThree = styled.div`
  position: absolute;
  font-size: 2em;
  top: 78vh;
  left: 5.2em;
  color: #f4a460;
`;

const DetailBtn = styled.button`
  position: absolute;
  background-color: whtie;
  color: #404040;
  font-weight: bold;
  width: 10vw;
  top: 85vh;
  left: 22em;
`;

const RightDiv = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: 100%;
  background-image: url(${CoffeeImg});
`;

const Img = styled.img``;

export default function NewPost() {
  return (
    <>
      <Container>
        <ContainerInner>
          <LeftDiv>
            <TitleOne>꽁뜨 뒤 쥬흐</TitleOne>
            <TitleTwo>Conte Du Jour CAFFE</TitleTwo>
            <TitleThree>오늘의 이야기, 일상의 커피를 즐겨보세요</TitleThree>
            <DetailBtn>자세히 보기</DetailBtn>
          </LeftDiv>
          <RightDiv>{/* {<Img src={CoffeeImg}></Img>}*/}</RightDiv>
        </ContainerInner>
      </Container>
    </>
  );
}

// Notre conte du jour 우리들의 일상
// Comme d'habitude. 일반적인 상황과 마찬가지로, 혹은 항상 하던대로 라는 뜻
