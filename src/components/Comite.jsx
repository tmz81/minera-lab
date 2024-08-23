import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { cardsComite, swiperBreakpointsComite } from "./Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Comite() {
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState({});

  const handleOpen = (img) => {
    setCurrentImage(img);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <Grid container justifyContent="center">
      <Grid container alignItems="center" justifyContent="center">
        <Swiper
          style={{ marginBottom: "20px", width: "900px" }}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={swiperBreakpointsComite}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cardsComite.map((card, index) => (
            <Grid item key={card.alt} xs={12} sm={4} md={6}>
              <SwiperSlide key={index} style={{ paddingBottom: "20px" }}>
                <Box
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#000",
                    borderRadius: "16px",
                    padding: "8px",
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
                      width: "200px",
                      mx: "auto",
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                    src={card.src}
                    alt={card.alt}
                    onClick={() => handleOpen(card)}
                  />
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "#3B414A",
                      fontWeight: 700,
                      borderTop: "1px solid #e0e0e0",
                      fontFamily: "Montserrat",
                      paddingTop: "10px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      {card.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}
