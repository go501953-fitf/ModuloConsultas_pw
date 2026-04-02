"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname(); // ✅ CORRECTO (dentro del componente)

  const menuItems = [
    { label: "Inicio", icon: "/assets/inicio.png", path: "/" },
    { label: "Buscar", icon: "/assets/search.png", path: "/buscar" },
    { label: "Horarios", icon: "/assets/horarios.png", path: "/horarios" },
    { label: "Mapa", icon: "/assets/mapa.png", path: "/mapa" },
  ];

  return (
    <aside
      className={`h-screen bg-white border-r transition-all duration-300 relative z-20 shrink-0
      ${open ? "w-64" : "w-20"}`}
    >
      {/* HEADER */}
      <div className="p-4 flex items-center gap-3">
        <button
          onClick={() => { console.log("click"); setOpen(!open); }}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Image
            src="/assets/menu.png"
            width={24}
            height={24}
            alt="Menu"
            className={`transition-transform ${open ? "" : "rotate-180"}`}
          />
        </button>

        {open && <span className="font-semibold">Menú</span>}
      </div>

      {/* MENÚ */}
      <nav className="flex flex-col gap-2 px-2 mt-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.path}
            open={open}
            label={item.label}
            icon={item.icon}
            active={pathname === item.path}
            path={item.path}
          />
        ))}
      </nav>

      {/* FOOTER */}
      <div className="absolute bottom-4 w-full px-2">
        <SidebarItem
          open={open}
          label="Cerrar Sesión"
          icon="/assets/cerrar-sesion.png"
          active={false}
          path="/logout"
        />
      </div>
    </aside>
  );
}

function SidebarItem({
  open,
  label,
  icon,
  active,
  path,
}: {
  open: boolean;
  label: string;
  icon: string;
  active: boolean;
  path: string;
}) {
  return (
    <Link href={path}>
      <div
        className={`
          flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all
          ${active
            ? "bg-red-100 text-red-600 font-semibold"
            : "hover:bg-gray-100 text-gray-700"}
        `}
      >
        {/* ICONO */}
        <div className="flex items-center justify-center w-6 h-6">
          <Image
            src={icon}
            alt={label}
            width={20}
            height={20}
            className={`${active ? "opacity-100" : "opacity-70"}`}
          />
        </div>

        {/* TEXTO */}
        {open && <span className="text-sm">{label}</span>}
      </div>
    </Link>
  );
}