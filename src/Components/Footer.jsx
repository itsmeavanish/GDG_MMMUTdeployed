import React from 'react'
import gdgLogo from './../assets/GdgLogo.svg';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="block text-teal-600 lg:hidden ">
                            <img src={gdgLogo} alt="" className='h-[4rem] w-[7rem] inline mb-1' />
                            <span className='text-[#DB4437] text-xl'>G</span>
                            <span className='text-[#0F9D58] text-xl'>D</span>
                            <span className='text-[#F4B400] text-xl'>G</span>
                            <span className='text-[#4285F4] text-xl'>-MMMUT</span>
                        </div>

                        <div className="mt-8 space-y-4 lg:mt-0">
                            <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

                            <div>
                                <h2 className="text-2xl font-medium text-gray-900">Give Your Feedback</h2>
                            </div>

                            <form className="mt-6 w-full">
                                <label htmlFor="UserEmail" className="sr-only"> Email </label>

                                <div
                                    className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                                >
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="abcd@gmail.com"
                                        className="w-full sm:flex-1"
                                    />

                                    <Link className="sm:shrink-0" to="/signup">
                                        <button
                                            className="mt-1 w-full rounded px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none border-blue-600 bg-blue-600 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 sm:mt-0 sm:w-auto"
                                        >
                                            Sign Up
                                        </button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">

                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div>
                                <p className="font-medium text-gray-900">Services</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
                                    </li>

                                    <li>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Company</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Helpful Links</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='text-black flex m-3 gap-5'>
                            <span className='text-2xl'><IoLogoLinkedin /></span>
                            <span className='text-2xl'><FaInstagram /></span>
                            <span className='text-2xl'><AiOutlineWhatsApp /></span>
                            <span className='text-2xl'><FaSquareXTwitter /></span>
                            <span className='text-2xl'><FaDiscord /></span>
                        </div>

                        <div className="mt-8 border-t border-gray-100 pt-8">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                                </li>
                            </ul>

                            <p className="mt-8 text-xs text-gray-500">&copy; 2025. GDG-MMMUT. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer