import Image from "next/image";

export default function Buscar() {
  return (
    <div className="flex flex-col gap-6">
      {/*Contenedor de inicio */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-medium text-black tracking-wide">Buscar Profesores</h1>
        <span className="text-sm opacity-90 ">Encuentra profesores de tú área academica por nombre, materia o departamento</span>
      </div>
      {/*Contenedor de busqueda */}
      <div className="flex flex-col w-full h-full border border-gray-300 rounded-xl gap-6">
        <div className="flex flex-row p-4 w-full ">
          <Image
            src="/assets/search_.png"
            width={16}
            height={16}
            alt="Buscar"
            className="object-contain mr-2"
          />
          <input placeholder="Buscar por nombre, materia o departamento" className="w-full" ></input>
        </div>
      </div>

    </div>
  );
}
