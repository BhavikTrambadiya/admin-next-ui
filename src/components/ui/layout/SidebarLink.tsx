"use client";
import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const SidebarLink = ({ href, children, ...props }: { href: string, children: ReactNode }) => {
    const pathname = usePathname();
    return <Link href={href}
                 className={clsx("flex items-center w-full py-2 px-2.5 gap-x-3.5 truncate text-sm font-semibold rounded-md", href === pathname ? "text-white bg-primary-500 hover:bg-primary-600" : "text-black dark:text-white bg-transparent hover:bg-gray-200 dark:hover:bg-gray-900")}>{children}</Link>;
};

export default SidebarLink;