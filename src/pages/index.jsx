import { Box } from "@mui/material";
import Hero from "../contents/hero";
import Services from "../contents/services";
import Img from "../../public/img/banner-4.1.png";
import Shape from "../../public/img/shape.png";
import Technology from "../contents/technology";
import Modules from "../contents/modules";
import Benefits from "../contents/benefits";
import Advantages from "../contents/advantages";
import Facts from "../contents/facts";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Shape})`,
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <Hero />
          <Services />
        </Box>
      </Box>
      <Technology />
      <Box
        sx={{
          background: "linear-gradient(to right, #3530d4, #66278d 100%)",
          padding: "100px 0px 100px 0px",
        }}
      >
        <Modules />
      </Box>
      <Benefits />
      <Advantages />
      <Facts />
    </Box>
  );
}


























{/* <Container sx={{position:"relative"}}>
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
        position:"absolute",
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

help me for creating position I need Container relative and cards absolute fix it */}