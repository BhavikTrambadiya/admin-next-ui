import clsx from "clsx";
import { h6 } from "@/components/ui/varients/typography";
import { BaseTypographyProps } from "@/components/ui/typography/Typography.type";

const H6 = ({ className, children }: BaseTypographyProps) => {
    return <h6 className={clsx(h6, className)}>{children}</h6>;
};

export default H6;