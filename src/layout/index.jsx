import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <Box className="">
      <Box>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Box>

      <Box>
        <Header isSticky={isSticky} setIsSticky={setIsSticky}/>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;