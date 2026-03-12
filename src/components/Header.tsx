import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo container */}
                    <div className="relative h-12 w-32">
                        <Image
                            src="/logoenoa.png"
                            alt="Enoa Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/equipe" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Notre Équipe
                    </Link>
                    <Link href="/projets" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Nos Projets
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                    >
                        Nous Contacter
                    </Link>
                </nav>
            </div>
        </header>
    );
}
