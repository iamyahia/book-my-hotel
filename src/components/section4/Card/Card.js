import React from "react";

//! packages
import CardActions from "@mui/material/CardActions";

//! styles
import Button from "../../styles/Button.styled";
import { CardMediaImage, CardContentStyled, CardStyled } from "./card.styled";
const Card = ({ data }) => {
  return (
    <CardStyled>
      <CardMediaImage
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
      />
      <CardContentStyled>
        <div class="location-star">
          <h1>{data.title}</h1>
          <div class="per-day">
            <span class="">${data.price}</span>
            per day
          </div>
        </div>

        <h5>{data.head}</h5>

        <div className="location-footer" s>
          <div className="trending basics">
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
              className="svg"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            trending
          </div>

          <div className="days-tour basics">
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
              className="svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>{" "}
            {data.days} Days Tour
          </div>

          <div className="location-info basics">
            <div class="svg-icon">
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
                className="svg"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="current-location">{data.location}</div>
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
          sx={{
            width: "100%",
            padding: "0.75rem 2rem;",
            fontWeight: "700",
            bordereadius: "0.25rem",
            backgroundColor: "rgba(100,21,255 )",
            color: "rgba(247,250,252 )",
            transitionDuration: "300ms",
            textTransform: "capitalize",
          }}
        >
          Book know
        </Button>
      </CardActions>
    </CardStyled>
  );
};

export default Card;
