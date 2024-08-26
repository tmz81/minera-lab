import React from "react";
import { Grow, Box } from "@mui/material";
import NavBar from "./components/NavBar";
import AboutSection from "./pages/About";
import ServicesSection from "./pages/Services";
import EquipmentSection from "./pages/Equipment";
import QuestionSection from "./pages/Questions";
import FooterSection from "./pages/Footer";

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
      <AboutSection />
      <ScrollAnimation>
        <ServicesSection />
      </ScrollAnimation>
        <EquipmentSection />
      <ScrollAnimation>
      </ScrollAnimation>
      <ScrollAnimation>
        <QuestionSection />
      </ScrollAnimation>
      <FooterSection />
    </>
  );
}
