/* eslint-disable react/prop-types */
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ScienceIcon from "@mui/icons-material/Science";

// eslint-disable-next-line react-refresh/only-export-components
const ButtonLink = ({ text }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#FF7F0B",
      color: "black",
      borderRadius: 50,
      fontWeight: 700,
      textTransform: "none",
      cursor: "default",
      m: 1,
      "&:hover": {
        backgroundColor: "#FF7F0B",
      },
    }}
  >
    {text}
  </Button>
);

const serviceButtons = [
  { text: "Ciência do Solo" },
  { text: "Análise de amostras ambientais" },
  { text: "Geociências" },
];

const techniqueButtons = [
  { text: "Análise Térmica - TG/DTA/DSC" },
  { text: "Espectroscopia de FTIR" },
  { text: "Difração de Raios X" },
];

export default function Serviços() {
  return (
    <Box
      id="serviços"
      sx={{
        backgroundColor: "#F4F6F8",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: "156px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#F4F6F8",
            color: "#000",
            paddingBottom: 8,
            borderRadius: 5,
          }}
        >
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: 40,
                caretColor: "transparent",
                userSelect: "none",
              }}
            >
              Nossos serviços
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: "30px" }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" component="h3">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        paddingBottom: 2,
                        caretColor: "transparent",
                        userSelect: "none",
                      }}
                    >
                      <ScienceIcon fontSize="large" />
                    </Box>
                    <Box
                      sx={{
                        caretColor: "transparent",
                        userSelect: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                        pb: 2,
                      }}
                    >
                      Área de atuação
                    </Box>
                  </Typography>
                  <Typography variant="body1" component="p">
                    <Box
                      sx={{
                        caretColor: "transparent",
                        userSelect: "none",
                        fontWeight: 400,
                        fontSize: "14px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      {serviceButtons.map((button, index) => (
                        <ButtonLink
                          key={index}
                          text={button.text}
                          href={button.href}
                        />
                      ))}
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" component="h3">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        paddingBottom: 2,
                        caretColor: "transparent",
                        userSelect: "none",
                      }}
                    >
                      <EngineeringIcon fontSize="large" />
                    </Box>
                    <Box
                      sx={{
                        caretColor: "transparent",
                        userSelect: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                        pb: 2,
                      }}
                    >
                      Principais Técnicas
                    </Box>
                  </Typography>
                  <Typography variant="body1" component="p">
                    <Box
                      sx={{
                        caretColor: "transparent",
                        userSelect: "none",
                        fontWeight: 400,
                        fontSize: "14px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      {techniqueButtons.map((button, index) => (
                        <ButtonLink
                          key={index}
                          text={button.text}
                          href={button.href}
                        />
                      ))}
                    </Box>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
