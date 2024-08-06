import Button from "@/components/ui/form/buttons/Button";

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
                <div className="px-4 py-6 sm:px-6 lg:px-8">
                    App router
                </div>
            </div>
            <div className="flex items-center ml-6">
                {/*<x-dropdown align="right" width="48">*/}
                {/*    <x-slot name="trigger">*/}
                {/*        <button*/}
                {/*            class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-400 dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">*/}
                {/*            <div>{{ Auth::user()->name}}</div>*/}

                {/*            <div class="ml-1">*/}
                {/*                <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"*/}
                {/*                     viewBox="0 0 20 20">*/}
                {/*                    <path fill-rule="evenodd"*/}
                {/*                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
                {/*                          clip-rule="evenodd" />*/}
                {/*                </svg>*/}
                {/*            </div>*/}
                {/*        </button>*/}
                {/*    </x-slot>*/}

                {/*    <x-slot name="content">*/}
                {/*        <form method="POST" action="{{ route('admin.logout') }}">*/}
                {/*            @csrf*/}
                {/*            <x-dropdown-link role="button" href="#"*/}
                {/*                             onclick="event.preventDefault();*/}
                {/*                                    this.closest('form').submit();">*/}
                {/*                {{ __("Log Out")}}*/}
                {/*            </x-dropdown-link>*/}
                {/*        </form>*/}
                {/*    </x-slot>*/}
                {/*</x-dropdown>*/}
            </div>
        </div>
    </header>;
};

export default Header;