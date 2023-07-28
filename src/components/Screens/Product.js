import React, { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    await axios
      .get("https:fakestoreapi.com/products")
      .then((res) => setData(res.data));
    // console.log(a);
  };
  useEffect(() => {
    fetchdata();
  });

  return (
    <div>
      {data.map((product) => (
        <div>
          <h6>{product.title}</h6>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "200px" }}
          />
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate}</p>
          <p>Rating Count: {product.rating.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
