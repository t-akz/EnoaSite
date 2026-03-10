import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe – Enoa",
  description: "Découvrez l'équipe Enoa, son histoire, ses valeurs et ses dirigeants.",
};

const values = [
  {
    title: "Engagement Environnemental",
    text: "Chaque projet vise à réduire l'empreinte carbone de nos clients et à maximiser les usages renouvelables.",
    image: "/engenvir.jpeg",
  },
  {
    title: "Innovation Pragmatique",
    text: "Nous développons des solutions simple, robustes et adaptées aux réalités du terrain.",
    image: "/inov.jpg",
  },
  {
    title: "Ancrage Local",
    text: "Nous croyons à la coopération durable avec les acteurs publics et privés, à toute les échelles.",
    image: "/ancloc.jpg",
  },
];

const directors = [
  {
    initials: "ES",
    name: "Emmanuel Solal",
    role: "Directeur Associé",
    description:
      "Après sept années passées à Londres dans les salles de marché de Morgan Stanley puis JP Morgan, Emmanuel rejoint en 2014 le Groupe C&I où il pilote plusieurs projets structurants : la création de la division coton de CAM Négoce (200 M€ de CA, 35 pays), la fondation de DoviLab (produits anti-Covid) ou encore le développement d'opérations immobilières d'envergure.\nIl apporte à Enoa sa rigueur stratégique et sa culture du résultat.",
  },
  {
    initials: "RS",
    name: "Romain Solal",
    role: "Directeur Associé",
    description:
      "Ancien banquier d’affaires formé chez Rothschild et Morgan Stanley, Romain rejoint le groupe familial en 2008. Il y mène le redressement d’une entreprise de cosmétique, développe la division céréales du groupe, et orchestre de nombreux projets immobiliers.\nÀ Enoa, il met au service de la croissance son sens de l’analyse, sa vision industrielle et son expérience du pilotage opérationnel.",
  },
  {
    initials: "NM",
    name: "Nicholas Mouret",
    role: "Directeur Associé",
    description:
      "Entrepreneur dans l’âme, Nicholas crée en 2009 Privacia Recyclage, devenue leader francilien avant sa cession à PAPREC en 2020. Il poursuit ensuite une série d’opérations immobilières à succès sur divers actifs (logistique, commerce, etc.). Fort de plus de 10 ans dans la création et le développement d’entreprises, Nicholas apporte à Enoa son expertise en stratégie, en financement et en innovation de modèle économique.",
  },
];

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* ── 1. PRÉSENTATION ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url('/histoire.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay — dark on left fading to lighter on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.50) 100%)",
            }}
          />
          <div className="relative z-10 py-24 sm:py-32 max-w-6xl px-8 lg:px-16">
            {/* Eyebrow */}
            <p className="text-base font-semibold text-secondary mb-4 tracking-wide uppercase">
              Notre Équipe
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-12">
              Notre Histoire
            </h1>
            {/* Decorated text block */}
            <div className="border-l-4 border-secondary pl-7 space-y-6">
              <p className="text-lg leading-8 text-white/85">
                Enoa est née de la rencontre entre une vision entrepreneuriale forte et l&apos;opportunité
                stratégique de reprendre la filiale marocaine de GreenYellow, acteur de référence dans
                l&apos;énergie décentralisée. Nos fondateurs apportent chacun une expertise complémentaire
                dans les domaines de l&apos;énergie, de la finance, de l&apos;industrie et de l&apos;immobilier.
                Ensemble, ils partagent une conviction : l&apos;avenir énergétique de nos territoires repose
                sur des solutions locales, responsables et rentables.
              </p>
              <p className="text-lg leading-8 text-white/85">
                L&apos;histoire de Enoa s&apos;inscrit dans la continuité d&apos;un projet industriel structurant.
                En reprenant en 2024 les activités marocaines de GreenYellow, nous avons souhaité donner
                un nouvel élan à un portefeuille de projets ambitieux, tout en y apportant une gouvernance
                entrepreneuriale et une dynamique de croissance long terme.
              </p>
              <p className="text-lg leading-8 text-white/85">
                L&apos;objectif : construire un leader indépendant de l&apos;énergie durable sur le continent
                africain, en s&apos;appuyant sur l&apos;expérience opérationnelle de GreenYellow et sur
                l&apos;ancrage local fort de notre équipe.
              </p>
            </div>
          </div>
        </section>


        {/* ── 2. NOS VALEURS ──────────────────────────────────────────── */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-base font-semibold text-secondary mb-3 tracking-wide uppercase">
                Ce qui nous guide
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nos Valeurs
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="relative overflow-hidden rounded-3xl"
                  style={{
                    backgroundImage: `url('${val.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "400px",
                  }}
                >
                  {/* Gradient overlay — stronger at bottom */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.20) 100%)",
                    }}
                  />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-secondary/60 rounded-full" />

                  <div className="relative z-10 flex flex-col justify-end h-full p-8">
                    <h3 className="text-2xl font-semibold text-white mb-3">{val.title}</h3>
                    <p className="text-base leading-7 text-white/80">{val.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. QUI SOMMES-NOUS ? ────────────────────────────────────── */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-base font-semibold text-secondary mb-3 tracking-wide uppercase">
                Les fondateurs
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Qui sommes-nous ?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {directors.map((dir) => (
                <div
                  key={dir.name}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Top bar */}
                  <div className="h-1.5 bg-primary w-full" />
                  <div className="p-8 flex flex-col gap-5">
                    {/* Avatar + identity */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold tracking-wide">
                        {dir.initials}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-foreground leading-tight">{dir.name}</p>
                        <p className="text-sm text-secondary font-medium mt-0.5">{dir.role}</p>
                      </div>
                    </div>
                    {/* Separator */}
                    <div className="h-px bg-gray-100" />
                    {/* Description */}
                    <p className="text-base leading-7 text-foreground/70 whitespace-pre-line">{dir.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. NOTRE RÊVE ───────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-foreground mx-4 sm:mx-8 lg:mx-16 rounded-3xl">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-8">
              Notre Rêve
            </p>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-snug tracking-tight">
              &ldquo;Faire de l&apos;énergie un levier de transformation{" "}
              <span className="text-secondary font-semibold">durable</span>,{" "}
              <span className="text-secondary font-semibold">accessible</span> et{" "}
              <span className="text-secondary font-semibold">rentable</span>.&rdquo;
            </blockquote>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
