import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Facilities() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % 8);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-10 bg-gray-100 p-5 md:p-10">
            <div className="relative w-full h-[200px] md:w-1/2 md:h-[70vh]">
                <Image fill src={`/facilities/${currentImage + 1}.jpg`} alt="facility"/>
            </div>
            <div className="w-full md:w-1/2 p-10 flex flex-col gap-4 items-start">
                <h1 className="text-red-800 font-bold text-4xl">Our Campus and Facilities</h1>
                <p className="text-lg text-gray-600 whitespace-normal break-words">Our modern facilities provide students with an exceptional learning environment. From well-equipped classrooms and science labs to our library and sports facilities, we ensure every student has the resources to succeed.</p>
                <Link href="about" className="text-white px-5 py-2 bg-red-800 rounded-lg">Learn More</Link>
            </div>
        </div>
    )
}