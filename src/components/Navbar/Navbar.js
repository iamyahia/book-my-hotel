import React, { useState } from "react";
import {
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";

//  custom appBar style
import AppBar from "./Navbar.styled";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //  nav items
  const pages = ["About", "Blog", "Pricing", "Login"];

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <div className="NavLogo">
            <div className="NavImage"></div>
            <div className="divv"></div>
            <Typography className="Treact" component="a" href="#/">
              Treact
            </Typography>
          </div>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                sx={{ marginLeft: "auto" }}
              >
                {pages.map((page, index) => {
                  return (
                    <Tab
                      label={page}
                      key={index}
                      index={index}
                      className="tab"
                    />
                  );
                })}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
