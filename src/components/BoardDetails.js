import React from "react";

export default function BoardDetails({ board }) {
  return (
    <>
      <div className="board-details">
        <h4>제목:{board.title}</h4>
        <h4>내용:{board.content}</h4>
        <h3>조회수:{board.view}</h3>
        <h3>추천:{board.like}</h3>
        <h2>작성일:{board.writtenTime}</h2>
      </div>
    </>
  );
}
