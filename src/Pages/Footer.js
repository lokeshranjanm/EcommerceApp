import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "85px",
        background: "#2196F3",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ fontWeight: "600", color: "white", fontSize: "16px" }}>
        © 2022 Copyright : OneStop
      </span>
      <span style={{ color: "white", fontSize: "12px" }}>
        All Rights Reserved
      </span>
      {/* <a class="text-white" href="https://OneStop.com/">MDBootstrap.com</a> */}
    </div>
  );
};

export default Footer;
