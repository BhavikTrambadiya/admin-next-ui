import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

export interface InputTypeProps {
    className?: string | undefined,
    type?: HTMLInputTypeAttribute,
    prefix?: ReactNode,
    suffix?: ReactNode,
    error: boolean,
}