import { Slider } from "@material-ui/core";
import React from "react";
import Header from "../Components/Header";
import "./styles/Home.css";
import CarouselComponent from "../Components/CarouselComponent";
import Category from "../Components/Category";
import TopProducts from "../Components/TopProducts";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
// import Product from "../Pages/Product"

const Home = () => {
  const history = useHistory();
  const authentiction = localStorage.getItem("customer") ? true : false;

  if (!authentiction) {
    history.push("/signin");
  }
  return (
    <div>
      <Header />
      <CarouselComponent />
      <Category />
      <TopProducts />
      <Footer />
    </div>
  );
};

export default Home;
