import { styled } from "@mui/material/styles";
import { Grid, Container } from "@mui/material";

export const MainGrid = styled(Grid)`
  h2 {
    margin: 0;
    text-align: left;
    line-height: 1.25;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.025em;
  }

  p {
    margin-left: 0px;
    margin-right: 0px;
    line-height: 1.625;
    font-weight: 500;
    margin-top: 1rem;
    text-align: left;
    font-size: 1.125rem;
    color: rgba(124, 139, 161, 0.9);
  }

  .right-slider {
    height: 100%;
  }
  .slick-list {
    height: 100%;
  }
  .image {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
  }

  .community {
    margin-top: 5rem;
  }

  .MuiCardHeader-title {
    font-weight: 600;
    font-size: 1.875rem !important;
    color: rgb(100, 21, 255);
  }

  .MuiCardHeader-subheader {
    font-weight: 500;
    color: rgb (124, 139, 161);
    font-size: 20px !important;
  }

  @media (min-width: 1025px) {
    height: 580px;

    .left-name {
      padding-right: 3rem;
    }
    .rigthImageGrid {
      height: 580px;
    }
  }

  @media (min-width: 640px) and (max-width: 1025px) {
    height: 580px;
  }

  @media (min-width: 900px) and (max-width: 1025px) {
    height: 580px;

    .left-name {
      padding-right: 3rem;
    }
  }

  //! left grid
  @media (max-width: 900px) {
    height: 340px;

    max-width: 28rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    line-height: 1.625;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 1rem;
    color: "#243E63";

    .testimonials {
      h2 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }
  }

  @media (max-width: 600px) {
    .cardHeader {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      .MuiCardHeader-content {
        margin-top: 1rem;
        .MuiCardHeader-title {
          font-weight: 600;
          font-size: 1.25rem;
          --tw-text-opacity: 1;
          color: rgb(100, 21, 255);
        }
        .MuiCardHeader-subheader {
          font-weight: 500;
          color: rgb(124, 139, 161);
        }
      }
    }
  }

  //* right grid button,
  .rigthImageGrid {
    position: relative;
    height: 100%;
  }
  .slick-track {
    height: 100%;
  }
  .buttons {
    bottom: 0px !important;
    right: 0px !important;
    background-color: rgb(247, 250, 252) !important;
    padding: 1rem 1.5rem !important;
    border-top-left-radius: 1.5rem;
    border-width: 1px !important;
  }
  .arrow-button {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    color: rgb(247, 250, 252);
    padding: 0.5rem;
    background-color: #6415ff;
    border-radius: 9999px;

    &:hover {
      background-color: #5011cc;
    }
  }
  .right_button {
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 0;
    background: white;
    padding: 2rem;
    border-radius: 3rem 0 0 0;
  }
`;

export const MainContainer = styled(Container)`
  @media (min-width: 1025px) {
    height: 775px;
  }

  @media (min-width: 900px) and (max-width: 1025px) {
    height: 750px;

    .left-name {
      padding-right: 3rem;
    }
  }

  @media (min-width: 640px) and (max-width: 900px) {
    height: 1050px;
  }

  @media (max-width: 640px) {
    height: 1050px;
    h2 {
      font-size: 2.25rem;
    }
  }

  @media (min-width: 390px) and (max-width: 600px) {
    height: 1200px;
  }

  @media (max-width: 390px) {
    height: 1300px;
  }
`;
