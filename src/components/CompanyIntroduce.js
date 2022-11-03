// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   height: 30vh;
//   background-color: red;
// `;

// const FirstTitle = styled.h2`
//   font-size: 3em;
//   color: black;
//   text-align: center;
// `;

// const Contents = styled.h2`
//   font-size: 4em;
//   font-weight: bold;
//   color: orange;
// `;
// const ContainerInner = styled.div`
//   width: 30vw;
//   height: 10vw;
// `;

// const Button = styled.button`
//   width: 100px;
//   background-color: orange;
// `;

// export default function CompanyIntroduce() {
//   return (
//     <>
//       <Container>
//         <FirstTitle>대표 카페 커뮤니티 사이트</FirstTitle>
//         <Contents>뭐 마 시 지 ?</Contents>
//         <ContainerInner>
//           <Button>Previous Slide</Button>
//           <Button>Next Slide</Button>
//         </ContainerInner>
//       </Container>
//     </>
//   );
// }

import React from "react";
import styled from "styled-components";
import IntroImg from "../images/pngegg.png";

const Container = styled.div`
  /* flex-direction: column; */
  position: relative;
  /* background-color: grey; */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  height: 55vh;
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  /* border: 1px solid yellow; */
`;

const LeftDiv = styled.div`
  position: relative;
  /* border: 1px solid red; */
  width: 50%;
`;

const Title = styled.div``;

const TitleOne = styled.div`
  position: absolute;
  font-size: 5em;
  margin-top: 1em;
  margin-left: 2.8em;

  font-weight: bold;
  /* transform: translate(-700px);
  color */
`;

const TitleTwo = styled.div`
  position: absolute;
  font-size: 4em;
  margin-top: 3em;
  margin-left: 3.5em;
  /* transform: translate(-700px); */
`;

// const TitleOne = styled.div`
//   transform: translate(0px);
//   transition: 2s;
// `

// const TitleTwo = styled.div`
//   transform: translate(0px);
//   transition: 2.5s;
//   `

const TitleThree = styled.div`
  position: absolute;
  font-size: 2em;
  margin-top: 11em;
  margin-left: 7em;

  /* right: -120px; */
`;

// .favorite .inner .btn.btn--white {
//   position: absolute;
//   top: 580px;
//   left: 238px;
// }

const DetailBtn = styled.button`
  background-color: whtie;
  color: #404040;
  font-weight: bold;
  width: 10vw;
  margin-top: 22em;
  margin-left: 20.3em;
`;

const RightDiv = styled.div`
  position: relative;
  /* border: 1px solid #000; */
  width: 50%;
  /* background-image: url(${IntroImg}); */
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default function CompanyIntroduce() {
  return (
    <>
      <Container>
        <ContainerInner>
          <LeftDiv>
            <TitleOne>뭐마시지?</TitleOne>
            <TitleTwo>
              다양한 메뉴를 한번에 <br />
              비교해보세요.
            </TitleTwo>
            <TitleThree>
              <br />
              가나다라마바사아자차카타파하하하하하하하
              <br />
              가나다라마바사아자차카타파하하하하하하하
            </TitleThree>
            <DetailBtn>자세히 보기</DetailBtn>
          </LeftDiv>
          <RightDiv>
            <Img src={IntroImg}></Img>
          </RightDiv>
        </ContainerInner>
      </Container>
    </>
  );
}
