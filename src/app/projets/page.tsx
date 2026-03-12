import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Projets – Enoa",
  description: "Découvrez les projets solaires et de mobilité électrique réalisés par Enoa au Maroc.",
};

const projects = [
  {
    image: "/sbm.jpeg",
    client: "SBM",
    city: "Casablanca",
    year: "2018",
    tag: "Production Photovoltaïque",
    stats: {
      miseEnService: "Novembre 2018",
      puissance: "600",
      surface: "3 000",
      energie: "960",
      co2: "700",
    },
  },
  {
    image: "/micro.png",
    client: "STMicroelectronics",
    city: "Bouskoura",
    year: "2020",
    tag: "Production Photovoltaïque",
    stats: {
      miseEnService: "Janvier 2020 & Septembre 2022",
      puissance: "1 279.5",
      surface: "6 500",
      energie: "1 900",
      co2: "1 368",
    },
  },
  {
    image: "/chergui.png",
    client: "Les Domaines Agricoles",
    city: "Fes",
    year: "2021",
    tag: "Production Photovoltaïque",
    stats: {
      miseEnService: "Janvier 2021 & Septembre 2022",
      puissance: "1 245",
      surface: "9 560",
      energie: "1 800",
      co2: "1 296",
    },
  },
  {
    image: "/douiet.jpg",
    client: "Les Domaines Agricoles",
    city: "Douiet - Fes",
    year: "2022",
    tag: "Production Photovoltaïque",
    stats: {
      miseEnService: "Juin 2022",
      puissance: "285",
      surface: "1 400",
      energie: "430",
      co2: "310",
    },
  },
  {
    image: "/king.jpeg",
    client: "King Pelagique",
    city: "Dakhla",
    year: "2023",
    tag: "Production Photovoltaïque",
    stats: {
      miseEnService: "Janvier 2023",
      puissance: "968",
      surface: "4 973",
      energie: "1 622",
      co2: "1 168",
    },
  },
  {
    image: "/sevam.jpg",
    client: "Sevam",
    city: "Casablanca",
    year: "2023",
    tag: "Production Photovoltaïque",
    stats: {
      miseEnService: "Mars 2023 & Janvier 2024",
      puissance: "3 402.38",
      surface: "17 000",
      energie: "4 850",
      co2: "3 500",
    },
  },
];

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* ── 1. PRÉSENTATION ──────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/proj.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay — sombre à gauche, plus clair à droite */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.70) 55%, rgba(0,0,0,0.40) 100%)",
            }}
          />
          <div className="relative z-10 py-24 sm:py-32 max-w-6xl px-8 lg:px-16">
            <p className="text-base font-semibold text-secondary mb-4 tracking-wide uppercase">
              Nos Projets
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-12">
              Un portefeuille en action
            </h1>
            <div className="border-l-4 border-secondary pl-7 space-y-6">
              <p className="text-lg leading-8 text-white/85">
                L&apos;héritage de GreenYellow Maroc, combiné à l&apos;expérience sectorielle de nos fondateurs,
                constitue un socle solide sur lequel nous bâtissons et pilotons actuellement plusieurs projets
                énergétiques stratégiques, principalement sur le territoire marocain. Ils illustrent notre
                volonté d&apos;agir vite et efficacement pour répondre aux besoins croissants en énergie propre.
              </p>
              <p className="text-lg leading-8 text-white/85">
                Parmi les réalisations notables dont nous assurons la continuité et l&apos;optimisation :
              </p>
              <ul className="space-y-3">
                {[
                  "Plus de 7 installations photovoltaïques en exploitation sur tout le territoire marocain",
                  "Des projets pilotes intégrant des technologies de stockage et monitoring intelligent",
                  "Un réseau d'exploitation et de maintenance structuré et opérationnel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-white/85">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 2. RÉFÉRENCES ────────────────────────────────────────────── */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-base font-semibold text-secondary mb-3 tracking-wide uppercase">
                Références
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Projets réalisés &amp; en cours
              </h2>
              <p className="mt-4 text-base text-foreground/60">
                Ces projets s’inscrivent dans des partenariats durables avec des acteurs publics, des groupes privés marocains et internationaux, en intégrant systématiquement des prestataires locaux et des technologies éprouvées.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CTA ───────────────────────────────────────────────────── */}
        <section className="py-24 sm:py-28 bg-primary mx-4 sm:mx-8 lg:mx-16 rounded-3xl mb-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Vous avez un projet ?<br />Une question ?<br />
              <span className="font-light">Parlons-en.</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Que vous soyez une entreprise, une collectivité ou un investisseur, notre équipe est à votre
              écoute pour échanger sur vos enjeux énergétiques et explorer ensemble des solutions concrètes.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
            >
              Nous Contacter →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
