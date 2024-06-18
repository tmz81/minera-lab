// constants.js
import equipamento1 from '../../assets/equipamento1.jpg';
import equipamento2 from '../../assets/equipamento2.jpg';
import equipamento3 from '../../assets/equipamento3.jpeg';

export const swiperBreakpoints = {
  375: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

export const cardsData = [
  {
    src: equipamento1,
    alt: "Imagem 2",
    name: "Difratômetro de Raios X",
    description:
      "Análises de fases minerais (solos, sedimentos, rochas, medicamentos, produtos sintéticos) por Difração de Raios X. Tubo de Cu, Cristal de grafite.",
    brand: "Shimadzu",
    model: "XRD6000",
    acquisitionYear: "2007",
    platformCode: "CodV49X1Q/21",
    status: "Ativo",
    creationDate: "14/09/2021",
    techniques: ["Análise Mineralógica De Fase Minerais"],
  },
  {
    src: equipamento2,
    alt: "Imagem 1",
    name: "Analisador Térmico",
    description:
      "Analisador térmica com sensor DSC/TG e sensor DTA/TG. Forno, temperatura de trabalho até 1.500oC. Cadinhos de amostra e referência de alumina.",
    brand: "Netzsch",
    model: "STA Júpiter 449F3",
    acquisitionYear: "2012",
    platformCode: "Cod757OGZ/21",
    status: "Ativo",
    creationDate: "14/09/2021",
    techniques: [
      "Análise Térmica Diferencial",
      "Análise térmica gravimétrica",
      "Calorimetria Exploratória Diferencial",
    ],
  },
  {
    src: equipamento3,
    alt: "Imagem 3",
    name: "Espectroscópico no Infravermelho por Transformada de Fourier",
    description:
      "Espectroscópico no Infravermelho por Transformada de Fourier com varredura de 400 a 4.000 cm-1. As amostras podem ser analisadas por pastilha em KBr ou por amostra sem tratamento analisada em ATR.",
    brand: "PerkinElmer",
    model: "Spectrum TWO",
    acquisitionYear: "2014",
    platformCode: "Cod4OW90N/21",
    status: "Ativo",
    creationDate: "14/09/2021",
    techniques: [
      "Análise De Fases Minerais Por Espectroscopia No Infravermelho Por Transformada De Fourier",
    ],
  },
];
