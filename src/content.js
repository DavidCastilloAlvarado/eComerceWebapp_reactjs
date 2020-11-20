import React from "react";
// import PropTypes from "prop-types";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
const contenido = [
  {
    id: 1,
    title: "¿Qué es el Yogurt Proviotico?",
    img: "/cow.jpg",
    pixel: "500px",
    texto:
      "Un alimento probiótico contiene microorganismos vivos que, cuando se administran en cantidades adecuadas, aportan beneficios a la salud del huésped. El yogurt probiótico es una práctica, deliciosa y nutritiva opción para aprovechar estas ventajas. La función del probiótico es estimular la salud gastrointestinal, mejorando la microflora y regulando su funcionamiento. Entre sus beneficios están: el fortalecimiento del sistema inmune y la protección del sistema digestivo.",
    palabraclave: "Natural y nutritivo",
  },
  {
    id: 2,
    title: "¿Qué es el Yogurt Proviotico?",
    img: "/cow.jpg",
    pixel: "500px",
    texto:
      "Un alimento probiótico contiene microorganismos vivos que, cuando se administran en cantidades adecuadas, aportan beneficios a la salud del huésped. El yogurt probiótico es una práctica, deliciosa y nutritiva opción para aprovechar estas ventajas. La función del probiótico es estimular la salud gastrointestinal, mejorando la microflora y regulando su funcionamiento. Entre sus beneficios están: el fortalecimiento del sistema inmune y la protección del sistema digestivo.",
    palabraclave: "Natural y nutritivo",
  },
];

const content = (props) => {
  return (
    <>
      {contenido.map((articulo) => {
        const { title, img, pixel, texto, palabraclave, id } = articulo;
        return (
          <div key={id}>
            <Card inverse>
              <CardImg height={pixel} width="50%" src={img} alt="image1" />
              <CardImgOverlay>
                <center>
                  <CardTitle className="text-white bg-info" tag="h1">
                    {title}
                  </CardTitle>
                  <CardText className="text-white bg-info">{texto}</CardText>
                  <CardText>
                    <small className="text-muted">{palabraclave}</small>
                  </CardText>
                </center>
              </CardImgOverlay>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default content;
