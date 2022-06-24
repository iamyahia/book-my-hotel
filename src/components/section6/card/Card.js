import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

//! components
import { MainCard } from "./card.styled";
//
const ReactCard = ({ data }) => {
  return (
    <MainCard>
      <CardMedia
        component="img"
        height="194"
        image={data.cardImage}
        alt="Paella dish"
        className="cardImage"
      />
      <CardContent sx={{ padding: "0" }}>
        <h5>{data.title}</h5>
        <Typography variant="body2" color="text.secondary" className="p-card">
          {data.info}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={data.userImage}
            className="userName"
          >
            R
          </Avatar>
        }
        title={data.userName}
        subheader={data.userRole}
      />
    </MainCard>
  );
};

export default ReactCard;
