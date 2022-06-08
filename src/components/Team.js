import { Container, Grid, Typography, Paper } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";

import img1 from "../img/team/shrinath.jpg";
import img2 from "../img/team/rushi.jpeg";
import img3 from "../img/team/prasad.jpg";
import img4 from "../img/team/vishnu.jpeg";
import img5 from "../img/team/harshal.jpg";

function OurClients() {
  return (
    <Container maxWidth="xl">
      <Grid container className="Team-container">
        <Typography variant="h3" className="Team-title">
          Our Team
        </Typography>

        <Grid container spacing={0} className="Team-inner-container">
          <Grid item md={2} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img src={img1} alt="MEP" />
              <Typography variant="h6" className="Team-name">
                Shrinath Jaiswal
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Video Editor
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={2} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img src={img2} alt="MEP" />
              <Typography variant="h6" className="Team-name">
                Rushikesh Pallod
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Project Manager
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={2} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img src={img3} alt="MEP" />
              <Typography variant="h6" className="Team-name">
                Prasad Parik
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Technical Head
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={2} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img src={img4} alt="MEP" />
              <Typography variant="h6" className="Team-name">
                Vishnu Kabra
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                P.R.O
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={2} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img src={img5} alt="MEP" />
              <Typography variant="h6" className="Team-name">
                Harshal
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Graphic
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurClients;
