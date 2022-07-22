import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

//components
import About from "./components/About";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Services from "./components/Services";
import Products from "./components/Products";
import CartItem from "./components/CartItem";
import ShoeComponent from "./components/ShoeComponent";

const Four04 = () => {
  return <span>Error 404 </span>;
};

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="products">
          <Route index={true} element={<Products />} />
          <Route path="shoe" element={<ShoeComponent />} />
        </Route>
        <Route path="cart-item/:cartItemId" element={<CartItem />} />

        <Route path="*" element={<Four04 />} />
      </Routes>
    </div>
  );
};

export default App;
