import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BoardScreen from "../screens/BoardScreen";
import Compare from "../screens/CompareScrenn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// import Button from "@mui/icons-material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./topNavigationBar.module.css";
import LOGO from "../images/drink.png";
import styledC from "styled-components";

const Button = styledC.button`
    color:red;
    background-color:white;
    border-radius: 5px;
    border:1px solid black;
    padding:0.5em;
    margin-left:1em;
`;
const MyDiv = styledC.div`
  display: flex;
  align-items: center;
  gap:10px;
`;

const MyImg = styledC.img`
  width: 50px;
  margin-bottom:10px;
`;

export default function Header({ cart }) {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [show, setShow] = useState(false);

  console.log("CART", cart);

  const handleClick = () => {
    logout();
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <div className="out">
      <header className="header">
        <div className="brand">
          <button onClick={() => setShow(!show)}>&#9776;</button>
          {show && (
            <ul class="sidenav">
              <li>
                <Link to="/api/compare">메뉴</Link>
              </li>
              <li>
                <Link to="/api/event">이벤트</Link>
              </li>
              <li>
                <Link to="/api/board">커뮤니티</Link>
              </li>
              <li>
                <Link to="/api/store">스토어</Link>
              </li>
              <li>
                <Link to="/api/qna">고객 센터</Link>
              </li>
            </ul>
          )}
          <Link to="/">
            <MyDiv>
              <MyImg className="logo" src={LOGO} alt="로고" />
              <span>뭐마시지?</span>
            </MyDiv>
          </Link>
        </div>
        <div className="header-left-links">
          {/* html에서 a 태그가 react에선 link라 생각하면된다 */}
          <Link to="/api/compare">메뉴</Link>
          <Link to="/api/event">이벤트</Link>
          <Link to="/api/board">
            커뮤니티<span className="SubSpan">New</span>
          </Link>
          <Link to="/api/store">스토어</Link>
          <Link to="/api/qna">고객센터</Link>

          <Routes>
            {/* 원이가 짠것 */}
            {/* <a href="cart.html">메뉴</a>
              <a href="signin.html">소식</a>
              <a href="board.html">자유게시판</a>
              <a href="help.html">고객센터</a> */}
            {/* 라우팅한것 */}

            {/* <Route path="/" element={<MainScreen />} /> */}
            {/* <Route path="/api/compare" element={<CompareScreen />} /> */}
            {/* <Route path="/api/event" element={<EventScreen />} /> */}
            {/* <Route path="/api/board" element={<BoardScreen />} /> */}
            {/* <Route path="/api/store" element={<StoreScreen />} /> */}
            {/* <Route path="/api/qna" element={<QnaScreen />} /> */}
          </Routes>
        </div>
        <div className="header-right-links">
          {/* login일때 나타나는 것입니다 */}
          {user && (
            <div>
              <span>{user.email}</span>
              <Button onClick={handleClick}>Log out</Button>
            </div>
          )}

          {/* <Link to='/cart'>Cart</Link> */}
          {/* login이 아닐때 나타납니다 */}

          {/* <a href="signin.html">Sign In</a> */}
        </div>
        <div className={styles.menu}>
          <Link to="/cart">
            <div className={styles.shopping_cart}>
              <img src="/images/icon-shopping-cart.svg" alt="cart" />
              <span>장바구니</span>
              {cart.length >= 1 ? (
                <div className={styles.new_shopping_cart}>
                  <p>{cart.length}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
          {!user && (
            <div>
              <Link to="/login">
                <div className={styles.mypage}>
                  <img src="/images/icon-user.svg" alt="user" />
                  <span>로그인</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
