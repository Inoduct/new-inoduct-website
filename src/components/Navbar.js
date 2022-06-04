import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <AppBar position="static" className="Navbar">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          style={{ flexGrow: 1, float: "left" }}
          className="logo-name"
        >
          Inoduct
        </Typography>
        <Button color="inherit" className="contact">
          Get In Touch
        </Button>
      </Toolbar>
    </AppBar>
  );
}
