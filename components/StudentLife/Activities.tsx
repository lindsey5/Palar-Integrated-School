import { FaRunning, FaUsers, FaPaintBrush, FaMusic } from "react-icons/fa";

export default function Activities() {
    const activities = [
        {
        title: "Athletics & Sports",
        description:
            "From basketball to track and field, our sports programs promote teamwork, discipline, and healthy competition.",
        icon: <FaRunning className="text-red-800 w-12 h-12 mb-4" />,
        },
        {
        title: "Clubs & Organizations",
        description:
            "Explore interests in our diverse clubs, including debate, science, student government, and community service.",
        icon: <FaUsers className="text-red-800 w-12 h-12 mb-4" />,
        },
        {
        title: "Arts Programs",
        description:
            "Unleash creativity in our visual arts programs, which include painting, drawing, sculpture, and digital media.",
        icon: <FaPaintBrush className="text-red-800 w-12 h-12 mb-4" />,
        },
        {
        title: "Music & Performing Arts",
        description:
            "Join the school choir, band, or drama club and showcase your talents in our regular performances and productions.",
        icon: <FaMusic className="text-red-800 w-12 h-12 mb-4" />,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
        <h1 className="text-red-800 text-2xl md:text-3xl font-bold text-center mb-12">
            Student Life
        </h1>

        <div className="grid md:grid-cols-2 gap-8 px-5 md:px-10">
            {activities.map((activity, idx) => (
            <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
                {activity.icon}
                <h3 className="text-xl font-semibold text-red-800 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
}
