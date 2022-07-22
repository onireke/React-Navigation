import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CartItem = () => {
  const { cartItemId } = useParams();
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    // const url='https://github.com'
    //   axios(`${url}/${cartItemId}`).then(res => setItemDetails(res.data))
  }, []);

  return <h1> Cart Item Id to show is {cartItemId} </h1>;
};

export default CartItem;
