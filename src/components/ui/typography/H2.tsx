import clsx from "clsx";
import { h2 } from "@/components/ui/varients/typography";
import { BaseTypographyProps } from "@/components/ui/typography/Typography.type";

const H2 = ({ className, children }: BaseTypographyProps) => {
    return <h2 className={clsx(h2, className)}>{children}</h2>;
};

export default H2;