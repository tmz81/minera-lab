import { Container, Box, Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#f1f1f1",
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
                <Typography variant="h6">Endereço</Typography>
                <Typography variant="body2">
                  Rua Dom Manuel de Medeiros, Portaria Z4.
                </Typography>
                <Typography variant="body2">PE - Recife</Typography>
                <Typography variant="body2">CEP 52171-900</Typography>
                <Typography
                  component="a"
                  href="https://www.google.com/maps/place/Portaria+Z4+da+UFRPE/@-8.0163251,-34.9477336,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab198b8755d1a9:0xf6b71cf1535869e8!8m2!3d-8.0163304!4d-34.9451587!16s%2Fg%2F11dfj95tf7?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                  sx={{
                    marginTop: "8px",
                    fontSize: "14px",
                  }}
                >
                  Veja como chegar
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                MineraLab © 2024. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}></Grid>
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
