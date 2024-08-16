import { Box, Container, Typography } from "@mui/material";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";
import Shape from "../../../public/img/shape-25.png";
import React from "react";
import StyledTypography from "../../components/text/body1";
import BodyTypography from "../../components/text/body0";
import CustomButton from "../../components/button";
import { display } from "@mui/system";

const contentData = [
  {
    text: "ERP creates a more agile company that adapts better to change.",
    icon: <FaRegDotCircle />,
  },
  {
    text: "ERP provides increased opportunities for collaboration.",
    icon: <FaRegDotCircle />,
  },
  {
    text: "ERP offers many benefits such as standardization of common processes",
    icon: <FaRegDotCircle />,
  },
  {
    text: "Higher management performance",
    icon: <FaRegDotCircle />,
  },
  {
    text: "Better competitiveness on the market",
    icon: <FaRegDotCircle />,
  },
];

function Benefits() {
  return (
    <section id={"advantages"}>
      <Box
        sx={{
          backgroundImage: `url(${Shape})`,
          backgroundSize: "contain",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Box
            sx={{
              paddingTop: "20%",
              gap: 7,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "repeat(2, 1fr)",
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src="public/img/tab-2.png"
                sx={{ boxShadow: 5, borderRadius: "20px" }}
              />

              <Box
                component="img"
                src="public/img/screen-3.png"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "73%",
                  objectFit: "contain",
                  boxShadow: 3,
                  borderRadius: "3px",
                  zIndex: 10,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  paddingY: "150px",
                  paddingX: "170px",
                  border: "dotted",
                  borderRadius: "5px",
                  color: "#7321ea",
                  top: "56%",
                  right: "67%",
                  zIndex: 1,
                }}
              />

              <Box
                component="img"
                src="public/img/screen-2.png"
                sx={{
                  position: "absolute",
                  top: "-7%",
                  right: "4%",
                  objectFit: "contain",
                  background: "#fff",
                  boxShadow: 3,
                }}
              />
            </Box>
            <Box>
              <BodyTypography>We are 4DX</BodyTypography>
              <StyledTypography sx={{ fontSize: "36px", paddingY: "2%" }}>
                Powerful analytics that goes beyond your organization
              </StyledTypography>
              <Box
                component="img"
                src="public/img/decor-1.png"
                alt="Decorative"
              />
              <Typography sx={{ paddingY: "4%" }}>
                Increase organizational efficiency of an organization by
                managing and improving how company resources are utilized.
              </Typography>

              {contentData?.map((content) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    paddingTop: "4%",
                  }}
                >
                  <Box
                    sx={{
                      color: "#7321ea",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    {content?.icon}
                  </Box>
                  <Box>
                    <Typography>{content?.text}</Typography>
                  </Box>
                </Box>
              ))}
              {/* <Box sx={{ paddingBottom: "7%", paddingTop: "5%" }}>
                <CustomButton>Read More</CustomButton>
              </Box> */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  paddingTop: "10%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaAngleRight />
                </Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  What You Need?
                </Typography>
                <Box
                  component="a"
                  href="https://t.me/ssalokhiddinov"
                  target="_blank"
                  sx={{
                    color: "#7321ea",
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Meet Our Experts.
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
}

export default Benefits;
