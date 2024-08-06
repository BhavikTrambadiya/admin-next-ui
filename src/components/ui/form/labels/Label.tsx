import { LabelTypeProps } from "@/components/ui/form/labels/Label.type";
import clsx from "clsx";

const Label = ({ className, children, htmlFor, ...props }: LabelTypeProps) => {
    return <label htmlFor={htmlFor}
                  className={clsx("block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400", className)} {...props}>{children}</label>;
};

export default Label;