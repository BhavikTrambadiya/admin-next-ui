import clsx from "clsx";
import { InputTypeProps } from "@/components/ui/form/inputs/input.type";
import { InputHTMLAttributes } from "react";

const Input = ({
                   prefix,
                   suffix,
                   className = "",
                   type = "text",
                   error,
                   ...props
               }: InputTypeProps & InputHTMLAttributes<HTMLInputElement>) => {
    const Element = ({ prefix = false, suffix = false, children }: {
        prefix?: boolean,
        suffix?: boolean,
        children: any
    }) => {
        return <div
            className={clsx("px-3 py-2 flex-shrink-0 border-gray-300 peer-focus:border-primary-500 dark:border-gray-700", prefix ? "border-r order-0" : "", suffix ? "border-l order-2" : "")}>{children}</div>;
    };

    const baseClass = "w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 rounded-md shadow-sm";

    return (<>
            {prefix || suffix ?
                <div
                    className={clsx(baseClass, "flex group items-center justify-between focus-within:border-primary-500 focus-within:ring-1 dark:focus-within:border-primary-600 focus-within:ring-primary-500 dark:focus-within:ring-primary-600")}>
                    <input type={type}
                           className={"border-0 flex-1 order-1 px-3 py-2 bg-transparent peer focus:ring-0 dark:focus:ring-0"}  {...props} />
                    {prefix ? <Element prefix>{prefix}</Element> : <></>}
                    {suffix ? <Element suffix>{suffix}</Element> : <></>}
                </div>
                :
                <input type={type}
                       className={clsx(baseClass, "focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 border", className)} {...props} />
            }
        </>
    );
};

export default Input;