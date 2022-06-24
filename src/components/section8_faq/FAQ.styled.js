import styled from "@mui/material/styles/styled";

import { Grid, Container } from "@mui/material";

export const MainContainer = styled(Container)`
  /* background-color: wheat; */

  @media (min-width: 900px) {
    height: 575px;
  }
  @media (max-width: 900px) {
    height: 550px;
  }
`;

export const MainGrid = styled(Grid)`
  height: 100%;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const GridLeft = styled(Grid)`
  background-image: url("https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80");
  width: 100%;
  height: 100%;
  background-color: rgb(72, 187, 120);
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 #0000, 0 0 #0000;
  border-radius: 0.25rem;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const GridRight = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    width: 100%;
    font-weight: 900;
    letter-spacing: 0.025em;
    color: #243e63;
    font-size: 2.25rem;
    text-align: center;

    @media (min-width: 900px) {
      text-align: left;
      font-size: 3rem;
    }
  }

  p {
    text-align: center;
    font-size: 1rem;

    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;

    line-height: 1.625;
    font-weight: 500;
    margin-top: 1rem;
    color: rgb(124, 139, 161);

    @media (min-width: 900px) {
      width: 100%;
      text-align: left;
      /*  */

      /*  */
    }
  }
  .accordion {
    width: 100%;
  }

  /* //* accordion */
  .accordion-button {
  }

  .accordion-button:focus {
    background-color: white;
    box-shadow: none;
  }

  .accordion-collapse {
    @media (max-width: 900px) {
      border: 1px solid #e5e7eb;
      border-top: none;
    }
  }

  //!   pluc accordion icon
  .accordion-button::after {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");

    /*  */

    /* background-color: #6415ff; */
    background-color: #6415ff57;

    padding: 0.25rem;
    border-radius: 1rem;
    background-size: cover;
    background-position: center;
  }
  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");
  }
  /* //* accordion */

  .accordion-button {
    padding: 0;

    font-size: 1.25rem;
    font-weight: 600;
    color: #243e63;

    cursor: pointer;
    margin-top: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;
    padding: 16px 32px;

    @media (min-width: 900px) {
      margin-top: 2rem;
      border: none;
      padding: 0;
    }
  }

  .accordion-button:focus {
    @media (max-width: 900px) {
      border-bottom: none;
    }
  }

  .accordion-body {
    @media (min-width: 900px) {
      padding: 0;
      height: auto;
      margin-top: 16px;
    }
  }

  .accordion-item {
    @media (min-width: 900px) {
      border: none;
    }
  }
  @media (min-width: 900px) {
    padding-left: 48px;
  }
`;
