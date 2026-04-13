type Profesor = {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  grado: string;
  carrera: string;
  estado: "disponible" | "en_clase" | "no_disponible";
  edificio: string;
  aula: string;
  materias: string[];
  horario: string;
};

type Props = {
  profesor: Profesor;
};

export default function ProfesorCard({ profesor }: Props) {

  // 🧠 Iniciales (ej: DMG)
  const iniciales =
    profesor.grado[0] +
    profesor.nombre[0] +
    profesor.apellidoPaterno[0];

  // 🎨 Configuración de estado
  const estadoConfig = {
    disponible: {
      texto: "Disponible",
      color: "bg-green-100 text-green-600",
      punto: "bg-green-500",
    },
    en_clase: {
      texto: "En Clase",
      color: "bg-yellow-100 text-yellow-600",
      punto: "bg-yellow-500",
    },
    no_disponible: {
      texto: "No Disponible",
      color: "bg-red-100 text-red-600",
      punto: "bg-red-500",
    },
  };

  const estado = estadoConfig[profesor.estado];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm w-full max-w-sm">

      {/* 🔹 Encabezado */}
      <div className="flex items-start justify-between">

        <div className="flex gap-4">
          {/* Iniciales */}
          <div className="w-14 h-14 rounded-full bg-red-700 text-white flex items-center justify-center font-semibold">
            {iniciales}
          </div>

          {/* Nombre */}
          <div>
            <h3 className="font-semibold text-lg leading-tight">
              {profesor.grado} {profesor.nombre} {profesor.apellidoPaterno} {profesor.apellidoMaterno}
            </h3>

            <p className="text-sm text-gray-500">
              {profesor.carrera}
            </p>
          </div>
        </div>

        {/* Estado */}
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${estado.color}`}>
          <div className={`w-2 h-2 rounded-full ${estado.punto}`} />
          {estado.texto}
        </div>

      </div>

      {/* 📍 Ubicación */}
      <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
        📍 Edificio {profesor.edificio} - {profesor.aula}
      </div>

      {/* 📚 Materias */}
      <div className="mt-4 flex flex-wrap gap-2">
        {profesor.materias.slice(0, 2).map((materia) => (
          <span
            key={materia}
            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
          >
            {materia}
          </span>
        ))}

        {profesor.materias.length > 2 && (
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
            +{profesor.materias.length - 2} más
          </span>
        )}
      </div>

      {/* 🕒 Horario */}
      <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
        🕒 {profesor.horario}
      </div>

    </div>
  );
}