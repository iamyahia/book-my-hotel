import React from "react";
import { Container, Grid } from "@mui/material";

import {
  GridContainer,
  GridImage,
  GridServices,
  MainContainer,
} from "./section5.styled";

import datas from "../../data/db.json";

const Section5 = () => {
  return (
    <MainContainer>
      <GridContainer container>
        <Grid className="grid-image" item sm={12} md={6}></Grid>
        <Grid item container sm={12} md={6} className="typo">
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              "@media (max-width:600px)": {
                marginTop: "1rem",
              },
            }}
          >
            <h2>We have the best service.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid>
          {datas.service.map((data, index) => (
            <GridServices item xs={6} className="services">
              <div className="number"> {data.number} </div>
              <div className="title"> {data.title} </div>
            </GridServices>
          ))}
        </Grid>
      </GridContainer>
    </MainContainer>
  );
};

export default Section5;
