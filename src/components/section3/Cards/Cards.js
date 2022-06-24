import * as React from "react";

//! packages
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//! styles
import { CardMediaImage, CardContentStyled, CardStyled } from "./Cards.styled";
import Button from "../../styles/Button.styled";
import { padding } from "@mui/system";

const Cards = ({ data }) => {
  return (
    <CardStyled sx={{}}>
      <CardMediaImage
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
      />
      <CardContentStyled>
        <div className="location-star">
          <h1>{data.title}</h1>
          <div className="star-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="sc-hUpaWb blbXGf" style={{ marginLeft: "0.5rem" }}>
              {data.starRate}
            </span>
          </div>
        </div>
        <div className="location-price">
          <div className="location-info">
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="current-location">{data.location}</div>
          </div>
          <div className="dollar">
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-dollar-sign"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div className="current-location">USD {data.day}/Day</div>
          </div>
        </div>
        <p color="text.secondary">{data.description}</p>
      </CardContentStyled>
      <CardActions sx={{ padding: "0" }}>
        {/* <Button bg="#6415ff" bgHover="#5011cc" mycolor="#f7fafc">
          Sign Up
        </Button> */}
        <Button
          bg="#6415ff"
          bgHover="#5011cc"
          mycolor="#f7fafc"
          sx={{ width: "100%" }}
        >
          Book know
        </Button>
      </CardActions>
    </CardStyled>
  );
};

export default Cards;
