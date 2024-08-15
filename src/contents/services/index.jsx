import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import ReadMoreButton from "../../components/readMoreButton";
import CardTypography from "../../components/text/body2";

const cardData = [
  {
    title: "Individual Analyst",
    image: "/public/img/service-1.png",
    description:
      "Simple easy distinguish in a free hour when our power choice.",
  },
  {
    title: "Teams & Organizations",
    image: "/public/img/service-2.png",
    description:
      "Therefore always hold these matters to principle reject pleasures.",
  },
  {
    title: "Embedded Analytics",
    image: "/public/img/service-3.png",
    description:
      "Trouble that bound ensue equaly blame belongs to those weakness.",
  },
];

function Services() {
  return (
    <Container auto>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          marginTop: "20%",
          gap: 4,
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              textAlign: "center",
              borderRadius: "5px",
              padding: "48px 30px 40px 30px",
              boxShadow: "0 10px 30px 5px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 0px  20px 0px rgba(0, 0, 2, 0.3)",
                "& img": {
                  transform: "scale(1.05)",
                },
              },
              ...(index === 1 && {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 30px 24px 30px",
                "& .MuiCardMedia-root": {
                  marginBottom: "16px",
                },
              }),
            }}
          >
            {index === 1 ? (
              <>
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="180"
                  image={card.image}
                  sx={{
                    objectFit: "contain",
                    transition: "transform 0.3s ease-in-out",
                    paddingTop: "4%",
                  }}
                />
                <CardTypography>{card.title}</CardTypography>
                <CardContent>
                  <Typography
                    sx={{
                      color: "#666666",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </>
            ) : (
              <>
                <CardTypography>{card.title}</CardTypography>
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="180"
                  image={card.image}
                  sx={{
                    objectFit: "contain",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      color: "#666666",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </>
            )}
            <ReadMoreButton />
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Services;
