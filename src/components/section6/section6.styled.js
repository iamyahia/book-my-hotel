import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

export const GridPost = styled(Grid)`
  height: 100%;
  padding: 6rem 0;

  .grid-container {
    margin-top: 3rem;
    height: 100%;
  }

  h2 {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.025em;
    margin: 0;
  }
  h5 {
    font-size: 1rem;
    margin-top: 0px;
    margin-right: 1rem;
    transition-duration: 300ms;
    color: #243e63;
    &:hover {
      color: rgba(100, 21, 255, 0.9);
    }
  }

  .aHref {
    display: flex;
    justify-content: space-between;
  }
  .p {
    color: #7c8ba1;
  }
  .image {
    height: 5rem;
    width: 5rem;
    flex-shrink: 0;
    background-size: cover;
    background-position: center center;
    border-radius: 0.25rem;
  }

  .recentPosts h5 {
    font-size: 1.125rem;
  }

  @media (min-width: 1200px) {
    .popularPost {
      height: 505px;
    }
  }

  @media (max-width: 1200px) {
    .popularPost {
      height: 505px;
    }
    .popularH2Style {
      width: 100%;
      text-align: center;
    }
  }

  @media (min-width: 900px) {
    .recent-Grid-content {
      padding-right: 3rem;
    }
    .popularPost {
      height: 505px;
    }
  }
  @media (min-width: 600px) {
    .popularPost {
      height: 505px;
    }

    .popular-Grid {
      height: 100%;
      background-color: red;
    }
  }
`;
