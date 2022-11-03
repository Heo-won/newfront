import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rating from "../components/Rating";
import Review from "../components/Review";
import data from "../data";
import "../style/productScreen.css";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

export default function ProductScreen(props) {
    const params = useParams();

    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    const [okay, setOkay] = useState(false);
    const [reviewCounts, setReviewCounts] = useState(0);
    const [reviewShow, setReviewShow] = useState(false);

    const reviewInput = useRef();

    const handleReviewShow = () => {
        setReviewShow(!reviewShow);
    };

    const [avg, setAvg] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:5000/api/product/getAll");
            if (res.status === 200) {
                const data = await res.json();
                const product = data.find((X) => X._id === params.id);
                setProduct(product);
                setReviews(product.review);
                setReviewCounts(product.numReviews);
                setOkay(true);
            } else {
                alert("통신 이상");
                setOkay(false);
            }
        }
        fetchData();
    }, [okay]);

    let newRating = 0;

    const handleReviewWrite = async () => {
        if (reviewInput.current.value === "") {
            alert("리뷰 내용을 입력해 주세요");
        } else {
            const newReview = {
                rating: newRating,
                content: reviewInput.current.value,
            };

            let total = 0;
            reviews.map((el) => {
                total += el.rating;
            });
            total += newRating;
            let avg = total / (reviews.length + 1);

            const res = await fetch("http://localhost:5000/api/product/write", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    _id: product._id,
                    review: newReview,
                    avg: avg,
                    numReviews: reviews.length + 1,
                }),
            });

            // 프론트에 리뷰 반영
            setReviews([...reviews, newReview]);
            setReviewCounts(reviewCounts + 1);
            reviewInput.current.value = "";
            document.querySelector(`.star span`).style.width = "0%";
            setReviewShow(false);
        }
    };

    useEffect(() => {
        let total = 0;
        reviews.map((el) => {
            total += el.rating;
        });
        setAvg(total / reviews.length);
    }, [reviews]);

    const drawStar = (e) => {
        document.querySelector(`.star span`).style.width = `${e.target.value * 10}%`;
        newRating = e.target.value / 2;
    };

    if (okay) {
        return (
            <>
                <Blank />
                <div>
                    <div className="inner">
                        <Link to="/api/compare" className="back">
                            상품 페이지로 돌아가기 &nbsp; {">"}
                        </Link>
                        <div className="row top">
                            <div className="col-1">
                                <img className="large product-img" src={product.image} alt={product.name}></img>
                            </div>
                            <div className="col-2">
                                <ul>
                                    <li>
                                        <span className="product-name">{product.name}</span>
                                        <span className="SubSpan"> 나만의 음료</span>
                                    </li>
                                    <li>
                                        <Rating rating={avg} numReviews={reviewCounts}></Rating>
                                    </li>
                                    <li className="review-show-area">
                                        {reviews.map((el) => {
                                            return <Review rating={el.rating} content={el.content} key={el._id} />;
                                        })}
                                    </li>
                                    <li>
                                        <div className="button review-write-show" onClick={handleReviewShow}>
                                            리뷰 쓰기
                                        </div>
                                    </li>
                                    {reviewShow && (
                                        <li className="review-write-area">
                                            <div>
                                                <span>별점과 리뷰를 남겨 주세요!</span>
                                            </div>
                                            <div>
                                                <span>별점&nbsp;&nbsp;</span>
                                                <span class="star">
                                                    ★★★★★
                                                    <span>★★★★★</span>
                                                    <input type="range" onInput={(e) => drawStar(e)} value="0" step="1" min="0" max="10" />
                                                </span>
                                            </div>
                                            <div className="input-part">
                                                <span>리뷰 내용 작성</span>
                                                <input type="text" className="review-input" ref={reviewInput} />
                                                <div className="button review-write" onClick={handleReviewWrite}>
                                                    리뷰 작성
                                                </div>
                                                <div className="button review-write-close" onClick={handleReviewShow}>
                                                    닫기 &nbsp;<i class="fa-solid fa-x"></i>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                    <hr />
                                    <li className="font">판매 가격 : {product.price}원</li>
                                    <li className="font">상세 설명 : {product.description}</li>
                                    <hr />
                                </ul>
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div className="add-span">
                                                    <span>나만의 음료로 등록하고 싶으신가요?</span>
                                                </div>
                                                <div className="my-button">나만의 음료로 등록</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    } else {
        <div>page not found</div>;
    }
}
