import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}