import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "80%",
        textAlign: "center",
        borderBottom: "2px solid #aaa",
        lineHeight: "0.1em",
        margin: "1em 5em",
      }}
    >
      {/* <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span> */}
    </div>
  );
};

export default HorizonLine;
