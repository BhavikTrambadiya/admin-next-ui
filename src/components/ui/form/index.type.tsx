import { FormHTMLAttributes, ReactNode } from "react";

export interface FormTypeProps extends FormHTMLAttributes<HTMLFormElement> {
    className?: string | undefined,
    children: ReactNode,
    props?: any
}