"use client";
import { useState } from "react";

type SelectProps = {
  opciones: string[];
  valor: string;
  onChange: (valor: string) => void;
  placeholder?: string;
};

export default function Select({
  opciones,
  valor,
  onChange,
  placeholder = "Seleccionar",
}: SelectProps) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="relative w-full">

      {/* Campo visible */}
      <div
        onClick={() => setAbierto(!abierto)}
        className="bg-[#EDEDF0] rounded-lg px-4 py-2 cursor-pointer flex justify-between items-center"
      >
        <span>{valor || placeholder}</span>
        <span className="text-sm">▾</span>
      </div>

      {/* Opciones */}
      {abierto && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">

          {opciones.map((opcion) => (
            <div
              key={opcion}
              onClick={() => {
                onChange(opcion);
                setAbierto(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center ${
                valor === opcion ? "bg-gray-100" : ""
              }`}
            >
              {opcion}

              {valor === opcion && <span>✔</span>}
            </div>
          ))}

        </div>
      )}
    </div>
  );
}