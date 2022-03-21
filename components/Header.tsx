const Header = () => {
    return (

        <nav className="px-20 sm:px-20 py-2.5 dark:bg-gray-800 border-b-2 border-neutral-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center">
                    <img src="/logo.svg" className="mr-2 h-6 sm:h-10" alt="App Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Hackathon</span>
                </a>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/6974223?v=4" alt="user photo" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default Header