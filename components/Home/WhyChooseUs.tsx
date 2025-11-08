import { motion } from "framer-motion";
import Image from "next/image";

const itemVariants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            y: { stiffness: 1000, velocity: -50 },
        },
    },
    hidden: {
        y: 20,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const containerVariants = {
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
    hidden: {
        transition: { staggerChildren: 0.5, staggerDirection: -1 },
    },
}

export default function WhyChooseUs() {
    const features = [
        { title: "Quality Education", description: "A comprehensive curriculum for holistic development." },
        { title: "Experienced Faculty", description: "Dedicated teachers committed to student success." },
        { title: "Tradition of Excellence", description: "Recognized for academic and extracurricular achievements." },
        { title: "Vibrant Community", description: "Engaging events and activities throughout the year." },
    ];

    return (
        <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-800">Why Choose Us?</h2>
        <p className="text-lg mb-12">We provide a nurturing environment where students thrive academically, socially, and personally.</p>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
            {features.map((feature, idx) => (
            <motion.div 
                key={idx} 
                className="flex flex-col items-center gap-5 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500"
                variants={itemVariants}
            >
                <Image src="/logo.jpg" alt="" width={80} height={80}/>
                <h3 className="text-2xl font-semibold mb-2 text-red-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
            </motion.div>
            ))}
        </motion.div>
        </section>
    );
}
