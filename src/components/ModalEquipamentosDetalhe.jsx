import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function ModalEquipamentosDetalhe({ open, handleClose, currentImage }) {
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 1378 },
          maxHeight: { xs: "90%", md: "80%" },
          bgcolor: "background.paper",
          border: "none",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          overflowY: "auto",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 16, right: 16 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 2, fontWeight: 700 }}
            >
              {currentImage.name}
            </Typography>
            <Box
              component="img"
              sx={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "16px",
                width: "100%",
                mx: "auto",
              }}
              src={currentImage.src}
              alt={currentImage.alt}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xs: 4, md: 12 },
              gap: 2,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 800 }}>
              {currentImage.description}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Técnicas Utilizadas nesse equipamento:
            </Typography>
            {currentImage.techniques?.map((technique, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#6EB729",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />{" "}
                {technique}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
