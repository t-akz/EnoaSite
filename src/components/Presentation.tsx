import Link from "next/link";

export default function Presentation() {
    return (
        <section id="presentation" className="bg-white pt-12 pb-10 sm:pt-16 sm:pb-14">
            <div className="mx-auto max-w-7xl px-8 lg:px-11">
                <div>
                    <div className="space-y-6 text-primary/90 text-lg leading-9">
                        <p>
                            ENOA est un acteur indépendant de l&apos;énergie durable. Portés par une vision long terme et une exigence d&apos;exécution, nous concevons, développons et exploitons des projets d&apos;infrastructure énergétique à fort impact environnemental et économique.
                        </p>
                        <p>
                            <span className="font-bold text-primary">
                                Notre ambition : Accompagner les territoires et les entreprises vers un avenir énergétique plus responsable, plus résilient et plus local.
                            </span>
                        </p>
                        <p>
                            Implantée au Maroc, notre entreprise rassemble des compétences reconnues en développement de projets, ingénierie financière, gestion opérationnelle et innovation industrielle.
                            Héritière de l&apos;expertise de GreenYellow Maroc, notre structure s&apos;appuie également sur l&apos;expérience entrepreneuriale et industrielle de ses fondateurs dans des secteurs aussi variés que l&apos;énergie, l&apos;agroalimentaire, l&apos;immobilier ou le recyclage.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Link
                            href="/equipe"
                            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                        >
                            En savoir plus
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
