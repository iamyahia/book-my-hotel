import { Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";

//  components
import { GridContainer, Grid1, Grid2 } from "./Section1.styled";
import Button from "../styles/Button.styled";

const Section1 = () => {
  return (
    <>
      <GridContainer container>
        <Grid1 item container xs={12} md={8} lg={6} xl={5}>
          <Grid item className="grid1Navbar">
            <Navbar />
          </Grid>
          <Container className="gridsContainer">
            <Grid item className="grid2Text">
              <h1>
                Find Perfect Hotels <span>anywhere you go.</span>
              </h1>
              <p>
                We've been in the hotels business across the world for 5 years
                now. We assure you that you will always enjoy your stay with us.
              </p>
            </Grid>
            <Grid item className="grid3Button">
              <Button bg="#6415ff" bgHover="#5011cc" mycolor="#f7fafc">
                Sign Up
              </Button>
              <Button
                bg="#e2e8f0"
                mycolor="#4a5568"
                bgHover="rgba(203,213,224)"
                sx={{
                  marginLeft: "1rem",
                  "@media (max-width:600px)": {
                    marginTop: "1rem",
                  },
                }}
              >
                Search Hotels
              </Button>
            </Grid>
          </Container>
        </Grid1>
        <Grid2 item xs={12} md={4} lg={6} xl={7}></Grid2>
      </GridContainer>
    </>
  );
};

export default Section1;
