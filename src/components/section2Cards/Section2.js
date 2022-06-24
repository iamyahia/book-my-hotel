import React from "react";
import Cards from "./Cards/Cards";
import data from "../../data/db.json";
import { Container, Grid } from "@mui/material";
const Section2 = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            // display: "flex",

            "@media (min-width:900px)": {
              height: "490px",
              alignItems: "center",
            },
            "@media (max-width:900px)": {
              padding: "80px 0px",
            },
          }}
        >
          {data.section2Card.map((data, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={4}
              sx={{
                "@media (min-width:900px)": {
                  "&:hover": {
                    transform: "scale(1.08)  ",
                    transitionDuration: "0.3s",
                  },
                },

                "@media (max-width:900px)": {
                  marginTop: "1rem",
                  justifyContent: "center",
                  display: "flex",
                },
              }}
            >
              <Cards data={data} key={index} />
            </Grid>
          ))}
          {/* <img
            className="imageSection2"
            src="/section2.png"
            sx={{ position: "absolute !important", right: "-1rem !important" }}
          /> */}
        </Grid>
      </Container>
    </>
  );
};

export default Section2;
