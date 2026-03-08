import Link from "next/link";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "default" | "outline";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function Button({ variant = "default", size = "lg", className = "", children, ...props }: ButtonProps) {
    const base = "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-base" };
    const variants = {
        default: "bg-primary text-white hover:bg-secondary hover:shadow-lg active:scale-95",
        outline: "border border-white/30 text-white hover:bg-white hover:text-foreground",
    };
    return (
        <a className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
            {children}
        </a>
    );
}
