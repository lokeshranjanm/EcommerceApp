import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./styles/Category.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const categories = [
  {
    image:
      "https://www.wrl.org/wp-content/uploads/2021/12/various-sports-accessories-pic.jpg",
    name: "Sports",
    link: "/products/sports",
  },
  {
    image:
      "https://cdn.dribbble.com/users/2130467/screenshots/14393984/media/2c73ab99a7c180d320e14a0cec561509.png?compress=1&resize=400x300&vertical=top",
    name: "Electroincs",
    link: "/products/electronics",
  },
  {
    image:
      "https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?k=20&m=1257563298&s=170667a&w=0&h=1ZWgeb1wAK2STpqq8k76dpRSD45NEcd6orUYhvIJ-MA=",
    name: "Clothing",
    link: "/products/clothing",
  },
];

function Category() {
  return (
    <div className="category" style={{ padding: "0px 20px" }}>
      <h3 style={{ padding: "20px 0px 10px 0px" }}>#Shop Top Categories</h3>
      <Grid container>
        {categories.map((category, index) => {
          return (
            <Grid key={index} item xs={12} md={4} sm={12} className="root">
              <Link to={category.link}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div className="backdrop" />
                  <img src={category.image} className="thumbnail" alt="" />
                  <div className="nameContainer">
                    <Typography className="name">
                      {category.name}
                      <ChevronRightIcon className="rightArrow" />
                    </Typography>
                  </div>
                </div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Category;
