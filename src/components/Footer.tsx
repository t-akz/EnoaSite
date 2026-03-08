import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-white border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="h-12 w-32 relative">
                            <Image
                                src="/logoenoa.png"
                                alt="Enoa"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm leading-6 text-foreground/70">
                            Enoa, votre fournisseur d&apos;indépendance verte.
                            Accélérez votre transition énergétique avec nos solutions.
                        </p>
                        <div className="flex space-x-6">
                            <a href="https://www.linkedin.com/company/greenvertical" className="text-foreground/50 hover:text-primary">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="#services" className="text-sm leading-6 text-foreground/70 hover:text-primary">
                                            Production Photovoltaïque
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#services" className="text-sm leading-6 text-foreground/70 hover:text-primary">
                                            Mobilité Électrique
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#services" className="text-sm leading-6 text-foreground/70 hover:text-primary">
                                            Maintenance
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="mailto:contact@en-oa.com" className="text-sm leading-6 text-foreground/70 hover:text-primary">
                                            contact@en-oa.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-foreground/50">
                        &copy; {new Date().getFullYear()} Enoa. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
