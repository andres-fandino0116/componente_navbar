import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Mi App</div>

        {/* Menú en pantallas grandes */}
        <div className="hidden sm:flex gap-x-6">
          <a href="#" className="hover:underline hover:text-gray-200">Inicio</a>
          <a href="#" className="hover:underline hover:text-gray-200">Servicios</a>
          <a href="#" className="hover:underline hover:text-gray-200">Contacto</a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-y-2">
          <a href="#" className="hover:underline hover:text-gray-200">Inicio</a>
          <a href="#" className="hover:underline hover:text-gray-200">Servicios</a>
          <a href="#" className="hover:underline hover:text-gray-200">Contacto</a>
        </div>
      )}
    </nav>
  );
}