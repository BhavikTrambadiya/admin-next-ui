import clsx from "clsx";
import { FormTypeProps } from "@/components/ui/form/index.type";

const Form = ({ className, children, ...props }: FormTypeProps) => {
    return <form className={clsx("space-y-6", className)} {...props}>{children}</form>;
};

export default Form;