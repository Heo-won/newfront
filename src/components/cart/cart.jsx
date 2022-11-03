import { useState } from "react";
import styles from "./cart.module.css";
import { CartHeader } from "./cartHeader";
import CartList from "./cartList";
import TotalCart from "./totalCart";

export const Cart = ({ cart, setCart, convertPrice, checkLists, setCheckLists }) => {
    // 장바구니 담긴 수 + -
    const handleQuantity = (type, id, quantity) => {
        const found = cart.filter((el) => el.id === id)[0];
        const index = cart.indexOf(found);
        const cartItem = {
            id: found.id,
            image: found.image,
            name: found.name,
            price: found.price,
            quantity: quantity,
            provider: found.provider,
        };

        if (type === "plus") {
            setCart([...cart.slice(0, index), cartItem, ...cart.slice(index + 1)]);
        } else {
            if (quantity === 0) return;
            setCart([...cart.slice(0, index), cartItem, ...cart.slice(index + 1)]);
        }
    };

    // 장바구니 목록에서 제거
    const handleRemove = (id) => {
        setCart(cart.filter((el) => el.id !== id));
        setCheckLists(checkLists.filter((check) => check !== id));
    };

    // 장바구니 체크
    const handleCheckList = (checked, id) => {
        if (checked) {
            setCheckLists([...checkLists, id]);
        } else {
            setCheckLists(checkLists.filter((check) => check !== id));
        }
    };

    // 장바구니 모두 체크
    const handleAllCheck = (checked) => {
        if (checked) {
            const checkItems = [];
            cart.map((cart) => checkItems.push(cart.id));
            setCheckLists(checkItems);
        } else {
            setCheckLists([]);
        }
    };

    const isAllChecked = cart.length === checkLists.length && checkLists.length !== 0;

    // 장바구니 체크된 것들 계산
    const [total, setTotal] = useState(0);
    const found = checkLists.map((checkList) => cart.filter((el) => el.id === checkList));

    return (
        <>
            {/* <header className={styles.header}>
                <h1>장바구니</h1>
            </header> */}

            <CartHeader handleAllCheck={handleAllCheck} isAllChecked={isAllChecked} />

            {cart.length === 0 ? (
                <div className={styles.not}>
                    <h2>장바구니에 담긴 상품이 없습니다.</h2>
                    <p>원하는 상품을 장바구니에 담아보세요!</p>
                </div>
            ) : (
                cart.map((cart) => {
                    return (
                        <CartList
                            cart={cart}
                            key={`key-${cart.id}`}
                            convertPrice={convertPrice}
                            handleQuantity={handleQuantity}
                            handleRemove={handleRemove}
                            handleCheckList={handleCheckList}
                            checkLists={checkLists}
                        />
                    );
                })
            )}

            {cart.length === 0 ? "" : <TotalCart cart={cart} total={total} setTotal={setTotal} found={found} convertPrice={convertPrice} />}
        </>
    );
};
