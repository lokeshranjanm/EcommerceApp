import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";

import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Badge } from "@material-ui/core";
import Avatar1 from "@mui/material/Avatar";
import { ClickAwayListener, Typography } from "@mui/material";
import axios from "axios";

const Header = () => {
  const history = useHistory();
  const customer = JSON.parse(localStorage.getItem("customer"));
  const [openDropdown, setOpenDropdown] = useState(false);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

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
      });
  };
  console.log(filterProducts);

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
    if (e.target.value.trim() === "") {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
      var filteredArray = products.filter((x) =>
        x.productDesc
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
      );
      setFilterProducts(filteredArray);
    }
  };

  return (
    <div className="header">
      <Link className="logo" to="/">
        OneStop
      </Link>
      <div className="header__nav">
        <div className="header__option">
          <Link to={"/products/clothing"} style={{ textDecoration: "none" }}>
            <span
              className="header__optionLineOne"
              style={{ pointer: "cursor" }}
            >
              CLOTHING
            </span>
          </Link>
        </div>

        <div className="header__option">
          <Link to={"/products/electronics"} style={{ textDecoration: "none" }}>
            <span
              className="header__optionLineThree"
              style={{ pointer: "cursor" }}
            >
              ELECTRONICS
            </span>
          </Link>
        </div>

        <div className="header__option">
          <Link to={"/products/sports"} style={{ textDecoration: "none" }}>
            <span
              className="header__optionLineFour"
              style={{ pointer: "cursor" }}
            >
              SPORTS
            </span>
          </Link>
        </div>
      </div>
      <ClickAwayListener
        onClickAway={() => {
          setOpenDropdown(false);
        }}
      >
        <div className="header__search">
          <input
            value={searchKeyword}
            className="header__searchInput"
            type="text"
            placeholder="Search for Products... "
            onChange={(e) => handleChange(e)}
          />
          <SearchIcon className="header__searchIcon" />
          <div
            style={{
              visibility: openDropdown ? "visible" : "hidden",
              display: "block",
              width: "410px",
              padding: 8,
              position: "absolute",
              top: 60,
              borderRadius: 6,
              background: "#FFFFFF",
              overflow: "hidden",
              zIndex: 1,
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
            }}
          >
            {filterProducts.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                No Products Found
              </div>
            ) : (
              filterProducts.map((product, idx) => {
                return (
                  <div
                    className="filter_data"
                    key={idx}
                    style={{
                      borderRadius: 6,
                      padding: 9,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={(e) => {
                      setOpenDropdown(false);
                      history.push(`/product-details/${product.productId}`);
                      setSearchKeyword("");
                    }}
                  >
                    <Typography style={{ fontWeight: 400, fontSize: 14 }}>
                      {product.productDesc}
                    </Typography>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </ClickAwayListener>

      <div className="header__nav2">
        <div style={{ marginRight: 20 }} className="header__option">
          {!customer ? (
            <>
              <Avatar
                sizes="small"
                style={{
                  width: 25,
                  height: 25,
                  color: "black",
                }}
              />
              <span
                className="header__optionLineTwo"
                onClick={() => history.push("/signin")}
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              <Avatar1
                sizes="small"
                style={{
                  width: 25,
                  height: 25,
                }}
                sx={{ bgcolor: "#2196f3" }}
              >
                {customer.username.charAt(0)}
              </Avatar1>
              <span
                className="header__optionLineTwo"
                onClick={() => {
                  localStorage.removeItem("customer");
                  localStorage.removeItem("address");
                  localStorage.removeItem("cart");
                  history.push("/signin");
                }}
              >
                Sign Out
              </span>
            </>
          )}
        </div>

        <div className="header__option">
          <Badge
            badgeContent={
              JSON.parse(localStorage.getItem("cart"))
                ? JSON.parse(localStorage.getItem("cart")).length
                : 0
            }
            color="secondary"
          >
            <LocalMallIcon style={{ color: "black" }} />
          </Badge>
          <span className="header__optionLineTwo">Bag</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
