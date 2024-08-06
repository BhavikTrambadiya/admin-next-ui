import clsx from "clsx";
import { h3 } from "@/components/ui/varients/typography";
import { BaseTypographyProps } from "@/components/ui/typography/Typography.type";

const H3 = ({ className, children }: BaseTypographyProps) => {
    return <h3 className={clsx(h3, className)}>{children}</h3>;
};

export default H3;