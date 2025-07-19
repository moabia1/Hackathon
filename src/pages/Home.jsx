// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import FlavourBtl from "../components/FlavourBtl";
import FokusFeatureSection from "../components/FokusFeatureSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroCarousel />
      <FlavourBtl />
      <FokusFeatureSection/>
    </div>
  );
}
