import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { modulesData } from "../../utils/consts";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CustomButton from "../../components/button";
import Translation from "../../components/translation";

function Modules() {
  const [count, setCount] = useState(4);

  const [selected, setSelected] = useState(null);

  const Show = () => {
    setCount((quantity) => quantity + 4);
  };

  const Close = () => {
    setCount(4);
  };
  return (
    <section id={"modules"}>
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
                backdropFilter: "blur(2px)",
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
                  <Translation text={el?.title} />
                </Typography>
                <Typography
                  sx={{
                    marginTop: "10px",
                    fontSize: "16px",
                    lineHeight: "1.5", 
                    maxHeight: "4.5em",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  <Translation text={el?.description} />
                </Typography>

                <Button
                  onClick={() => {
                    setSelected(el);
                  }}
                  sx={{
                    marginTop: "15px",
                    p: 0,
                    textTransform: "capitalize",
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
                      marginLeft: 1,
                    },
                    span: {
                      lineHeight: 1,
                      pt: "5px",
                    },
                    ":hover": {
                      ".start": {
                        opacity: "1",
                        maxWidth: "40px",
                        marginRight: 1,
                      },
                    },
                  }}
                >
                  <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                    <IoIosArrowBack className="start" />
                    <span><Translation text={"Show"}/></span>
                    <IoIosArrowForward className="end" />
                  </Stack>
                </Button>
              </Box>
              <Box component="img" src={el?.img} />
            </Stack>
          ))}
        </Box>
        {count < modulesData.length && (
          <Box sx={{ textAlign: "center", marginTop: "3%" }}>
            <CustomButton onClick={Show} sx={{
               "@media (max-width: 900px)" : {
                marginTop: "6%" 
               }
            }}><Translation text={"Show"} /></CustomButton>
          </Box>
        )}
        {count > 17 && (
          <Box sx={{ textAlign: "center", marginTop: "3%" }}>
            <CustomButton onClick={Close} sx={{
              "@media (max-width: 900px)" : {
                marginTop:"6%"
              }
            }} ><Translation text={"close"} /></CustomButton>
          </Box>
        )}
        <Dialog
          open={!!selected}
          onClose={() => setSelected(null)}
          maxWidth={"sm"}
        >
          <DialogContent sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                minWidth: { xs: "300px", sm: "450px", md: "550px" },
              }}
            >
              <Box
                component={"img"}
                src={selected?.img || ""}
                sx={{
                  width: "100%",
                  height: { xs: "240px", md: "340px" },
                  objectFit: "contain",
                }}
              />
              <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                <Translation text={selected?.title} />
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                <Translation text={selected?.description} />
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <CustomButton
              onClick={() => {
                setSelected(null);
              }}
            >
              <Translation text={"close"} />
            </CustomButton>
          </DialogActions>
        </Dialog>
      </Container>
    </section>
  );
}

export default Modules;