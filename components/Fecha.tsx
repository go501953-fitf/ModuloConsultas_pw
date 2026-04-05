"use client";

import { useEffect, useState } from "react";

export default function Fecha() {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const ahora = new Date();

    const fechaFormateada = ahora
      .toLocaleDateString("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })

    setFecha(fechaFormateada);
  }, []);

  return <span>{fecha}</span>;
}