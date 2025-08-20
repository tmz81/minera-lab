import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { LocationOn, Email, WhatsApp } from "@mui/icons-material";
import MiniMapLocation from "../components/MiniMapLocation";
import logo from "../../assets/logo-mineralab.png";

export default function FooterSection() {
  return (
    <Box id="footer" sx={{ bgcolor: "#ffefd5", color: "#1E2125", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  mr: 2,
                  pb: 1,
                  fontFamily: "Montserrat",
                  caretColor: "transparent",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.15)",
                },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  sx={{
                    height: 60,
                    userSelect: "default",
                    cursor: "default",
                    caretColor: "transparent",
                  }}
                />
                <Typography variant="h6" gutterBottom fontWeight={400}>
                  Laboratório de Mineralogia do Solo
                </Typography>
              </Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              O (MineraLAB) pertence à Área de Solos do Departamento de
              Agronomia da Universidade Federal Rural de Pernambuco (campus Dois
              Irmãos, Recife), e é integrante do Programa de Pós-graduação em
              Ciência do Solo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contato: {""}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                pt: 4,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.15)",
                },
                cursor: "pointer",
              }}
            >
              <Email sx={{ mr: 1 }} />
              <Typography
                sx={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="mailto:mineralab.ufrpe@gmail.com"
              >
                mineralab.ufrpe@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                mt: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.15)",
                },
                cursor: "pointer",
              }}
            >
              <WhatsApp sx={{ mr: 1 }} />
              <Typography
                sx={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="https://wa.me/5581988088183"
              >
                (81) 9-8808-8183
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                mt: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.15)",
                },
                cursor: "pointer",
              }}
            >
              <LocationOn sx={{ mr: 1 }} />
              <Typography
                sx={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="https://www.google.com/maps/place/Portaria+Z4+da+UFRPE/@-8.0163304,-34.9477336,17z/data=!4m14!1m7!3m6!1s0x7ab198b8755d1a9:0xf6b71cf1535869e8!2sPortaria+Z4+da+UFRPE!8m2!3d-8.0163304!4d-34.9451587!16s%2Fg%2F11dfj95tf7!3m5!1s0x7ab198b8755d1a9:0xf6b71cf1535869e8!8m2!3d-8.0163304!4d-34.9451587!16s%2Fg%2F11dfj95tf7?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
              >
                Rua Dom Manuel de Medeiros, s/n, Dois Irmãos, Recife/ PE,
                52.171-900.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Localização: {""}
            </Typography>
            <Box sx={{ pt: 3 }}>
              <MiniMapLocation />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 3,
            borderTop: "1px solid black",
          }}
        >
          <Typography variant="body2">
            MineraLAB © 2024. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
