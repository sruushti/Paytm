import React, { useState } from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

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
                    <li><a href="/signin" className="text-lg block mt-4 lg:inline-block lg:mt-0 text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white font-medium py-2 px-4 rounded transition duration-300">
                            Sign in
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
