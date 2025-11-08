'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { RedLink } from "./Link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed inset-x-0 top-0 z-10 bg-white shadow-md px-5 py-3 md:px-10">
        <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex gap-3 items-center">
            <Image width={50} height={50} src="/logo.jpg" alt="Logo" />
            <h1 className="text-red-800 text-xl md:text-2xl font-bold">
                Palar Integrated School
            </h1>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-4 items-center">
            <RedLink path="/">Home</RedLink>
            <RedLink path="/academics">Academics</RedLink>
            <RedLink path="/student-life">Student Life</RedLink>
            <RedLink path="/news-and-events">News and Events</RedLink>
            <RedLink path="/about">About us</RedLink>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
            <button onClick={toggleMenu} className="text-red-800 text-2xl">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="flex flex-col gap-3 mt-3 md:hidden">
            <Link href="/" className="text-red-800 font-semibold" onClick={toggleMenu}>
                Home
            </Link>
            <Link href="/academics" className="text-red-800 font-semibold" onClick={toggleMenu}>
                Academics
            </Link>
            <Link href="/student-life" className="text-red-800 font-semibold" onClick={toggleMenu}>
                Student Life
            </Link>
            <Link href="/news-and-events" className="text-red-800 font-semibold" onClick={toggleMenu}>
                News and Events
            </Link>
            <Link href="/about" className="text-red-800 font-semibold" onClick={toggleMenu}>
                About us
            </Link>
            </div>
        )}
        </nav>
    );
}
