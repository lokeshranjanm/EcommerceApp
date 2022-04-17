import React, { useState } from "react";
import {
  Grid,
  Typography,
  Divider,
  Button,
  ButtonGroup,
  Modal,
  TextField,
} from "@mui/material";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useHistory, useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddressForm from "../Pages/AddressForm";
import CloseIcon from "@mui/icons-material/Close";

const AddressCard = () => {
  const history = useHistory();
  const customer = JSON.parse(localStorage.getItem("customer"));
  const address = JSON.parse(localStorage.getItem("address"));
  const [open, setOpen] = useState(false);
  const [isAddress, setIsAddress] = useState(
    JSON.parse(localStorage.getItem("address") ? true : false)
  );
  const [formData, setFormData] = useState({
    name: customer.username,
    mobile: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    state: "",
    city: "",
  });

  const handleFormData = (e) => {
    setFormData((formData) => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.addressLine1.trim() === "" ||
      formData.addressLine2.trim() === "" ||
      formData.city.trim() === "" ||
      formData.pincode.trim() === "" ||
      formData.state.trim() === "" ||
      formData.mobile.trim() === ""
    ) {
      window.alert("All Fields is mandatory");
      return;
    }

    const payload = {

      name: formData.name,
      mobile: formData.mobile,
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      pincode: formData.pincode,
      city: formData.city,
      state: formData.state,
    };
    console.log(payload)

    localStorage.setItem("address", JSON.stringify(payload));
    window.alert("Address Saved Successfully");
    setOpen(false);
    window.location.reload(true);
  };

  return (
    <>
      <div
        style={{ border: "1px solid #E6E6E6", borderRadius: 4, padding: 12 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ fontSize: "16px", fontWeight: 600, marginBottom: 15 }}
          >
            Delivery Address
          </Typography>

          {!isAddress && (
            <Button
              size="large"
              style={{ textTransform: "none" }}
              variant="outlined"
              color="primary"
              onClick={() => setOpen(true)}
            >
              Add Address
            </Button>
          )}
        </div>
        {!isAddress && (
          <Typography
            style={{
              fontSize: "14px",
              color: "grey",
            }}
          >
            Address not added, Please add your address!
          </Typography>
        )}
        {isAddress && (
          <div>
            <Typography
              style={{ fontSize: "15px", fontWeight: 530, marginBottom: 6 }}
            >
              {address.name}
            </Typography>
            <Typography style={{ fontSize: "12px", fontWeight: 400 }}>
              {address.mobile}
            </Typography>
            <Typography
              style={{ fontSize: "12px", fontWeight: 400, marginBottom: 6 }}
            >
              {address.addressLine1}, {address.addressLine2}, {address.city},{" "}
              {address.state} - {address.pincode}
            </Typography>
          </div>
        )}
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: "flex",
          juystfyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "0 25px ",
            borderRadius: 6,
            position: "absolute",
            background: "#ffffff",
            width: 512,
            height: "95vh",
            overflow: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              paddingTop: 25,
              zIndex: 2,
              background: "#ffffff",
            }}
          >
            <Typography
              style={{
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "32px",
                color: "#1A1A1A",
              }}
            >
              Add Address
            </Typography>
            <CloseIcon
              fontSize="large"
              onClick={() => setOpen(false)}
              style={{ minWidth: 0, padding: 6, cursor: "pointer" }}
            />
          </div>
          <div>
            <TextField
              size="small"
              required
              id="outlined-required"
              label="Name"
              name="name"
              style={{ marginTop: 5, width: "100%" }}
              value={formData.name}
              onChange={handleFormData}
            />
            <TextField
              size="small"
              required
              id="outlined-required"
              label="Mobile Number"
              name="mobile"
              style={{ marginTop: 30, width: "100%" }}
              value={formData.mobile}
              onChange={handleFormData}
            />

            <TextField
              size="small"
              required
              id="outlined-required"
              label="Address Line 1"
              style={{ marginTop: 30, width: "100%" }}
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleFormData}
            />
            <TextField
              size="small"
              id="outlined-required"
              label="Address Line 2"
              style={{ marginTop: 30, width: "100%" }}
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleFormData}
            />
            <TextField
              size="small"
              required
              id="outlined-required"
              label="Pincode"
              style={{ marginTop: 30, width: "100%" }}
              name="pincode"
              value={formData.pincode}
              onChange={handleFormData}
            />
            <TextField
              size="small"
              required
              id="outlined-required"
              label="City"
              style={{ marginTop: 30, width: "100%" }}
              name="city"
              value={formData.city}
              onChange={handleFormData}
            />
            <TextField
              size="small"
              required
              id="outlined-required"
              label="State"
              style={{ marginTop: 30, width: "100%" }}
              name="state"
              value={formData.state}
              onChange={handleFormData}
            />
          </div>
          <div
            style={{
              height: 84,
              position: "sticky",
              background: "#ffffff",
              zIndex: 2,
              bottom: 0,
              marginTop: 24,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                padding: "25px 0px",
                display: "flex",
              }}
            >
              <Button
                size="large"
                style={{ textTransform: "none", marginRight: 18, width: 130 }}
                variant="outlined"
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="large"
                style={{ textTransform: "none", width: 130 }}
                variant="contained"
                color="primary"
                onClick={ handleSubmit}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddressCard;
