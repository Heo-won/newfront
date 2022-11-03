import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Header";
import StoreBenner from "../StoreBenner";
import Footer from "../Footer";
import styled from "styled-components";

// 여기서 꾸미거라
import maincss from "./maincss.css";

const Blank = styled.div`
  width: 100%;
  height: 10em;
`;

export const Main = ({ products, setProducts, convertPrice }) => {
  const allProducts = useRef();

  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
      allProducts.current = data.data.products;
    });
  }, []);

  const starbucks = useRef();
  const toms = useRef();
  const gong = useRef();
  const bean = useRef();
  const via = useRef();
  const mug = useRef();
  const tumbler = useRef();
  const capsule = useRef();

  const sortedProduct = useRef();

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

  const brandProduct = (brand) => {
    let starArr = [];
    let tomsArr = [];
    let gongArr = [];

    let result;

    if (starbucks.current.checked) {
      starArr = allProducts.current.filter((el) => el.provider === "starbucks");
    }

    if (toms.current.checked) {
      tomsArr = allProducts.current.filter((el) => el.provider === "탐앤탐스");
    }

    if (gong.current.checked) {
      gongArr = allProducts.current.filter((el) => el.provider === "공차");
    }

    if (
      !starbucks.current.checked &&
      !toms.current.checked &&
      !gong.current.checked
    ) {
      result = [...allProducts.current];
    } else {
      result = [...starArr, ...tomsArr, ...gongArr];
    }

    setProducts(result);
    sortedProduct.current = result;
  };

  const categoryProduct = (category) => {
    let beanArr = [];
    let viaArr = [];
    let mugArr = [];
    let tumblerArr = [];
    let capsuleArr = [];

    let result;

    if (bean.current.checked) {
      beanArr = allProducts.current.filter((el) => el.sort === "원두");
    }

    if (via.current.checked) {
      viaArr = allProducts.current.filter((el) => el.sort === "비아");
    }

    if (mug.current.checked) {
      mugArr = allProducts.current.filter((el) => el.sort === "머그");
    }

    if (tumbler.current.checked) {
      tumblerArr = allProducts.current.filter((el) => el.sort === "텀블러");
    }

    if (capsule.current.checked) {
      capsuleArr = allProducts.current.filter((el) => el.sort === "캡슐");
    }

    if (
      !bean.current.checked &&
      !via.current.checked &&
      !mug.current.checked &&
      !tumbler.current.checked &&
      !capsule.current.checked
    ) {
      result = [...sortedProduct.current];
    } else {
      result = [...beanArr, ...viaArr, ...mugArr, ...tumblerArr, ...capsuleArr];
    }
    setProducts(result);
  };

  return (
    <>
      <Blank />
      <StoreBenner />


      <div className={styles.category}>
        <h2>브랜드별로 보기</h2>
        <label>
          <input
            type="checkbox"
            name="category"
            value="starbucks"
            onClick={() => brandProduct("starbucks")}
            ref={starbucks}
          />
          스타벅스
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="탐앤탐스"
            onClick={() => brandProduct("탐앤탐스")}
            ref={toms}
          />
          탐앤탐스
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="공차"
            onClick={() => brandProduct("공차")}
            ref={gong}
          />
          공차
        </label>
      </div>
      <div className={styles.category2}>
        <h2>제품별로 보기</h2>
        <label>
          <input
            type="checkbox"
            name="category"
            value="원두"
            onClick={() => categoryProduct("원두")}
            ref={bean}
          />
          원두
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="비아"
            onClick={() => categoryProduct("비아")}
            ref={via}
          />
          비아
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="머그"
            onClick={() => categoryProduct("머그")}
            ref={mug}
          />
          머그
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="텀블러"
            onClick={() => categoryProduct("텀블러")}
            ref={tumbler}
          />
          텀블러
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="캡슐"
            onClick={() => categoryProduct("캡슐")}
            ref={capsule}
          />
          캡슐 & 패키지
        </label>
      </div>
      <div className={styles.filter}>
        <p onClick={() => sortProduct("recent")}>최신순</p>
        <p onClick={() => sortProduct("row")}>낮은 가격</p>
        <p onClick={() => sortProduct("high")}>높은 가격</p>
      </div>
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              convertPrice={convertPrice}
            />
          );
        })}
      </main>
      {/* <Footer /> */}
    </>
  );
};
