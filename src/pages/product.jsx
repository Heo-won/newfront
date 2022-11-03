import Footer from "../components/Footer";
import Header from "../components/Header";
import { Detail } from "../components/product_detail/detail";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

const Product = ({ convertPrice, cart, setCart }) => {
    return (
        <>
            <Blank />
            <Detail convertPrice={convertPrice} cart={cart} setCart={setCart} />
            <Footer />
        </>
    );
};

export default Product;
