import { Sun, Zap, Wrench } from "lucide-react"; // Note: Need to verify if lucide-react is installed, or use SVGs

export default function Services() {
    const services = [
        {
            title: "Production Photovoltaïque",
            description: "Installation, exploitation et suivi de centrales solaires pour maximiser votre indépendance énergétique.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            ),
        },
        {
            title: "Mobilité Électrique",
            description: "Solutions de recharge performantes et alimentation verte pour accompagner la transition de votre flotte.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24v1.26a2 2 0 0 1-2 2h-2" /><path d="m3 12 4-5 4 5" /><path d="M7 7v10" /><path d="M11 7v10" /></svg>
            ),
        },
        {
            title: "Installation et Maintenance",
            description: "Installation experte, contrats de maintenance sur mesure et garantie de performance sur le long terme.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
            ),
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
                        Une approche complète pour votre transition énergétique.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="anti-gravity flex flex-col rounded-3xl bg-white p-8 border border-gray-100 h-full relative"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-secondary">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold leading-7 text-primary mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-base leading-7 text-foreground/70 flex-grow">
                                    {service.description}
                                </p>
                                <div className="mt-8">
                                    <span className="text-sm font-semibold text-secondary flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                                        En savoir plus <span aria-hidden="true">&rarr;</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
