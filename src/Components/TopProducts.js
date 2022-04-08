import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./styles/Category.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setLoader(true);
    const response = await axios
      .get(`http://localhost:7777/product/get`, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error, "api failure");
        setLoader(false);
      });
  };

  return (
    <div style={{ padding: "0px 20px" }}>
      <h3 style={{ padding: "20px 0px 10px 0px" }}>#Top Products</h3>
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          <CircularProgress color="primary" />
        </div>
      ) : (
        <Grid container spacing={10} style={{ padding: "0px 10px" }}>
          {products.length !== 0 &&
            products.map((product, idx) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={3}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
        </Grid>
      )}
    </div>
  );
};

export default TopProducts;
