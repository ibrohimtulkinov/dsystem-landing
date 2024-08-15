import { Box, Button, Container, Typography } from "@mui/material";
import { modulesData } from "../../utils/consts";
import React, { useState } from "react";

function Modules() {
  const [count, setCount] = useState(4);
  
  const Show = () => {
    setCount((quantity) => quantity + 4)
  }

  const Close = () => {
    setCount(4)
  }
  return (
    <Container >
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
        {modulesData?.slice(0, count).map((el,index) => (
          <Box
          key={index}
            sx={{
              display: "grid",
              padding: "20px",
              boxShadow: 4,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "repeat(2, 1fr)",
              },
              "@media (min-width:530px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "90%",
                paddingLeft: 2,
              }}
            >
              <Typography>{el?.title}</Typography>
              <Typography>{el?.description}</Typography>
              <Button>Read More</Button>
            </Box>
            <Box
              component="img"
              src="/public/img/module-1.png"
              sx={{ alignItems: "flex-end", textAlign: "end" }}
            />
          </Box>
        ))}
      </Box>
       {count < modulesData.length && (
         <Box sx={{textAlign:"center", marginTop:"3%"}}>
          <Button onClick={Show}>
            Show More
          </Button>
         </Box>
       )}
        {count > 17 && (
         <Box sx={{textAlign:"center", marginTop:"3%"}}>
          <Button onClick={Close}>
            Close
          </Button>
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