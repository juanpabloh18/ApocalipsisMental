import { useEffect } from "react";
import "../App.css";
import Alex from "../Multimedia/Alex.png";
import Elena from "../Multimedia/Elena.png";
import Sophie from "../Multimedia/Sophie.png";
import Victor from "../Multimedia/Victor.png";

const Cards = () => {
  const characters = [
    {
      id: 1,
      name: "Elena",
      description:
        "Científica idealista y empática, de 34 años, con ojos verdes y cabello castaño claro recogido. Lidera un proyecto de neurociencia que busca liberar el potencial cerebral humano, enfrentando dilemas éticos al descubrir los peligros ocultos de la tecnología.",
      image: Elena,
    },
    {
      id: 2,
      name: "Alex",
      description:
        "Hacker ético de 32 años, con cabello oscuro despeinado y barba incipiente. Ingenioso y decidido, usa sus habilidades en ciberseguridad para ayudar a Elena a desmantelar la red de control mental de Viktor.",
      image: Alex,
    },
    {
      id: 3,
      name: "Sophie",
      description:
        "Periodista de 36 años, con cabello rubio oscuro en una cola de caballo y mirada aguda. Valiente y comprometida con la verdad, se une a la lucha contra Viktor para exponer la conspiración, vistiendo ropa práctica y rodeada de su equipo de investigación.",
      image: Sophie,
    },
    {
      id: 4,
      name: "Viktor",
      description:
        "Neurocientífico de 39 años, con cabello oscuro y ojos azules fríos. Obsesionado con controlar la humanidad para 'salvarla' de su autodestrucción, lidera experimentos peligrosos que desafían la ética, vestido con trajes oscuros que reflejan su autoridad.",
      image: Victor,
    },
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
    <>
      <div className="title-cards animate-on-scroll" id="Protagonistas">
        <h1>Conoce a los protagonistas</h1>
      </div>
      <div className="intro-cards text-center animate-on-scroll">
        <p>
          En esta historia, un grupo de personas con talentos y visiones
          diferentes se unen para enfrentar un peligroso experimento que amenaza
          la libertad de la humanidad. Cada uno de ellos aporta sus habilidades
          únicas y sus valores para detener un plan de control mental a escala
          global, en una lucha donde la ciencia, la ética y el poder se ponen a
          prueba.
        </p>
      </div>
      <div className="card-container">
        {characters.map((character) => (
          <div key={character.id} className="card animate-on-scroll">
            <div className="face front">
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
            <div className="face back">
              <h3>{character.name}</h3>
              <p>{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
