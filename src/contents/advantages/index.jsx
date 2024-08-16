import { Typography } from "@mui/material";
import { Box, Container, fontFamily, padding } from "@mui/system";
import React from "react";
import StyledTypography from "../../components/text/body1";
import BodyTypography from "../../components/text/body0";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineShowChart } from "react-icons/md";
import CountUp from "react-countup";

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
              <BodyTypography>Why choose us</BodyTypography>
            </Box>
            <StyledTypography sx={{ paddingY: "5%" }}>
              Reason for choosing
            </StyledTypography>
            <Box
              component="img"
              src="public/img/decor-1.png"
              alt="Decorative"
            />
            <StyledTypography
              sx={{ fontSize: "22px", paddingBottom: "5%", paddingTop: "10%" }}
            >
              Value for Results
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
                  Except to obtain some advantage from who has any right to
                  find.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "74%" }}>
            <StyledTypography sx={{ fontSize: "22px" }}>
              Global Experience{" "}
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
                  Nor again is there anyone who loves or pursues or desires
                </Typography>
              </Box>
            </Box>
            <StyledTypography sx={{ fontSize: "22px", paddingTop: "10px" }}>
              High-Quality Results
            </StyledTypography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
              <Box sx={{ paddingTop: "10%" }}>
                <Typography>
                  This mistakens idea denouncings and was born complete system
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
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={3} duration={4} />K
              </Box>
              <Box sx={{ fontSize: "20px" }}>Projects Completed</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={2} duration={4} />K
              </Box>
              <Box sx={{ fontSize: "20px" }}>Industrires Served</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={139} duration={2} />
              </Box>
              <Box sx={{ fontSize: "20px" }}>Expert Team Mates</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ fontSize: "60px" }}>
                <CountUp end={14} duration={4} />m
              </Box>
              <Box sx={{ fontSize: "20px" }}>Happy Customers</Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Advantages;
