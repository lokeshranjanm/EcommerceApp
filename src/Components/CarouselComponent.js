import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
const CarouselComponent = () => {
  return (
    <>
      <div style={{ display: "block" }}>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/drzudfgzl/image/upload/v1596105981/xrvbpzjfhdhro9wooimh.png"
              alt="First slide"
              style={{ height: "100%", width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/drzudfgzl/image/upload/v1596105979/x66lj1b4y4j2vz2rn26x.png"
              alt="Second slide"
              style={{ height: "100%", width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/drzudfgzl/image/upload/v1596105985/bxco4bjsnacotaj1w9l0.png"
              alt="Third slide"
              style={{ height: "100%", width: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default CarouselComponent;
