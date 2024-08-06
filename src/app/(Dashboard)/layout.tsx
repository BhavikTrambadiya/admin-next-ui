import { ReactNode } from "react";
import Header from "@/components/ui/layout/Header";
import Sidebar from "@/components/ui/layout/Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex justify-between items-start">
        <Sidebar />
        <div className="min-h-screen w-full flex-shrink bg-gray-100 dark:bg-gray-900">
            <Header />
            <main>
                {children}
            </main>
        </div>
    </div>;
};

export default DashboardLayout;