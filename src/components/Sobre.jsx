import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import banner from "../../assets/logo4.png";

export default function Section1() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container
      id="sobre"
      maxWidth="lg"
      sx={{ mt: "246px", pb: "150px", cursor: "default" }}
    >
      <Grid container spacing={2} alignItems="center" sx={{ color: "#000" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: "40px",
              userSelect: "none",
              caretColor: "transparent",
              mb: 4,
            }}
          >
            <span style={{ color: "#FF7F0B" }}>Sobre o MineraLAB</span>
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom>
              O Laboratório Multiusuário de Mineralogia do Solo da UFRPE
              (MineraLAB) está sediado no Departamento de Agronomia e é
              infraestrutura integrante do Programa de Pós-Graduação em Ciência
              do Solo, na cidade do Recife. O laboratório é de referência não
              apenas no estado de Pernambuco, mas na região nordeste para o
              estudo de minerais em ambiente de solos e sedimentos,
              especialmente minerais na fração argila.
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "28px",
                userSelect: "none",
                caretColor: "transparent",
                mt: 4,
              }}
            >
              <span style={{ color: "#FF7F0B" }}>
                Objetivos do Desenvolvimento Sustentável (ODS)
              </span>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Fome Zero e Agricultura Sustentável: As atividades do MineraLAB
              estão relacionadas com o manejo sustentável de solos, por meio do
              estudo da mineralogia do solo, aplicando ao uso sustentável de
              fertilizantes e agroquímicos, bem como na caracterização de
              remineralizadores (pó de rochas) para a substituição parcial ou
              total de fertilizantes industrializados na adubação de culturas
              agrícolas.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{ display: "flex", justifyContent: "right" }}
        >
          <Box sx={{ display: "flex", gap: 4, userSelect: "none" }}>
            <Box
              component="img"
              src={banner}
              alt="Banner MineraLab"
              sx={{
                height: { xs: "130px", sm: "25px", md: "200px" },
                cursor: "pointer",
                borderRadius: "16px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={handleOpen}
            />
          </Box>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "98%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={banner}
            alt="Expanded Banner"
            sx={{
              maxHeight: "90vh",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
}
