import * as React from "react";
import { useState } from "react";

//! package
//? styles
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
//? icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Minimize from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";

//! styles component
import { MainContainer, MainGrid, GridLeft, GridRight } from "./FAQ.styled";
import { Grid } from "@mui/material";

//! data
import datas from "../../data/db.json";

const SimpleAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MainContainer>
      <MainGrid container>
        <GridLeft item md={6} />
        <GridRight item md={6}>
          <h2>Questions</h2>

          <p>
            Here are some frequently asked questions about our hotels from our
            loving customers. Should you have any other questions, feel free to
            reach out via the contact form below.
          </p>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            {datas.FAQ.map((data, key) => (
              <div class="accordion-item">
                <h2 class="accordion-header" id={"flush-heading-" + key}>
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#flush-collapse-" + key}
                    aria-controls={"flush-collapse-" + key}
                  >
                    {data.title}
                  </button>
                </h2>
                <div
                  id={"flush-collapse-" + key}
                  class="accordion-collapse collapse"
                  aria-labelledby={"flush-heading-" + key}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{data.subInfo}</div>
                </div>
              </div>
            ))}
          </div>
        </GridRight>
      </MainGrid>
    </MainContainer>
  );
};

export default SimpleAccordion;
