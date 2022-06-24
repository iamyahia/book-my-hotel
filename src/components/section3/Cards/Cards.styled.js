import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import { styled } from "@mui/system";

export const CardMediaImage = styled(CardMedia)`
  height: 255px;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export const CardContentStyled = styled(CardContent)`
  padding: 1.5rem 2.5rem;
  p {
    font-size: 0.875rem;
    line-height: 2;
    margin-top: 1rem;
  }

  .location-price {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .location-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .svg-icon {
    width: 28px;
    display: flex;
    border-radius: 2rem;
    padding: 0.5rem;
    justify-content: center;
    --tw-bg-opacity: 1;
    align-items: center;
    background-color: rgba(74, 85, 104, var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgba(247, 250, 252, var(--tw-text-opacity));
  }
  .svg-icon svg {
    width: 0.75rem;
    height: 0.75rem;
  }
  .current-location {
    margin-left: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    --tw-text-opacity: 1;
    color: rgba(45, 55, 72, var(--tw-text-opacity));
  }

  .dollar {
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .star-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardStyled = styled(Card)`
  max-width: 485px;
  height: 560px;
  margin-right: 2rem;
  border-radius: 15% 2%;
  height: 100%;
  margin-top: 4rem;
  @media (max-width: 900px) {
    margin: auto;
    margin-top: 4rem;
  }
`;
