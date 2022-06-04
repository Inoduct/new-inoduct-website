import { Container, Grid, Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";

function Services() {
  return (
    <Container maxWidth="xl">
      <Grid container className="services-container">
        <Typography variant="h3" className="services-title">
          Services
        </Typography>
      </Grid>
      <Grid container spacing={0} className="services-inner-container">
        <Grid item md={4} className="service-card-wrapper">
          <Paper className="service-paper">
            <div className="service-circle">
              <LanguageIcon className="service-icon" />
            </div>
            <Typography variant="h6" className="">
              Website/ Mobile Applications
            </Typography>
          </Paper>
        </Grid>

        <Grid item md={4} className="service-card-wrapper">
          <Paper className="service-paper">
            <div className="service-circle">
              <LanguageIcon className="service-icon" />
            </div>
            <Typography variant="h6">Website/ Mobile Applications</Typography>
          </Paper>
        </Grid>

        <Grid item md={4} className="service-card-wrapper">
          <Paper className="service-paper">
            <div className="service-circle">
              <LanguageIcon className="service-icon" />
            </div>
            <Typography variant="h6">Website/ Mobile Applications</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
