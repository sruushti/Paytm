import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import {Sidebar} from "../components/SideBar"
import  Navbar  from "../components/Navbar.jsx";
import banner from "../assets/images/banner.jpeg"

export const Home = () => {
    return (
        <>
        <Navbar/>
        {/*navbar
        <input id="nav-toggle" type="checkbox" className="hidden">
            <label id="show-button" for="nav-toggle" className="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden">
                <svg className="h-6 fill-current" viewBox="0 0 20 20">
                    <title>NavBar</title>
                </svg>
            </label>
            <label id="hide-button" for="nav-toggle" className="order-2 hidden cursor-pointer items-center lg:order-1">
                <svg></svg>
            </label>
            <ul className="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-autho lg:justify-center lg:space-x-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Get started</a></li>
            </ul>
        </input> */}
        {/*<header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <Logo className="mr-3 h-6 sm:h-9" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EasyPay</span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <a href="/signin" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                        <Link to={'/signup'}>
                            <button className="btn btn-primary text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</button>
                        </Link>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header> */}
        
        <section className="grid grid-cols-1 md:grid-cols-2 items-center pr-4 pl-4 h-screen">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Smooth Transactions, Simplified</h1>
                <p className="text-xl text-gray-700">Ensuring seamless and secure transactions for authorized users</p>
            </div>
            <div className="pt-4">
                <img src={banner} alt="Hero image" className="w-full h-auto object-cover" />
            </div>
        </section>

        <section>
            <div>
                <h2>Get started to make some transactions</h2>
            </div>
            <div>
                <button>Login</button>
                <button>Signup</button>
                <button>How it works</button>
            </div>
        </section>

        <section>
            <div>Features</div>
        </section>

        <section>
            <div>
                Beneficial offers
            </div>
        </section>

        <section>
            User experience
        </section>

        <section>
            <div>
                <div>
                    TechStack used for seamless experience
                </div>
            </div>
            <div>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>JWT</li>
                </ul>
            </div>
        </section>

        <section>
            About us
        </section>

        <section>
            Contact us
        </section>

        </>
    )
}