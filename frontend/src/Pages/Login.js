import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const validate = (e) => {
    switch (e.target.name) {
      case "email":
        if (e.target.value.trim() === "") {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Email Address cannot be empty",
          }));
        } else if (
          !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/gm.test(e.target.value.trim())
        ) {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Invalid email address",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: false,
          }));
        }
        break;
      case "password":
        if (e.target.value.trim() === "") {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: "Password cannot be empty",
          }));
        } else {
          setErrors((errors) => ({
            ...errors,
            [e.target.name]: false,
          }));
        }
        break;
      default:
    }
  };

  const handleFormData = (e) => {
    setFormData((formData) => {
      return { ...formData, [e.target.name]: e.target.value };
    });
    validate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      window.alert("All Fields is mandatory");
      return;
    }

    if (Object.keys(errors).every((key) => !errors[key])) {
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      axios
        .post(`http://localhost:7777/users/login1`, payload, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response) => {
          console.log("login", response);
          if (response.status === 200) {
            window.alert("You are login successfully");
            localStorage.setItem("customer", JSON.stringify(response.data));
            history.push("/");
          } else if (response.status === 500) {
            window.alert("Invaild credentials");
          }
        })
        .catch((error) => {
          console.log(error, "api failure");
        });
    }
  };
  return (
    <div className="login">
      <h2>SIGN IN</h2>
      <TextField
        required
        name="email"
        label="Email Address"
        style={{ marginTop: 30, width: 500 }}
        value={formData.email}
        onChange={handleFormData}
        // onBlur={onBlur}
        error={errors.email}
        helperText={errors.email ? errors.email : ""}
        FormHelperTextProps={{
          style: {
            color: "red",
            marginLeft: 2,
            marginTop: 4,
          },
        }}
      />

      <TextField
        required
        label="Password"
        name="password"
        type="password"
        style={{ marginTop: 30, width: 500 }}
        value={formData.password}
        onChange={handleFormData}
        // onBlur={onBlur}
        error={errors.password}
        helperText={errors.password ? errors.password : ""}
        FormHelperTextProps={{
          style: {
            color: "red",
            marginLeft: 2,
            marginTop: 4,
          },
        }}
      />

      <Button
        variant="contained"
        style={{ marginTop: 50, width: 300 }}
        size="large"
        onClick={handleSubmit}
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
