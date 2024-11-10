import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";
import Image1 from "../Multimedia/Escenario1.png";
import Image2 from "../Multimedia/Escenario2.png";
import Image3 from "../Multimedia/Escenario3.png";
import Image4 from "../Multimedia/Escenario4.png";
import Image5 from "../Multimedia/Escenario5.png";

const CarouselComponent = () => {
  const captions = [
    " Instituto de Neurociencia Avanzada",
    "Ciudad de Neurópolis",
    "Base subterranea",
    "Centro de Control de Viktor",
    "Laboratorio de Experimentación Cerebral",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="carousel-container animate-on-scroll">
      <Carousel>
        {[Image1, Image2, Image3, Image4, Image5].map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block"
              src={image}
              alt={`Escenario ${index + 1}`}
              style={{ width: "35%", height: "35%", margin: "0 auto" }}
            />
            <Carousel.Caption>
              <p>{captions[index]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
