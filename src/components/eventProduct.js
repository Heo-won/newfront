import { Link } from "react-router-dom";
import styles from "./eventProduct.module.css";

const eventProduct = ({ product }) => {
    return (
        <>
            <div className={styles.product}>
                <Link to={`product/${product.id}`}>
                    <div className={styles.product_image}>
                        <img src={product.thumbImg} alt="product" />
                    </div>
                </Link>
                <div className={styles.store}>
                    <span>{product.title}</span>
                </div>

                <div className={styles.product_name}>
                    <span>{product.author}</span>
                </div>
            </div>
        </>
    );
};

export default eventProduct;
