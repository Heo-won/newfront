import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import Item from "./Item";
import "./styles.css";

// 캐러셀 화면크기 별로 몇개 띄울건지 정할 수 있음
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 1 },
];

export default function CarouselMain() {
    return (
        <>
            {/* <h3 className="EventCarousel">진행중인 이벤트</h3> */}
            <div className="CarouselApp">
                <Carousel breakPoints={breakPoints}>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                </Carousel>
            </div>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselMain />, rootElement);
