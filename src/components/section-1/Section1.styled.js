import { styled } from "@mui/system";
import { Grid } from "@mui/material";

export const GridContainer = styled(Grid)`
  height: 620px;
  /* @media (min-width: ) */
  @media (max-width: 900px) {
    height: 988px;
  }
`;

export const Grid1 = styled(Grid)`
  background-color: #f7fafc;
  padding-left: 2.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .grid1Navbar {
    width: 100%;
  }

  h1 {
    font-weight: 900;
    font-size: 3rem;
  }
  h1 span {
    color: #6415ff;
  }
  p {
    font-size: 1.125rem;
    line-height: 2;
    max-width: 28rem;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    .gridsContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .grid2Text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: 770px) and (max-width: 900px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (min-width: 600px) and (max-width: 770px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    padding: 1.5rem 1.5rem;
    h1 {
      display: flex;
      flex-direction: column;
      font-size: 1.875rem;
    }
    .grid3Button {
      display: flex;
      flex-direction: column;
    }
    .grid3Button Button {
      margin-left: 0;
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    height: 620px;
  }
  @media (min-width: 1200px) and (max-width: 2100px) {
    .grid2Text {
      max-width: 520px;
    }
  }
  @media (min-width: 2100px) {
    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 4rem;
    }
    p {
      text-align: center;
      max-width: none;
      font-size: 1.8rem;
    }

    .grid3Button {
      display: flex;
      justify-content: center;
      align-items: center;

      Button {
        font-size: 1.5rem;
        width: 20rem;
        margin: 0 2rem;
      }
    }
  }
`;

export const Grid2 = styled(Grid)`
  background-image: url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/bc/5b/07/bora-bora-hotel.jpg?w=1200&h=-1&s=1);
  background-color: rgb(72, 187, 120);
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    height: 24rem;
  }
`;
