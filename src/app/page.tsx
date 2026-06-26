import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import GymExperience from "@/components/sections/GymExperience";
import Trainers from "@/components/sections/Trainers";
import Membership from "@/components/sections/Membership";
import Reviews from "@/components/sections/Reviews";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import FinalCta from "@/components/sections/FinalCta";
import DietNutrition from "@/components/sections/DietNutrition";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <GymExperience />
        <Trainers />
        <DietNutrition />
        <Membership />
        <Reviews />
        <Stats />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
