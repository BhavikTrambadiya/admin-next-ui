"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import SidebarLink from "@/components/ui/layout/SidebarLink";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ tab }: { tab: any }) => {
    const [tabOpen, setTabOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const currentPath = tab?.children.find((t: any) => t.href === pathname);
        if (currentPath) {
            setTabOpen(true);
        } else {
            setTabOpen(false);
        }
    }, [pathname]);

    return <div
        className={clsx("rounded-lg border duration-300", tabOpen ? "border-gray-300 dark:border-gray-700" : "border-transparent")}
        onClick={() => setTabOpen(!tabOpen)}>
        <button
            className="flex items-center w-full py-2 px-2.5 gap-x-3.5 truncate text-sm font-semibold rounded-md text-black dark:text-white">
            {tab.icon}
            <span>{tab.name}</span>
            <svg
                className={clsx("ml-auto w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 duration-300", !tabOpen ? "rotate-180" : "")}
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"></path>
            </svg>
        </button>
        <div className={clsx("overflow-hidden transition-[200px] duration-300", tabOpen ? "block" : "hidden")}>
            <ul className="pt-2">
                {tab.children && tab.children.map((child: any, index: bigint) => (
                    <SidebarLink href={child.href} key={"sidebar-child-tab-" + index}>
                        {child.icon}
                        <span>{child.name}</span>
                    </SidebarLink>
                ))}
            </ul>
        </div>
    </div>;
};

export default SidebarDropdown;