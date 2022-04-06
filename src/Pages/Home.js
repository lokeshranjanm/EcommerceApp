import { Slider } from "@material-ui/core";
import React from "react";
import Header from "../Components/Header";
import "./styles/Home.css";
import CarouselComponent from "../Components/CarouselComponent";
import Category from "../Components/Category";
import TopProducts from "../Components/TopProducts";
import Footer from "./Footer";
// import Product from "../Pages/Product"

function Home() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <Category />
      <TopProducts />
      <Footer />
    </div>
  );
}

export default Home;
