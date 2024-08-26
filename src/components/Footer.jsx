import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { LocationOn, Email, WhatsApp } from "@mui/icons-material";
import MiniMapLocation from "./MiniMapLocation";
import logo from "../../assets/logo-mineralab.png"
export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#ffefd5", color: "#1E2125", py: 4 }}>
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
              O (MineraLAB) pertence à Área
              de Solos do Departamento de Agronomia da Universidade Federal
              Rural de Pernambuco (campus Dois Irmãos, Recife), e é integrante
              do Programa de Pós-graduação em Ciência do Solo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography>
                Rua Dom Manuel de Medeiros, s/n, Dois Irmãos, Recife/ PE,
                52.171-900.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1 }} />
              <Typography>mineralab.ufrpe@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <WhatsApp sx={{ mr: 1 }} />
              <Typography>(81) 9-8808-8183</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
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
            MineraLab © 2024. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
