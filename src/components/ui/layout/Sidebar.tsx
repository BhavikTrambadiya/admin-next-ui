import SidebarLink from "@/components/ui/layout/SidebarLink";
import SidebarDropdown from "@/components/ui/layout/SidebarDropdown";

const Sidebar = async () => {
    const tabs = await fetch("http://localhost:3000/api/admin-tabs")
        .then((response) => response.json())
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            return [];
        });

    return <div className="flex justify-start items-start sticky top-0 lg:w-full lg:max-w-xs h-full">
        <div
            className="transform lg:relative fixed top-0 lg:top-auto left-0 lg:left-auto bottom-0 lg:bottom-auto z-[60] w-full min-w-[18rem]  bg-white h-full min-h-screen border-r border-gray-200 pt-7 pb-10 lg:block lg:translate-x-0 lg:right-auto dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300">
            <div className="px-6">
                <a className="flex-none text-xl font-semibold dark:text-white" href="#"
                   aria-label="Brand">Bhavik Trambadiya</a>
            </div>
            <nav
                className="py-6 px-4 w-full space-y-1.5 max-h-[calc(100vh-60px)] overflow-y-auto scrollbar">
                {tabs && tabs.map((tab: any) => (
                    <>
                        {tab.children && tab.children.length > 0 ? <SidebarDropdown tab={tab} /> :
                            <SidebarLink href={tab.href ?? ""}>
                                {tab.icon}
                                <span>{tab.name}</span>
                            </SidebarLink>}
                    </>
                ))}
            </nav>
        </div>
        <div className="w-full absolute bg-black/10 h-full"></div>
    </div>
        ;
};

export default Sidebar;