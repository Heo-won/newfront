import styled from "styled-components";
import IMG from "../images/eventbanner.jpg";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%;
  background-image: url(${IMG});
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;
