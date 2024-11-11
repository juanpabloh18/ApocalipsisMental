import { motion } from "framer-motion";
import Mapa from "../Multimedia/Ciudad.png";

const Presetation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="Title" id="Inicio">
        <h1>Apocalipsis mental</h1>
      </div>
      <div className="history text-center">
        <p className="Introduccion">
          En un futuro cercano, en la avanzada ciudad de Neurópolis, un grupo de
          brillantes científicos desarrolla una tecnología revolucionaria que
          permite liberar el 100% del potencial cerebral humano. La Dra. Elena
          Navarro, líder del proyecto y defensora del progreso ético, descubre
          que su colega, el ambicioso Dr. Viktor Lorenz, tiene otros planes:
          utilizar esta tecnología para controlar la mente de las personas y
          establecer un dominio global. Mientras la ciudad se sumerge en un
          conflicto de ideales, Elena se une a un equipo de aliados inesperados
          para detener a Lorenz y proteger la libertad de la humanidad. En esta
          lucha de ciencia y moralidad, se enfrentarán a dilemas profundos y
          desafíos peligrosos que pondrán a prueba los límites de su humanidad.
        </p>
      </div>
      <div className="content-wrapper">
        <motion.div
          className="content-item"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Neurópolis</h2>
          <img src={Mapa} alt="Mapa" />
        </motion.div>
        <motion.div
          className="content-item"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Avance de apocalipsis mental</h2>
          <iframe
            src="https://www.youtube.com/embed/5ws35NDY7do?si=TUch8uy7nJBXmozP" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Presetation;
