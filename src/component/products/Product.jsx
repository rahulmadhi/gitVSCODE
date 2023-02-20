import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let { name } = useParams();
  return <div>Product {name}</div>;
};

export default Product;
