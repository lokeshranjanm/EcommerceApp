import React, { useState, useEffect } from "react";
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
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const ProductDetails = () => {
  const history = useHistory();
  const params = useParams();
  const [qty, setQty] = useState(0);

  const [loader, setLoader] = useState(false);
  const [product, setProduct] = useState({
    productId: 5,
    productName: "T-Shirt",
    productPrice: 50000,
    url: "https://res.cloudinary.com/dl1jkiqif/image/upload/v1649010357/jzdkpqn6brnhwttkxjbo_q7dj2h.jpg",
    productDesc: "Regular Fit Men's Cotton T-Shirt",
  });

  useEffect(() => {
    setLoader(true);
    getProduct();
  }, []);

  const getProduct = async () => {
    console.log("lokesh ranjan");

    await axios
      .get(`http://localhost:7777/product/get/${params.productId}`, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error, "api failure");
        setLoader(false);
      });
  };

  const handleAddToCart = () => {
    localStorage.setItem("cart", JSON.stringify([product]));
    window.location.reload(true);
  };

  return (
    <>
      <Header />
      {loader || !product ? (
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            zIndex: "900",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      ) : (
        <>
          <div style={{ padding: "40px 20px" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={product.url}
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
                    {product.productName}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                    }}
                  >
                    {product.productDesc}
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
                  ₹ {product.productPrice}
                </Typography>
                <div style={{ marginTop: "50px", display: "flex" }}>
                  {/* <ButtonGroup
                    variant="outlined"
                    size="medium"
                    aria-label="outlined primary button group"
                    style={{ marginRight: "20px", width: "270px" }}
                  >
                    <Button onClick={() => setQty(qty + 1)}>
                      <AddIcon color="primary" />
                    </Button>
                    <Button style={{ width: "140px" }} onClick={handleAddToBag}>
                      {qty === 0 ? "Add To Bag" : qty}
                    </Button>
                    <Button onClick={() => qty !== 0 && setQty(qty - 1)}>
                      <RemoveIcon color="primary" />
                    </Button>
                  </ButtonGroup> */}
                  <Button
                    size="large"
                    style={{ width: "250px", marginRight: 30 }}
                    variant="outlined"
                    onClick={handleAddToCart}
                    disabled={JSON.parse(localStorage.getItem("cart"))}
                  >
                    {JSON.parse(localStorage.getItem("cart"))
                      ? JSON.parse(localStorage.getItem("cart")).length
                      : "Add To Bag"}
                  </Button>
                  <Button
                    size="large"
                    style={{ width: "250px" }}
                    variant="contained"
                    onClick={() => history.push("/checkout")}
                  >
                    Proceed To BAG
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductDetails;
