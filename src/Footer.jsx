import { Container, Box, Typography, Grid } from "@mui/material";
import MiniMap from "./components/MiniMap";

export default function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: "#ffefd5",
        padding: "50px 0",
        color: "#1E2125",
        pt: "78px",
      }}
    >
      <Container maxWidth="lg" justifyContent="space-beetwen">
        <Box alignContent="center" justifyContent="center" alignItems="center">
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "8px",
                  borderBottom: "1px solid #1E2125",
                  pb: 5,
                }}
              >
                <MiniMap />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "50px",
                  gap: "8px",
                  borderBottom: "1px solid #1E2125",
                  pb: 5,
                }}
              >
                <Typography variant="body2">
                  O Laboratório de Mineralogia do Solo (MineraLAB) pertence à
                  Área de Solos do Departamento de Agronomia da Universidade
                  Federal Rural de Pernambuco (campus Dois Irmãos, Recife), e é
                  integrante do Programa de Pós-graduação em Ciência do Solo
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "8px",
                  borderBottom: "1px solid #1E2125",
                  pb: 5,
                }}
              >
                <Typography variant="h6">Contato</Typography>
                <Typography variant="body2">
                  Responsável: Valdomiro Severino de Souza Júnior
                </Typography>
                <Typography variant="body2">
                  E-mail: mineralab.ufrpe@gmail.com
                </Typography>
                <Typography variant="body2">
                  Telefone: (81) 9-8808-8183
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontSize: "14px", pt: 4 }}>
                MineraLab © 2024. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
