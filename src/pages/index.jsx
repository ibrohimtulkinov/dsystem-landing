import { Box } from "@mui/material";
import Hero from "../contents/hero";
import Services from "../contents/services";
import Img from "../../public/img/banner-4.1.png";
import Shape from "../../public/img/shape.png";
import Shape3 from "../../public/img/shape-27.png";
import Technology from "../contents/technology";
import Modules from "../contents/modules";
import Benefits from "../contents/benefits";
import Advantages from "../contents/advantages";
import Facts from "../contents/facts";
import Contact from "../contents/contact";
import Shape5 from "../../public/img/shape-31.png";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Shape})`,
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          "@media (max-width: 900px)": {
            backgroundImage: "none",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            "@media (max-width: 900px)": {
              backgroundImage: "none",
            },
          }}
        >
          <Hero />
          <Services />
        </Box>
      </Box>

      <Technology />
      <Box
        sx={{
          background: "linear-gradient(to right, #3530d4, #66278d 100%)",
          padding: "100px 0px 100px 0px",
          mt: "-100px",
        }}
      >
        <Modules />
      </Box>
      <Benefits />
      <Advantages />
      <Box
        sx={{
          backgroundImage: `url(${Shape3})`,
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          minHeight: "120vh",
          "@media (max-width: 900px)": {
            minHeight: "auto",
          },
        }}
      >
        <Facts />
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${Shape5})`,
          backgroundSize: "auto 100%",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          minHeight: "140vh", 
          "@media (max-width: 900px)": {
            minHeight: "auto", 
          },
        }}
      >
        <Contact />
      </Box>
    </Box>
  );
}
