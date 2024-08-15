import { Box, Button, Container, Typography } from "@mui/material";
import { PiHeadphonesFill } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

import React from "react";

function FirstHeader() {
  return (
    <Container
      sx={{
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "10px",
          marginBottom: "20px",
          borderBottom: "1px solid #d5d5d5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            textAlign: "right",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box sx={{ color: "#7321ea", fontSize: "20px" }}>
              <PiHeadphonesFill />
            </Box>
            <Typography
              component="a"
              href="tel:+998977776146"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
                transition: "all 0.4s ease",
                color: "#1d155c",
                "&:hover": {
                  color: "#7321ea",
                },
              }}
            >
              +998 (97) 777-61-46
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
              gap: "10px",
              borderLeft: "1px solid #d5d5d5",
            }}
          >
            <Box
              sx={{ color: "#7321ea", fontSize: "20px", paddingLeft: "10px" }}
            >
              <MdOutlineMailOutline />
            </Box>
            <Typography
              component="a"
              href="mailto:info@4dx.uz"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "16px",
                transition: "all 0.4s ease",
                color: "#1d155c",
                "&:hover": {
                  color: "#7321ea",
                },
              }}
            >
              info@4dx.uz
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box sx={{ color: "#7321ea" }}>
            <FaArrowRight />
          </Box>
          <Typography
            component="a"
            href="#"
            sx={{
              textDecoration: "none",
              fontFamily: "Josefin Sans",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.4s ease",
              color: "#1d155c",
              "&:hover": { color: "#7321ea" },
            }}
          >
            Request for Demo
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default FirstHeader;
