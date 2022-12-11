import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import imagem1 from "./img/about-us.jpg"
import imagem2 from "./img/contact.png"
import 'bootstrap/dist/css/bootstrap.min.css'

function Carousell() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem1}
          alt="First slide"
        width={800} height={420}/>
        <Carousel.Caption>
          <h3>Primeiro slide</h3>
          <p>Descrição da foto 1.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem2}
          alt="Second slide"
          width={800} height={420}/>

        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>Descrição da foto 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem1}
          alt="Third slide"
          width={800} height={420}/>

        <Carousel.Caption>
          <h3>Terceiro</h3>
          <p>Descrição de foto 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;