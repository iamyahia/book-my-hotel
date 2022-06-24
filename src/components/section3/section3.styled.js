import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const GridMain = styled(Grid)`
  .h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-right: auto;
    text-align: center;
    @media (max-width: 600px) {
      /* margin: auto; */
      margin: 0;
    }
  }

  .arrow-button {
    background-color: #6415ff;
    border-radius: 9999px;
    color: white;
    margin-right: 2rem;
    padding: 0.5rem;

    &:hover {
      background-color: #5011cc;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    @media (max-width: 600px) {
      margin: auto;
    }
  }

  .Grid-button {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
      margin-top: 2rem;
    }
  }
`;
