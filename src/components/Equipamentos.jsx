import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Modal,
  Backdrop,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { cardsData, swiperBreakpoints } from "./Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CloseIcon from "@mui/icons-material/Close";

export default function Equipamentos() {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState({});

  const handleOpen = (img) => {
    setCurrentImage(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container
      id="equipamentos"
      sx={{ pt: "156px", caretColor: "transparent", userSelect: "none" }}
    >
      <Box sx={{ textAlign: "center", color: "#fff", pb: 8 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "#FF7F0B",
            marginBottom: "20px",
            fontWeight: 700,
          }}
        >
          Conheça nossos equipamentos
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid container alignItems="center" justifyContent="center">
          <Swiper
            style={{ marginBottom: "20px" }}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={swiperBreakpoints}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {cardsData.map((card, index) => (
              <Grid item key={card.alt} xs={12} sm={4} md={6}>
                <SwiperSlide key={index} style={{ paddingBottom: "20px" }}>
                  <Box
                    sx={{
                      backgroundColor: "#F4F6F8",
                      color: "#000",
                      borderRadius: "16px",
                      padding: "40px",
                      textAlign: "center",
                      boxShadow: 3,
                      caretColor: "transparent",
                      userSelect: "none",
                      display: "flex",
                      height: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        borderRadius: "16px",
                        width: "auto",
                        mx: "auto",
                        cursor: "pointer",
                        marginBottom: "40px",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                      src={card.src}
                      alt={card.alt}
                      onClick={() => handleOpen(card)}
                    />
                    <Box
                      sx={{
                        textAlign: "left",
                        color: "#3B414A",
                        fontWeight: 700,
                        borderTop: "1px solid #e0e0e0",
                        fontFamily: "Montserrat",
                        paddingTop: "28px",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#6EB729",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />{" "}
                        <strong>Nome</strong>: {card.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#6EB729",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />{" "}
                        <strong>Marca</strong>: {card.brand}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#6EB729",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />{" "}
                        <strong>Modelo</strong>: {card.model}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#6EB729",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />{" "}
                        <strong>Código</strong>: {card.platformCode}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#6EB729",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />{" "}
                        <strong>Ano de aquisição</strong>:{" "}
                        {card.acquisitionYear}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "#6EB729",
                            borderRadius: "50%",
                            marginRight: "8px",
                          }}
                        />{" "}
                        <strong>Situação do equipamento</strong>: {card.status}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              </Grid>
            ))}
          </Swiper>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          mt: "120px",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "#FF7F0B",
            fontWeight: 700,
            fontSize: "40px",
            paddingBottom: "78px",
          }}
        >
          Perguntas mais frequentes
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: 1378 },
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
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
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
                mt: 12,
                gap: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>
                {currentImage.description}
              </Typography>
              <Typography variant="body2" fontWeight={800}>
                <strong>Marca</strong>: {currentImage.brand}
              </Typography>
              <Typography variant="body2">
                <strong>Modelo</strong>: {currentImage.model}
              </Typography>
              <Typography variant="body2">
                <strong>Código</strong>: {currentImage.platformCode}
              </Typography>
              <Typography variant="body2">
                <strong>Ano de aquisição</strong>:{" "}
                {currentImage.acquisitionYear}
              </Typography>
              <Typography variant="body2">
                <strong>Situação do equipamento</strong>: {currentImage.status}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>
                Técnicas Utilizadas nesse equipamento:
              </Typography>
              {currentImage.techniques?.map((technique, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
    </Container>
  );
}
