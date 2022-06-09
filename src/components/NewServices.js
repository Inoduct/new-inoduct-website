import React from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import web from "../img/webService.svg";
import app from "../img/app.svg";
import ui from "../img/ui.svg";

function NewServices() {
  return (
    <>
      <Container maxWidth="xl" className="services">
        <Grid container className="services-container">
          <Typography variant="h3" className="services-title">
            Services
          </Typography>
        </Grid>

        <Grid container spacing={0} className="services-inner-container">
          <Grid item md={6} className="service-card-wrapper">
            <img className="services-img" src={web} alt="App" />
          </Grid>
          <Grid item md={6} className="service-card-wrapper">
            <Typography className="service-title web" variant="h2">
              <b>Website</b> <br /> Development.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={0} className="services-inner-container">
          <Grid item md={6} className="service-card-wrapper">
            <Typography className="service-title app" variant="h2">
              <b>Application</b> <br /> Development.
            </Typography>
          </Grid>
          <Grid item md={6} className="service-card-wrapper">
            <img className="services-img" src={app} alt="App" />
          </Grid>
        </Grid>

        <Grid container spacing={0} className="services-inner-container">
          <Grid item md={6} className="service-card-wrapper">
            <img className="services-img" src={ui} alt="App" />
          </Grid>
          <Grid item md={6} className="service-card-wrapper">
            <Typography className="service-title ui" variant="h2">
              <b>UI/UX</b> <br /> Designing.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/*  Mobile =========================== */}

      <Container maxWidth="xl" className="services-mobile">
        <Grid container className="services-container">
          <Typography variant="h3" className="services-title">
            Services
          </Typography>
        </Grid>

        <Grid container spacing={0} className="services-inner-container">
          <Grid item md={6} className="service-card-wrapper">
            <img className="services-img" src={web} alt="App" />
          </Grid>
          <Grid item md={6} className="service-card-wrapper">
            <Typography className="service-title web" variant="h6">
              <b>Website</b>Development.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={0} className="services-inner-container">
          <Grid item md={6} className="service-card-wrapper">
            <img className="services-img" src={app} alt="App" />
          </Grid>
          <Grid item md={6} className="service-card-wrapper">
            <Typography className="service-title app" variant="h6">
              <b>Application</b> Development.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={0} className="services-inner-container">
          <Grid item md={6} className="service-card-wrapper">
            <img className="services-img" src={ui} alt="App" />
          </Grid>
          <Grid item md={6} className="service-card-wrapper">
            <Typography className="service-title ui" variant="h6">
              <b>UI/UX</b>Designing.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NewServices;
