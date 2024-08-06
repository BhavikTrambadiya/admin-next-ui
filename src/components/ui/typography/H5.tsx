import clsx from "clsx";
import { h5 } from "@/components/ui/varients/typography";
import { BaseTypographyProps } from "@/components/ui/typography/Typography.type";

const H5 = ({ className, children }: BaseTypographyProps) => {
    return <h5 className={clsx(h5, className)}>{children}</h5>;
};

export default H5;