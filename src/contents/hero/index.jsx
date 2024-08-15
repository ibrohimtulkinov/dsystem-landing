import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../components/button";
import Translation from "../../components/translation";
import StyledTypography from "../../components/text/body1";

function Hero() {
  return (
    <Container auto>
      <Box
        sx={{
          paddingTop: "25%",
          width: "50%",
        }}
      >
        <Box>
          <StyledTypography>Turn Clicks Into</StyledTypography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "130px",
              color: "#1d155c",
            }}
          >
            Customer
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
            }}
          >
            Must explain to you how all this mistaken idea of pleasure and
            praising pain was born and will give you a complete account of the
            system, and expound the actual teachings.
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
