import React, { useState, useEffect, useMemo } from "react";
import Container from "@mui/material/Container";
import Translation from "../../components/translation";
import { useTranslation } from "../../hooks/useTranslation";
import { navData } from "../../utils/consts";
import { Box, MenuItem, Select, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FirstHeader from "../../components/firstHeader";

const Header = () => {
  const [path, setPath] = useState("/#home");
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { changeLang, lang } = useTranslation();

  const languages = useMemo(() => {
    return [
      { code: "ru", title: "RU", img: "/img/ru.png" },
      { code: "uz", title: "UZ", img: "/img/uz.png" },
      { code: "en", title: "EN", img: "/img/uk.png" },
    ];
  }, []);

  const currentLang = useMemo(() => {
    return languages.find((language) => language.code === lang) || languages[0];
  }, [lang, languages]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const sections = document.querySelectorAll("section");
      let currentSection = "/#home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = `/#${section.id}`;
        }
      });

      setPath(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (event) => {
    changeLang(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: isSticky ? 0 : "auto",
        left: 0,
        right: 0,
        zIndex: isSticky ? 1000 : "auto",
        boxShadow: isSticky ? 4 : "transparent",
        backgroundColor: isSticky ? "white" : "transparent",
        paddingY: "15px",
        transition: "background-color 0.4s ease",
        "@media (max-width: 900px)": {
          position: "static", 
        },
      }}
    >
      {!isSticky && <FirstHeader />}

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "120px", sm: "150px" }, flex: "none" }}>
          <Box
            component="img"
            src="public/dsystem.png"
            alt="Logo"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          {navData?.map((el, i) => (
            <Box key={i}>
              <Box
                component="a"
                href={el?.link}
                onClick={() => setPath("/" + el?.link)}
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "17px",
                  color: path?.includes(el?.link) ? "#7302ea" : "#1D165C",
                  "&:hover": {
                    color: "#7302ea",
                    transition: "all 0.4s ease",
                  },
                }}
              >
                <Translation text={el?.title} />
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Select
            value={lang}
            onChange={handleLanguageChange}
            sx={{
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            {languages.map((language) => (
              <MenuItem key={language.code} value={language.code}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{language.title}</span>
                  <Box
                    component="img"
                    src={language.img}
                    alt={language.title}
                    sx={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </MenuItem>
            ))}
          </Select>

          <IconButton
            sx={{
              display: { xs: "flex", lg: "none" },
              marginLeft: 2,
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {mobileOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: { xs: "flex", lg: "none" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1100,
          }}
          onClick={handleDrawerToggle}
        >
          {navData?.map((el, i) => (
            <Box key={i} sx={{ marginBottom: 2 }}>
              <Box
                component="a"
                href={el?.link}
                onClick={() => setPath("/" + el?.link)}
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "24px",
                  color: "#fff",
                  "&:hover": {
                    color: "#7302ea",
                    transition: "all 0.4s ease",
                  },
                }}
              >
                <Translation text={el?.title} />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Header;

{
  /* <Box sx={{ flex: "none" }}>
  <Box
    component="button"
    onClick={() => window.open("https://web.4dx.uz/login", "_blank")}
    sx={{
      padding: "7px 15px",
      border: "1px solid",
      borderTopLeftRadius: "15px ",
      borderBottomLeftRadius: "15px",
      backgroundColor: "white",
      color: "#8d8d8d",
      cursor: "pointer",
      "&:hover": {
        color: "#7321ea",
      },
    }}
  >
    <Typography>
      <TiSocialFacebook />
    </Typography>
  </Box>
  <Box
    component="button"
    onClick={() => window.open("https://web.4dx.uz/login", "_blank")}
    sx={{
      padding: "7px 15px",
      border: "1px solid",
      backgroundColor: "white",
      color: "#8d8d8d",
      cursor: "pointer",
      "&:hover": {
        color: "#7321ea",
      },
    }}
  >
    <Typography>
      <BiLogoTwitter />
    </Typography>
  </Box>
  <Box
    component="button"
    onClick={() => window.open("https://web.4dx.uz/login", "_blank")}
    sx={{
      padding: "7px 15px",
      border: "1px solid",
      borderTopRightRadius: "15px",
      borderBottomRightRadius: "15px",
      backgroundColor: "white",
      cursor: "pointer",
      color: "#8d8d8d",
      "&:hover": {
        color: "#7321ea",
      },
    }}
  >
    <Typography>
      <BiLogoLinkedin />
    </Typography>
  </Box>
</Box> */
}
