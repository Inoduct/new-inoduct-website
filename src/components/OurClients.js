import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function OurClients() {
  return (
    <Container maxWidth="xl">
      <Grid container className="OurClients-container">
        <Typography variant="h3" className="services-title">
          Our Clients
        </Typography>
      </Grid>
    </Container>
  );
}

export default OurClients;
