import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import StoreBenner from "../StoreBenner";
import Footer from "../Footer";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

export const Main = ({ products, setProducts, convertPrice }) => {
    useEffect(() => {
        axios.get("/data/products.json").then((data) => {
            setProducts(data.data.products);
        });
    }, [setProducts]);

    // 물품 정렬
    const sortProduct = (type) => {
        const newProduct = [...products];
        if (type === "recent") {
            newProduct.sort((a, b) => a.id - b.id);
            setProducts(newProduct);
        } else if (type === "row") {
            newProduct.sort((a, b) => a.price - b.price);
            setProducts(newProduct);
        } else if (type === "high") {
            newProduct.sort((a, b) => b.price - a.price);
            setProducts(newProduct);
        }
    };

    return (
        <>
            <Blank />
            <StoreBenner />
            <div className={styles.filter}>
                <p onClick={() => sortProduct("recent")}>최신순</p>
                <p onClick={() => sortProduct("row")}>낮은 가격</p>
                <p onClick={() => sortProduct("high")}>높은 가격</p>
            </div>
            <main className={styles.flex_wrap}>
                {products.map((product) => {
                    return <Product key={`key-${product.id}`} product={product} convertPrice={convertPrice} />;
                })}
            </main>
            <Footer />
        </>
    );
};
