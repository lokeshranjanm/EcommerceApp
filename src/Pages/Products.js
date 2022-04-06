import React, { useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useHistory, useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Footer from "./Footer";

const Products = () => {
  const history = useHistory();
  const params = useParams();
  const [sortby, setSortBy] = useState("recommended");

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <Header />
      <div style={{ padding: "0px 20px" }}>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/");
              }}
            >
              Home
            </Link>
            <Link underline="hover" color="text.primary" aria-current="page">
              Products
            </Link>
          </Breadcrumbs>
          <div style={{ width: 250 }}>
            <FormControl fullWidth style={{ height: "90%" }}>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortby}
                label="Sort By"
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value={"recommended"}>Recommended</MenuItem>
                <MenuItem value={"lowtogigh"}>Price Low to High</MenuItem>
                <MenuItem value={"hightolow"}>Price High to Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <h3
          style={{
            padding: "20px 0px 10px 0px",
            textTransform: "capitalize",
          }}
        >
          #{params.category}
        </h3>
        <Grid container spacing={10} style={{ padding: "0px 10px" }}>
          <Grid item xs={6} sm={4} md={4} lg={3}>
            <ProductCard url="https://res.cloudinary.com/dl1jkiqif/image/upload/v1649010357/jzdkpqn6brnhwttkxjbo_q7dj2h.jpg" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={3}>
            <ProductCard url="https://res.cloudinary.com/dl1jkiqif/image/upload/v1649010357/jzdkpqn6brnhwttkxjbo_q7dj2h.jpg" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={3}>
            <ProductCard url="https://res.cloudinary.com/dl1jkiqif/image/upload/v1649010357/jzdkpqn6brnhwttkxjbo_q7dj2h.jpg" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={3}>
            <ProductCard url="https://res.cloudinary.com/dl1jkiqif/image/upload/v1649010357/jzdkpqn6brnhwttkxjbo_q7dj2h.jpg" />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Products;
