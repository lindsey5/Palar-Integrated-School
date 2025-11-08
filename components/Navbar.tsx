import Link from "next/link";
import { FaSchool } from "react-icons/fa";
import { RedLink } from "./Link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex justify-between px-5 py-2">
            <div className="flex gap-5 items-center">
                <Image width={50} height={50} src="/logo.jpg" alt=""/>
                <h1 className="text-red-800 text-xl md:text-2xl font-bold">Palar Integrated School</h1>
            </div>
            <div className="flex gap-2 items-center">
                <RedLink path="/">Home</RedLink>
                <RedLink path="/academics">Academics</RedLink>
                <RedLink path="/student-life">Home</RedLink>
                <RedLink path="/news-and-events">News and Events</RedLink>
                <RedLink path="/about">About us</RedLink>
            </div>
        </div>
    )
}