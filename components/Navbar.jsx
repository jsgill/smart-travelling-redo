import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav_logo } from "../public/imagesList/list";

const Navbar = () => {
    const navRef = useRef(null);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        let handler = (e) => {
            if (!navRef.current?.contains(e.target)) {
                console.log("refffffff", e.target);
                setToggle(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    return (
        <div>
            <a
                className="close-navbar-toggler collapsed"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ></a>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand d-flex">
                            <Image src={nav_logo} height="50%" width="50%" alt="navbar" />
                            <div className="smart">The Smart Traveller</div>
                        </a>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                        aria-bs-expanded="false"
                        aria-label="Toggle navigation"
                        controls="navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <button
                        className="navbar-toggler "

                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                        aria-bs-expanded="false"
                        aria-label="Toggle navigation"
                        ref={navRef}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">Experiences</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">My Trip</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Contact Us</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
