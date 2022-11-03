import Compare from "./screens/CompareScrenn";
import Map from "./components/Map";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import EventScreen from "./screens/EventScreen";
import AddEventScreen from "./screens/AddEventScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import MainPage from "./screens/MainPage";
import BoardScreen from "./screens/BoardScreen";
import Signup from "./screens/Signup";
// import Login from "./screens/Login";
import Login from "./screens/Login";
import Notfound from "./components/Notfound";
import BoardForm from "./components/BoardForm";
import CustomerService from "./screens/CustomerService";
import Item from "./screens/StoreScreen";
import Practice from "./components/Practice";
import { useState } from "react";
import ProductEvent from "./components/productEvent";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import BoardContent from "./components/boardContent";

function App() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [checkLists, setCheckLists] = useState([]);
    const convertPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const { user } = useAuthContext();
    const [products, setProducts] = useState([]);
    return (
        <>
            <Header cart={cart} />
            <Routes>
                <Route path="/" element={<MainPage />} exact></Route>

                <Route path="/api/compare/product/:id" element={<ProductScreen />}></Route>
                <Route path="/api/compare" element={<HomeScreen />} exact></Route>
                <Route path="/api/event" element={<EventScreen products={products} setProducts={setProducts} />}></Route>
                <Route path="/api/event/product/:id" element={<ProductEvent />} />

                <Route path="/api/board" element={<BoardScreen cart={cart} />}></Route>
                <Route path="/api/board/:id" element={<BoardContent cart={cart} />}></Route>
                <Route path="/api/board/create" element={<BoardForm />}></Route>
                <Route path="/api/store" element={<Home products={product} setProducts={setProduct} convertPrice={convertPrice} />} />
                <Route path="/api/store/product/:id" element={<Product convertPrice={convertPrice} cart={cart} setCart={setCart} />} />

                <Route path="/api/qna" element={<CustomerService />}></Route>
                <Route path="/login" element={user ? <Navigate to="/"></Navigate> : <Login />}></Route>
                <Route path="/signup" element={user ? <Navigate to="/"></Navigate> : <Signup />}></Route>
                <Route path="*" element={<Notfound />}></Route>
                <Route path="/cart" element={<Basket cart={cart} setCart={setCart} convertPrice={convertPrice} checkLists={checkLists} setCheckLists={setCheckLists} />} />

                <Route path="/login" element={user ? <Navigate to="/"></Navigate> : <Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
