import { styled } from "@mui/system";

import AppBar from "@mui/material/AppBar";

const Navbar = styled(AppBar)`
  position: relative;
  background-color: #f7fafc;
  color: #243e63;
  box-shadow: none;

  .NavImage {
    /* background: red; */
    width: 40px;
    height: 40px;
    background-image: url(https://treact.owaiskhan.me/static/media/logo.2c489fc4.svg);
    background-color: rgba(72, 187, 120, var(--tw-bg-opacity));
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 12px 0 0;
  }

  .NavLogo {
    display: flex;
    margin: 0 32px 0 0;
  }
  .Treact {
    font-size: 1.5rem;
    font-weight: 901;
    text-decoration: none;
    color: #243e63;
    transition-duration: 300ms;
    &:hover {
      color: #6415ff;
    }
  }

  .tab {
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export default Navbar;
