import React from "react";
import Rating from "./Rating";
import data from "../data";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Product(props) {
    const { product } = props;
    return (
        <>
            <li>
                <div key={product._id} className="product">
                    <Link to={"product/" + product._id}>
                        <img className="product-image" src={product.thumbImage} alt="product" />
                    </Link>
                    <div className="product-name">
                        <Link to={"product/" + product._id}>{product.brand}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
                </div>
            </li>
        </>
    );
}
