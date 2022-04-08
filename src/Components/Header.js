import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";

import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Badge } from "@material-ui/core";
import Avatar1 from "@mui/material/Avatar";

const Header = () => {
  const history = useHistory();
  const customer = JSON.parse(localStorage.getItem("customer"));

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

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for Products, Categories... "
        />
        <SearchIcon className="header__searchIcon" />
      </div>

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
