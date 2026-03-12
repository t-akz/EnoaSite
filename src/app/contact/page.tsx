import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Enoa",
  description: "Contactez Enoa pour vos projets énergétiques au Maroc : solaire, mobilité électrique, efficacité énergétique.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">

            {/* Split Left (CTA) */}
            <div
              className="relative w-full lg:w-1/2 p-10 sm:p-14 lg:p-16 flex flex-col justify-center overflow-hidden"
              style={{
                backgroundImage: "url('/contact.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Degradé asymétrique (Dark left -> Transparent right) */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(16, 61, 45, 0.95) 0%, rgba(16, 61, 45, 0.70) 50%, rgba(16, 61, 45, 0.20) 100%)",
                }}
              />
              {/* Contenu textuel */}
              <div className="relative z-10 block">
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                  Donnons vie à votre <br />
                  <span className="font-light text-secondary">transition énergétique.</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-md">
                  Que vous souhaitiez réduire votre facture énergétique, décarboner votre activité,
                  ou déployer une flotte électrique, nos experts sont à votre disposition pour
                  en discuter.
                </p>

                <div>
                  <a
                    href="mailto:contact@en-oa.com"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 group"
                  >
                    Envoyer un email
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Split Right (Infos) */}
            <div className="w-full lg:w-1/2 bg-white p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-foreground mb-8">Nos coordonnées</h2>

              <ul className="space-y-8">

                {/* Entreprise / Siège */}
                <li className="flex gap-4">
                  <div className="flex bg-primary/10 h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-3 4H2v1h5v-1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Siège Social</p>
                    <p className="mt-1 text-foreground/70 leading-relaxed">
                      ENOA<br />
                      9, rue Tansift, Agdal<br />
                      10080 Rabat, Maroc
                    </p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex gap-4">
                  <div className="flex bg-primary/10 h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Nous écrire</p>
                    <p className="mt-1">
                      <a href="mailto:contact@en-oa.com" className="hover:text-primary text-foreground/70 transition-colors">
                        contact@en-oa.com
                      </a>
                    </p>
                  </div>
                </li>

                {/* Reseaux (LinkedIn) */}
                <li className="flex gap-4">
                  <div className="flex bg-primary/10 h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Nous suivre</p>
                    <p className="mt-1">
                      <a href="https://www.linkedin.com/company/greenvertical" className="hover:text-primary text-foreground/70 transition-colors inline-block" target="_blank" rel="noopener noreferrer">
                        LinkedIn →
                      </a>
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
