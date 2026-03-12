import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-primary">
            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                {/* Main row: logo+desc left, contact right */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
                    {/* Left — logo + description */}
                    <div className="space-y-4 max-w-xs">
                        <div className="h-10 w-28 relative">
                            <Image
                                src="/logoenoa.png"
                                alt="Enoa"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm leading-6 text-foreground/70">
                            Accélérez votre transition énergétique.
                        </p>
                    </div>

                    {/* Right — Contact */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">Contact</h3>
                        <ul role="list" className="mt-4 space-y-3">
                            <li>
                                <a href="mailto:contact@en-oa.com" className="text-sm leading-6 text-foreground/70 hover:text-primary transition-colors">
                                    contact@en-oa.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/greenvertical"
                                    className="inline-flex items-center gap-2 text-sm leading-6 text-foreground/70 hover:text-primary transition-colors"
                                >
                                    <svg className="h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright — centré */}
                <div className="mt-8 border-t border-gray-100 pt-6 text-center">
                    <p className="text-xs leading-5 text-foreground/50">
                        &copy; {new Date().getFullYear()} Enoa. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
