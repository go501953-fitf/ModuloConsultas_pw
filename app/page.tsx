import Atajos from "@/components/Atajos";
import Card from "@/components/Atajos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/*Contenedor de bienvenido */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-medium text-black tracking-wide">Bienvenido</h1>
        <span className="text-sm opacity-90 ">Encuentra y localiza a tus profesores en tiempo real</span>
      </div>
      {/*Contenedor de atajos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <Atajos
          icon={
            <Image
              src="/assets/buscar.png"
              width={24}
              height={24}
              alt="Buscar"
              className="object-contain"
            />
          }
          title="Buscar Profesores"
          description="Encuentra profesores por nombre o materia"
          color="bg-blue-100"
          href="/buscar"
        />

        <Atajos
          icon={
            <Image
              src="/assets/profesores.png"
              width={24}
              height={24}
              alt="Buscar"
              className="object-contain"
            />
          }
          title="Disponibles Ahora"
          description="Ver profesores actualmente disponibles"
          color="bg-green-100"
          href="/buscar"
        />

        <Atajos
          icon={
            <Image
              src="/assets/notes.png"
              width={24}
              height={24}
              alt="Buscar"
              className="object-contain"
            />
          }
          title="Ver Horarios"
          description="Consulta horarios y ubicaciones"
          color="bg-purple-100"
          href="/horarios"
        />

        <Atajos
          icon={
            <Image
              src="/assets/ubicacion.png"
              width={24}
              height={24}
              alt="Buscar"
              className="object-contain"
            />
          }
          title="Mapa del Campus"
          description="Explora edificios y ubicaciones"
          color="bg-orange-100"
          href="/mapa"
        />
      </div>
      {/*div mapa del campus */}
      <div className="flex flex-col border  border-gray-300 w-full rounded-xl h-full">
        <div className="flex flex-row p-6">
          <Image
              src="/assets/ubicacion.png"
              width={24}
              height={24}
              alt="Buscar"
              className="object-contain mr-2"
          />
          <h1 className="text-3xl font-medium text-black tracking-wide">Mapa del Campus</h1>
      </div>
      </div>
      
    </div>


  );
}
