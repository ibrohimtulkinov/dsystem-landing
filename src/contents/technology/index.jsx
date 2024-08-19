import { Box, Container, Stack, Typography } from "@mui/material";
import StyledTypography from "../../components/text/body1";
import React from "react";
import BodyTypography from "../../components/text/body0";
import Translation from "../../components/translation";

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
            <Translation text={"modules"}/>
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
            <Translation text={"Inspiring possibility for a brand`s digital experience"} />
          </StyledTypography>
        </Box>
        <Box component="img" src="/img/decor-1.png" alt="Decorative" />
      </Box>

      <Stack sx={{ position: "relative", textAlign: "center",marginTop:"5%", gap: 4, alignItems: "center" }}>
        <Box
          component="img"
          src="/img/Screenshot 2024-08-19 at 11.05.37.png"
          sx={{ boxShadow: 5, padding:"20px", backgroundColor:"#ffff",  borderRadius: "20px", width: {xs: "100%", md: "70%"} }}
        />
        <Box
          component="img"
          src="/img/Screenshot 2024-08-19 at 11.24.37.png"
          sx={{
            position: {xs: "static", md: "absolute"},
            top: "20%",
            left: 0,
            objectFit: "contain",
            width: {xs: "80%", md: "unset"},
            boxShadow: 3,
            borderRadius: "30px",
            padding:"20px",
            backgroundColor:"#ffff"
          }}
        />


        <Box
          component="img"
          src="/img/Screenshot 2024-08-19 at 10.38.49.png"
          sx={{
            width:"60%",
            height:"50%",
            position: {xs: "static", md: "absolute"},
            top: "54%",
            width: {xs: "80%", md: "unset"},
            right: 0,
            objectFit: "contain",
            background: "#fff",
            padding: "15px",
            borderRadius: "10%",
            boxShadow:4,
          }}
        />
      </Stack>
    </Container>
  );
}

export default Technology;
