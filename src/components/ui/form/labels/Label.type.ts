import { ReactNode } from "react";

export interface LabelTypeProps {
    className?: string | undefined,
    children: ReactNode,
    props?: any,
    htmlFor?: string
}