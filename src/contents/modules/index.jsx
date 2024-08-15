import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { modulesData } from "../../utils/consts";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Modules() {
  const [count, setCount] = useState(4);

  const Show = () => {
    setCount((quantity) => quantity + 4);
  };

  const Close = () => {
    setCount(4);
  };
  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          },
          marginTop: "15%",
          gap: 4,
        }}
      >
        {modulesData?.slice(0, count).map((el, index) => (
          <Stack
            key={index}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              padding: "20px",
              boxShadow: 4,
              // backdropFilter: "blur(2px)",
              background: "rgba(255,255,255,0.05)",
              position: "relative",
              "& .before, .after": {
                width: "40px",
                height: "1px",
                position: "absolute",
                background: "#fff",
                transition: "1s all",
              },
              ".before": {
                left: "20px",
                top: 0,
              },
              ".after": {
                right: "20px",
                bottom: 0,
              },
              ":hover": {
                ".before": {
                  left: "calc(100% - 60px)",
                },
                ".after": {
                  right: "calc(100% - 60px)",
                },
              },
            }}
          >
            <div className="before"></div>
            <div className="after"></div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "90%",
                paddingLeft: 2,
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                {el?.title}
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                {el?.description}
              </Typography>
              <Button
                sx={{
                  p: 0,
                  color: "inherit",
                  fontSize: "16px",
                  fontWeight: "600",
                  "& .start": {
                    opacity: "0",
                    maxWidth: "0px",
                    overflow: "hidden",
                    transition: "1s all",
                  },
                  "& .end": {
                    marginLeft: 1
                  },
                  "span" : {
                    lineHeight: 1,
                    pt: "5px"
                  },
                  ":hover": {
                    ".start": {
                      opacity: "1",
                      maxWidth: "40px",
                      marginRight: 1
                    },
                  },
                }}
              >
                <Stack
                  sx={{ flexDirection: "row", alignItems: "center" }}
                >
                  <IoIosArrowBack className="start" />
                  <span>Read More</span>
                  <IoIosArrowForward className="end" />
                </Stack>
              </Button>
            </Box>
            <Box component="img" src="/public/img/module-1.png" />
          </Stack>
        ))}
      </Box>
      {count < modulesData.length && (
        <Box sx={{ textAlign: "center", marginTop: "3%" }}>
          <Button onClick={Show}>Show More</Button>
        </Box>
      )}
      {count > 17 && (
        <Box sx={{ textAlign: "center", marginTop: "3%" }}>
          <Button onClick={Close}>Close</Button>
        </Box>
      )}
    </Container>
  );
}

export default Modules;

// <Box
//   sx={{
//     display: "grid",
//     padding: "20px",
//     boxShadow: 4,
//     gridTemplateColumns: {
//       xs: "1fr",
//       sm: "1fr",
//       md: "repeat(2, 1fr)",
//     },
//     "@media (min-width:530px)": {
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//   }}
// >
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "flex-start",
//       width: "90%",
//       paddingLeft: 2,
//     }}
//   >
//     <Typography>Embedded in App</Typography>
//     <Typography>
//       To take trivial example which idea of ever undertakes.
//     </Typography>
//     <Button>Read More</Button>
//   </Box>
//   <Box
//     component="img"
//     src="/public/img/module-1.png"
//     sx={{ alignItems: "flex-end", textAlign: "end" }}
//   />
// </Box>
// <Box
//   sx={{
//     display: "grid",
//     padding: "20px",
//     boxShadow: 4,
//     gridTemplateColumns: {
//       xs: "1fr",
//       sm: "1fr",
//       md: "repeat(2, 1fr)",
//     },
//     "@media (min-width:530px)": {
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//   }}
// >
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "flex-start",
//       width: "90%",
//       paddingLeft: 2,
//     }}
//   >
//     <Typography>Embedded in App</Typography>
//     <Typography>
//       To take trivial example which idea of ever undertakes.
//     </Typography>
//     <Button>Read More</Button>
//   </Box>
//   <Box
//     component="img"
//     src="/public/img/module-1.png"
//     sx={{ alignItems: "flex-end", textAlign: "end" }}
//   />
// </Box>
// <Box
//   sx={{
//     display: "grid",
//     padding: "20px",
//     boxShadow: 4,
//     gridTemplateColumns: {
//       xs: "1fr",
//       sm: "1fr",
//       md: "repeat(2, 1fr)",
//     },
//     "@media (min-width:530px)": {
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//   }}
// >
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "flex-start",
//       width: "90%",
//       paddingLeft: 2,
//     }}
//   >
//     <Typography>Embedded in App</Typography>
//     <Typography>
//       To take trivial example which idea of ever undertakes.
//     </Typography>
//     <Button>Read More</Button>
//   </Box>
//   <Box
//     component="img"
//     src="/public/img/module-1.png"
//     sx={{ alignItems: "flex-end", textAlign: "end" }}
//   />
// </Box>
