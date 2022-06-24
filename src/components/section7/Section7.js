import React, { Component } from "react";
//! packages
import Slider from "react-slick";
import { Grid } from "@mui/material";

//! data
import data from "../../data/db.json";

//! Components
import Card from "./card/Card";

//! style
import { MainGrid, MainContainer } from "./section7.styled";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <MainContainer className="container">
        <MainGrid container>
          <Grid item md={7} sx={{ width: "100%" }} className="left-name">
            <div className="testimonials">
              <h2>Testimonials</h2>
              <p>
                Here are what some of our amazing customers are saying about our
                hotels & tours. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div className="community">
              <Slider
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
                {...settings}
              >
                {data.popularPost.map((data, index) => (
                  <div>
                    <Card key={index} data={data} />
                  </div>
                ))}
              </Slider>
            </div>
          </Grid>
          <Grid
            item
            md={5}
            sx={{
              width: "100%",
            }}
            className="rigthImageGrid"
          >
            <Slider
              {...settings}
              asNavFor={this.state.nav2}
              ref={(slider) =>
                (this.slider1 = slider) && (this.slider = slider)
              }
              className="right-slider"
            >
              {data.popularPost.map((data, index) => (
                <img src={data.communityCardImage} className="image" />
              ))}
            </Slider>
            {/* <div style={{ textAlign: "center" }} className="right_button">
              <button className="button" onClick={this.previous}>
                Previous
              </button>
              <button className="button" onClick={this.next}>
                Next
              </button>
            </div> */}
            <div className="buttons right_button">
              <button class="arrow-button" onClick={this.previous}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-chevron-left"
                  style={{
                    display: "flex",
                    alignOtems: "center",
                    justifyContent: "center",
                  }}
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                className="arrow-button"
                style={{
                  backgroundColor: "#6415ff",
                  borderRadius: "9999px",
                  color: "white",
                  padding: "0.5rem",
                  "&:hover": {
                    backgroundColor: "#5011cc",
                  },
                }}
                onClick={this.next}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-chevron-right"
                  style={{
                    display: "flex",
                    alignOtems: "center",
                    justifyContent: "center",
                  }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </Grid>
        </MainGrid>
      </MainContainer>
    );
  }
}
