import { Container, Grid, Typography, Paper } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import React from "react";

function OurClients() {
  return (
    <Container maxWidth="xl">
      <Grid container className="Team-container">
        <Typography variant="h3" className="Team-title">
          Our Team
        </Typography>

        <Grid container spacing={0} className="Team-inner-container">
          <Grid item md={3} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIht2ih-x7jlDpdLr1gfqWZjHTGXIFozJbY8K9EDosKTWcVDOlqObELMdhqgweWGkUKWc&usqp=CAU"
                alt="MEP"
              />
              <Typography variant="h6" className="Team-name">
                Prasad Parik
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Tech Head
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={3} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIht2ih-x7jlDpdLr1gfqWZjHTGXIFozJbY8K9EDosKTWcVDOlqObELMdhqgweWGkUKWc&usqp=CAU"
                alt="MEP"
              />
              <Typography variant="h6" className="Team-name">
                Prasad Parik
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Tech Head
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={3} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIht2ih-x7jlDpdLr1gfqWZjHTGXIFozJbY8K9EDosKTWcVDOlqObELMdhqgweWGkUKWc&usqp=CAU"
                alt="MEP"
              />
              <Typography variant="h6" className="Team-name">
                Prasad Parik
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Tech Head
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={3} className="Team-card-wrapper">
            <Paper className="team-paper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIht2ih-x7jlDpdLr1gfqWZjHTGXIFozJbY8K9EDosKTWcVDOlqObELMdhqgweWGkUKWc&usqp=CAU"
                alt="MEP"
              />
              <Typography variant="h6" className="Team-name">
                Prasad Parik
              </Typography>
              {/* <Typography variant="body" className="Team-post">
                Co-Founder
              </Typography> */}
              <Typography variant="body" className="Team-post">
                Tech Head
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurClients;
