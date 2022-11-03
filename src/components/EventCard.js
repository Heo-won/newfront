import axios from "axios";
import { useEffect } from "react";
import EventProduct from "./eventProduct";
import styles from "./eventCard.module.css";
import Footer from "./Footer";

const EventCard = ({ products, setProducts }) => {
  useEffect(() => {
    axios.get("/eventData.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);

  return (
    <>
      <main className={styles.flex_wrap}>
        {products.map((product) => {
          return <EventProduct key={`key-${product.id}`} product={product} />;
        })}
      </main>
    </>
  );
};

export default EventCard;
