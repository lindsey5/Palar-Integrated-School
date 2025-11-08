import Image from "next/image";

export default function Achievements() {
  return (
    <div className="p-10">
      <h1 className="text-red-800 text-4xl font-bold text-center mb-8">
        Achievements
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
              <Image src={`/achievements/${i + 1}.jpg`} alt={`Achievement ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
      </div>
    </div>
  );
}
