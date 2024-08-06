import clsx from "clsx";
import { p } from "@/components/ui/varients/typography";
import { BaseTypographyProps } from "@/components/ui/typography/Typography.type";

const P = ({ className, children }: BaseTypographyProps) => {
    return <p className={clsx(p, className)}>{children}</p>;
};

export default P;