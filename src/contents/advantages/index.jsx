import { Typography } from "@mui/material";
import { Box, Container, fontFamily, padding } from "@mui/system";
import React from "react";
import StyledTypography from "../../components/text/body1";
import BodyTypography from "../../components/text/body0";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineShowChart } from "react-icons/md";
import CountUp from "react-countup";
import Translation from "../../components/translation";

function Advantages() {
  return (
    <section id={"benefits"}>
      <Container>
        <Box
          sx={{
            paddingTop: { xs: "12%", md: "15%" },
            gap: 7,
            display: "grid",
            marginBottom: "8%",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          <Box sx={{ width: "74%" }}>
            <Box>
              <BodyTypography>
                <Translation text={"Why choose us"} />
              </BodyTypography>
            </Box>
            <StyledTypography sx={{ paddingY: "5%" }}>
              <Translation text={"Reason for choosing"} />
            </StyledTypography>
            <Box
              component="img"
              src="public/img/decor-1.png"
              alt="Decorative"
            />
            <StyledTypography
              sx={{ fontSize: "22px", paddingBottom: "5%", paddingTop: "10%" }}
            >
              <Translation text={"Value for Results"} />
            </StyledTypography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box
                sx={{
                  borderRadius: "50%",
                  padding: "8px",
                  backgroundColor: "#3430d5",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "36px",
                  boxShadow: "0 20px 50px 5px rgba(53, 48, 212, 0.4)",
                }}
              >
                <MdOutlineShowChart />
              </Box>

              <Box>
                <Typography>
                  <Translation
                    text={
                      "Except to obtain some advantage from who has any right to find."
                    }
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "74%" }}>
            <StyledTypography sx={{ fontSize: "22px" }}>
              <Translation text={"Global Experience"} />{" "}
            </StyledTypography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box
                sx={{
                  borderRadius: "50%",
                  padding: "8px",
                  backgroundColor: "#7321ea",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "36px",
                  boxShadow: "0 20px 50px 5px rgba(115, 2, 234, 0.3)",
                }}
              >
                <PiGlobeHemisphereWestThin />
              </Box>
              <Box sx={{ paddingY: "10%" }}>
                <Typography>
                  <Translation
                    text={
                      "Nor again is there anyone who loves or pursues or desires"
                    }
                  />
                </Typography>
              </Box>
            </Box>
            <StyledTypography sx={{ fontSize: "22px", paddingTop: "13px" }}>
              <Translation text={"High-Quality Results"} />
            </StyledTypography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                paddingTop: "25px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  padding: "8px",
                  backgroundColor: "#3cb1e2",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "36px",
                  boxShadow: "0 20px 50px 5px rgba(61, 176, 226, 0.4)",
                }}
              >
                <LuBadgeCheck />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>
                  <Translation
                    text={
                      "This mistakens idea denouncings and was born complete system."
                    }
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid #e5e5e5",
          }}
        >
          <Box
            sx={{
              padding: "95px 0px 125px 0",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 2, 
              justifyContent: {
                xs: "center", 
                sm: "start", 
                md: "start", 
              },
              alignItems: "center", 
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", 
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={3} duration={4} />K
              </Box>
              <Box sx={{ fontSize: "20px" }}>
                <Translation text={"Projects Completed"} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", 
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={2} duration={4} />K
              </Box>
              <Box sx={{ fontSize: "20px" }}>
                <Translation text={"Industries Served"} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", 
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={139} duration={2} />
              </Box>
              <Box sx={{ fontSize: "20px" }}>
                <Translation text={"Expert Team Mates"} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", 
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={14} duration={4} />m
              </Box>
              <Box sx={{ fontSize: "20px" }}>
                <Translation text={"Happy Customers"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Advantages;
