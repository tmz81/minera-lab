import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Comite from "./Comite";
import ComiteExterno from "./ComiteExterno";

export default function Duvidas() {
  return (
    <Container
      id="comitê"
      sx={{
        pt: "78px",
        borderTop: "1px solid #EAEDF1",
        caretColor: "transparent",
        userSelect: "none",
      }}
    >
      <Box sx={{ margin: "0 auto", backgroundColor: "#fff", mb: 8 }}>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              Horário de funcionamento
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Segunda-feira a sexta-feira, com atendimento aos usuários das
              08:00 às 18:00 horas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              Disponibilização de acesso ao laboratório para pesquisadores de
              outros grupos e instituições
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              O MineraLAB é um Laboratório Multiusuário totalmente disponível e
              acessível para pesquisadores do estado de Pernambuco, bem como de
              pesquisadores de outros estados. O que se pode atestar pelas
              cartas de anuência que foram emitidas, nos atesta e assegura que
              somos efetivamente um Laboratório Multiusuário.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              O que é um Comitê Gestor?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              O Comitê Gestor funciona como órgão deliberativo e consultivo nos
              assuntos técnicos/científicos, administrativo e financeiro. O
              comitê se reúne ordinariamente a cada 4 meses e de forma
              extraordinária quando necessário ou quando convocado pelos membros
              do comitê.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography
              sx={{ color: "#FF7F0B", fontWeight: 700, fontSize: 28 }}
            >
              O comitê gestor é formado por quais membros?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  O comitê gestor é formado por dois membros da UFRPE:
                  <Comite />
                </li>
                <li>
                  e dois membros externos à UFRPE:
                  <ComiteExterno />
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
