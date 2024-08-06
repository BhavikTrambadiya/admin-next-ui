import clsx from "clsx";
import { h4 } from "@/components/ui/varients/typography";
import { BaseTypographyProps } from "@/components/ui/typography/Typography.type";

const H4 = ({ className, children }: BaseTypographyProps) => {
    return <h4 className={clsx(h4, className)}>{children}</h4>;
};

export default H4;