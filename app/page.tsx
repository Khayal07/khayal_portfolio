import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}