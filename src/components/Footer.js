import React from "react";

import {
  Button,
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  Grid,
  Paper,
  ButtonGroup,
} from "@mui/material";
import Logo from "../img/logo.svg";

export default function Footer() {
  return (
    <Container className="Footer-container " style={{ padding: "5rem 3rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <img src={Logo} className="footer-logo" alt="logo" />
          <Typography gutterBottom variant="h6" className="footerHeading">
            Inoduct
          </Typography>
          {/* <Typography gutterBottom variant="body2" className="footerSubH">
            Learn To Code
          </Typography> */}
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography gutterBottom variant="h6" className="footerText">
            Contact Us
          </Typography>
          <Typography gutterBottom variant="body2" className="footerText">
            Inoduct@gmail.com
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography gutterBottom variant="h6" className="footerText">
            Our Channels
          </Typography>
          <Typography gutterBottom variant="body2" className="footerText">
            Geek Fox
          </Typography>
          <Typography gutterBottom variant="body2" className="footerText">
            Suraj Parik
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography gutterBottom variant="h6" className="footerText">
            Social Media
          </Typography>
          <Typography gutterBottom variant="body2" className="footerText">
            {" "}
            Instagram
          </Typography>
          <Typography gutterBottom variant="body2" className="footerText">
            {" "}
            Facebook
          </Typography>
          <Typography gutterBottom variant="body2" className="footerText">
            {" "}
            LinkedIn
          </Typography>
        </Grid>
      </Grid>
      <div
        style={{
          background: "#041C32",
          textAlign: "center",
          height: "fit-contant",
          padding: "1rem",
          color: "#fff",
          fontWeight: "bolder",
          marginTop: "2rem",
        }}
      >
        All rights reserved
      </div>
    </Container>
  );
}
