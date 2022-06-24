import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const GridMain = styled(Grid)`
  display: flex;
  margin-top: 6rem;

  .left-Grid a {
    display: inline-flex;
    padding-bottom: 5px;

    cursor: pointer;
    font-weight: 700;
    color: rgb(100, 21, 255);

    border-color: transparent;
    transition-duration: 300ms;

    &:hover {
      border-bottom: 2px solid rgb(100, 21, 255);
    }
  }

  .left-Grid h2 {
    font-weight: 900;
    letter-spacing: 0.025em;
    font-size: 40px;
  }

  .left-Grid p {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.625;
    color: rgb(124, 139, 161);
    margin-top: 2rem;
  }

  @media (max-width: 1200px) {
    .left-Grid {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .left-Grid h2 {
      text-align: center;
    }
    .left-Grid p {
      text-align: center;
      max-width: 25rem;
    }
  }
`;

export const GridStyled = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
