import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const cardGrid = styled(Grid)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cardIcon {
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 9999px;
    padding: 1rem;
    --tw-bg-opacity: 1;
    background-color: rgba(247, 250, 252);
  }
  .cardIconImage {
    background-image: url(${(prop) => prop.icon});
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .title {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1;
  }
  .description {
    max-width: 250px;
    margin-top: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgba(80, 101, 130);
    text-align: center;
  }

  .learnButton {
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgba(131, 68, 255, var(--tw-text-opacity));
    line-height: 1;
    transition-duration: 300ms;
    text-decoration: none;
  }
`;

export default cardGrid;
