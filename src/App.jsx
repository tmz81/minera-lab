import React from "react";
import NavBar from "./components/NavBar";
import Sobre from "./components/Sobre";
import Serviços from "./components/Serviços";
import Equipamentos from "./components/Equipamentos";
import Duvidas from "./components/Duvidas";
import Footer from "./components/Footer";
import { Grow, Box } from "@mui/material";

function ScrollAnimation({ children }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(ref.current); // Stop observing once visible
          }
        });
      },
      { threshold: 0.3 } // Ajuste conforme necessário
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Grow in={visible} timeout={1000}>
      <Box ref={ref}>{children}</Box>
    </Grow>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <Sobre />
      <ScrollAnimation>
        <Serviços />
      </ScrollAnimation>
        <Equipamentos />
      <ScrollAnimation>
      </ScrollAnimation>
      <ScrollAnimation>
        <Duvidas />
      </ScrollAnimation>
      <Footer />
    </>
  );
}
