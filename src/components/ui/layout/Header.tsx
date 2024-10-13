import Button from "@/components/ui/form/buttons/Button";
import Typography from "@/components/ui/typography/Typography";
import ProfileDropdown from "@/components/ui/layout/ProfileDropdown";

const Header = () => {
    return <header className="bg-white w-full dark:bg-gray-800">
        <div className="mx-auto max-w-7xl w-full flex justify-between">
            <div className="flex justify-between items-center">
                <Button className={"lg:hidden h-fit"} size={"md"} color={"secondary"}>
                    <span className={"sr-only"}>Menu</span>
                    <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </Button>
                <div className="pr-4 py-6 sm:pr-6 lg:pr-8">
                    <Typography component={"h1"} variant={"h4"}>Dashboard</Typography>
                </div>
            </div>
            <div className="flex items-center ml-6">
                <ProfileDropdown />
            </div>
        </div>
    </header>;
};

export default Header;
