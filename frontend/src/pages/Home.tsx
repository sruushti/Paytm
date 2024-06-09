import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import {Sidebar} from "../components/SideBar"
import  Navbar  from "../components/Navbar.jsx";
import banner from "../assets/images/banner.jpeg"
import imgone from "../assets/images/img1.jpeg"
import imgtwo from "../assets/images/img2.jpg"
import {register} from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { LockClosedIcon, QrCodeIcon, ArrowsPointingOutIcon, GiftIcon, DocumentTextIcon, CalculatorIcon } from '@heroicons/react/24/outline';
import Working from "../components/Working.jsx";

register();

export const Home = () => {
    return (
        <>
        <head>
	        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        </head>
        <Navbar/>
        
        <section className="grid grid-cols-1 md:grid-cols-2 items-center pr-4 pl-4 h-screen">
            <div className="text-center md:text-left mb-4 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Smooth Transactions, Simplified</h1>
                <p className="text-xl text-gray-700">Ensuring seamless and secure transactions for authorized users</p>
                <Link to={'signup'}  className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">Sign up now!</Link>
            </div>
            <div className="pt-4">
                <img src={banner} alt="Hero image" className="w-full h-auto object-cover" />
            </div>
        </section>

        <section className="py-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-8">Features</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <LockClosedIcon className="w-12 h-12 text-blue-800 mx-auto"/>
              <h4 className="text-xl font-semibold text-blue-800 mt-4">Authentication and Security</h4>
              <p className="text-gray-700 mt-2">We will take extra care to protect our customers’ data</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
              <QrCodeIcon className="w-12 h-12 text-blue-800 mx-auto"/>
              <h4 className="text-xl font-semibold text-blue-800 mt-4">QR Code</h4>
              <p className="text-gray-700 mt-2">We are aiming to provide QR codes for quick and convenient transactions</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl ">
              <ArrowsPointingOutIcon className="w-12 h-12 text-blue-800 mx-auto"/>
              <h4 className="text-xl font-semibold text-blue-800 mt-4">Transfer</h4>
              <p className="text-gray-700 mt-2">Seamlessly transfer funds between accounts with instant processing and minimal fees</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
              <GiftIcon className="w-12 h-12 text-blue-800 mx-auto"/>
              <h4 className="text-xl font-semibold text-blue-800 mt-4">Rewards</h4>
              <p className="text-gray-700 mt-2">Earn and redeem rewards for your transactions</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
              <DocumentTextIcon className="w-12 h-12 text-blue-800 mx-auto"/>
              <h4 className="text-xl font-semibold text-blue-800 mt-4">Invoices</h4>
              <p className="text-gray-700 mt-2">Create, send, and manage invoices efficiently, ensuring timely payments</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl ">
              <CalculatorIcon className="w-12 h-12 text-blue-800 mx-auto"/>
              <h4 className="text-xl font-semibold text-blue-800 mt-4">Budgeting Tools</h4>
              <p className="text-gray-700 mt-2">These help to track your expenses, set goals, and manage your finances effectively.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>


        {/*<section className="py-12 bg-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-8">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300">
                        <LockClosedIcon className="w-12 h-12 text-blue-800 mx-auto"/>
                        <h4 className="text-xl font-semibold text-blue-800 mt-4">Authentication and Security</h4>
                        <p className="text-gray-700 mt-2">We will take extra care to protect our customers’ data</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300">
                        <QrCodeIcon className="w-12 h-12 text-blue-800 mx-auto"/>
                        <h4 className="text-xl font-semibold text-blue-800 mt-4">QR Code</h4>
                        <p className="text-gray-700 mt-2">We are aiming to provide QR codes for quick and convenient transactions and information sharing.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300">
                        <ArrowsPointingOutIcon className="w-12 h-12 text-blue-800 mx-auto"/>
                        <h4 className="text-xl font-semibold text-blue-800 mt-4">Transfer</h4>
                        <p className="text-gray-700 mt-2">Seamlessly transfer funds between accounts with instant processing and minimal fees.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300">
                        <GiftIcon className="w-12 h-12 text-blue-800 mx-auto"/>
                        <h4 className="text-xl font-semibold text-blue-800 mt-4">Rewards</h4>
                        <p className="text-gray-700 mt-2">Earn and redeem rewards for your transactions.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300">
                        <DocumentTextIcon className="w-12 h-12 text-blue-800 mx-auto"/>
                        <h4 className="text-xl font-semibold text-blue-800 mt-4">Invoices</h4>
                        <p className="text-gray-700 mt-2">Create, send, and manage invoices efficiently, ensuring timely payments and record keeping.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300">
                        <CalculatorIcon className="w-12 h-12 text-blue-800 mx-auto"/>
                        <h4 className="text-xl font-semibold text-blue-800 mt-4">Budgeting Tools</h4>
                        <p className="text-gray-700 mt-2">These help to track your expenses, set goals, and manage your finances effectively.</p>
                    </div>
                </div>
            </div>
        </section>*/}


        <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-8">Get started to make some transactions</h2>
        <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition duration-300">
                Login
            </button>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition duration-300">
                Signup
            </button>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition duration-300">
                How it works
            </button>
        </div>
    </div>
</section>

        <section>
            <h2>How it works</h2>
            <Working/>
        </section>

<section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src={imgone} alt="dashboard image"/>
        <img className="w-full hidden dark:block" src={imgone} alt="dashboard image"/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Payments made easy</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"> Connect securely with friends, family, and businesses, and explore new opportunities with our innovative payment solutions.</p>
            <Link to="/signup" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </Link>
        </div>
    </div>
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src={imgtwo} alt="dashboard image"/>
        <img className="w-full hidden dark:block" src={imgtwo} alt="dashboard image"/>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Already have an account?.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"> Discover the exclusive offers and rewards awaiting you</p>
            <Link to="/signin" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Sign in
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </Link>
        </div>
    </div>
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