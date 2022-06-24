import React from "react";
//! packages
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//! components
import RecentCard from "./card/recentCard";

//! data
import datas from "../../data/db.json";

//! styled
import Card from "./card/Card";
import { GridPost } from "./section6.styled";

const Section6 = () => {
  return (
    <Container>
      <GridPost container>
        {/* main */}
        <Grid item container xs={12} lg={8} sx={{ height: "100% " }}>
          <h2 className="popularH2Style">Popular Posts</h2>
          <Grid item container className="grid-container">
            {datas.popularPost.map((data, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "@media (max-width:1200px)": {
                    padding: "1rem",
                  },
                }}
              >
                <a href="go" className="aGo">
                  <Card key={index} data={data} />
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* main */}
        <Grid
          item
          container
          xs={12}
          lg={4}
          sx={{
            flexDirection: "column",
            "@media (max-width:1200px)": {
              marginTop: "5rem",
            },
          }}
        >
          <h2>Recent Posts</h2>
          <Grid
            item
            container
            sx={{
              marginTop: "3rem",
            }}
          >
            {datas.recentPosts.map((post, index) => (
              <Grid item xs={12} md={6} lg={12} className="recent-Grid-content">
                <a href="#" className="aHref">
                  <RecentCard key={index} post={post} />
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </GridPost>
    </Container>
  );
};

export default Section6;
