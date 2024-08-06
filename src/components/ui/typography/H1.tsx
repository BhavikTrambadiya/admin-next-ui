import clsx from "clsx";
import { h1 } from "@/components/ui/varients/typography";
import { BaseTypographyProps } from "@/components/ui/typography/Typography.type";

const H1 = ({ className, children }: BaseTypographyProps) => {
    return <h1 className={clsx(h1, className)}>{children}</h1>;
};

export default H1;