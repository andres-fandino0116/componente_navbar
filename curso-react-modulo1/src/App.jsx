import React from "react";
import Navbar from "./navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <section id="inicio" className="p-10">
        <h1 className="text-3xl font-bold">Inicio</h1>
      </section>
      <section id="servicios" className="p-10">
        <h1 className="text-3xl font-bold">Servicios</h1>
      </section>
      <section id="contacto" className="p-10">
        <h1 className="text-3xl font-bold">Contacto</h1>
      </section>
    </div>
  );
}

export default App;
