import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="Centrale solaire photovoltaïque au Maroc"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
            </div>

            {/* Organic floating blob */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 blob animate-float blur-3xl" />

            <div className="container relative mx-auto px-4 lg:px-8 pt-24 pb-16">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-medium mb-6 animate-fade-up">
                        <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
                        Acteur indépendant de l’énergie durable
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Votre transition{" "}
                        <span className="text-secondary">énergétique</span>{" "}
                        commence ici
                    </h1>

                    <p
                        className="text-lg md:text-xl text-white/70 max-w-xl mb-8 animate-fade-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Solutions solaires photovoltaïques et mobilité électrique pour les grands acteurs industriels du Maroc.
                    </p>

                    <div
                        className="flex flex-wrap gap-4 animate-fade-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <Button
                            href="#contact"
                            size="lg"
                            className="rounded-full px-8 gap-2"
                        >
                            Demander une étude
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button
                            href="#services"
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8"
                        >
                            Découvrir nos expertises
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
