import { ReactNode } from "react";

export interface ButtonTypeProps {
    className?: string | object,
    color: string,
    size: string,
    type?: "button" | "submit" | "reset",
    children: ReactNode,
    props?: any
}