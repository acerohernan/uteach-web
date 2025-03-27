import { Header } from "@/components/header";
import { HomeAllTheTools } from "@/sections/home/all-the-tools";
import { HomeAnalitics } from "@/sections/home/analitics";
import { HomeFeatures } from "@/sections/home/features";
import { HomeHero } from "@/sections/home/hero";
import { HomeInternationalStudents } from "@/sections/home/international-students";

export default function Home() {
  return (
    <div className="grid gap-12 lg:gap-20">
      <Header />
      <HomeHero />
      <HomeAllTheTools />
      <HomeFeatures />
      <HomeInternationalStudents />
      <HomeAnalitics />
    </div>
  );
}
