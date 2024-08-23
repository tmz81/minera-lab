import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MiniMap() {
  return (
    <Box>
      <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
        Nosso endereço
      </Typography>
      <Typography variant="body1" component="p" sx={{ mb: 3 }}>
        Rua Dom Manoel de Medeiros, s/n – Dois Irmãos CEP.: 52.171.900 –
        Recife-PE.
      </Typography>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          paddingBottom: "56.25%",
          height: 0,
          mb: 2,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d785.5690397623397!2d-34.94507930078677!3d-8.016757712502502!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1724436257246!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa do Endereço"
        ></iframe>
      </Box>
    </Box>
  );
}
