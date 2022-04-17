import React, { useState } from "react";
import { Grid, Typography, Divider, Button, ButtonGroup } from "@mui/material";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useHistory, useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const BagItems = ({ product }) => {
  const history = useHistory();

  return (
    <div style={{ border: "1px solid #E6E6E6", borderRadius: 4, padding: 12 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ marginRight: 12 }}>
              <img style={{ height: "200px" }} src={product.url} />
            </div>
            <div>
              <Typography
                style={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {product.productName}
              </Typography>
              <Typography
                style={{ fontSize: "14px", color: "grey", marginTop: "6px" }}
              >
                {product.productDesc}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              style={{
                color: "black",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Qty: 1 x ₹{product.productPrice} = ₹{product.productPrice}
            </Typography>
          </div>
        </Grid>
      </Grid>{" "}
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <Button
            size="small"
            style={{ marginTop: "20px" }}
            variant="contained"
            color="error"
            startIcon={<RemoveShoppingCartIcon />}
            onClick={() => {
              localStorage.removeItem("cart");
              history.push("/");
            }}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BagItems;
