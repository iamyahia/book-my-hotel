import React from "react";
import {
  MainGrid,
  MainContainer,
  LeftGrid,
  SendMailGrid,
  BoxMain,
} from "./newsletter.styled";
import { Button, Container, Grid, Input } from "@mui/material";

const Newsletter = () => {
  return (
    <BoxMain component="div">
      <MainContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MainGrid container>
          <LeftGrid item xs={12} md={6}>
            <div className="svgIcon">
              <svg viewBox="0 0 64 64">
                <g
                  fill-rule="evenodd"
                  stroke="currentColor"
                  clip-rule="evenodd"
                  image-rendering="optimizeQuality"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="20.8346"
                    d="M7095 7523l142 58 2 386h-636l-3-386 144-58"
                    transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="20.8346"
                    d="M6603 7967l318-232 318 232"
                    transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"
                  ></path>
                  <path
                    fill="none"
                    stroke-width="20.8346"
                    d="M6603 7581l257 198M7239 7581l-259 197"
                    transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="20.8346"
                    d="M6746 7689v-273h348v276M6853 7474h193M6792 7541h254M6792 7608h254M6792 7675h254"
                    transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="newsLetter">
              <h2>Newsletter</h2>
              <p>Subscribe now to get our latest blog posts.</p>
            </div>
          </LeftGrid>

          <SendMailGrid item container xs={12} md={6}>
            <div className="width">
              <input placeholder="Your Email Address" className="input" />
            </div>
            <div className="width">
              <Button className="button">Subscribe Now</Button>
            </div>
          </SendMailGrid>
        </MainGrid>
      </MainContainer>
    </BoxMain>
  );
};

export default Newsletter;
