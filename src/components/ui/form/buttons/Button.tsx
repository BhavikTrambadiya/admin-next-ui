import { ButtonTypeProps } from "@/components/ui/form/buttons/Button.type";
import clsx from "clsx";
import colors from "@/components/ui/varients/colors/button";
import sizes from "@/components/ui/varients/sizes/button";
import { getObjValue } from "@/utils/get";

const Button = ({ className, type = "button", color, size, children, ...props }: ButtonTypeProps) => {
    const commonClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
    const applyClass = clsx(getObjValue(color, colors), getObjValue(size, sizes), commonClass, className);
    return <button type={type} className={applyClass} {...props}>{children}</button>;
};

export default Button;