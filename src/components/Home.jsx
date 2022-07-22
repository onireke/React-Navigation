import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div className="flex flex-col mb-2">
        {[{ name: "Iphone 15", id: "121324343" }].map((item) => (
          <Link key={item.id} to={`/cart-item/${item.id}`}>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <Link to="/products/shoe">
        <span>Go to Shoe page</span>
      </Link>
    </>
  );
};

export default Home;
