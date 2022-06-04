import React from "react";
import { Grid, Container, Typography, Button } from "@mui/material";

function WhatWeDo() {
  return (
    <Container maxWidth="xl">
      <Grid container className="WhatWeDo-container">
        <div>
          <Typography variant="h3" className="WhatWeDo-title">
            What we do?
          </Typography>
          <Grid className="WhatWeDo-para-wrapper">
            <Typography variant="body1" className="WhatWeDo-para">
              We provide digital solutions to empower your business in this
              competitive market. We at Inoduct aim at bringing innovation to
              the products and providing digital services that helps you to ace
              your business.
            </Typography>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
}

export default WhatWeDo;
