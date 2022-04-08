import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        border: "1px solid #E6E6E6",
        padding: "12px",
      }}
    >
      <div
        style={{
          border: "1px solid #E6E6E6",
          borderRadius: "8px",
          height: 250,
        }}
      >
        <Link to={`/product-details/${product.productId}`}>
          <img
            src={product.url}
            // className="thumbnail"
            alt=""
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Link>
      </div>
      <Typography
        style={{
          color: "black",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: 5,
        }}
      >
        {product.productName}
      </Typography>
      <Typography style={{ fontSize: "14px", color: "grey", marginTop: 6 }}>
        {product.productDesc}
      </Typography>
      <Typography
        style={{ fontSize: "16px", fontWeight: "bold", marginTop: 10 }}
      >
        ₹{product.productPrice}
      </Typography>
    </div>
  );
};

export default ProductCard;
