import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <Link to="shoe">
        <span>Go to Shoe page</span>
      </Link>
    </>
  );
};

export default Products;
