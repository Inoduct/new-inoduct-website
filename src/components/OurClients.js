import { Container, Grid, Typography, Paper } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import React from "react";

function OurClients() {
  return (
    <Container maxWidth="xl">
      <Grid container className="OurClients-container">
        <Typography variant="h3" className="OurClients-title">
          Our Clients
        </Typography>

        <Grid container spacing={0} className="OurClients-inner-container">
          <Grid item md={3} className="service-card-wrapper">
            <Paper className="OurClients-paper">
              <img
                src="http://www.myenglishpictionary.com/front/images/logo.png"
                alt="MEP"
              />
            </Paper>
          </Grid>

          <Grid item md={3} className="service-card-wrapper">
            <Paper className="OurClients-paper">
              <img
                src="http://www.myenglishpictionary.com/front/images/logo.png"
                alt="MEP"
              />
            </Paper>
          </Grid>

          <Grid item md={3} className="service-card-wrapper">
            <Paper className="OurClients-paper">
              <img
                src="http://www.myenglishpictionary.com/front/images/logo.png"
                alt="MEP"
              />
            </Paper>
          </Grid>

          <Grid item md={3} className="service-card-wrapper">
            <Paper className="OurClients-paper">
              <img
                src="http://www.myenglishpictionary.com/front/images/logo.png"
                alt="MEP"
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurClients;
