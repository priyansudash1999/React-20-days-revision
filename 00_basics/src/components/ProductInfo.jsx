import React from "react";

const ProductInfo = () => {
  const data = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };
  return (
    <div>
      <h2>{data.name}</h2>
      <h3>{data.price}</h3>
      <h4>{data.availability}</h4>
    </div>
  );
};

export default ProductInfo;
