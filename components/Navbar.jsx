import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { nav_logo } from "../public/imagesList/list";

const Navbar = () => {
    return (
        <div>
            <a
                className="close-navbar-toggler collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ></a>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand d-flex">
                            <Image src={nav_logo} height="50%" width="50%" alt="navbar" />
                            <div className='smart'>The Smart Traveller</div>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
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
    )
}

export default Navbar