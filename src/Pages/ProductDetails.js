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

const ProductDetails = () => {
  const history = useHistory();
  const params = useParams();

  const [qty, setQty] = useState(0);

  return (
    <>
      <Header />
      <div style={{ padding: "40px 20px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://res.cloudinary.com/drzudfgzl/image/upload/v1596103469/ys00seex0dggkdsy0gqx.jpg"
                style={{ height: "500px", objectFit: "contain" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div style={{ marginRight: "20px" }}>
              <Typography
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                Roadster
              </Typography>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                }}
              >
                Women Mustard Yellow Yoke Design Foil Printed Kurta with
                Trousers & Dupatta
              </Typography>
            </div>
            <Divider style={{ marginTop: "20px" }} />
            <Typography
              style={{
                fontSize: "24px",
                fontWeight: 600,
                marginTop: "20px",
              }}
            >
              ₹ 500
            </Typography>
            <div style={{ marginTop: "50px", display: "flex" }}>
              <ButtonGroup
                variant="outlined"
                size="medium"
                aria-label="outlined primary button group"
                style={{ marginRight: "20px", width: "270px" }}
              >
                <Button onClick={() => setQty(qty + 1)}>
                  <AddIcon color="primary" />
                </Button>
                <Button style={{ width: "140px" }}>
                  {qty === 0 ? "Add To Bag" : qty}
                </Button>
                <Button onClick={() => qty !== 0 && setQty(qty - 1)}>
                  <RemoveIcon color="primary" />
                </Button>
              </ButtonGroup>
              <Button
                size="large"
                style={{ width: "250px" }}
                variant="contained"
              >
                Proceed To BAG
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
