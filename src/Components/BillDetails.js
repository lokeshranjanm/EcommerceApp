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

const BillDetails = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);

  return (
    <>
      <div
        style={{ border: "1px solid #E6E6E6", borderRadius: 4, padding: 12 }}
      >
        <Typography
          style={{ fontSize: "16px", fontWeight: 600, marginBottom: 15 }}
        >
          Bill Details
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              style={{ fontSize: "14px", fontWeight: 400, marginBottom: 5 }}
            >
              Bag Total
            </Typography>
            <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
              Shipping Charge
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{ fontSize: "14px", fontWeight: 500, marginBottom: 5 }}
            >
              ₹307
            </Typography>
            <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
              ₹25
            </Typography>
          </div>
        </div>

        <Divider style={{ marginBottom: 16, marginTop: 20 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ fontSize: "15px", fontWeight: 560, marginBottom: 5 }}
          >
            Total Order
          </Typography>
          <Typography style={{ fontSize: "15px", fontWeight: 560 }}>
            ₹332
          </Typography>
        </div>
        <Button
          size="large"
          style={{ textTransform: "none", width: 200, marginTop: 30 }}
          variant="contained"
          color="primary"
          // onClick={() => setOpen(true)}
        >
          Place Order
        </Button>
      </div>
    </>
  );
};

export default BillDetails;
