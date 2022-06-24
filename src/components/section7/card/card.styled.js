import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

export const MainCard = styled(Card)`
  box-shadow: none;

  .cardImage {
    height: 260px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.75;
    color: rgba(100, 21, 255, 0.9);
    display: inline-block;
    margin-left: 0.25rem;
    margin-top: -0.75rem;
  }
  .p-card {
    font-size: 1.5rem;
    text-align: left;

    color: rgba(36, 62, 99, 0.9);
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
  .MuiCardHeader-avatar {
    width: 5rem;
    height: 5rem;
  }

  .userName {
    width: 100%;
    height: 100%;
  }
`;
