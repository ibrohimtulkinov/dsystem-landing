import { Typography } from "@mui/material";
import BodyTypography from "../../components/text/body0";
import StyledTypography from "../../components/text/body1";
import { Box, Container } from "@mui/system";
import React from "react";
import Shape2 from "../../../public/img/shape-28.png";
import { LuMessagesSquare } from "react-icons/lu";
import ProgressBar from "@ramonak/react-progress-bar";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import { FaCloudversify } from "react-icons/fa";

function Facts() {
  return (
    <section id={"cases"}>
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
            <Typography>Data Consulting</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box sx={{ fontSize: "25px", color: "#cb2cf9" }}>
                <LuMessagesSquare />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <ProgressBar
                  bgColor="linear-gradient(to right, #3530d4, #66278d 100%)"
                  completed={62}
                />
              </Box>
            </Box>
            <Typography sx={{ paddingTop: "5%" }}>Big Data & BI</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box sx={{ fontSize: "25px", color: "#cb2cf9" }}>
                <FaCloudversify />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <ProgressBar
                  bgColor="linear-gradient(to right, #3530d4, #66278d 100%)"
                  completed={89}
                />
              </Box>
            </Box>
            <Typography sx={{ paddingTop: "5%" }}>
              Predictive Analysis
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box sx={{ fontSize: "25px", color: "#cb2cf9" }}>
                <PiMagnifyingGlassPlusBold />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <ProgressBar
                  bgColor="linear-gradient(to right, #3530d4, #66278d 100%)"
                  completed={75}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${Shape2})`,
              backgroundSize: "contain",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              position: "relative",
              width: "150%",
              height: "120%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                // position: "relative",
                width: "170%",
                height: "150%",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="public/img/screen-4.png"
                sx={{
                  position: "absolute",
                  top: "40%",
                  right: "-10%",
                  transform: "translateY(-45%) rotate(-5deg)",
                  width: "170%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Facts;
