import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // íconos modernos

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces = [
    { nombre: "Inicio", href: "#inicio" },
    { nombre: "Servicios", href: "#servicios" },
    { nombre: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-extrabold tracking-wide text-white"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Mi App
        </motion.div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden sm:flex gap-x-8 text-lg font-medium text-white">
          {enlaces.map((enlace, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={enlace.href}
                className="hover:text-gray-200 transition-colors duration-300"
              >
                {enlace.nombre}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          className="sm:hidden text-white"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <motion.ul
          className="sm:hidden bg-indigo-700 flex flex-col items-center gap-y-6 py-6 text-white font-medium shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {enlaces.map((enlace, i) => (
            <li key={i}>
              <a
                href={enlace.href}
                className="hover:text-gray-200 text-lg"
                onClick={() => setMenuAbierto(false)}
              >
                {enlace.nombre}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;