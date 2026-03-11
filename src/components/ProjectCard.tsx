"use client";

import { useState } from "react";

interface ProjectStats {
  miseEnService: string;
  puissance: string;
  surface: string;
  energie: string;
  co2: string;
}

interface ProjectCardProps {
  image: string;
  client: string;
  city: string;
  year: string;
  tag: string;
  stats: ProjectStats;
}

export default function ProjectCard({ image, client, city, year, tag, stats }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-3xl flex flex-col"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "340px",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 rounded-3xl transition-all duration-300"
        style={{
          background: open
            ? "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between p-6">
        {/* Top — tag + meta */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
            {tag}
          </span>
          <span className="text-white/60 text-xs">{city} · {year}</span>
        </div>

        {/* Bottom content */}
        <div className="mt-auto">
          <h3 className="text-xl font-light text-white mb-4 leading-snug">{client}</h3>

          {/* Chiffres Clés panel */}
          <div
            className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mb-4" : "max-h-0"}`}
          >
            <ul className="space-y-1.5">
              {[
                `Mise en service : ${stats.miseEnService}`,
                `Puissance : ${stats.puissance} kWc`,
                `Surface panneaux : ${stats.surface} m²`,
                `Énergie produite : ${stats.energie} MWh/an`,
                `CO₂ évités : ${stats.co2} t/an`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-white transition-colors"
          >
            {open ? "Fermer" : "Chiffres Clés"}
            <span
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
