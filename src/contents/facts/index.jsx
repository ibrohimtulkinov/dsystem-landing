import { Typography } from "@mui/material";
import BodyTypography from "../../components/text/body0";
import StyledTypography from "../../components/text/body1";
import { Box, Container } from "@mui/system";
import React from "react";
import Shape from "../../../public/img/shape-27.png"

function Facts() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Shape})`,
        backgroundSize: "contain",
        backgroundPosition: " left",
        backgroundRepeat: "no-repeat",
        minHeight: "170vh",
      }}
    >
      <Container>
        <Box
          sx={{
            paddingTop: "10%",
            gap: 7,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          <Box>
            <BodyTypography>Skills & Facts</BodyTypography>
            <StyledTypography sx={{ fontSize: "36px", paddingY: "2%" }}>
              We keep our self updated with latest trends
            </StyledTypography>
            <Box
              component="img"
              src="public/img/decor-1.png"
              alt="Decorative"
            />
            <Typography sx={{ paddingY: "4%" }}>
              As a solution providing company we offer a range consulting,
              development quality testing services with 100% satisfaction.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Facts;
