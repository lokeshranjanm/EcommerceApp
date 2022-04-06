import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ url }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {" "}
      <div style={{ border: "1px solid #E6E6E6", height: 247 }}>
        <Link to="">
          <img
            src={url}
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
        Roadster
      </Typography>
      <Typography style={{ fontSize: "14px", color: "grey", marginTop: 6 }}>
        Printed A-Line Kurta
      </Typography>
      <Typography
        style={{ fontSize: "16px", fontWeight: "bold", marginTop: 10 }}
      >
        ₹500
      </Typography>
    </div>
  );
};

export default ProductCard;
