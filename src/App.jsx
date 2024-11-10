import { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import Presetation from "./Components/Presentation";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Timeline from "./Components/Timeline";
import CarouselComponent from "./Components/CarouselComponent";




function App() {
  return (
    <>
    <Presetation/>
    <Timeline/>
    <CarouselComponent/>
    <Cards/>
    <Footer/>
    </>
  );
}

export default App;
