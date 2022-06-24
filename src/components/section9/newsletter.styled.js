import styled from "@mui/material/styles/styled";
import { Container, Grid, Box } from "@mui/material";

export const BoxMain = styled(Box)`
  background-color: rgb(25, 43, 69);

  @media (min-width: 425px) {
    margin-top: 5rem;
  }
  @media (min-width: 315px) and (max-width: 425px) {
    margin-top: 10rem;
  }
  @media (max-width: 315px) {
    margin-top: 20rem;
  }
`;

export const MainGrid = styled(Grid)`
  background-color: rgb(25, 43, 69);
  justify-content: center;
  align-items: center;
  @media (min-width: 1025px) {
    height: 265px;
  }
  @media (min-width: 640px) and (max-width: 1025px) {
    height: 335px;
  }
  @media (max-width: 640px) {
    height: 495px;
  } ;
`;

export const MainContainer = styled(Container)``;

export const SendMailGrid = styled(Grid)`
  align-items: center;
  justify-content: center;

  .input {
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    background-color: rgb(32, 56, 89);
    letter-spacing: 0.05em;
    font-weight: 700;
    border-width: 1px;
    border-color: rgb(32, 56, 89);
    transition-duration: 300ms;
    color: rgb(237, 242, 247);
    @media (max-width: 475px) {
      width: 100%;
    }
  }
  button {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgb(72, 187, 120);
    color: rgb(247, 250, 252);
    border-width: 1px;
    border-color: rgb(72, 187, 120);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    @media (max-width: 475px) {
      width: 100%;
      margin-top: 1.5rem;
    }
  }

  .width {
    @media (max-width: 475px) {
      width: 100%;
    }
  }

  /*  */
`;

export const LeftGrid = styled(Grid)`
  //! Left-grid

  display: flex;
  justify-content: center;
  /* align-items: center; */

  //* svg
  svg {
    width: 4rem;
    height: 4rem;
    color: rgb(72, 187, 120);
  }
  .svgIcon {
    /* display: flex;
      width: 100%;  
    justify-content: end; */
  }
  //* newsletter
  .newsLetter {
    margin-left: 1.5rem;
    @media (max-width: 600px) {
      margin-top: 1.5rem;
      margin-left: 0;
    }
  }
  //* h2
  h2 {
    text-align: left;
    color: rgb(247, 250, 252);
    line-height: 1;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
  //*p
  p {
    text-align: left;
    margin-top: 0.25rem;
    color: rgb(160, 174, 192);
    font-weight: 500;
    font-size: 0.875rem;
    max-width: 24rem;
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  //* max-width: 600px
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
