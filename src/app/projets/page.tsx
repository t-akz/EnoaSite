import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Projets – Enoa",
  description: "Découvrez les projets solaires et de mobilité électrique réalisés par Enoa au Maroc.",
};

const projects = [
  {
    title: "Centrale Solaire – Région Souss",
    capacity: "5 MWc",
    category: "Production Photovoltaïque",
    description: "Développement, financement et exploitation d'une centrale solaire au sol pour un industriel agroalimentaire dans la région de Souss-Massa.",
    image: "/photovolt.jpg",
    status: "En exploitation",
  },
  {
    title: "Flotte Électrique – Grand Casablanca",
    capacity: "120 bornes",
    category: "Mobilité Électrique",
    description: "Déploiement d'un réseau de recharge rapide pour la flotte logistique d'un opérateur de la grande distribution dans le Grand Casablanca.",
    image: "/mobelec.png",
    status: "En exploitation",
  },
  {
    title: "Maintenance Multi-Sites – Marrakech",
    capacity: "30 sites",
    category: "Installation & Maintenance",
    description: "Contrat de maintenance préventive et corrective sur 30 installations photovoltaïques réparties dans la région de Marrakech-Safi.",
    image: "/instaetmaint.jpg",
    status: "En cours",
  },
  {
    title: "Centrale Solaire – Zone Industrielle Tanger",
    capacity: "8 MWc",
    category: "Production Photovoltaïque",
    description: "Projet en développement pour l'alimentation en énergie solaire d'une zone industrielle dans la région de Tanger-Tétouan.",
    image: "/photovolt.jpg",
    status: "En développement",
  },
];

const statusColor: Record<string, string> = {
  "En exploitation": "bg-green-100 text-green-800",
  "En cours": "bg-blue-100 text-blue-800",
  "En développement": "bg-amber-100 text-amber-800",
};

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-24 sm:py-32 mx-4 sm:mx-8 lg:mx-16 rounded-3xl mt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Nos Projets
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80 max-w-2xl mx-auto">
              Chaque projet est une étape concrète vers un Maroc plus indépendant et plus durable sur le plan énergétique.
            </p>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
              {[
                { value: "+15 MWc", label: "Capacité développée" },
                { value: "+30 sites", label: "Sites équipés" },
                { value: "300K t", label: "CO₂ évitées" },
                { value: "100%", label: "Indépendant & privé" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <dd className="text-4xl font-bold text-primary">{stat.value}</dd>
                  <dt className="text-sm text-foreground/60">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Project cards */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-secondary">Références</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Projets réalisés & en cours
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col rounded-3xl overflow-hidden relative"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "320px",
                  }}
                >
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)" }}
                  />
                  <div className="relative z-10 flex flex-col h-full justify-end p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[project.status]}`}>
                        {project.status}
                      </span>
                      <span className="text-white/60 text-xs">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2">{project.title}</h3>
                    <p className="text-3xl font-bold text-secondary mb-4">{project.capacity}</p>
                    <p className="text-base text-white/80 leading-7">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
