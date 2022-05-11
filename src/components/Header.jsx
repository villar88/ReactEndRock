import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from './../assets/images/logo.png';
import { Cart } from "./Cart";

export function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const cartRef = useRef();

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">             
                        <span className="text-5xl text-gray-800 -mb-1">
                            <Link to='/'>
                                <img
                                alt='Logo'
                                width="200"
                                className='h-15px logo'
                                src={logo}
                                />
                            </Link>
                        </span>
                        <button
                            className="text-red-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                        <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden") } id="example-navbar-danger" >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/">
                                    <i className="fas fa-home text-lg leading-lg text-red-900 opacity-75"></i><span className="ml-2 text-red-900">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/products">
                                    <i className="fas fa-shopping-bag text-lg leading-lg text-red-900 opacity-75"></i><span className="ml-2 text-red-900">Products</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span onClick={() =>  cartRef.current.showCart() } className="lg:l-3 px-3 py-2 flex items-center text-xs  uppercase font-bold leading-snug text-white hover:opacity-75" >
                                    <i className="lg:pl-3 fas fa-shopping-cart text-lg leading-lg text-red-900 opacity-75"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Cart ref={cartRef}/> 
        </>
    );
}