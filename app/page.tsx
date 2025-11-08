'use client'
import Achievements from "@/components/Home/Achievements";
import Facilities from "@/components/Home/Facilities";
import HomeHeroSection from "@/components/Home/HomeHero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full">
      <HomeHeroSection />
      <WhyChooseUs />
      <Facilities />
      <Achievements />
    </div>
  );
}
