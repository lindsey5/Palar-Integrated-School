import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[70vh]">
        <Image src="/school-image.jpg"alt="school image" fill style={{ objectFit: "cover" }}/>
        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
        <div className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">PALAR INTEGRATED SCHOOL</h1>
          <p className="text-xl md:text-2xl">Scorpion St. Palar Village, Brgy. Pinagsama, Taguig city</p>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}
