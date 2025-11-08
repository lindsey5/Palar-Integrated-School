import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HomeHeroSection(){
    return (
        <div className="relative w-full h-[70vh]">
            <Image src="/school-image.jpg"alt="school image" fill style={{ objectFit: "cover" }}/>
            <div className="absolute inset-0 bg-red-500 opacity-50"></div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut"}}
                className="w-full space-y-8 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
            >
                <h1 className="text-4xl md:text-6xl font-bold">PALAR INTEGRATED SCHOOL</h1>
                <p className="text-xl md:text-2xl">Scorpion St. Palar Village, Brgy. Pinagsama, Taguig city</p>
                <Link href="about" className="hover:bg-red-100 cursor-pointer text-lg py-3 px-5 bg-white text-red-800 rounded-lg">Learn More</Link>
            </motion.div>
        </div>
    )
}