import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Box, Typography } from "@mui/material";
import React from "react";

const ReadMoreButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
        transition: "color 0.4s",
        fontFamily: "Josefin Sans sans-serif",
        fontWeight: "600",
        "&:hover": {
          color: "#7302ea",
          "& .icon": {
            color: "#7302ea",
          },
          "& .text": {
            color: "#7302ea",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "16px",
          color: "#1d166c",
          transition: "color 0.4s",
          fontFamily: "Josefin Sans sans-serif",
          fontWeight: "600",
        }}
        className="icon"
      >
        <FaAngleLeft />
      </Box>
      <Typography
        sx={{
          mx: 1,
          fontSize: "16px",
          color: "#1d166c",
          transition: "color 0.4s",
          fontFamily: "Josefin Sans sans-serif",
          fontWeight: "600",
        }}
        className="text"
      >
        Read More
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "16px",
          color: "#1d166c",
          transition: "color 0.4s",
          fontFamily: "Josefin Sans sans-serif",
          fontWeight: "600",
        }}
        className="icon"
      >
        <FaAngleRight />
      </Box>
    </Box>
  );
};

export default ReadMoreButton;
