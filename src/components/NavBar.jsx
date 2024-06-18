import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import logo from "../../assets/logotipo-mineralab-removebg-preview.png"
const pages = ["Sobre", "Serviços", "Equipamentos"];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    handleScroll();
  }, []);

  return (
    <AppBar elevation={0} sx={{ backgroundColor: "#f1f1f1", color: "#000" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              fontFamily: "Montserrat",
              caretColor: "transparent",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                height: 100,
                userSelect: "default",
                cursor: "default",
                caretColor: "transparent",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 400,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ height: 100 }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color:
                    activeSection === page.toLowerCase() ? "#FF7F0B" : "black",
                  display: "block",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            href="#footer"
            variant="contained"
            sx={{
              display: { xs: "none", md: "flex" },
              backgroundColor: "#FF7F0B",
              color: "black",
              borderRadius: 50,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#FF7F0B",
              },
            }}
          >
            Contate-nos
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
