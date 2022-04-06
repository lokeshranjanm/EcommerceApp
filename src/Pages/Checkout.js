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
import Footer from "./Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BagItems from "../Components/BagItems";
import AddressForm from "./AddressForm";
import AddressCard from "../Components/AddressCard";
import BillDetails from "../Components/BillDetails";

const Checkout = () => {
  const history = useHistory();
  const params = useParams();

  return (
    <>
      <Header />
      <div style={{ padding: "20px 20px" }}>
        <h3
          style={{
            textTransform: "capitalize",
          }}
        >
          #Checkout
        </h3>
        <div
          style={{
            marginTop: "40px",
            padding: "0px 20px",
          }}
        >
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={7}>
              <Typography
                style={{ fontSize: "16px", fontWeight: 600, marginBottom: 15 }}
              >
                Shopping Bag (6 items)
              </Typography>
              <BagItems />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <div style={{ marginTop: 40 }}>
                <AddressCard />
              </div>
              <div style={{ marginTop: 40 }}>
                <BillDetails />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
