import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if(theme === 'dark')
            document.querySelector('html')?.classList.add('dark');
        else
            document.querySelector('html')?.classList.remove('dark');
    }, [theme]);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white shadow-xl p-6 sticky top-0 z-50">
            <div className="flex items-center flex-shrink-0 text-gray-900 mr-6">
                <Logo className="mr-3 h-6 sm:h-9" />
                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-black">EasyPay</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={handleToggle} className="flex items-center px-3 py-2 border rounded text-gray-900 border-gray-400 hover:text-orange-600 hover:border-orange-600">
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
                        {isOpen ? (
                            <path d="M10 8.586L15.657 3 17 4.343 11.414 10 17 15.657 15.657 17 10 11.414 4.343 17 3 15.657 8.586 10 3 4.343 4.343 3 10 8.586z" />
                        ) : (
                            <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
                        )}
                    </svg>
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <ul className="text-sm lg:flex-grow lg:flex lg:justify-center lg:space-x-5">
                    <li><a href="#" className="text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white hover:bg-gray-900 transition duration-300 py-2 px-4 rounded">
                            Home
                        </a>
                    </li>
                    <li><a href="#" className="text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white hover:bg-gray-900 transition duration-300 py-2 px-4 rounded">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white hover:bg-gray-900 transition duration-300 py-2 px-4 rounded">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white hover:bg-gray-900 transition duration-300 py-2 px-4 rounded">
                            Contact
                        </a>
                    </li>
                    <li className="relative">
    <button id="theme-toggle" onClick={changeTheme} type="button" className="text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white hover:bg-gray-900 transition duration-300 py-2 px-4 rounded">
        {theme === 'light' ? (
            <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
        ) : (
            <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
        )}
    </button>
</li>
                    <li><a href="/signin" className="text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white hover:bg-gray-900 transition duration-300 py-2 px-4 rounded">
                            Sign in
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
