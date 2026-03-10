import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe – Enoa",
  description: "Découvrez l'équipe Enoa, des experts passionnés par la transition énergétique au Maroc.",
};

const team = [
  {
    name: "Youssef Amrani",
    role: "Directeur Général",
    bio: "15 ans d'expérience dans le développement de projets d'énergie renouvelable en Afrique du Nord.",
    initials: "YA",
  },
  {
    name: "Salma Benali",
    role: "Directrice Technique",
    bio: "Ingénieure spécialisée en systèmes photovoltaïques et en optimisation de performance des centrales solaires.",
    initials: "SB",
  },
  {
    name: "Karim El Fassi",
    role: "Responsable Projets",
    bio: "Expert en gestion de projets industriels et en déploiement de solutions de mobilité électrique.",
    initials: "KF",
  },
  {
    name: "Nadia Ouhssaine",
    role: "Responsable Finance",
    bio: "Spécialiste en financement de projets d'infrastructure énergétique et en montages financiers complexes.",
    initials: "NO",
  },
  {
    name: "Mehdi Tazi",
    role: "Ingénieur Maintenance",
    bio: "Garant de la performance et de la disponibilité des installations sur l'ensemble du parc opéré par Enoa.",
    initials: "MT",
  },
  {
    name: "Lina Cherti",
    role: "Chargée de Développement",
    bio: "En charge de l'identification et du développement de nouveaux projets solaires et de mobilité au Maroc.",
    initials: "LC",
  },
];

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-24 sm:py-32 mx-4 sm:mx-8 lg:mx-16 rounded-3xl mt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Notre Équipe
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80 max-w-2xl mx-auto">
              Des experts engagés pour accélérer la transition énergétique, avec l&apos;ambition et l&apos;indépendance pour avancer plus vite.
            </p>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-secondary">L&apos;équipe</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Des profils complémentaires
              </p>
              <p className="mt-6 text-lg leading-8 text-foreground/70">
                Une équipe pluridisciplinaire réunie autour d&apos;une vision commune : l&apos;énergie propre et accessible.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col rounded-3xl bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  {/* Avatar */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-secondary">{member.role}</p>
                  <p className="mt-4 text-base leading-7 text-foreground/70 flex-grow">{member.bio}</p>
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
