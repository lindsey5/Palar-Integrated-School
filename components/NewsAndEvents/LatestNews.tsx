export default function LatestNews() {
    const news = [
        {
        date: "November 03, 2025",
        title: "Palar School Wins National Science Fair Competition",
        description:
            "Our students brought home the gold medal in the annual National Science Fair, showcasing their innovative project on renewable energy...",
        },
        {
        date: "October 28, 2025",
        title: "Annual Sports Festival a Resounding Success",
        description:
            "The campus was alive with energy during our annual Sports Fest. Congratulations to the Red House for winning the overall championship!",
        },
        {
        date: "October 15, 2025",
        title: "Community Outreach Program for Local Charity",
        description:
            "Our student government led a successful donation drive, collecting food and supplies for a local community pantry...",
        },
    ];

    const events = [
        { day: "15", month: "DEC", title: "Christmas Concert", location: "School Auditorium" },
        { day: "20", month: "JAN", title: "Parent-Teacher Conference", location: "Respective Classrooms" },
        { day: "10", month: "FEB", title: "Foundation Day Celebration", location: "School Grounds" },
    ];

    return (
        <section className="py-20 bg-gray-50 px-5 md:px-10">
        <h1 className="text-red-800 text-2xl md:text-3xl font-bold text-center mb-12">Latest News & Events</h1>

        {/* News Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {news.map((item, idx) => (
            <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
                <p className="text-gray-400 text-sm mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-red-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
            </div>
            ))}
        </div>

        {/* Upcoming Events */}
        <h2 className="text-red-800 text-2xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
            <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
                <div className="bg-red-800 text-white px-4 py-2 rounded mb-4 text-center">
                <p className="text-xl font-bold">{event.day}</p>
                <p className="uppercase text-sm">{event.month}</p>
                </div>
                <h3 className="text-lg font-semibold text-red-800 mb-1">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.location}</p>
            </div>
            ))}
        </div>

        <div className="text-center mt-8">
            <button className="text-red-800 font-semibold border border-red-800 px-6 py-2 rounded hover:bg-red-800 hover:text-white transition-all duration-300">
            View Full Calendar
            </button>
        </div>
        </section>
    );
}