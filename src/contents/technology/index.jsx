import { Box, Container, Typography } from "@mui/material";
import StyledTypography from "../../components/text/body1";
import React from "react";
import BodyTypography from "../../components/text/body0";

function Technology() {
  return (
    <Container auto>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "10%",
        }}
      >
        <Box>
          <BodyTypography
          >
            Technologies
          </BodyTypography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <StyledTypography sx={{ fontSize: "36px", width: "60%",paddingY:"1%"}}>
            Inspiring possibility for a brand's digital experience
          </StyledTypography>
        </Box>
        <Box component="img" src="public/img/decor-1.png" alt="Decorative" />
      </Box>

      <Box sx={{ position: "relative", textAlign: "center",marginTop:"5%" }}>
        <Box
          component="img"
          src="public/img/tab-1.png"
          sx={{ boxShadow: 5, borderRadius: "20px" }}
        />

        <Box
          component="img"
          src="public/img/phone-1.png"
          sx={{
            position: "absolute",
            top: "20%",
            left: 0,
            objectFit: "contain",
            boxShadow: 3,
            borderRadius: "30px",
          }}
        />

        <Box
          component="img"
          src="public/img/screen-1.png"
          sx={{
            position: "absolute",
            top: "54%",
            right: 0,
            objectFit: "contain",
            background: "#fff",
            padding: "15px",
            borderRadius: "50%",
          }}
        />
      </Box>
    </Container>
  );
}

export default Technology;
