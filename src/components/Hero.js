import { Grid, Container, Typography, Button } from "@mui/material";
import React from "react";
import logo from "../img/logo.svg";

function Hero() {
  return (
    <Container maxWidth="xl">
      <Grid container maxWidth="xl" className="hero-container">
        <Grid item md={6} className="hero-title-grid">
          <Typography variant="h3" className="hero-title">
            Fast & Effective <br /> Solution With <br /> Inoduct
          </Typography>
          <Button color="inherit" className="contact getInTouch">
            Get In Touch
          </Button>
        </Grid>
        <Grid item md={6} className="hero-logo-grid">
          <img src={logo} alt="logo" className="logo" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
