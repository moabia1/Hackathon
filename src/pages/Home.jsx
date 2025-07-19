// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import FlavourBtl from "../components/FlavourBtl";
import FokusFeatureSection from "../components/FokusFeatureSection";
import FokusMarquee from "../components/FokusMarquee";
import KnowFokusSection from "../components/KnowFokusSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroCarousel />
      <FlavourBtl />
      <FokusFeatureSection />
      <FokusMarquee />
      <KnowFokusSection/>
    </div>
  );
}
