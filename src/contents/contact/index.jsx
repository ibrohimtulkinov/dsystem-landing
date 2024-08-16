import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
// import Shape from "../../../public/img/shape-31.png";
import { FaTextHeight } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import CustomButton from "../../components/button";

function Contact() {
  return (
    //     <Box
    //     sx={{
    //       backgroundImage: `url(${Shap5})`,
    //       backgroundSize: "contain",
    //       backgroundPosition: "bottom right",
    //       backgroundRepeat: "no-repeat",
    //       minHeight: "170vh",
    //     }}
    //   >
    <section id={"contact"}>
      <Container>
        <Box
          sx={{
            marginTop: "10%",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          <Box
            sx={{
              padding: "65px 40px 50px 40px",
              background: "#fff",
              borderRadius: "5px",
              boxShadow: "0 0px 50px rgba(2, 13, 49, 0.2)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "13px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MdOutlinePerson />
              </Box>
              <Typography>Your Name</Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="Enter name here"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: "26px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cb2cf9",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cb2cf9",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "grey",
                },
                "&:hover .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "13px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MdOutlineMailOutline />
              </Box>
              <Typography>Email Address</Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: "26px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cb2cf9",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cb2cf9",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "grey",
                },
                "&:hover .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "13px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MdOutlinePerson />
              </Box>
              <Typography>Subject</Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: "26px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cb2cf9",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cb2cf9",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "grey",
                },
                "&:hover .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "13px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FaTextHeight />
              </Box>
              <Typography>Message</Typography>
            </Box>
            <TextField
              id="outlined-multiline"
              label="Message goes here"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                marginBottom: "26px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cb2cf9",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#cb2cf9",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "grey",
                },
                "&:hover .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#cb2cf9",
                },
                minHeight: "100px",
              }}
            />
            <CustomButton sx={{ marginTop: "20px" }} fullWidth>
              Send Message
            </CustomButton>
          </Box>
          <Box
            sx={{
              position: "relative",
              right: "-30%",
              "@media (max-width: 900px)": {
                position: "static", 
                right: "auto", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                width: "100%", 
                padding: "0 10%",
              },
            }}
          >
            <Box
              component="img"
              src="/public/img/illastration-6.png"
              sx={{
                maxWidth: "150%",
                width: "100%", 
                height: "auto", 
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid #e5e5e5",
            marginTop: "10%",
            marginBottom: "5%",
          }}
        />

        <Box sx={{ color: "white" }}>
          Copyright{" "}
          <a
            href="https://4dx.uz/"
            target="_blank"
            className="hover:text-primary"
          >
            4DX
          </a>
          . All rights reserved
        </Box>
      </Container>
    </section>
    // </Box>
  );
}

export default Contact;
