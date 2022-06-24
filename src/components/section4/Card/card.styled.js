import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import { styled } from "@mui/system";

export const CardMediaImage = styled(CardMedia)`
  height: 320px;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export const CardContentStyled = styled(CardContent)`
  margin-top: 1rem;
  padding: 0;
  p {
    font-size: 0.875rem;
    line-height: 2;
    margin-top: 1rem;
  }
  .current-location {
    color: #718096;

    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .feather-star {
    width: 1.5rem;
    height: 1.5rem;
    color: rgba(236, 201, 75);
    fill: currentcolor;
  }
  .location-star {
    display: flex;
    justify-content: space-between;
  }
  .location-star h1 {
    color: rgba(100, 21, 255, 0.9);
    margin: 0;
    font-size: 1.125rem;
    font-weight: 700;
  }
  .per-day {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .per-day span {
    margin-right: 2px;
    font-weight: 700;
    color: rgba(45, 55, 72, 0.9);
    font-size: 1.125rem;
  }

  h5 {
    margin: 0;
    font-size: 1.25rem;
    margin-top: 1rem;
    font-weight: 700;
  }

  //  footer
  .basics {
    display: flex;
    text-transform: uppercase;
    font-size: 0.75rem;
    align-items: center;
    margin-top: 1rem;
    font-weight: 600;
  }
  .location-footer {
    display: flex;
    justify-content: space-between;
  }
  .trending {
    color: #718096;
  }
  .svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.25rem;
  }
  .days-tour {
    display: flex;
    color: #718096;
  }
  .location-info {
    display: flex;
    color: #718096;
  }
`;

export const CardStyled = styled(Card)`
  width: 100%;
  height: 560px;
  margin-right: 2rem;
  margin-top: 4rem;
  box-shadow: none;

  @media (max-width: 1200px) and (min-width: 900px) {
    max-width: 390px;
    /* height: 330px; */
  }

  @media (max-width: 900px) {
    margin: auto;
    margin-top: 4rem;
    width: 400px;
  }
`;
