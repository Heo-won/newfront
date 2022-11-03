import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/review.css";

export default function Review(props) {
  const { rating, content, userEmail, del, _id, product, productId } = props;
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();

  const deleteReivew = async () => {
    const resDel = await fetch("http://localhost:5000/api/product/delete", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id, product }),
    });
    if (resDel.status === 200) {
      alert(await resDel.json());
      window.location.replace(`/api/compare/product/${productId}`);
    } else {
      alert("통신 이상");
    }
  };

  return (
    <div className="review-rating">
      <span>{userEmail}</span>
      <span>{content} &nbsp;</span>
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? "fa fa-star"
              : rating >= 1.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fa fa-star"
              : rating >= 2.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fa fa-star"
              : rating >= 3.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "fa fa-star"
              : rating >= 4.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      {del && (
        <span className="delete" onClick={() => deleteReivew()}>
          삭제
        </span>
      )}
    </div>
  );
}
