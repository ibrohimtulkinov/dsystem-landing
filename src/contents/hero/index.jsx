import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../components/button";
import Translation from "../../components/translation";
import StyledTypography from "../../components/text/body1";

function Hero() {
  return (
    <Container id={"home"} auto>
      <Box
        sx={{
          paddingTop: "25%",
          width: "50%",
          "@media (max-width: 900px)": {
            width: "100%",
            paddingTop: "15%", 
          },
        }}
      >
        <Box>
          <StyledTypography
            sx={{
              "@media (max-width: 900px)": {
                fontSize: "24px", 
              },
            }}
          >
           <Translation text={"Streamline Your Success with"}/>
          </StyledTypography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "100px",
              color: "#786df0",
              "@media (max-width: 900px)": {
                fontSize: "90px", 
              },
              "@media (max-width: 450px)": {
                fontSize: "60px", 
              },
            }}
          >
            D-System
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "41px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#666666",
              lineHeight: "28px",
              width: "90%",
              "@media (max-width: 900px)": {
                fontSize: "14px", 
                lineHeight: "24px",
                width: "100%",
              },
            }}
          >
            <Translation text={"DSystem"}/>
          </Typography>
        </Box>
        <CustomButton>
          <Translation text={"get-started"} />
        </CustomButton>
      </Box>
    </Container>
  );
}

export default Hero;
