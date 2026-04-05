import React from "react";
import Link from "next/link";

type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    href: string;
};

export default function Atajos({ icon, title, description, color, href }: CardProps) {
    return (
        <Link href={href}>
            <div className="bg-white rounded-xl border p-6 flex flex-col items-center text-center hover:shadow-md transition border-gray-300">

                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${color} mb-4`}>
                    {icon}
                </div>

                <h3 className="font-semibold text-lg">{title}</h3>

                <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
        </Link>
    );
}