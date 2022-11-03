// import React, { Component, useState, useEffect } from "react";
// import styled from "styled-components";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";
// import { TextareaAutosize } from "@material-ui/core";

// // 최초 코드가 작성해준 스타일부분(건드려도 됨)
// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

// // 최초 코드가 작성해준 함수(사용하지 않음)
// function valuetext(value) {
//   return `${value}원`;
// }

// //컴포넌트 선언
// const Price = () => {
//   const classes = useStyles();
//   const [value, setValue] = useState([]); //값
//   const [min, setMin] = useState();
//   const [max, setMax] = useState();

//   useEffect(() => {
//     fetch("http://localhost:3000/data/data.json")
//       .then((res) => res.json())
//       .then((res) => {
//         // data 중 가격으로만 이루어진 새로운 배열 생성
//         const price = res.data.map((data) => data.price);

//         // 가격으로 이루어진 배열에서, 최대값과 최소값 구하기
//         const max = price.reduce(function (pre, cur) {
//           return pre > cur ? pre : cur;
//         });
//         const min = price.reduce(function (pre, cur) {
//           return pre > cur ? cur : pre;
//         });
//         setData(res.data);

//         // 최소값과 최대값으로 defaultValue 값 설정
//         setValue([min, max]);
//         setMin(min);
//         setMax(max);
//       });
//   }, []);

//   // 슬라이더를 변화시킬 때 마다 value 값 조정
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   //천단위 , 찍기 위한 함수
//   const numberFormat = (num) => {
//     if (num > 1000) {
//       return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     } else {
//       return "0";
//     }
//   };

//   return (
//     <Wrap>
//       <div className={classes.root}>
//         <TextWrap>
//           <Text>가격대</Text>
//           <PriceInfo>
//             {numberFormat(value[0])}원 ~ {numberFormat(value[1])}원
//           </PriceInfo>
//         </TextWrap>
//         <Slider
//           value={value} //가격 슬라이더의 값
//           defaultValue={[min, max]} //가격 슬라이더 최초 범위
//           onChange={handleChange} //슬라이더 변할 때마다 value값을 조정하는 함수
//           aria-labelledby="range-slider" //슬라이더 형태
//           max={max}
//           min={min}
//           stpe="10000" //이동 단위(?)
//         />
//       </div>
//     </Wrap>
//   );
// };

// export default Price;
