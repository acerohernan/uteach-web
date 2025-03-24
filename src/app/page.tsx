import { Header } from "@/components/header";
import { HomeAllTheTools } from "@/sections/home/all-the-tools";
import { HomeHero } from "@/sections/home/hero";

export default function Home() {
  return (
    <div className="grid gap-12 px-4 lg:px-20 lg:gap-20 max-w-[1450px] mx-auto">
      <Header />
      <HomeHero />
      <HomeAllTheTools />
    </div>
  );
}
