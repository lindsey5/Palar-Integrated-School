// components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300 py-10 px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 border-b border-gray-700 pb-8">
            {/* Left Section */}
            <div>
            <div className="flex items-center gap-3 mb-4">
                <Image width={50} height={50} src="/logo.jpg" alt="logo"/>
                <h2 className="text-lg md:text-xl font-semibold text-white">Palar Integrated School</h2>
            </div>
            <p className="text-sm md:text-base mb-4">
                Committed to excellence in education and nurturing future leaders since its foundation.
            </p>

            <div className="flex space-x-4 text-gray-400">
                <Link className="hover:text-white text-2xl" href="#"><FaFacebookF /></Link>
                <Link className="hover:text-white text-2xl"  href="#"><FaTwitter /></Link>
                <Link className="hover:text-white text-2xl" href="#"><FaInstagram /></Link>
            </div>
            </div>

            {/* Quick Links */}
            <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2 text-sm md:text-base">
                <Link href="about" className="hover:text-white">About us</Link>
                <Link href="academics" className="hover:text-white">Academics</Link>
                <Link href="news-and-events" className="hover:text-white">New & Events</Link>
            </ul>
            </div>

            {/* Contact */}
            <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-red-600" /> Palar, Philippines
                </li>
                <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-red-600" /> +63 XXX XXX XXXX
                </li>
                <li className="flex items-center gap-2">
                <HiOutlineMail className="text-red-600" /> info@palarschool.edu.ph
                </li>
            </ul>
            </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-6">
            © 2025 Palar Integrated School. All Rights Reserved.
        </div>
        </footer>
    );
}
