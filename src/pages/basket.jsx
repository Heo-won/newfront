import { Cart } from "../components/cart/cart";
import styled from "styled-components";

const Blank = styled.div`
    width: 100%;
    height: 10em;
`;

const Basket = ({ convertPrice, cart, setCart, checkLists, setCheckLists }) => {
    return (
        <>
            <Blank />
            <Cart convertPrice={convertPrice} cart={cart} setCart={setCart} checkLists={checkLists} setCheckLists={setCheckLists} />
        </>
    );
};

export default Basket;
