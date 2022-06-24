import React from "react";
import data from "../../../data/db.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import GridC from "./Cards.styled";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const cards = data.section2Card;

const Cards = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: "320px",
        maxHeight: "260px",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <GridC container>
          <Grid item component="span" className="cardIcon">
            <img className="cardIconImage " src={data.icon} />
          </Grid>
          <Grid item component="span" className="title">
            {data.title}
          </Grid>
          <Grid item componetn="p" className="description">
            We strictly only deal with vendors that provide top notch security
          </Grid>
          <Grid item component="a" href="#1">
            <CardActions sx={{ paddingTop: "1.25rem" }}>
              <a size="small" className="learnButton" href="#">
                Learn More
              </a>
              <ArrowRightAltIcon />
            </CardActions>
          </Grid>
        </GridC>
        <div className="cardImage"></div>
      </CardContent>
    </Card>
  );
};

export default Cards;
