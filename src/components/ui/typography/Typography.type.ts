import { ReactNode } from "react";

export interface TypographyTypeProps extends BaseTypographyProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
    component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

export interface AnchorTypeProps extends BaseTypographyProps {
    color?: string,
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
    href?: string | "#",
}

export interface BaseTypographyProps {
    className?: string | undefined,
    children: ReactNode
}
