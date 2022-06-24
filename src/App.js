//!  components
import Section1 from "./components/section-1/Section1";
import GlobalStyles from "./components/styles/Global";
import Section2 from "./components/section2Cards/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Section6 from "./components/section6/Section6";
import Section7 from "./components/section7/Section7";
import Section8 from "./components/section8_faq/FAQ";
import Section9 from "./components/section9/Newsletter";
import Footer from "./components/footer/Footer";

//!packages
import Fade from "react-reveal/Fade";

function App() {
  return (
    <>
      <GlobalStyles />
      <Fade left>
        <Section1 />
      </Fade>
      <Fade right>
        <Section2 />
      </Fade>
      <Fade left>
        <Section3 />
      </Fade>

      <Fade right>
        <Section4 />
      </Fade>

      <Fade left>
        <Section5 />
      </Fade>

      <Fade right>
        <Section6 />
      </Fade>

      <Fade left>
        <Section7 />
      </Fade>
      <Fade right>
        <Section8 />
      </Fade>
      <Fade left>
        <Section9 />
      </Fade>
      <Footer />
    </>
  );
}

export default App;
