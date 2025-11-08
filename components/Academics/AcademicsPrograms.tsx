import { FaBookOpen, FaChalkboardTeacher, FaBook, FaUserGraduate } from "react-icons/fa";

export default function AcademicsPrograms() {
    const programs = [
        {
        title: "Curriculum",
        description:
            "Our K-12 curriculum is designed to be comprehensive, challenging, and aligned with national standards, preparing students for higher education and beyond.",
        icon: <FaBookOpen className="text-red-800 w-12 h-12 mb-4" />,
        },
        {
        title: "Learning Approach",
        description:
            "We employ a student-centered approach with project-based learning and collaborative activities to foster critical thinking and creativity.",
        icon: <FaChalkboardTeacher className="text-red-800 w-12 h-12 mb-4" />,
        },
        {
        title: "Library & Resources",
        description:
            "Our modern library and digital media center provide students with vast resources for research, study, and intellectual exploration.",
        icon: <FaBook className="text-red-800 w-12 h-12 mb-4" />,
        },
        {
        title: "Academic Support",
        description:
            "Dedicated counselors and support staff are available to provide academic guidance, tutoring, and personalized support to ensure every student succeeds.",
        icon: <FaUserGraduate className="text-red-800 w-12 h-12 mb-4" />,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
        <h1 className="text-red-800 text-2xl md:text-3xl font-bold text-center mb-12">
            Our Academic Programs
        </h1>

        <div className="grid md:grid-cols-2 gap-8 px-5 md:px-10">
            {programs.map((program, idx) => (
            <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-500"
            >
                {program.icon}
                <h3 className="text-xl font-semibold text-red-800 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
}
