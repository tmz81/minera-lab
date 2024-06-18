import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Duvidas() {
  return (
    <Container
      id="section5"
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
              O que é mineralogia do solo e por que é importante?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A mineralogia do solo é o estudo dos minerais presentes no solo e
              suas propriedades. É importante porque os minerais influenciam
              diretamente as características físicas e químicas do solo,
              afetando sua fertilidade, capacidade de retenção de água e
              comportamento no cultivo de plantas. Conhecer a composição
              mineralógica ajuda a entender a formação do solo e a sua
              capacidade de sustentar diferentes tipos de vegetação.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
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
              Quais são os principais minerais encontrados no solo?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Os principais minerais encontrados no solo incluem quartzo,
              feldspatos, micas, argilas (como caulinita, ilita e
              montmorilonita), óxidos de ferro (como hematita e goethita) e
              carbonatos (como calcita). Esses minerais variam dependendo do
              tipo de solo e das condições geológicas e climáticas da região.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
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
              Como a mineralogia do solo afeta a fertilidade do solo?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A mineralogia do solo afeta a fertilidade do solo de várias
              maneiras. Minerais de argila, por exemplo, têm uma alta capacidade
              de troca catiônica, o que significa que podem reter e liberar
              nutrientes importantes para as plantas. Óxidos de ferro e alumínio
              podem afetar a disponibilidade de fósforo. A presença de
              carbonatos pode influenciar o pH do solo. Assim, a composição
              mineralógica pode determinar a quantidade e a disponibilidade de
              nutrientes essenciais para o crescimento das plantas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
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
              Quais métodos são usados para determinar a mineralogia do solo?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Existem vários métodos para determinar a mineralogia do solo,
              incluindo:
              <ul>
                <li>
                  <strong>Difração de Raios X (DRX):</strong> Utilizada para
                  identificar a composição mineralógica e quantificar os
                  minerais presentes.
                </li>
                <li>
                  <strong>Microscopia Eletrônica de Varredura (MEV):</strong>{" "}
                  Utilizada para observar a morfologia dos minerais e sua
                  distribuição no solo.
                </li>
                <li>
                  <strong>Análise Térmica (TG/DTA/DSC):</strong> Utilizada para
                  estudar as mudanças nas propriedades físicas e químicas dos
                  minerais quando aquecidos.
                </li>
                <li>
                  <strong>
                    Espectroscopia de Infravermelho por Transformada de Fourier
                    (FTIR):
                  </strong>{" "}
                  Utilizada para identificar os grupos funcionais e a estrutura
                  química dos minerais.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
