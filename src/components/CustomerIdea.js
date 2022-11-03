import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-attachment: fixed;
  overflow: hidden;
  height: 60vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 50vh;
  margin: 1em 14em;
  /* background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */
  border-radius: 3em;
`;

const InnerTop = styled.div``;

const LeftDiv = styled.div`
  position: relative;
  width: 48%;
  background-color: #f4ffff;
  border-radius: 3em;
  margin-right: 2%;
  border: 1px solid #1e3269;
`;

const Content = styled.div`
  color: grey;
  margin-top: 3em;
  font-size: 3em;
`;

const TitleOne = styled.div`
  font-size: 3em;
  font-weight: bold;
  top: 5vh;
  margin-left: 2em;
  color: #1e3269;
`;

const TitleTwo = styled.div`
  font-size: 2em;
  margin-left: 3em;
  margin-top: 5em;
  color: #46649b;
`;

const TitleThree = styled.div`
  font-size: 2.5em;

  left: 15em;
  color: #000009;
`;

const Ol = styled.ol``;

const Li = styled.li`
  font-size: 0.5em;
  margin-left: 3em;
  background-color: red;
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
  background-color: #f4ffff;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 48%;
  border-radius: 3em;
  margin-left: 2%;
  border: 1px solid #1e3269;
`;

const InnerLeft = styled.div``;

const InnerRight = styled.div``;

export default function CustomerIdea() {
  return (
    <>
      <Container>
        <ContainerInner>
          <LeftDiv>
            <TitleOne>FAQ</TitleOne>
            <TitleTwo>자주하는 질문</TitleTwo>
            <TitleThree>
              <Ol>
                <Li>안뇽</Li>
                <Li>안뇽</Li>
                <Li>안뇽</Li>
              </Ol>
            </TitleThree>
            <DetailBtn>자세히 보기</DetailBtn>
          </LeftDiv>
          <RightDiv>
            <Content>고객의 소리</Content>
          </RightDiv>
        </ContainerInner>
      </Container>
    </>
  );
}
