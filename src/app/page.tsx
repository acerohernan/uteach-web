import { Header } from "@/components/header";
import { HomeAllTheTools } from "@/sections/home/all-the-tools";
import { HomeHero } from "@/sections/home/hero";

export default function Home() {
  return (
    <div className="grid gap-12 lg:gap-20">
      <Header />
      <HomeHero />
      <HomeAllTheTools />
    </div>
  );
}
