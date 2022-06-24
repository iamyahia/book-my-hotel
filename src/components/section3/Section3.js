import React, { useRef } from "react";
import datas from "../../data/db.json";

//! package
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid } from "@mui/material";

//! component
import Cards from "./Cards/Cards";
import { red } from "@mui/material/colors";

//! styled
import { GridMain } from "./section3.styled";

const Section3 = () => {
  const customeSlider = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const previous = () => {
    customeSlider.current.slickPrev();
  };

  const next = () => {
    customeSlider.current.slickNext();
  };

  return (
    <Container>
      <GridMain container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <h2 className="h2"> Popular Hotels</h2>
        </Grid>
        <Grid item sm={6} xs={12} className="Grid-button">
          <div className="buttons">
            <button class="arrow-button" onClick={previous}>
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
              onClick={next}
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
      </GridMain>

      <div>
        <Slider {...settings} ref={customeSlider}>
          {datas.section3Slider.map((data) => (
            <Cards key={data.id} data={data} />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Section3;
