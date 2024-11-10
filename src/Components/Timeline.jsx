import React, { useState } from "react";
import "../App.css";
import Evento1 from "../Multimedia/Evento1.png";
import Evento2 from "../Multimedia/Evento2.png";
import Evento3 from "../Multimedia/Evento3.png";
import Evento4 from "../Multimedia/Evento4.png";

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Evento 1",
      description: "Descubrimiento de la Tecnología de Liberación Cerebral",
      image: Evento1,
    },
    {
      id: 2,
      title: "Evento 2",
      description: "Primer Experimento Fallido y Efectos Secundarios",
      image: Evento2,
    },
    {
      id: 3,
      title: "Evento 3",
      description: "Revelación de los Planes de Control Mental de Viktor",
      image: Evento3,
    },
    {
      id: 4,
      title: "Evento 4",
      description: "Confrontación Final entre Elena y Viktor",
      image: Evento4,
    },
  ];

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-title" id="Tiempo">Línea de tiempo de acontecimientos</h2>
      <p>Da click en cualquier evento para conocer más</p>
      <div className="timeline">
        {events.map((event) => (
          <div key={event.id} className="timeline-point" onClick={() => handleOpenModal(event)}>
            <span>{event.title}</span>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-text-overlay">{selectedEvent.description}</div>
            <img src={selectedEvent.image} alt={selectedEvent.title} />
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
