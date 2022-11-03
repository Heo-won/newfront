import React from "react";
import styled from "styled-components";

const IMG = styled.img`
  width: 100%;
  height: 40vh;
  margin: 0 20px;
`;

export default function Slide({ img }) {
  return <IMG src={img} />;
}
