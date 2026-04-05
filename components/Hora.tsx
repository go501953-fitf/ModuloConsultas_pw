"use client";

import { useEffect, useState } from "react";

export default function Hora() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date();

      const horaFormateada = ahora.toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setHora(horaFormateada);
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return <span>{hora}</span>;
}