import { TypographyTypeProps } from "@/components/ui/typography/Typography.type";
import clsx from "clsx";
import typography from "@/components/ui/varients/typography";
import { FC, ReactNode } from "react";
import { getObjValue } from "@/utils/get";

const Typography = ({ variant, component, className, children }: TypographyTypeProps) => {
    const ApplyTypo: FC<{ children: ReactNode, className?: string }> = ({ children, ...props }: {
        children: ReactNode,
        props?: any
    }) => {
        if (component === "h1") {
            return <h1 {...props}>{children}</h1>;
        } else if (component === "h2") {
            return <h2 {...props}>{children}</h2>;
        } else if (component === "h3") {
            return <h3 {...props}>{children}</h3>;
        } else if (component === "h4") {
            return <h4 {...props}>{children}</h4>;
        } else if (component === "h5") {
            return <h5 {...props}>{children}</h5>;
        } else if (component === "h6") {
            return <h6 {...props}>{children}</h6>;
        } else {
            return <p {...props}>{children}</p>;
        }
    };

    return <ApplyTypo className={clsx(getObjValue(variant, typography), className)}>{children}</ApplyTypo>;

};
export default Typography;