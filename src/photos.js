import React from "react";
// import { Carousel } from "react-bootstrap";
// import { UncontrolledCarousel } from "reactstrap";
import CarouselAppControl from "./carouselphotos";
import PropTypes from "prop-types";
const data_photos = [
  {
    key: 1,
    src: "/comida1.jpg",
    header: "Primer Comida",
    caption: "Esto es el comentario para la primera comida",
    altText: "photo1",
  },
  {
    key: 2,
    src: "/comida2.jpg",
    header: "Segunda Comida",
    caption: "parece una buena comida",
    altText: "photo2",
  },
  {
    key: 3,
    src: "/comida3.jpg",
    header: "Tercera Comida",
    caption: "Esto tambien parece una buena comida",
    altText: "photo3",
  },
];

const photosapp = () => {
  return <CarouselAppControl items={data_photos} />;
};

// UncontrolledCarousel.propTypes = {
//   items: PropTypes.array.isRequired,
//   indicators: PropTypes.bool, // default: true
//   controls: PropTypes.bool, // default: true
//   autoPlay: PropTypes.bool, // default: true
// };

// const DisplayPhoto = ({ url, name, time, comentario, id }) => {
//   console.log(url, name, comentario, id);
//   return (
//     <>
//       <Carousel.Item interval={time}>
//         <img className="d-block w-100" src={url} alt={name} />
//         <Carousel.Caption>
//           <h3>{name}</h3>
//           <p>{comentario}</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </>
//   );
// };

export default photosapp;
