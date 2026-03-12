import Link from "next/link";

export default function Services() {
    const services = [
        {
            title: "Production Photovoltaïque",
            description: "Installation, exploitation et suivi de centrales solaires pour maximiser votre indépendance énergétique.",
            image: "/photovolt.jpg",
        },
        {
            title: "Mobilité Électrique",
            description: "Solutions de recharge performantes et alimentation verte pour accompagner la transition de votre flotte.",
            image: "/mobelec.png",
        },
        {
            title: "Installation et Maintenance",
            description: "Installation experte, contrats de maintenance sur mesure et garantie de performance sur le long terme.",
            image: "/instaetmaint.jpg",
        }
    ];

    return (
        <section id="services" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Notre Expertise</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Ce que nous faisons
                    </p>
                    <p className="mt-6 text-lg leading-8 text-foreground/80">
                        Enoa conçoit, finance, construit et exploite des infrastructures énergétiques performantes, au service des entreprises et des territoires.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="anti-gravity flex flex-col rounded-3xl p-8 h-full relative overflow-hidden"
                                style={{
                                    backgroundImage: `url('${service.image}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "360px",
                                }}
                            >
                                {/* Dark overlay */}
                                <div
                                    className="absolute inset-0 rounded-3xl"
                                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.30) 100%)" }}
                                />
                                <div className="relative z-10 flex flex-col h-full justify-end">
                                    <h3 className="text-2xl font-light leading-7 text-white mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-base leading-7 text-white/80 flex-grow">
                                        {service.description}
                                    </p>
                                    <div className="mt-8">
                                        <Link href="/contact" className="text-sm font-semibold text-white/90 flex items-center gap-1 transition-all hover:text-white hover:gap-2">
                                            Nous contacter <span aria-hidden="true">&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
