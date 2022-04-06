import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h2>SIGN IN</h2>
      <TextField
        required
        id="outlined-required"
        label="Email Address"
        style={{ marginTop: 20, width: 500 }}
      />

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        style={{ marginTop: 30, width: 500 }}
      />
      <Button
        variant="contained"
        style={{ marginTop: 50, width: 300 }}
        size="large"
      >
        LogIn
      </Button>
      <span style={{ marginTop: 20 }}>
        Not at OneStop?{" "}
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default Login;
