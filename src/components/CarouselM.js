import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import IMG from "../images/eventbanner.jpg";
import IMG2 from "../images/eventbanner1.jpg";
import IMG3 from "../images/eventbanner2.jpg";
import IMG4 from "../images/eventbanner5.jpg";
import IMG5 from "../images/mmsz.jpg";

import "./styles.css";

const Item1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: url(${IMG});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

const Item2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: url(${IMG2});
  /* background-repeat: no-repeat; */
  background-size: cover;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

const Item3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: url(${IMG3});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

const Item4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: url(${IMG4});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

const Item5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: url(${IMG5});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

// 캐러셀 화면크기 별로 몇개 띄울건지 정할 수 있음
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

export default function CarouselMain() {
  return (
    <>
      {/* <h3 className="EventCarousel">진행중인 이벤트</h3> */}
      <div className="CarouselApp">
        <Carousel breakPoints={breakPoints}>
          <Item1></Item1>
          <Item2></Item2>
          <Item3></Item3>
          <Item4></Item4>
          <Item5></Item5>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselMain />, rootElement);
