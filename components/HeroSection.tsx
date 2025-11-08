"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection({ title, subtitle } : { title: string, subtitle: string} ){
    return (
        <div className="relative w-full h-[40vh]">
            <Image src="/school-image.jpg"alt="school image" fill style={{ objectFit: "cover" }}/>
            <div className="absolute inset-0 bg-red-500 opacity-50"></div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut"}}
                className="w-full space-y-5 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
            >
                <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
                <p className="text-lg md:text-xl">{subtitle}</p>
            </motion.div>
        </div>
    )
}