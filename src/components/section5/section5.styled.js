import { styled } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

export const MainContainer = styled(Container)`
  padding: 6rem 0;
  /* padding: " 10rem 0",

"@media (max-width:900px)": {
  maxWidth: "28rem",
},
"@media (max-width:500px)": {
  padding: "1rem",
  heigth: "820px !important",
  margin: " 10rem 0 ", */
  /* }, */
`;

export const GridContainer = styled(Grid)`
  h2 {
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: 0.025em;
  }
  .number {
    font-weight: 700;
    color: rgba(100, 21, 255, 0.9);
  }

  .grid-image {
    background-image: url(https://images.unsplash.com/photo-1582564286939-400a311013a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80);
    background-color: rgba(72, 187, 120, 0.8);
    background-size: cover;
    background-position: center center;
    width: 100%;
    /* height: 640px; */
  }

  @media (min-width: 1280px) {
    height: 640px;

    h2 {
      font-size: 3rem;
    }
    .typo {
      padding-left: 4rem;
    }
    p {
      text-align: left;
      font-size: 1rem;

      font-weight: 500;
      line-height: 1.625;
      color: rgba(124, 139, 161, 0.9);
      margin-top: 1rem;
    }

    .grid-image {
      height: 640px;
    }

    .services {
      font-size: 1.875rem;
    }
  }
  @media (min-width: 1090px) and (max-width: 1280px) {
    height: 610px;

    h2 {
      font-size: 3rem;
    }
    p {
      text-align: left;
      font-size: 1rem;

      font-weight: 500;
      line-height: 1.625;
      color: rgba(124, 139, 161, 0.9);
      margin-top: 1rem;
    }
    .typo {
      padding-left: 4rem;
    }
    .grid-image {
      height: 610px;
    }

    .services {
      font-size: 1.875rem;
    }
  }
  @media (min-width: 1025px) and (max-width: 1090px) {
    height: 638.25px;

    h2 {
      font-size: 3rem;
    }
    p {
      text-align: left;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.625;
      color: rgba(124, 139, 161, 0.9);
      margin-top: 1rem;
    }
    .typo {
      padding-left: 4rem;
    }

    .grid-image {
      height: 638.25px;
    }

    .services {
      font-size: 1.875rem;
    }
  }

  @media (min-width: 880px) and (max-width: 1025px) {
    height: 440px;

    .typo {
      padding-left: 2rem;
    }
    h2 {
      font-size: 2.25rem;
    }
    p {
      text-align: left;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.625;
      color: rgba(124, 139, 161, 0.9);
      margin-top: 1rem;
    }
    .grid-image {
      height: 440px;
    }
    .services {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 600px) and (max-width: 880px) {
    /* height: 460px; */

    h2 {
      font-size: 2.25rem;
      text-align: center;
      line-height: 1.25;
    }

    p {
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.625;
      color: rgba(124, 139, 161, 0.8);
      margin-top: 1rem;
      max-width: 24rem;
    }
    .grid-image {
      height: 320px;
    }
    .services {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 500px) and (max-width: 600px) {
    height: 820.5px;

    h2 {
      text-align: center;
      font-size: 1.875rem;

      line-height: 1.25;
    }

    p {
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.625;
      color: rgba(124, 139, 161, 0.8);
      margin-top: 1rem;
      max-width: 24rem;
    }
    .grid-image {
      height: 320px;
    }

    .services {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 500px) {
    /* height: 320px; */

    h2 {
      text-align: center;
      font-size: 1.875rem;

      line-height: 1.25;
    }
    p {
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.625;
      color: rgba(124, 139, 161, 0.8);
      margin-top: 1rem;
      max-width: 20rem;
    }
    .grid-image {
      height: 320px;
    }
    .services {
      font-size: 1.125rem;
    }
  }

  /* fonts - section-5 */
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    .grid-image {
      max-width: 30rem;
    }

    .services {
      padding: 1rem;
      text-align: center;
    }
  }

  /* @media (min-width: none) and (max-width:none){

  } */
`;

export const GridServices = styled(Grid)``;
