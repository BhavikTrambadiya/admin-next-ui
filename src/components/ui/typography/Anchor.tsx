import Link from "next/link";
import clsx from "clsx";
import { getObjValue } from "@/utils/get";
import colors from "@/components/ui/varients/colors/text";
import typography from "@/components/ui/varients/typography";
import { AnchorTypeProps } from "@/components/ui/typography/Typography.type";

const Anchor = ({ href = "#", className, color, variant, children, ...props }: AnchorTypeProps) => {
    return <Link href={href}
                 className={clsx(variant ? getObjValue(variant, typography) : "", color ? getObjValue(color, colors) : "", className)} {...props}>{children}</Link>;
};

export default Anchor;