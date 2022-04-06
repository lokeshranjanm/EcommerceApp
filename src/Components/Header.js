import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";

import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Badge } from "@material-ui/core";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <Link className="logo" to="/">
        OneStop
      </Link>
      <div className="header__nav">
        <div className="header__option">
          <span
            className="header__optionLineOne"
            onClick={() => history.push("/products/clothing")}
            style={{ pointer: "cursor" }}
          >
            CLOTHING
          </span>
        </div>

        <div className="header__option">
          <span
            className="header__optionLineThree"
            onClick={() => history.push("/products/electronics")}
            style={{ pointer: "cursor" }}
          >
            ELECTRONICS
          </span>
        </div>

        <div className="header__option">
          <span
            className="header__optionLineFour"
            onClick={() => history.push("/products/sports")}
            style={{ pointer: "cursor" }}
          >
            SPORTS
          </span>
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
        <div
          style={{ marginRight: 20 }}
          className="header__option"
          onClick={() => history.push("/signin")}
        >
          <Avatar
            sizes="small"
            style={{
              width: 25,
              height: 25,
              color: "black",
            }}
          />
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <Badge badgeContent={0} color="secondary">
            <LocalMallIcon style={{ color: "black" }} />
          </Badge>
          <span className="header__optionLineTwo">Bag</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
