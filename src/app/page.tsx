import { Header } from "@/components/header";
import { HomeAllTheTools } from "@/sections/home/all-the-tools";
import { HomeAnalitics } from "@/sections/home/analitics";
import { HomeFeatures } from "@/sections/home/features";
import { HomeHero } from "@/sections/home/hero";
import { HomeInternationalStudents } from "@/sections/home/international-students";
import { HomeJoinAWorldOfLearning } from "@/sections/home/join-a-world-of-learning";

export default function Home() {
  return (
    <div className="grid mgap-12 mlg:gap-20">
      <Header />
      <HomeHero />
      <HomeAllTheTools />
      <HomeFeatures />
      <HomeInternationalStudents />
      <HomeAnalitics />
      <HomeJoinAWorldOfLearning />
    </div>
  );
}
