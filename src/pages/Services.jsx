/* eslint-disable react/prop-types */
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";

// eslint-disable-next-line react-refresh/only-export-components
const ButtonLink = ({ text }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#FFB74D",
      color: "black",
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
  {
    text: "Identificação e interpretação de fases minerais analisadas por DRX, DSC/TG/ATD e FTIR.",
  },
  {
    text: " Análises de fases minerais (solos, sedimentos, pó de rochas, cerâmicas, produtos sintéticos) por Difração de Raios X (DRX) na forma de pó não orientado e na forma de microagregados de orientados sobre lâmina de vidro.",
  },
  {
    text: "Análises de minerais de argila e matéria orgânica por Análise Térmica Diferencial; Calorimetria Exploratória Diferencial; Análise termogravimétrica (DSC/TG/ATD).",
  },
  {
    text: "Análises de minerais de argila e matéria orgânica por Espectroscopia no Infravermelho por Transformada de Fourier (FTIR), análises na forma de pastilhas prensadas com KBr e na forma de pó com acessório ATR.",
  },
];

export default function ServicesSection() {
  return (
    <Box
      id="serviços"
      sx={{
        backgroundColor: "#F4F6F8",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ pt: "156px", display: "flex", justifyContent: "center" }}
      >
        <Grid
          sx={{
            width: "50%",
            backgroundColor: "#F4F6F8",
            color: "#000",
            paddingBottom: 8,
            borderRadius: 5,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: 40,
                caretColor: "transparent",
                userSelect: "none",
                color: "#FF7F0B",
              }}
            >
              Nossos serviços
            </Typography>
            <Grid sx={{ marginTop: "30px" }}>
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
                        paddingBottom: 2,
                        caretColor: "transparent",
                        userSelect: "none",
                      }}
                    >
                      <ScienceIcon sx={{ width: "80px", height: "80px" }} />
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
                    <a
                      href="https://forms.gle/seu-link-google-forms"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "12px 24px",
                        backgroundColor: "#FFB74D",
                        color: "#222",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        textDecoration: "none",
                        marginTop: "24px",
                        "&:hover": {
                          backgroundColor: "#FF7F0B",
                        },
                      }}
                    >
                      Agendar Análise
                    </a>
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
