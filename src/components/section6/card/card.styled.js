import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

export const MainCard = styled(Card)`
  max-width: 345px;
  box-shadow: none;

  .cardImage {
    height: 260px;
  }

  .p-card {
    margin-top: 0.5rem;
    font-weight: 500;
    color: rgba(124, 139, 161, 0.8);
    line-height: 2;
    font-size: 0.875rem;
  }
  .MuiCardHeader-title {
    font-weight: 600;
    font-size: 1.125rem;
  }
  .MuiCardHeader-subheader {
    color: rgba(124, 139, 161, 0.9);
    font-size: 0.875rem;
  }

  h5 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    transition-duration: 300ms;
  }
`;
