"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import SidebarLink from "@/components/ui/layout/SidebarLink";

const ProfileDropdown = () => {
    const user = {
        name: "John Doe"
    };
    return <Menu>
        <MenuButton
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-400 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
            {user.name}
            <div className="ml-1">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </div>
        </MenuButton>
        <MenuItems transition anchor="bottom end"
                   className={"w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"}>
            <MenuItem>
                <SidebarLink href={"/dashboard"} className={"rounded-none"}>
                    Dashboard
                </SidebarLink>
            </MenuItem>
            <MenuItem>
                <SidebarLink href={"#"} className={"rounded-none"}>
                    Setting
                </SidebarLink>
            </MenuItem>
            <MenuItem>
                <SidebarLink href={"#"} className={"rounded-none"}>
                    Setting
                </SidebarLink>
            </MenuItem>
        </MenuItems>
    </Menu>;
};

export default ProfileDropdown;
