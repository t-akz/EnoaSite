export default function ImpactBanner() {
    const stats = [
        { value: "+15 MWc", label: "Projets photovoltaïques développés ou en cours" },
        { value: "+30 sites", label: "Équipés ou en développement à travers le Maroc" },
        { value: "300K", label: "Tonnes de CO₂ évitées sur la durée de vie des projets" },
        { value: "100%", label: "Indépendants et à capitaux privés" },
    ];

    return (
        <section
            id="impact"
            className="relative py-24 sm:py-32 mx-4 sm:mx-8 lg:mx-16 rounded-3xl overflow-hidden"
            style={{
                backgroundImage: "url('/impact.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay to ensure readability */}
            <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            ENOA EN CHIFFRES
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-white/80">
                            Accélérer la transition énergétique grâce au déploiement de solutions concrètes.
                        </p>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, statIdx) => (
                            <div key={statIdx} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-white/70">{stat.label}</dt>
                                <dd className="order-first text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
