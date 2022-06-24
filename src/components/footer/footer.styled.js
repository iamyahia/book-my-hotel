import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export const FooterBox = styled(Box)`
  color: rgb(247, 250, 252);
  background-color: rgb(26, 32, 44);

  display: flex;

  @media (min-width: 1025px) {
    height: 425px;
  }

  @media (min-width: 640px) and (max-width: 1025px) {
    height: 395px;
  }

  @media (max-width: 640px) {
    height: 550px;
  }
`;
export const ContainerMain = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-logo {
    width: 40px;
    height: 40px;
    background-image: url(https://treact.owaiskhan.me/static/media/logo.2c489fc4.svg);
    background-color: rgba(72, 187, 120, var(--tw-bg-opacity));
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 12px 0 0;
  }
`;
export const NavBox = styled(Box)`
  margin-top: 2rem;
  font-weight: 500;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
  li {
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width: 640px) {
      padding-bottom: 0.25rem;
      transition-duration: 300ms;
      margin-top: 0.5rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;

export const SocialIconBox = styled(Box)`
  margin-top: 2.5rem;
  a {
    display: inline-block;
    color: rgb(247, 250, 252);
    transition-duration: 300ms;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
export const CopyRigth = styled(Box)`
  text-align: center;
  margin-top: 2.5rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  font-size: 0.875rem;
  color: rgb(113, 128, 150);
`;
