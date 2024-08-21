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
import banner from "../../assets/logo3.jpg";

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
            <span style={{ color: "#FF7F0B" }}>Sobre este laboratório</span>
          </Typography>
          <Box>
            <Typography variant="body1" gutterBottom>
              Nosso laboratório é especializado em análises mineralógicas de
              solos e sedimentos, com foco particular na fração argila.
              Utilizamos técnicas avançadas, incluindo:
            </Typography>
            <ul>
              <Typography variant="body1" component="li" gutterBottom>
                Difração de Raios X (DRX)
              </Typography>
              <Typography variant="body1" component="li" gutterBottom>
                Análises Térmicas:
                <ul>
                  <Typography variant="body1" component="li">
                    Análise Térmica Diferencial (DTA)
                  </Typography>
                  <Typography variant="body1" component="li">
                    Termogravimetria (TG)
                  </Typography>
                  <Typography variant="body1" component="li">
                    Calorimetria Exploratória Diferencial (DSC)
                  </Typography>
                </ul>
              </Typography>
              <Typography variant="body1" component="li" gutterBottom>
                Espectroscopia no Infravermelho por Transformada de Fourier
                (FTIR)
              </Typography>
            </ul>
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
                height: { xs: "200px", sm: "250px", md: "300px" },
                cursor: "pointer",
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
