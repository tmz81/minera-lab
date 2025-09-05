import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

export default function Comite({ cardsComite }) {
  return (
    <Grid container justifyContent="center" spacing={3}>
      {cardsComite.map((card, index) => (
        <Grid item key={card.alt} xs={12} sm={6} md={4}>
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
                // Propriedades para padronizar o tamanho da imagem
                width: 200,
                height: 200,
                objectFit: "cover",
                objectPosition: "center",
                // Fim das propriedades de padronização

                display: "block",
                borderRadius: "16px",
                mx: "auto",
                marginBottom: "10px",
              }}
              src={card.src}
              alt={card.alt}
            />
            <Box
              sx={{
                textAlign: "center",
                color: "#3B414A",
                fontWeight: 700,
                borderTop: "1px solid #e0e0e0",
                fontFamily: "Montserrat",
                paddingTop: "14px",
              }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                {card.name}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {card.description}
              </Typography>
              <Button
                href={card.links}
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  width: { sm: "100%", md: "44%" },
                  color: "black",
                  backgroundColor: "#FFB74D",
                  borderRadius: 50,
                  textTransform: "none",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.15)",
                    backgroundColor: "#FF7F0B",
                  },
                }}
              >
                {card.linkDescription}
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
